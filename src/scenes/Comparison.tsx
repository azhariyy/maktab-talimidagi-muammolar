import React from 'react';
import Card from '../components/Card';
import Illustration4 from '../components/illustrations/Illustration4';
import {Audio, Sequence, useVideoConfig} from 'remotion';

const Comparison: React.FC<{text: string}> = ({text}) => {
  const {fps} = useVideoConfig();
  return (
    <div className="scene">
      <div style={{width: '1600px', display: 'flex', gap: 28}}>
        <div style={{flex: 1}}>
          <Card>
            <div style={{fontSize: 32, fontWeight: 700}}>Maktab</div>
            <div className="text" style={{marginTop: 12}}>{text.split('\n\n')[1]}</div>
          </Card>
        </div>
        <div style={{flex: 1}}>
          <Card>
            <div style={{fontSize: 32, fontWeight: 700}}>O‘quv markazi</div>
            <div className="text" style={{marginTop: 12}}>{text.split('\n\n')[0]}</div>
          </Card>
        </div>
      </div>
      <Sequence from={0} durationInFrames={Math.round(fps * 2)}>
        <Audio src="assets/sounds/glass.wav" />
      </Sequence>
    </div>
  );
};

export default Comparison;
