export function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`max-w-[1200px] mx-auto px-[4%] ${props.className}`}>{props.children}</div>
}
