import React from 'react';
import DrawSVG from '../components/DrawSVG';

export const Illustration1: React.FC = () => {
  return (
    <svg className="illustration" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="500" height="340" rx="16" fill="#fff" stroke="#e6edf3" />
      <g transform="translate(40,40)">
        <DrawSVG>
          <path d="M20 200 C60 30, 160 30, 200 200" stroke="#2b6cb0" strokeWidth="4" fill="none" strokeLinecap="round" />
        </DrawSVG>
        <DrawSVG>
          <path d="M260 200 C300 30, 400 30, 440 200" stroke="#8b5cf6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </DrawSVG>
      </g>
    </svg>
  );
};

export default Illustration1;
