// components/StatsSection.jsx
import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll(".stat-number");

    const animateCounter = (el, target) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = `${target}+`;
          clearInterval(timer);
        } else {
          el.textContent = `${Math.floor(current)}+`;
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const targets = [150, 100, 25]; // Customize as needed
          counters.forEach((counter, i) => animateCounter(counter, targets[i]));
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-section" ref={statsRef}>
      <h2 className="section-title">Our Impact</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">0+</div>
          <div className="stat-label">Question Papers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">0+</div>
          <div className="stat-label">Study Notes</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">0+</div>
          <div className="stat-label">Interview Experiences</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
