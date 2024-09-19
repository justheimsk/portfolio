import { FaStar } from 'react-icons/fa6';
import { excludeProps } from '../../lib/utils/PropsExcluder';

const words = [
  'PERFORMANT',
  'SECURE',
  'STABLE',
  'FAST',
  'RESPONSIVE',
  'OPTIMIZED',
  'USABLE',
  'RELIABLE',
  'SCALABLE',
  'MAINTAINABLE',
  'ACCESSIBLE',
];

export function WordsComponent() {
  return (
    <>
      {words.map((word) => (
        <div key={word} className="flex items-center gap-6">
          <FaStar />
          <span>{word}</span>
        </div>
      ))}
    </>
  );
}

export interface TapeProps extends React.HTMLAttributes<HTMLDivElement> {
  invert?: boolean;
}

export function Tape(props: TapeProps) {
  return (
    <div {...excludeProps(props, 'invert')} className={`w-[100vw] max-w-[100vw] overflow-x-hidden text-white font-bold h-12 gradient-secondary ${props.invert ? 'rotate-3' : '-rotate-3'} ${props.className}`}>
      <div className="flex w-svw h-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className={`${props.invert ? 'infinite-loop-invert' : 'infinite-loop'} w-svw flex items-center gap-6 h-full`}>
          <WordsComponent />
          <WordsComponent />
          <WordsComponent />
          <WordsComponent />
          <WordsComponent />
          <WordsComponent />
        </div>
      </div>
    </div>
  );
}
