import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextLoop from './ui/TextLoop';
import './Hero.css';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const designations = ["Data Scientist", "AI Engineer", "Backend Developer"];

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="greeting">Hello, I'm <span className="highlight">Abishyanth</span></h1>
                        <h2 className="title">AI/ML & Backend Engineering Graduate</h2>

                        <TextLoop texts={designations} />

                        <p className="description">
                            Passionate about building scalable applications & intelligent systems.
                            I specialize in leveraging data and algorithms to solve complex problems.
                        </p>

                        <div className="cta-buttons">
                            <a
                                href="#projects"
                                className="btn primary"
                                onClick={(e) => handleSmoothScroll(e, 'projects')}
                            >
                                View Work
                            </a>
                            <a
                                href="#contact"
                                className="btn secondary"
                                onClick={(e) => handleSmoothScroll(e, 'contact')}
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="hero-visuals">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    {/* Abstract shape or 3D element could go here */}
                    <div
                        className="glass-card-visual hover-trigger"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="code-snippet">
                            <pre>
                                <code>
                                    {isHovered ? (
                                        <>
                                            <span className="keyword">const</span> <span className="variable">vibecoder</span> = {'{'}
                                            {'\n'}  <span className="property">name</span>: <span className="string">"Abishyanth"</span>,
                                            {'\n'}  <span className="property">skills</span>: [<span className="string">"Antigravity"</span>, <span className="string">"Replit"</span>, <span className="string">"Supabase"</span>],
                                            {'\n'}  <span className="property">SmartWorker</span>: <span className="boolean">true</span>
                                            {'\n'}{'}'};
                                        </>
                                    ) : (
                                        <>
                                            <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                            {'\n'}  <span className="property">name</span>: <span className="string">"Abishyanth"</span>,
                                            {'\n'}  <span className="property">skills</span>: [<span className="string">"AI"</span>, <span className="string">"ML"</span>, <span className="string">"Backend"</span>],
                                            {'\n'}  <span className="property">hardWorker</span>: <span className="boolean">true</span>
                                            {'\n'}{'}'};
                                        </>
                                    )}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-background-overlay"></div>
        </section>
    );
};

export default Hero;
