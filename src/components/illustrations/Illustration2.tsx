import React from 'react';
import DrawSVG from '../components/DrawSVG';

export const Illustration2: React.FC = () => {
  return (
    <svg className="illustration" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="500" height="340" rx="16" fill="#fff" stroke="#e9f4f6" />
      <g transform="translate(40,30)">
        <DrawSVG>
          <path d="M60 260 L120 180 L180 260" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round" />
        </DrawSVG>
        <DrawSVG delayFrames={10}>
          <path d="M240 260 L300 140 L360 260" stroke="#f59e0b" strokeWidth="6" fill="none" strokeLinecap="round" />
        </DrawSVG>
      </g>
    </svg>
  );
};

export default Illustration2;
