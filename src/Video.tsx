import React from 'react';
import {Composition, Sequence, useVideoConfig} from 'remotion';
import {SCENE_TIMINGS, SCRIPT} from './script';
import OpeningTitle from './scenes/OpeningTitle';
import MaktabVazifasi from './scenes/MaktabVazifasi';
import Transition from './scenes/Transition';
import Topic1 from './scenes/Topic1';
import Topic2 from './scenes/Topic2';
import Topic3 from './scenes/Topic3';
import Topic4 from './scenes/Topic4';
import Topic5 from './scenes/Topic5';
import Comparison from './scenes/Comparison';
import Conclusion from './scenes/Conclusion';
import FinalStatement from './scenes/FinalStatement';

const fps = 30;
const width = 1920;
const height = 1080;

const durations = Object.fromEntries(
  Object.entries(SCENE_TIMINGS).map(([k, s]) => [k, Math.round((s as number) * fps)])
) as Record<string, number>;

const totalFrames = Object.values(durations).reduce((a, b) => a + b, 0);

const MainSequence: React.FC = () => {
  // compute cumulative starts
  const order = [
    {key: 'opening', Comp: OpeningTitle, text: SCRIPT.opening},
    {key: 'maktab', Comp: MaktabVazifasi, text: SCRIPT.maktab},
    {key: 'transition', Comp: Transition, text: SCRIPT.transition},
    {key: 'topic1', Comp: Topic1, text: SCRIPT.topic1},
    {key: 'topic2', Comp: Topic2, text: SCRIPT.topic2},
    {key: 'topic3', Comp: Topic3, text: SCRIPT.topic3},
    {key: 'topic4', Comp: Topic4, text: SCRIPT.topic4},
    {key: 'topic5', Comp: Topic5, text: SCRIPT.topic5},
    {key: 'comparison', Comp: Comparison, text: SCRIPT.comparison},
    {key: 'conclusion', Comp: Conclusion, text: SCRIPT.conclusion},
    {key: 'final', Comp: FinalStatement, text: SCRIPT.final}
  ];

  let cursor = 0;

  return (
    <div style={{width: '100%', height: '100%'}}>
      {order.map((o) => {
        const dur = durations[o.key] || Math.round(8 * fps);
        const Comp = o.Comp as any;
        const start = cursor;
        cursor += dur;
        return (
          <Sequence key={o.key} from={start} durationInFrames={dur}>
            <Comp text={o.text} />
          </Sequence>
        );
      })}
    </div>
  );
};

export const Video: React.FC = () => {
  return (
    <>
      <Composition id="Main" component={MainSequence} durationInFrames={totalFrames} fps={fps} width={width} height={height} />

      {/* Also expose each scene as its own composition for easier previewing */}
      <Composition id="opening" component={OpeningTitle as any} durationInFrames={durations.opening} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.opening}} />
      <Composition id="maktab" component={MaktabVazifasi as any} durationInFrames={durations.maktab} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.maktab}} />
      <Composition id="transition" component={Transition as any} durationInFrames={durations.transition} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.transition}} />
      <Composition id="topic1" component={Topic1 as any} durationInFrames={durations.topic1} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.topic1}} />
      <Composition id="topic2" component={Topic2 as any} durationInFrames={durations.topic2} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.topic2}} />
      <Composition id="topic3" component={Topic3 as any} durationInFrames={durations.topic3} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.topic3}} />
      <Composition id="topic4" component={Topic4 as any} durationInFrames={durations.topic4} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.topic4}} />
      <Composition id="topic5" component={Topic5 as any} durationInFrames={durations.topic5} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.topic5}} />
      <Composition id="comparison" component={Comparison as any} durationInFrames={durations.comparison} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.comparison}} />
      <Composition id="conclusion" component={Conclusion as any} durationInFrames={durations.conclusion} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.conclusion}} />
      <Composition id="final" component={FinalStatement as any} durationInFrames={durations.final} fps={fps} width={width} height={height} defaultProps={{text: SCRIPT.final}} />
    </>
  );
};

export default Video;
