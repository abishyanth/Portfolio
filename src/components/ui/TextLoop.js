import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TextLoop.css';

const TextLoop = ({ texts }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="text-loop-container">
            <span className="static-text">I would love to work as a </span>
            <div className="loop-wrapper">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={index}
                        className="loop-text"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {texts[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TextLoop;
