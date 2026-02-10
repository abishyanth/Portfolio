import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail, Award } from 'lucide-react';
import './Navbar.css';

const navItems = [
    { id: 'hero', icon: <Home size={20} />, label: 'Home', href: '#' },
    { id: 'experience', icon: <Briefcase size={20} />, label: 'Experience', href: '#experience' },
    { id: 'skills', icon: <Code size={20} />, label: 'Skills', href: '#skills' },
    { id: 'projects', icon: <User size={20} />, label: 'Projects', href: '#projects' },
    { id: 'certifications', icon: <Award size={20} />, label: 'Awards', href: '#certifications' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple active state detection based on scroll position
            const sections = navItems.map(item => {
                const id = item.href.replace('#', '');
                if (id === '') return document.body; // For Home
                return document.getElementById(id);
            });

            const scrollPosition = window.scrollY + 200; // Offset

            sections.forEach((section, index) => {
                if (section) {
                    const top = section === document.body ? 0 : section.offsetTop;
                    const height = section.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveTab(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, href, id) => {
        e.preventDefault();
        setActiveTab(id);

        const targetId = href.replace('#', '');
        const element = targetId === '' ? document.body : document.getElementById(targetId);

        if (element) {
            window.scrollTo({
                top: element === document.body ? 0 : element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="navbar-container">
            <motion.nav
                className={`floating-dock ${isScrolled ? 'scrolled' : ''}`}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <ul className="dock-list">
                    {navItems.map((item) => (
                        <li key={item.id} className="dock-item">
                            <a
                                href={item.href}
                                className={`dock-link ${activeTab === item.id ? 'active' : ''}`}
                                onClick={(e) => handleClick(e, item.href, item.id)}
                            >
                                <span className="icon-container">{item.icon}</span>
                                <span className="link-label">{item.label}</span>
                                {activeTab === item.id && (
                                    <motion.div
                                        className="active-pill"
                                        layoutId="activePill"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </div>
    );
};

export default Navbar;
