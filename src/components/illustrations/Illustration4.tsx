import React from 'react';
import DrawSVG from '../components/DrawSVG';

export const Illustration4: React.FC = () => {
  return (
    <svg className="illustration" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="500" height="340" rx="16" fill="#fff" stroke="#f8f2e9" />
      <g transform="translate(40,40)">
        <DrawSVG>
          <path d="M40 260 Q120 60 200 260" stroke="#7c3aed" strokeWidth="5" fill="none" />
        </DrawSVG>
        <DrawSVG delayFrames={12}>
          <path d="M260 260 Q340 100 420 260" stroke="#10b981" strokeWidth="5" fill="none" />
        </DrawSVG>
      </g>
    </svg>
  );
};

export default Illustration4;
