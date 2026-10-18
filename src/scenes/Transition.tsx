import React from 'react';
import Card from '../components/Card';
import Illustration3 from '../components/illustrations/Illustration3';
import TypingText from '../components/TypingText';
import {Audio, Sequence, useVideoConfig} from 'remotion';

const Transition: React.FC<{text: string}> = ({text}) => {
  const {fps} = useVideoConfig();
  return (
    <div className="scene">
      <div className="container">
        <div className="left">
          <Illustration3 />
        </div>
        <div className="right">
          <Card>
            <div className="text">
              <TypingText text={text} startFrame={3} charsPerFrame={0.8} />
            </div>
          </Card>
        </div>
      </div>
      <Sequence from={0} durationInFrames={Math.round(fps * 3)}>
        <Audio src="assets/sounds/transition.wav" />
      </Sequence>
    </div>
  );
};

export default Transition;
