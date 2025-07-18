import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dummy subject data
const subjectData = {
    "Computer Engineering": {
        1: [
            { name: "Communication Skills in English", code: "HSIR11", credits: 3 },
            { name: "Mathematics-I", code: "MAIR11", credits: 4 },
            { name: "Physics-I", code: "PHIR11", credits: 4 },
            { name: "Environment Studies", code: "CHIR11", credits: 3 },
            { name: "Basics of Programming", code: "CSIR11", credits: 3 },
            { name: "Introduction to Discipline Engineering", code: "CSIR13", credits: 2 },
            { name: "Engineering Practice", code: "MEIR11", credits: 2 },
        ],
        2: [
            { name: "Economics for Engineers", code: "HSIR12", credits: 3 },
            { name: "Mathematics-II", code: "MAIR12", credits: 4 },
            { name: "Physics-II", code: "PHIR12", credits: 4 },
            { name: "Chemistry", code: "CHIR12", credits: 4 },
            { name: "Digital System Design", code: "CSPC10", credits: 3 },
            { name: "Data Structures", code: "CSPC12", credits: 4 },
            { name: "Object Oriented Programming using C++", code: "CSPC14", credits: 4 },
        ],
        3: [
            { name: "Discrete Mathematics", code: "MAIR24", credits: 4 },
            { name: "Design and Analysis of Algorithms", code: "CSPC21", credits: 5 },
            { name: "Java Programming", code: "CSPC23", credits: 4 },
            { name: "Database Systems", code: "CSPC25", credits: 5 },
            { name: "Software Engineering", code: "CSPC27", credits: 4 },
            { name: "Computer Organization and Architecture", code: "CSPC29", credits: 4 },
        ],
        4: [
            { name: "Operating Systems", code: "CSPC20", credits: 5 },
            { name: "Microprocessor and Interfacing", code: "CSPC22", credits: 4 },
            { name: "Unix and Linux Programming", code: "CSPC24", credits: 3 },
            { name: "Computer Networks", code: "CSPC26", credits: 5 },
            { name: "Advanced Java Programming", code: "CSPE20", credits: 4 },
            { name: "Stochastic Processes and Queuing Theory", code: "CSPE60", credits: 4 },
        ],
        5: [
            { name: "Advanced Data Structures and Algorithms", code: "CSPC31", credits: 4 },
            { name: "Soft Computing", code: "CSPC33", credits: 4 },
            { name: "Software Development using UML and Agile Methodology", code: "CSPC35", credits: 4 },
            { name: "Automata Theory", code: "CSPC37", credits: 4 },
            { name: "Software Verification and Validation", code: "CSPE31", credits: 4 },
            { name: "Advanced Database Systems", code: "CSPE71", credits: 4 },
        ],
        6: [
            { name: "Internship / Project Work", code: "CSIR30/CSIR32", credits: 10 },
        ],
        7: [
            { name: "Business Management", code: "HSIR13", credits: 3 },
            { name: "Machine Learning", code: "CSPC41", credits: 4 },
            { name: "Distributed Computing", code: "CSPC43", credits: 3 },
            { name: "Information Security", code: "CSPC45", credits: 4 },
            { name: "Cloud and Grid Computing", code: "CSPE41", credits: 4 },
        ],
        8: [
            { name: "Professional Ethics & IPR", code: "HSIR14", credits: 2 },
            { name: "Big Data Analytics", code: "CSPC40", credits: 4 },
            { name: "High Performance Computing", code: "CSPC42", credits: 4 },
            { name: "Database System", code: "CSPC44", credits: 3 },
            { name: "Soft Computing", code: "CSPE46", credits: 3 },
        ],

    },
    "Electronics Engineering": {
        1: [
            { name: "Communication Skills in English", code: "HSIR11", credits: 3 },
            { name: "Mathematics-I", code: "MAIR11", credits: 4 },
            { name: "Physics-I", code: "PHIR11", credits: 4 },
            { name: "Environment Studies", code: "CHIR11", credits: 3 },
            { name: "Basics of Programming", code: "CSIR11", credits: 3 },
            { name: "Introduction to Discipline Engineering", code: "CSIR13", credits: 2 },
            { name: "Engineering Practice", code: "MEIR11", credits: 2 },
        ],
        2: [
            { name: "Economics for Engineers", code: "HSIR12", credits: 3 },
            { name: "Mathematics-II", code: "MAIR12", credits: 4 },
            { name: "Physics-II", code: "PHIR12", credits: 4 },
            { name: "Chemistry", code: "CHIR12", credits: 4 },
            { name: "Digital System Design", code: "CSPC10", credits: 3 },
            { name: "Data Structures", code: "CSPC12", credits: 4 },
            { name: "Object Oriented Programming using C++", code: "CSPC14", credits: 4 },
        ],
        3: [
            { name: "Organizational Behaviour", code: "HUT-211", credits: 2.5 },
            { name: "Semiconductor Devices & Applications", code: "ECT-201", credits: 5 },
            { name: "Network Analysis & Synthesis", code: "ECT-203", credits: 4 },
            { name: "Fields & Waves ", code: "ECT-205", credits: 4.5 },
            { name: "Signals & Systems", code: "ECT-207", credits: 5 },
            { name: "Digital Circuits & Systems", code: "ECT-209", credits: 4 },
        ],
        4: [
            { name: "Mathematics-III ", code: "MAT-202", credits: 3.5 },
            { name: "Analog Electronics", code: "ECT-202", credits: 4.5 },
            { name: "Analog Communication", code: "ECT-204 ", credits: 5 },
            { name: "Instrumentation & Measurement", code: "ECT-206", credits: 4.5 },
            { name: "Control Systems", code: "ECT-208 ", credits: 5 },
            { name: "Electronic Circuit Simulation (Pr)", code: "ECT-210", credits: 2 },
        ],
        5: [
            { name: "Antenna and Wave Propagation", code: "ECT-301", credits: 3.5 },
            { name: "Computer Architecture & Organization", code: "ECT-303", credits: 4 },
            { name: "Information Theory and Coding", code: "ECT-305", credits: 4 },
            { name: "Linear IC Applications", code: "ECT-307", credits: 4 },
            { name: "Micro-Electronics", code: "ECT-309", credits: 4 },
            { name: "Microprocessors", code: "ECT-311", credits: 4 },
        ],
        6: [
            { name: "Business Management", code: "HUT-311", credits: 3.5 },
            { name: "Microwave Engineering", code: "ECT-302", credits: 4 },
            { name: "VHDL & Digital Design", code: "ECT-304", credits: 3.5 },
            { name: "Digital Signal Processing", code: "ECT-306", credits: 4 },
            { name: "Digital Communication", code: "ECT-308", credits: 4 },
            { name: "Computer Communication Networks", code: "ECT-310", credits: 3.5 },
        ],
        7: [
            { name: "Micro-controllers", code: "HSIR13", credits: 3.5 },
            { name: "Physical Design of Digital IC’s", code: "CSPC41", credits: 3.5 },
            { name: "Television & Radar Engineering", code: "CSPC43", credits: 3.5 },
            { name: "Optical Communication", code: "CSPC45", credits: 3.5 },
            { name: "Electronic Switching Systems", code: "CSPE41", credits: 3.5 },
        ],
        8: [
            { name: "Network Management and Security", code: "HSIR13", credits: 3.5 },
            { name: "Wireless and Mobile Communication", code: "CSPC41", credits: 3.5 },
            { name: "Cryptography", code: "CSPC43", credits: 3.5 },
            { name: "Neuro-Fuzzy Systems", code: "CSPE41", credits: 3.5 },
        ],

    },
    "Mechanical Engineering": {
        1: [
            { name: "Communication Skills in English", code: "HSIR11", credits: 3 },
            { name: "Mathematics-I", code: "MAIR11", credits: 4 },
            { name: "Physics-I", code: "PHIR11", credits: 4 },
            { name: "Environment Studies", code: "CHIR11", credits: 3 },
            { name: "Basics of Programming", code: "CSIR11", credits: 3 },
            { name: "Introduction to Discipline Engineering", code: "CSIR13", credits: 2 },
            { name: "Engineering Practice", code: "MEIR11", credits: 2 },
        ],
        2: [
            { name: "Economics for Engineers", code: "HSIR12", credits: 3 },
            { name: "Mathematics-II", code: "MAIR12", credits: 4 },
            { name: "Physics-II", code: "PHIR12", credits: 4 },
            { name: "Chemistry", code: "CHIR12", credits: 4 },
            { name: "Digital System Design", code: "CSPC10", credits: 3 },
            { name: "Data Structures", code: "CSPC12", credits: 4 },
            { name: "Object Oriented Programming using C++", code: "CSPC14", credits: 4 },
        ],
        3: [
            { name: "Applied Numerical and Statistical Methods", code: "MAIR 21", credits: 4 },
            { name: "Kinematics of Machines", code: "MEPC-13", credits: 4 },
            { name: "Heat Transfer", code: "MEPC-14", credits: 4 },
            { name: "Fluid Machines", code: "MEPC-15", credits: 4 },
            { name: "Strength of Materials – I", code: "MEPC-16", credits: 4 },
            { name: "Machine Drawing", code: "MEPC-17", credits: 3 },
        ],
        4: [
            { name: "Production Technology – I", code: "MEPC-18", credits: 4 },
            { name: "Strength of Materials – II", code: "MEPC-19", credits: 4 },
            { name: "Machine Design", code: "MEPC-20", credits: 4 },
            { name: "Dynamics of Machines", code: "MEPC-21", credits: 4 },
            { name: "Thermal Power Engineering", code: "MEPE-10", credits: 3 },
            { name: "Computer Aided Design", code: "MEPE-11", credits: 3 },
        ],
        5: [
            { name: "Production Technology – II", code: "MEPC-22", credits: 4 },
            { name: "Machine Design – II", code: "MEPC-23", credits: 4 },
            { name: "Material Science", code: "MEPC-24", credits: 4 },
            { name: "Internal Combustion Engines and Gas Turbines", code: "MEPC-25", credits: 4 },
            { name: "Industrial  Engineering", code: "MEPE-16", credits: 3 },
            { name: "Tribology", code: "MEPE-17", credits: 3 },
        ],
        6: [
            { name: "Internship/Industrial Training/Academic attachment", code: "MEIR**", credits: 10 },
        ],
        7: [
            { name: "Refrigeration & Air Conditioning", code: "MEPC-26", credits: 4 },
            { name: "Quality Control and Reliability", code: "MEPC-27", credits: 4 },
            { name: "Mechanical Vibrations", code: "MEPC-28", credits: 4 },
            { name: "Finite Element Method", code: "MEPE-22", credits: 3 },
            { name: "Computational Fluid Dynamics", code: "MEPE-23", credits: 3 },
        ],
        8: [
            { name: "Measurement and Instrumentation", code: "MEPC-29", credits: 4 },
            { name: "Gas Dynamics", code: "MEPE-29", credits: 3 },
            { name: "Advanced Manufacturing Technology", code: "MEPE-30", credits: 3 },
            { name: "Entrepreneurship", code: "MEPE-31", credits: 3 },
            { name: "Work Study & Ergonomics", code: "MEPE-32", credits: 3 },
        ],

    },
    "Electrical Engineering": {
        1: [
            { name: "Communication Skills in English", code: "HSIR11", credits: 3 },
            { name: "Mathematics-I", code: "MAIR11", credits: 4 },
            { name: "Physics-I", code: "PHIR11", credits: 4 },
            { name: "Environment Studies", code: "CHIR11", credits: 3 },
            { name: "Basics of Programming", code: "CSIR11", credits: 3 },
            { name: "Introduction to Discipline Engineering", code: "CSIR13", credits: 2 },
            { name: "Engineering Practice", code: "MEIR11", credits: 2 },
        ],
        2: [
            { name: "Economics for Engineers", code: "HSIR12", credits: 3 },
            { name: "Mathematics-II", code: "MAIR12", credits: 4 },
            { name: "Physics-II", code: "PHIR12", credits: 4 },
            { name: "Chemistry", code: "CHIR12", credits: 4 },
            { name: "Digital System Design", code: "CSPC10", credits: 3 },
            { name: "Data Structures", code: "CSPC12", credits: 4 },
            { name: "Object Oriented Programming using C++", code: "CSPC14", credits: 4 },
        ],
        3: [
            { name: "Control Systems-I", code: "EEPC21", credits: 4 },
            { name: "Electrical Machines-I", code: "EEPC23", credits: 5 },
            { name: "Electronic Devices & Circuits", code: "EEPC25", credits: 6 },
            { name: "Power Engineering-I", code: "EEPC27", credits: 4 },
            { name: "Power Electronics -I", code: "EEPC29", credits: 4 },
            { name: "Network Synthesis and Filters", code: "EEPC211", credits: 4 },
        ],
        4: [
            { name: "Mathematics III", code: "MAIR22", credits: 4 },
            { name: "Power Engineering-II", code: "EEPC24", credits: 5 },
            { name: "Electrical Machines-II", code: "EEPC26", credits: 5 },
            { name: "Power Electronics-II", code: "EEPC28", credits: 5 },
            { name: "Renewable Energy", code: "EEPE22A", credits: 4 },
            { name: "Distribution system analysis and Automation", code: "EEPE24A", credits: 3 },
        ],
        5: [
            { name: "Power Engineering-III", code: "MEPC-22", credits: 4 },
            { name: "Microprocessor and Microcontrollers", code: "MEPC-23", credits: 4 },
            { name: "Control Systems -II ", code: "MEPC-24", credits: 4 },
            { name: "Special machines & Drives", code: "MEPC-25", credits: 4 },
            { name: "Power System Restructuring", code: "EEPE31A", credits: 3 },
            { name: "Power Quality", code: "EEPE33A", credits: 3 },
        ],
        6: [
            { name: "Internship/Industrial Training/Project Work", code: "EEIR32", credits: 10 },
        ],
        7: [
            { name: "Management", code: "HSIR**", credits: 3 },
            { name: "Reliability Engineering", code: "EEPC41", credits: 4 },
            { name: "Advanced Power Electronics and Drives", code: "EEPC43", credits: 4 },
            { name: "Industrial Control", code: "EEPC45", credits: 3 },
            { name: "EHV AC and DC Transmission", code: "EEPE41A", credits: 3 },
            { name: "Energy Management", code: "EEPE43A", credits: 3 },
        ],
        8: [
            { name: "Professional Ethics & IPR", code: "HSIR42", credits: 2 },
            { name: "Power System Operation and Economics", code: "EEPC40", credits: 3 },
            { name: "Electric Vehicles", code: "MEPE-30", credits: 3 },
            { name: "Renewable Energy Converters", code: "MEPE-31", credits: 4 },
            { name: "Smart Grid Systems", code: "MEPE-32", credits: 3 },
        ],

    },
    "Civil Engineering": {
        1: [
            { name: "Communication Skills in English", code: "HSIR11", credits: 3 },
            { name: "Mathematics-I", code: "MAIR11", credits: 4 },
            { name: "Physics-I", code: "PHIR11", credits: 4 },
            { name: "Environment Studies", code: "CHIR11", credits: 3 },
            { name: "Basics of Programming", code: "CSIR11", credits: 3 },
            { name: "Introduction to Discipline Engineering", code: "CSIR13", credits: 2 },
            { name: "Engineering Practice", code: "MEIR11", credits: 2 },
        ],
        2: [
            { name: "Economics for Engineers", code: "HSIR12", credits: 3 },
            { name: "Mathematics-II", code: "MAIR12", credits: 4 },
            { name: "Physics-II", code: "PHIR12", credits: 4 },
            { name: "Chemistry", code: "CHIR12", credits: 4 },
            { name: "Digital System Design", code: "CSPC10", credits: 3 },
            { name: "Data Structures", code: "CSPC12", credits: 4 },
            { name: "Object Oriented Programming using C++", code: "CSPC14", credits: 4 },
        ],
        3: [
            { name: "Numerical & Statistical Methods", code: "MAIR13", credits: 4 },
            { name: "Structural Analysis – II", code: "CEPC21", credits: 4 },
            { name: "Surveying – I", code: "CEPC23", credits: 4 },
            { name: "Design of Steel Structures", code: "CEPC25", credits: 4 },
            { name: "Water Supply & Treatmen", code: "CEPC27", credits: 4 },
            { name: "Irrigation Engineering", code: "CEPC29", credits: 4 },
        ],
        4: [
            { name: "Design of Concrete Structures – I", code: "CEPC22", credits: 4 },
            { name: "Soil Mechanics", code: "CEPC24", credits: 4 },
            { name: "Transportation Engineering – I", code: "CEPC26", credits: 4 },
            { name: "Surveying – II", code: "CEPC28", credits: 4 },
        ],
        5: [
            { name: "Design of Concrete Structures – II", code: "CEPC31", credits: 4 },
            { name: "Geotechnology – I", code: "CEPC33", credits: 4 },
            { name: "Hydrology & Water Resources Engineering", code: "CEPC35", credits: 4 },
            { name: "Sewerage & Sewage Treatment", code: "CEPC37", credits: 4 },
            { name: "Transportation Engineering – II", code: "CEPC39", credits: 4 },
        ],
        6: [
            { name: "Industrial Training* / Project Work", code: "CEIR32", credits: 10 },
        ],
        7: [
            { name: "Bridge Engineering", code: "CEPC41", credits: 4 },
            { name: "Railway & Airport Engineering", code: "CEPC43", credits: 3 },
            { name: "Geotechnology – II", code: "CEPC45", credits: 4 },
            { name: "Construction Management, Estimating and Costing", code: "CEPC47", credits: 3 },
        ],
        8: [
            { name: "Open Channel Hydraulics", code: "CEPC42", credits: 3 },
            { name: "Industrial Waste Water Treatment", code: "CEPC44", credits: 3 },
            { name: "Electric Vehicles", code: "CEPC46", credits: 3 },
        ],

    },
    "Information Technology": {
        1: [
            { name: "Communication Skills in English", code: "HSIR11", credits: 3 },
            { name: "Mathematics-I", code: "MAIR11", credits: 4 },
            { name: "Physics-I", code: "PHIR11", credits: 4 },
            { name: "Environment Studies", code: "CHIR11", credits: 3 },
            { name: "Basics of Programming", code: "CSIR11", credits: 3 },
            { name: "Introduction to Discipline Engineering", code: "CSIR13", credits: 2 },
            { name: "Engineering Practice", code: "MEIR11", credits: 2 },
        ],
        2: [
            { name: "Economics for Engineers", code: "HSIR12", credits: 3 },
            { name: "Mathematics-II", code: "MAIR12", credits: 4 },
            { name: "Physics-II", code: "PHIR12", credits: 4 },
            { name: "Chemistry", code: "CHIR12", credits: 4 },
            { name: "Digital System Design", code: "CSPC10", credits: 3 },
            { name: "Data Structures", code: "CSPC12", credits: 4 },
            { name: "Object Oriented Programming using C++", code: "CSPC14", credits: 4 },
        ],
        3: [
            { name: "Discrete Mathematics", code: "MAIR24", credits: 4 },
            { name: "Design and Analysis of Algorithms", code: "ITPC21", credits: 5 },
            { name: "Java Programming", code: "ITPC23", credits: 4 },
            { name: "Database Systems", code: "ITPC25", credits: 5 },
            { name: "Software Engineering", code: "ITPC27", credits: 4 },
            { name: "Computer Organization and Architecture", code: "ITPC29", credits: 4 },
        ],
        4: [
            { name: "Operating Systems", code: "ITPC20", credits: 5 },
            { name: "Communication Systems", code: "ITPC22", credits: 4 },
            { name: "Software Verification and Validation", code: "ITPC24", credits: 4 },
            { name: "Computer Networks", code: "ITPC26", credits: 4 },
            { name: "Advanced Java Programming", code: "ITPE20", credits: 4 },
            { name: "Stochastic Processes and Queuing Theory", code: "ITPE60", credits: 4 },
        ],
        5: [
            { name: "Mobile Application Development", code: "ITPC31", credits: 4 },
            { name: "Web Technologies", code: "ITPC33", credits: 4 },
            { name: "Software Development using UML and Agile Methodology", code: "ITPC35", credits: 4 },
            { name: "Automata Theory", code: "ITPC37", credits: 4 },
            { name: "Software Verification and Validation", code: "ITPE31", credits: 4 },
            { name: "Advanced Database Systems", code: "ITPE71", credits: 4 },
        ],
        6: [
            { name: "Internship / Project Work", code: "ITIR30/ITIR32", credits: 10 },
        ],
        7: [
            { name: "Business Management", code: "HSIR13", credits: 3 },
            { name: "Machine Learning", code: "ITPC41", credits: 4 },
            { name: "Distributed Computing", code: "CSPC43", credits: 3 },
            { name: "Information Security", code: "CSPC45", credits: 4 },
            { name: "Cloud and Grid Computing", code: "ITPE41", credits: 4 },
        ],
        8: [
            { name: "Professional Ethics & IPR", code: "HSIR14", credits: 2 },
            { name: "Big Data Analytics", code: "ITPC40", credits: 4 },
            { name: "High Performance Computing", code: "CSPC42", credits: 4 },
            { name: "Database System", code: "ITPC44", credits: 3 },
            { name: "Soft Computing", code: "ITPC46", credits: 3 },
        ],

    },
    // Add more branches and semesters
};

const BranchSemesterSubjects = () => {
    const { branch, number } = useParams();
    const navigate = useNavigate();

    const readableBranch = branch
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const subjects = subjectData[readableBranch]?.[number] || [];

    return (
        <div className="courses-section" style={{ paddingTop: "6rem" }}>
            <h2 className="section-title">
                Semester {number} – {readableBranch}
            </h2>

            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <button className="course-button" onClick={() => navigate(`/btech/${branch}`)}>
                    ← Back to Semesters
                </button>
            </div>

            <div className="courses-grid" style={{ marginTop: "2rem" }}>
                {subjects.length > 0 ? (
                    subjects.map((subj, i) => (
                        <div className="course-card" key={i}>
                            <h3 className="course-title">{subj.name}</h3>
                            <p className="course-description">Code: {subj.code}</p>
                            <p className="course-description">Credits: {subj.credits}</p>
                            <button
                                className="course-button"
                                onClick={() =>
                                    navigate(`/btech/${branch}/semester/${number}/subject/${subj.code}`)
                                }
                            >
                                View Resources →
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No subjects available for this semester.</p>
                )}
            </div>
        </div>
    );
};

export default BranchSemesterSubjects;
