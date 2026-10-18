import React from 'react';
import Card from '../components/Card';
import Illustration2 from '../components/illustrations/Illustration2';
import TypingText from '../components/TypingText';
import {Audio, Sequence, useVideoConfig} from 'remotion';

const MaktabVazifasi: React.FC<{text: string}> = ({text}) => {
  const {fps} = useVideoConfig();
  return (
    <div className="scene">
      <div className="container">
        <div className="left">
          <Illustration2 />
        </div>
        <div className="right">
          <Card>
            <div className="text">
              <TypingText text={text} startFrame={5} charsPerFrame={0.6} />
            </div>
          </Card>
        </div>
      </div>
      <Sequence from={5} durationInFrames={Math.round(fps * 4)}>
        <Audio src="assets/sounds/typing.wav" />
      </Sequence>
    </div>
  );
};

export default MaktabVazifasi;
