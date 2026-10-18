import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';

export const TypingText: React.FC<{text: string; startFrame?: number; charsPerFrame?: number}> = ({text, startFrame=0, charsPerFrame=1}) => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const chars = Math.min(text.length, Math.floor(elapsed * charsPerFrame));
  const visible = text.slice(0, chars);
  const rest = text.slice(chars);
  return (
    <div style={{fontSize: 32, lineHeight: 1.4}}>
      <span>{visible}</span><span style={{opacity: 0.6}}>{rest}</span>
    </div>
  );
};

export default TypingText;
