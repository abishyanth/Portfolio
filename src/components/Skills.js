import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, Globe, Server, Terminal, Cloud, Layers, Cpu } from 'lucide-react';
import ScrollingSkills from './ui/ScrollingSkills';
import './Skills.css';

const skills = [
    { name: "Python", icon: <Code />, category: "Core" },
    { name: "TensorFlow", icon: <Brain />, category: "AI/ML" },
    { name: "Django", icon: <Globe />, category: "Web" },
    { name: "React.js", icon: <Layers />, category: "Frontend" },
    { name: "SQL", icon: <Database />, category: "Data" },
    { name: "AWS", icon: <Cloud />, category: "Cloud" },
    { name: "Docker", icon: <Server />, category: "DevOps" },
    { name: "RAG Systems", icon: <Cpu />, category: "AI/ML" },
    { name: "Git", icon: <Terminal />, category: "Tools" },
    { name: "REST APIs", icon: <Globe />, category: "Web" },
    { name: "HTML/CSS", icon: <Code />, category: "Frontend" },
    { name: "Postman", icon: <Terminal />, category: "Tools" },
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="skills-revamp-section">
            <div className="skills-container" ref={ref}>
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Tech Stack</h2>
                    <p>Technologies I work with to build intelligent solutions.</p>
                </motion.div>

                <motion.div
                    className="skills-cloud"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-tag"
                            variants={item}
                            whileHover={{ scale: 1.1, y: -5, boxShadow: "0 10px 20px rgba(0, 243, 255, 0.2)" }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <span className="skill-name">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="scrolling-skills-container" style={{ marginTop: '80px', width: '100%' }}>
                    <ScrollingSkills />
                </div>

                {/* Background Decorative Elements */}
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>
        </section>
    );
};

export default Skills;
