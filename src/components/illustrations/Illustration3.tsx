import React from 'react';
import DrawSVG from '../components/DrawSVG';

export const Illustration3: React.FC = () => {
  return (
    <svg className="illustration" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="500" height="340" rx="16" fill="#fff" stroke="#f0eefc" />
      <g transform="translate(30,40)">
        <DrawSVG>
          <path d="M40 220 L120 80 L200 220" stroke="#ef4444" strokeWidth="5" fill="none" />
        </DrawSVG>
        <DrawSVG delayFrames={8}>
          <path d="M260 220 L340 120 L420 220" stroke="#0ea5e9" strokeWidth="5" fill="none" />
        </DrawSVG>
      </g>
    </svg>
  );
};

export default Illustration3;
