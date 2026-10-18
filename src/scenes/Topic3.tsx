import React from 'react';
import Card from '../components/Card';
import Illustration1 from '../components/illustrations/Illustration1';
import {Audio, Sequence, useVideoConfig} from 'remotion';

const Topic3: React.FC<{text: string}> = ({text}) => {
  const {fps} = useVideoConfig();
  return (
    <div className="scene">
      <div className="container">
        <div className="left">
          <Illustration1 />
        </div>
        <div className="right">
          <Card>
            <div className="text">{text}</div>
          </Card>
        </div>
      </div>
      <Sequence from={0} durationInFrames={Math.round(fps * 3)}>
        <Audio src="assets/sounds/pencil.wav" />
      </Sequence>
    </div>
  );
};

export default Topic3;
