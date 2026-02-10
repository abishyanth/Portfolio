import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-revamp-section">
            <div className="background-beams"></div>

            <div className="contact-content-wrapper">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Let's Create Something Amazing</h2>
                    <p>Have a project in mind? Let's talk.</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-details"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="contact-card">
                            <div className="icon-wrapper"><Mail /></div>
                            <div>
                                <h3>Email</h3>
                                <p>abishyanth.py@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="icon-wrapper"><Phone /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 81971 45246</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="icon-wrapper"><MapPin /></div>
                            <div>
                                <h3>Location</h3>
                                <p>Bengaluru, India</p>
                            </div>
                        </div>

                        <div className="social-connect">
                            <a href="https://www.linkedin.com/in/abishyanth-s-4a90a8290/" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/abishyanth" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <Github size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="glass-form"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="input-group">
                            <input type="text" required placeholder=" " />
                            <label>Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" required placeholder=" " />
                            <label>Email</label>
                        </div>
                        <div className="input-group">
                            <textarea required rows="4" placeholder=" "></textarea>
                            <label>Message</label>
                        </div>

                        <button type="submit" className="send-btn">
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>

            <footer className="footer-revamp">
                <p>© 2026 Abishyanth S.</p>
            </footer>
        </section>
    );
};

export default Contact;
