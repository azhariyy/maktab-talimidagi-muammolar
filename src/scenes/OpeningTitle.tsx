import React from 'react';
import Card from '../components/Card';
import Illustration1 from '../components/illustrations/Illustration1';
import TypingText from '../components/TypingText';
import {Audio, Sequence, useVideoConfig} from 'remotion';

const OpeningTitle: React.FC<{text: string}> = ({text}) => {
  const {fps} = useVideoConfig();
  return (
    <div className="scene">
      <div className="container">
        <div className="left">
          <Illustration1 />
        </div>
        <div className="right">
          <Card>
            <div className="title">{text}</div>
          </Card>
        </div>
      </div>
      <Sequence from={0} durationInFrames={fps * 4}>
        <Audio src="assets/sounds/transition.wav" />
      </Sequence>
    </div>
  );
};

export default OpeningTitle;
