import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Timeline from "../data/timelinePoints.json";

type TimelinePoint = {
    label: string;
    time: number;
    description: string;
    keywords?: string[]; // Japanese-only
    image?: string; // Optional image URL
};

const points: TimelinePoint[] = Timeline;

const TimelinePage: React.FC = () => {

    document.title = "Dark Souls Timeline";
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const [visibleImage, setVisibleImage] = useState<string | null>(null);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const scrollAmount = container.offsetWidth;

            container.scrollBy({
                left: e.deltaY > 0 ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        if (activeImage) {
            setVisibleImage(activeImage);
        } else {
            const timer = setTimeout(() => setVisibleImage(null), 1000);
            return () => clearTimeout(timer);
        }
    }, [activeImage]);

    return (
        <div className="bg-stone-950 min-h-screen p-4 md:p-10 scroll-smooth flex flex-col" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }}>
            <div className="text-center mb-10 z-50 flex-col top-5">
                <h1 className="text-stone-200 z-50 font-bold uppercase tracking-widest font-garamond text-4xl md:text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Dark Souls
                </h1>
                <h2 className="text-stone-300 z-50 font-semibold uppercase tracking-wider font-garamond text-3xl md:text-6xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Timeline
                </h2>
                <div className="w-fit z-10 mx-auto cursor-pointer text-amber-600 hover:text-amber-400 transition-colors duration-300 font-bold uppercase tracking-widest font-garamond py-2 "
                    onClick={() => window.location.href = '/'}>
                    <p>
                        Return
                    </p>
                </div>
            </div>

            <div className="fixed inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out "
                    style={{
                        backgroundImage: visibleImage ? `url(${visibleImage})` : "none",
                        opacity: activeImage ? 0.25 : 0,
                        boxShadow: "inset 0 0 15vw 5vw rgba(0, 0, 0, 0.9)",
                    }}
                />
            </div>

            {/* --- Timeline Carousel --- */}

            {/* 1. OUTER WRAPPER */}
            <div className="flex-1 justify-center">
                <div
                    className="relative max-w-6xl mx-auto
               after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-screen after:bg-stone-600/50 after:rounded-full"
                >
                    {/* 2. THE SCROLLING CONTAINER */}
                    <div
                        ref={scrollContainerRef}
                        className="snap-x snap-mandatory overflow-x-scroll overflow-y-hidden w-full
                   [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
                    >
                        {/* The SCROLLABLE TRACK */}
                        <div className="flex flex-nowrap items-end gap-10">
                            {points.map((point) => (
                                <motion.div
                                    key={point.time}
                                    className="relative z-10 w-full flex-shrink-0 snap-always snap-center"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ duration: 1}}
                                >
                                    <div
                                        className="mb-4">
                                        <div
                                            onMouseEnter={() => {
                                                if (point.image) {
                                                    setActiveImage(point.image);
                                                }
                                            }}
                                            onMouseLeave={() => setActiveImage(null)}>
                                            <Card
                                                label={point.label}
                                                time={point.time}
                                                description={point.description}
                                                keywords={point.keywords}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage