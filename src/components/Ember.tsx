import { motion } from "framer-motion";
import React, { useMemo } from "react";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

interface EmberProps {
    quantity: number;
    z?: number;
}

const Ember: React.FC<EmberProps> = ({ quantity, z }) => {
    const embers = useMemo(() => {
        return Array.from({ length: quantity }).map(() => ({
            x: random(0, 100),               // vw
            size: random(4, 12),             // px
            duration: random(8, 15),         // seconds
            delay: random(0, 8),             // seconds
            peakOpacity: random(0.35, 0.9),  // opacity
        }));
    }, [quantity]);

    return (
        <div className="fixed inset-0 z-[7] pointer-events-none">
            {embers.map((ember, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full z-${z ?? 0} mix-blend-overlay`}
                    style={{
                        left: `${ember.x}vw`,
                        width: `${ember.size}px`,
                        height: `${ember.size}px`,
                        background: "radial-gradient(circle at 30% 30%, rgba(255,0,0,0.95), rgba(253,207,88,0) 60%)",
                        filter: "blur(4px)",
                        willChange: "transform, opacity",
                        transformOrigin: "center",
                    }}
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: "-120px", opacity: [0, ember.peakOpacity, ember.peakOpacity, 0] }}
                    transition={{
                        duration: ember.duration,
                        delay: ember.delay,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />
            ))}
        </div>
    );
};

export default Ember;