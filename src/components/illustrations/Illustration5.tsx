import React from 'react';
import DrawSVG from '../components/DrawSVG';

export const Illustration5: React.FC = () => {
  return (
    <svg className="illustration" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="500" height="340" rx="16" fill="#fff" stroke="#eefaf8" />
      <g transform="translate(30,30)">
        <DrawSVG>
          <path d="M60 240 C120 80, 200 80, 260 240" stroke="#f97316" strokeWidth="5" fill="none" />
        </DrawSVG>
        <DrawSVG delayFrames={6}>
          <path d="M300 240 C360 120, 420 120, 480 240" stroke="#3b82f6" strokeWidth="5" fill="none" />
        </DrawSVG>
      </g>
    </svg>
  );
};

export default Illustration5;
