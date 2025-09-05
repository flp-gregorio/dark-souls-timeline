import React from 'react';

interface CardProps {
    label: string;
    time: number;
    description: string;
    keywords?: string[];
}

const Card: React.FC<CardProps> = ({ label, time, description, keywords }) => (
    <div className="relative text-justify md:w-full">
        <div
            className="group bg-stone-900/60 backdrop-blur-sm border border-stone-700/80 rounded-lg p-5 text-lg relative transition-all duration-300 hover:border-amber-700/60">

            <div className="absolute top-full left-1/2 -translate-x-1/2 
                           w-0 h-0 
                           border-l-8 border-l-transparent 
                           border-r-8 border-r-transparent 
                           border-t-[16px] border-t-stone-700/80 
                           group-hover:border-t-amber-700/60 transition-colors duration-300"
            />

            <h3 className="font-garamond text-2xl font-bold uppercase tracking-widest text-amber-500 mb-2">
                {label}
            </h3>
            <hr className="border-stone-700 mb-3" />
            <p className="font-serif text-stone-300 text-base leading-relaxed tracking-wide italic">
                {description}
            </p>

            {keywords && keywords.length > 0 && (
                <div className="mt-4">
                    <h4 className="inline-block text-amber-700 text-xs uppercase font-bold mr-2 tracking-wide">
                        Keywords:
                    </h4>
                    {keywords.map((keyword: string, index: number) => (
                        <span
                            key={index}
                            className="inline-block bg-stone-700/50 text-stone-300 text-xs font-semibold mr-1.5 px-2 py-0.5 rounded-sm mt-2 border border-stone-600"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default Card;