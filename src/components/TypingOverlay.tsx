import React, { useRef } from "react";

type TypingOverlayProps = {
    message: string;
    speed?: number;
};

const TypingOverlay: React.FC<TypingOverlayProps> = ({ message, speed = 100 }) => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const initialTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showText = (
        target: HTMLElement,
        message: string,
        typingTimeoutRef: React.RefObject<ReturnType<typeof setTimeout> | null>,
        index: number = 0,
        interval: number = 100
    ): void => {
        if (index < message.length) {
            target.textContent += message[index++];

            typingTimeoutRef.current = setTimeout(() => showText(target, message, typingTimeoutRef, index, interval), interval);
        }
    };

    const handleMouseEnter = () => {
        if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        if (textRef.current) {
            textRef.current.textContent = "";

            initialTimeoutRef.current = setTimeout(() => {
                if (textRef.current) {
                    showText(textRef.current, message, typingTimeoutRef, 0, speed);
                }
            }, 600);
        }
    };

    const handleMouseLeave = () => {
        if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        if (textRef.current) {
            textRef.current.textContent = "";
        }
    };

    return (
        <div
            className="absolute inset-0 m-auto max-w-full max-h-full flex justify-center items-center pb-10 text-white text-2xl font-semibold bg-black/80 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-700"
            onMouseEnter={() => { handleMouseEnter(); }}
            onMouseLeave={() => { handleMouseLeave(); }}
        >
            <p className="" ref={textRef}></p>
        </div>
    );
};

export default TypingOverlay;
