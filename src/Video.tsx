import React from 'react';
import {Composition, Folder} from 'remotion';
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

export const Video: React.FC = () => {
  const fps = 30;
  const width = 1920;
  const height = 1080;

  // Calculate durations in frames from seconds defined in SCENE_TIMINGS
  const durations = Object.fromEntries(
    Object.entries(SCENE_TIMINGS).map(([k, s]) => [k, Math.round(s * fps)])
  );

  let start = 0;

  const sequences = [
    {Comp: OpeningTitle, key: 'opening', duration: durations.opening, props: {text: SCRIPT.opening}},
    {Comp: MaktabVazifasi, key: 'maktab', duration: durations.maktab, props: {text: SCRIPT.maktab}},
    {Comp: Transition, key: 'transition', duration: durations.transition, props: {text: SCRIPT.transition}},
    {Comp: Topic1, key: 't1', duration: durations.topic1, props: {text: SCRIPT.topic1}},
    {Comp: Topic2, key: 't2', duration: durations.topic2, props: {text: SCRIPT.topic2}},
    {Comp: Topic3, key: 't3', duration: durations.topic3, props: {text: SCRIPT.topic3}},
    {Comp: Topic4, key: 't4', duration: durations.topic4, props: {text: SCRIPT.topic4}},
    {Comp: Topic5, key: 't5', duration: durations.topic5, props: {text: SCRIPT.topic5}},
    {Comp: Comparison, key: 'comp', duration: durations.comparison, props: {text: SCRIPT.comparison}},
    {Comp: Conclusion, key: 'concl', duration: durations.conclusion, props: {text: SCRIPT.conclusion}},
    {Comp: FinalStatement, key: 'final', duration: durations.final, props: {text: SCRIPT.final}}
  ];

  // The root renders a Composition for each scene and the preview CLI will pick the Main composition.
  return (
    <>
      <Composition id="Main" component={() => null} durationInFrames={1000} fps={fps} width={width} height={height} />

      {/* Individual compositions, sequenced by user when rendering; also useful to preview each scene by changing "Main" in remotion config */}
      {sequences.map((s, i) => {
        const id = s.key;
        return (
          <Composition
            id={id}
            key={id}
            component={s.Comp as any}
            durationInFrames={s.duration}
            fps={fps}
            width={width}
            height={height}
            defaultProps={s.props}
          />
        );
      })}
    </>
  );
};

export default Video;
