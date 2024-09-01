import React from "react";
import { stagger, useAnimate } from 'framer-motion';

function Button({ name, link, textColor = '#1c1d20', borderColor = '#1c1d20' }) {
    const [scope, animate] = useAnimate();

    const onMouseEnter = () => {
        animate(
            ".letter", 
            { y: -32 }, 
            { duration: 0.2, delay: stagger(0.05) }
        );
        animate(
            ".letter::after",
            { y: -32 },
            { duration: 0.2, delay: stagger(0.05) }
        );
    };

    const onMouseLeave = () => {
        animate(
            ".letter", 
            { y: 0 }, 
            { duration: 0.2, delay: stagger(0.05) }
        );
        animate(
            ".letter::after",
            { y: 0 },
            { duration: 0.2, delay: stagger(0.05) }
        );
    };

    return (
        <div ref={scope} className="flex justify-center">
            <a 
              href={link} 
              onMouseEnter={onMouseEnter} 
              onMouseLeave={onMouseLeave} 
              className={`rounded-full border-2 mr-5 px-4 py-1 md:px-6 md:py-[.6vw] font-bold text-sm md:text-base`}
              style={{ color: textColor, borderColor: borderColor }}
            >
                <span className='sr-only'>{name}</span>
                <span className='h-8 overflow-hidden flex items-center justify-center' aria-hidden="true">
                    {name.split("").map((letter, index) => (
                    <span 
                        data-letter={letter} 
                        className='letter relative h-8 flex items-center justify-center' 
                        key={`${letter}-${index}`}
                    >
                        {letter === " " ? "\u00A0" : letter}
                        <span className='absolute left-0 top-full w-full h-full flex items-center justify-center' aria-hidden="true">
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    </span>
                    ))}
                </span>
            </a>
        </div>
    );
}

export default Button;
