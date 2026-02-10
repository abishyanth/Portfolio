import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import './Projects.css';

const projects = [
    {
        title: "RAG-Based Corporate Compliance Agent",
        tech: ["Python", "RAG", "Streamlit", "JSON"],
        description: "Designed a compliance automation system aligned with ADGM regulations. Improved verification efficiency by ~40% using rule-based validation and citation mapping.",
        githubUrl: "https://github.com/abishyanth/Corporate-Agent-",
        demoUrl: "#"
    },
    {
        title: "Hospital Management System (MEDSYNC)",
        tech: ["Python", "Django", "MySQL", "HTML/CSS"],
        description: "Full-stack platform with role-based access for doctors and patients. Enabled secure storage and retrieval of multi-hospital medical data.",
        githubUrl: "https://github.com/abishyanth/MedSync-Synchronize-multiple-hospital-services-centrally.",
        demoUrl: "#"
    },
    {
        title: "Chronic Disease Prediction System",
        tech: ["Python", "TensorFlow", "Docker", "AWS EC2"],
        description: "AI model achieving ~87% accuracy for disease prediction. Containerized using Docker and hosted on AWS EC2 for scalable deployment.",
        githubUrl: "https://github.com/abishyanth/CHRONIC-DISEASE-PREDCITION",
        demoUrl: "#"
    },
    {
        title: "Emotion-Based Text Generation System",
        tech: ["Python", "Neural Networks", "NLP"],
        description: "NLP model generating emotion-based text with ~90% accuracy. Deployed a web interface simulating Shakespearean-style responses.",
        githubUrl: "https://github.com/abishyanth/TEXT-GENERATING-W.R.T-EMOTIONS-USING-NEURAL-NETWORK",
        demoUrl: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header-container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">A showcase of my improved technical prowess.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <SpotlightCard className="project-card-custom">
                            <div className="project-content">
                                <div className="project-top">
                                    <h3>{project.title}</h3>
                                    <div className="tech-stack">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <p className="project-desc">{project.description}</p>

                                <div className="project-footer">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                                        <Github size={18} />
                                        <span>Source Code</span>
                                    </a>
                                    {/* Demo link optional if not available */}
                                    {/* <a href={project.demoUrl} className="project-btn demo-btn">
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                    </a> */}
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>

            <div className="view-more-container">
                <a href="https://github.com/abishyanth" target="_blank" rel="noopener noreferrer" className="view-more-btn">
                    View All Projects on GitHub <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
};

export default Projects;
