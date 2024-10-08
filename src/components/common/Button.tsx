import {excludeProps} from '../../lib/utils/PropsExcluder';

export type ButtonStyles = 'normal' | 'outline';
export type ButtonRounded =
  | 'rounded-none'
  | 'rounded-sm'
  | 'rounded-md'
  | 'rounded-lg'
  | 'rounded-xl'
  | 'rounded-full';
export type ButtonSize = 'normal' | 'big';
export type ButtonClickEffect = 'none' | 'shrink';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  bstyle?: ButtonStyles;
  rounded?: ButtonRounded;
  bsize?: ButtonSize;
  bhref?: string;
  clickEffect?: ButtonClickEffect;
  btype?: "submit" | "reset" | undefined;
}

export function Button(props: ButtonProps) {
  let classname = `${(props.bstyle || 'normal') === 'normal' ? 'bg-white text-black' : ' text-white bg-transparent border border-white hover:text-black'} flex items-center justify-center gap-2 ${(props.bsize || 'normal') === 'normal' ? 'px-2 py-1 text-sm' : 'px-3 py-2 text-md'} font-bold hover:bg-gray-300 transition ${props.rounded || 'rounded-md'} outline-blue-500 outline-offset-2`;

  classname += ` ${props.clickEffect === 'shrink' ? 'active:scale-[.90]' : ''}`;
  classname += ` ${props.className}`;
  const excluded = excludeProps<ButtonProps>(
    props,
    'bstyle',
    'rounded',
    'bsize',
    'bhref',
    'clickEffect',
  );

  return (
    <>
      {!props.bhref ? (
        <button type={props.btype} {...excluded} className={classname}>
          {props.children}
        </button>
      ) : (
        <a type={props.btype}
          {...(excluded as React.HTMLAttributes<HTMLAnchorElement>)}
          target="_blank"
          rel="noreferrer"
          href={props.bhref}
          className={classname}
        >
          {props.children}
        </a>
      )}
    </>
  );
}
