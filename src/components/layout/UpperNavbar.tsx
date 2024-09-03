export interface UpperNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export function UpperNavbar(props: UpperNavbarProps) {
  return <div {...props} className={`bg-primary w-full gap-2 h-8 flex items-center justify-center text-white font-bold text-sm mb-3 ${props.className}`}>
    <div className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
    </div>
    <span>{props.content}</span>
  </div>
}
