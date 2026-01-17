import React, { useEffect, useState } from 'react';

const SnowEffect = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        // Create a fixed number of snowflakes
        const flakes = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 3 + 2 + 's',
            animationDelay: Math.random() * 2 + 's',
            opacity: Math.random(),
            size: Math.random() * 4 + 2 + 'px'
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <style>
                {`
          @keyframes snowfall {
            0% {
              transform: translateY(-10px) translateX(0);
            }
            100% {
              transform: translateY(100vh) translateX(20px);
            }
          }
        `}
            </style>
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute bg-white rounded-full opacity-80"
                    style={{
                        left: flake.left,
                        top: '-10px',
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity,
                        animation: `snowfall ${flake.animationDuration} linear infinite`,
                        animationDelay: flake.animationDelay,
                        filter: 'blur(1px)'
                    }}
                />
            ))}
        </div>
    );
};

export default SnowEffect;
