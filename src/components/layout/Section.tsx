export function Section(props: React.HTMLAttributes<HTMLDivElement>) {
  return <section {...props} className={`w-full h-[100vh] max-h-[800px] ${props.className}`} >{props.children}</section>
}
