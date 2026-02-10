import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: "Web Developer Intern",
        company: "SN Infosystems",
        period: "Nov 2025 – Present",
        desc: [
            "Contributed to the digital development of platforms such as GetMyCollege and GetMyRank.",
            "Built and optimized responsive user interfaces using React.js and Tailwind CSS with SEO-first practices.",
            "Implemented on-page and off-page SEO techniques aligned with keyword mapping to improve search visibility."
        ]
    },
    {
        role: "Intern – Software & Data Technologies",
        company: "Test Yantra (JSpiders)",
        period: "Feb 2025 – Aug 2025",
        desc: [
            "Gained hands-on experience in Python, HTML/CSS, Django, Data Structures, and Power BI.",
            "Built scalable applications addressing real-world use cases through structured development practices.",
            "Participated in Agile sprints, feature development, and peer code reviews."
        ]
    }
];

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="experience-revamp-section">
            <h2 className="section-title">Professional Journey</h2>

            <div className="timeline-container" ref={containerRef}>
                <motion.div
                    className="timeline-line"
                    style={{ scaleY: scaleY, transformOrigin: "top" }}
                />

                {experiences.map((exp, index) => (
                    <motion.div
                        className="timeline-card"
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`content-box ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="date-badge">{exp.period}</div>
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <ul>
                                {exp.desc.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
