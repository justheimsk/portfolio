export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  hero?: boolean;
}

export function Section(props: SectionProps) {
  return <section {...props} className={`w-full ${props.hero ? 'max-h-[700px]' : ''} ${props.className}`} >{props.children}</section>
}
