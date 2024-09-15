export function Menu(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative group">
      {props.children}
    </div>
  )
}

export function Content(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="absolute top-[65%] translate-y-[5px] left-1/2 translate-x-[-50%] rounded-md border border-white/10 bg-white/10 backdrop-blur w-44 min-h-6 opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 shadow-lg p-1 flex flex-col gap-1 z-50">
      {props.children}
    </div>
  )
}

export function Item(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="w-full h-7 flex items-center justify-between px-2 text-sm hover:bg-white/10 transition rounded-md">
      {props.children}
    </div>
  )
}
