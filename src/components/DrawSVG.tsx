import React from 'react';
import {interpolate, useCurrentFrame, spring} from 'remotion';

type DrawSVGProps = {
  children: React.ReactElement<SVGElement>;
  durationFrames?: number;
  delayFrames?: number;
};

export const DrawSVG: React.FC<DrawSVGProps> = ({children, durationFrames = 45, delayFrames = 0}) => {
  const frame = useCurrentFrame();
  const t = Math.max(0, frame - delayFrames);
  const progress = spring({frame: t, fps: 30, config: {damping: 200}});
  const val = Math.min(1, progress);

  // Clone child and set strokeDashoffset style
  const child = React.cloneElement(children, {
    style: {
      strokeDasharray: 1000,
      strokeDashoffset: `${interpolate(val, [0, 1], [1000, 0])}`,
      transition: 'none'
    }
  });
  return <>{child}</>;
};

export default DrawSVG;
