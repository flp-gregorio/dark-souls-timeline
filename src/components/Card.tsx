import React from 'react';

interface CardProps {
    image: string;
    date: string;
    description: string;
    alt?: string;
}

const Card: React.FC<CardProps> = ({ image, date, description, alt }) => (
    <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900 text-white max-w-xs shadow-lg">
        <img
            src={image}
            alt={alt || 'Card image'}
            className="w-full h-44 object-cover rounded-md"
        />
        <div className="mt-3 text-sm text-neutral-400">
            {date}
        </div>
        <div className="mt-2 text-base">
            {description}
        </div>
    </div>
);

export default Card;
