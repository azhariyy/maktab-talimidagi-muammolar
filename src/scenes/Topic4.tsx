import React from 'react';
import Card from '../components/Card';
import Illustration2 from '../components/illustrations/Illustration2';
import {Audio, Sequence, useVideoConfig} from 'remotion';

const Topic4: React.FC<{text: string}> = ({text}) => {
  const {fps} = useVideoConfig();
  return (
    <div className="scene">
      <div className="container">
        <div className="left">
          <Illustration2 />
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

export default Topic4;
