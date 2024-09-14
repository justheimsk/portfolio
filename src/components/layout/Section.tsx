export function Section(props: React.HTMLAttributes<HTMLDivElement>) {
  return <section {...props} className={`w-full max-h-[800px] ${props.className}`} >{props.children}</section>
}
