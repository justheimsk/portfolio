import { FaStar } from 'react-icons/fa6';

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
        <div key={Math.random() * 99999} className="flex items-center gap-6">
          <FaStar />
          <span>{word}</span>
        </div>
      ))}
    </>
  );
}

export function Tape() {
  return (
    <div className="w-[100vw] max-w-[100vw] overflow-x-hidden text-white font-bold h-12 gradient-secondary -rotate-3">
      <div className="flex w-svw h-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="infinite-loop w-svw flex items-center gap-6 h-full">
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
