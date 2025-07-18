import React, { useState, useEffect, useRef } from "react";
import "../../styles/AiAssistant.css";

const AiAssistant = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const inputRef = useRef(null);
  const responseRef = useRef(null);

  // Auto-focus input on load
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to response when it updates
  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [response]);

  const handleAsk = async () => {
    if (!query.trim()) {
      setError("Please enter a question.");
      inputRef.current?.focus();
      return;
    }

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    if (!API_KEY) {
      setError("API key is missing. Please check your .env file and restart the server.");
      return;
    }

    const currentQuery = query.trim();
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    // General purpose prompt - can answer anything
    const generalPrompt = `You are a helpful AI assistant. Please provide accurate, informative, and helpful responses to any questions asked. 

    Question: ${currentQuery}`;

    const data = {
      contents: [
        {
          parts: [
            {
              text: generalPrompt
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
        stopSequences: []
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    };

    setLoading(true);
    setResponse("");
    setError("");

    try {
      console.log("Making API request for query:", currentQuery);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        let errorMessage = `HTTP ${res.status}`;
        try {
          const errorData = await res.json();
          console.error("API Error Response:", errorData);
          errorMessage = errorData.error?.message || errorMessage;
        } catch (parseError) {
          console.error("Could not parse error response");
        }
        throw new Error(errorMessage);
      }

      const result = await res.json();
      console.log("API Response:", result);

      // Enhanced response parsing with better error handling
      if (result?.candidates && result.candidates.length > 0) {
        const candidate = result.candidates[0];

        // Check if response was blocked for safety reasons
        if (candidate.finishReason === "SAFETY") {
          setError("Response was blocked due to safety concerns. Please try rephrasing your question.");
          return;
        }

        if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
          const text = candidate.content.parts[0].text;
          if (text && text.trim()) {
            const cleanedResponse = text.trim();
            setResponse(cleanedResponse);

            // Add to chat history
            setChatHistory(prev => [...prev,
            { type: 'question', text: currentQuery, timestamp: new Date() },
            { type: 'answer', text: cleanedResponse, timestamp: new Date() }
            ]);
          } else {
            setError("I received an empty response. Please try rephrasing your question.");
          }
        } else {
          setError("I couldn't generate a proper response. Please try again with a different question.");
        }
      } else if (result?.promptFeedback) {
        // Handle prompt feedback (blocked prompts)
        setError("Your question was blocked. Please try asking something else.");
      } else {
        setError("No response was generated. Please try again.");
      }
    } catch (err) {
      console.error("AI Assistant Error:", err);

      // Enhanced error handling
      const errorMessage = err.message.toLowerCase();
      if (errorMessage.includes('api_key') || errorMessage.includes('401')) {
        setError("Invalid API key. Please check your configuration.");
      } else if (errorMessage.includes('403')) {
        setError("API access denied. Please check your API key permissions.");
      } else if (errorMessage.includes('429') || errorMessage.includes('quota')) {
        setError("You exceeded your current quota. Please check your plan and billing details or try again later.");
      } else if (errorMessage.includes('500') || errorMessage.includes('502') || errorMessage.includes('503')) {
        setError("Server error. Please try again in a few moments.");
      } else if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
        setError("Network error. Please check your internet connection and try again.");
      } else {
        setError(`Something went wrong: ${err.message}. Please try again.`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      e.preventDefault();
      handleAsk();
    }
  };

  const clearResponse = () => {
    setResponse("");
    setError("");
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="ai-container">
      <h2>Ask the AI Assistant 🤖</h2>

      <div className="input-area">
        <input
          type="text"
          ref={inputRef}
          placeholder="Ask me anything..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          onKeyDown={handleKeyDown}
          aria-label="AI query input"
          disabled={loading}
        />
        <div className="button-group">
          <button
            onClick={handleAsk}
            disabled={loading || !query.trim()}
            className="ask-button"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
          {(response || error) && (
            <button
              onClick={clearResponse}
              className="clear-button"
              disabled={loading}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div className="response-box">
          <strong>Response:</strong>
          <div className="response-text">
            {response.split(/\r?\n/).map((line, i) => (
              <p key={i}>{line || "\u00A0"}</p>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>AI is thinking...</p>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;