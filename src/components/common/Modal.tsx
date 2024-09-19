import { FaTimes } from 'react-icons/fa';
import { excludeProps } from '../../lib/utils/PropsExcluder';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
  onClose?: () => void;
}

export function Container(props: ModalProps) {
  return (
    <>
      <div
        {...excludeProps(props, 'active', 'onClose')}
        onClick={() => props.onClose?.()}
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/80 z-40 transition ${props.active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border border-white/30 rounded-md min-w-[400px] min-h-36 z-50 bg-zinc-950 px-6 py-4 transition max-w-[98vw] duration-300 ${props.active ? 'opacity-100 scale-100 pointer-events-all' : 'opacity-0 scale-95 pointer-events-none'} ${props.className}`}
      >
        <FaTimes
          onClick={() => props.onClose?.()}
          className="absolute top-4 right-6 text-md text-white font-bold cursor-pointer"
        />
        {props.children}
      </div>
    </>
  );
}

export function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="flex flex-col">
      {props.children}
    </div>
  );
}

export function Content(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="mt-4 flex flex-col">{props.children}</div>
}
