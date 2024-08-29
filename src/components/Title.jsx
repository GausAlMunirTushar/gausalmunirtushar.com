import React from 'react';

const Title = ({
    title,
    lineHeight = '5rem',
    lineColor = 'white',
    lineRotation = '0deg', // New prop for line rotation
    bgColor = 'bg-tertiary',
    textColor = 'text-white',
    textRotation = '-rotate-90', // Updated to 'textRotation' for clarity
    fontSize = 'text-sm',
    textPosition = 'bottom', // Controls text position: 'top' or 'bottom'
}) => {
    return (
        <div className={`flex flex-col items-center ${textPosition === 'top' ? 'flex-col-reverse' : 'flex-col'}`}>
            <div
                className={`w-[3px]`}
                style={{
                    height: lineHeight,
                    backgroundColor: lineColor,
                    transform: `rotate(${lineRotation})`, // Applying rotation to the line
                }}
            ></div>
            <div
                className={`${fontSize} h-auto ${textColor} font-bold uppercase ${bgColor} tracking-wider ${textRotation} py-2 px-3 rounded whitespace-nowrap`}
            >
                {title}
            </div>
        </div>
    );
};

export default Title;
