import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Trophy } from 'lucide-react';
import './Certifications.css';

const certifications = [
    {
        title: "Machine Learning Model to Predict Chronic Disease",
        issuer: "International Conference (ICRTCET-24)",
        date: "2024",
        type: "Publication",
        icon: <BookOpen size={24} />,
        description: "Published research paper in Volume 7, Issue 8."
    },
    {
        title: "Vertex AI for System and Prompt Design",
        issuer: "Google Cloud",
        date: "2025",
        type: "Certification",
        icon: <Award size={24} />,
        description: "Mastered prompt engineering and system design on Google Cloud."
    },
    {
        title: "Software Engineering Job Simulation",
        issuer: "Quantium",
        date: "2026",
        type: "Certification",
        icon: <Trophy size={24} />,
        description: "completed practical tasks in data analysis and software engineering."
    },
    {
        title: "Power BI for Data Visualization",
        issuer: "Tata",
        date: "2025",
        type: "Certification",
        icon: <Star size={24} />,
        description: "Gained expertise in creating interactive dashboards and reports."
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <div className="cert-header">
                <h2 className="section-title">Achievements & Certifications</h2>
                <p className="section-subtitle">Recognition of my dedication to learning and excellence.</p>
            </div>

            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <motion.div
                        className="cert-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="cert-icon-wrapper">
                            {cert.icon}
                        </div>
                        <div className="cert-content">
                            <span className="cert-type">{cert.type}</span>
                            <h3>{cert.title}</h3>
                            <div className="cert-meta">
                                <span className="issuer">{cert.issuer}</span>
                                <span className="separator">•</span>
                                <span className="date">{cert.date}</span>
                            </div>
                            <p>{cert.description}</p>
                        </div>
                        <div className="card-glow"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
