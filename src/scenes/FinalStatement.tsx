import React from 'react';
import Card from '../components/Card';
import {Audio, Sequence, useVideoConfig} from 'remotion';

const FinalStatement: React.FC<{text: string}> = ({text}) => {
  const {fps} = useVideoConfig();
  return (
    <div className="scene">
      <div className="container">
        <div className="left">
          <div style={{width:520, height:360}} />
        </div>
        <div className="right">
          <Card>
            <div className="title">{text}</div>
          </Card>
        </div>
      </div>
      <Sequence from={0} durationInFrames={Math.round(fps * 2)}>
        <Audio src="assets/sounds/transition.wav" />
      </Sequence>
    </div>
  );
};

export default FinalStatement;
