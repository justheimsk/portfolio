import './Orbit.scss';

export function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="orbit-container">
      {props.children}
    </div>
  )
}

export interface OrbitObjectProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  imageUrl?: string;
}

export function Child(props: OrbitObjectProps) {
  return (
    <div {...props} className={`orbit-child-${props.id} orbit-child ${props.className}`}>
      <img loading="lazy" className="w-[60%]" src={props.imageUrl} width="100" height="100" alt={props.imageUrl} />
    </div>
  )
}

export function Center(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="orbit--center">{props.children}</div>
  )
}
