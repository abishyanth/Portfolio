import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import "./ScrollingSkills.css";
// import { wrap } from "@motionone/utils";

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};


const ParallaxText = ({ children, baseVelocity = 100 }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
};

const ScrollingSkills = () => {
    return (
        <div className="scroll-wrapper">
            <ParallaxText baseVelocity={-5}>PYTHON • REACT • DJANGO • TENSORFLOW • AWS</ParallaxText>
            <ParallaxText baseVelocity={5}>HTML5 • CSS3 • SQL • DOCKER • REST API</ParallaxText>
            <ParallaxText baseVelocity={-5}>GIT • POSTMAN • RAG • SYSTEM DESIGN • VERTEX AI</ParallaxText>
        </div>
    );
};

export default ScrollingSkills;
