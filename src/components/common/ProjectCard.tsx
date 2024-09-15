import { Button } from './Button';

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  stack: string;
  stackIcon: React.ReactNode;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  small?: boolean;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div
      className={`flex-col md:flex-row flex p-3 bg-white/10 border border-white/30 rounded-lg sm:max-w-[48%] ${props.small ? 'md:max-w-[36%]' : 'md:max-w-[62%]'} w-full min-h-56  gap-3`}
    >
      {props.imageUrl?.length && !props.small ? (
        <img
          src={props.imageUrl}
          width="1320"
          height="650"
          alt="restman"
          className="w-full md:w-[45%] lg:w-[55%] h-auto rounded-lg object-cover"
        />
      ) : (
        ''
      )}
      <div className="flex flex-col h-full w-full gap-5 md:gap-0 justify-between">
        <div className="flex gap-2 flex-col">
          <div className="flex text-md items-center gap-1">
            {props.stackIcon}
            <span>{props.stack}</span>
          </div>
          <span className="text-2xl font-bold">{props.title}</span>
          <p className="text-gray-300 text-sm">{props.description}</p>
        </div>
        <div className="flex items-center w-full gap-2">
          {props.demoUrl?.length ? (
            <Button bhref={props.demoUrl} className="w-full">Demo</Button>
          ) : (
            ''
          )}
          {props.githubUrl?.length ? (
            <Button bhref={props.githubUrl} className="w-full">Github</Button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
