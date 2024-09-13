export type ButtonStyles = "normal" | "outline";
export type ButtonRounded = "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
export type ButtonSize = "normal" | "big";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  bstyle?: ButtonStyles;
  rounded?: ButtonRounded;
  bsize?: ButtonSize;
}

export function Button(props: ButtonProps) {
  return <button {...props} className={`${(props.bstyle || "normal") === "normal" ? "bg-white text-black" : " text-white bg-transparent border border-white hover:text-black"} flex items-center justify-center gap-2 ${(props.bsize || "normal") === 'normal' ? 'px-2 py-1 text-sm' : 'px-3 py-2 text-md'} font-bold hover:bg-gray-300 transition ${props.rounded || "rounded-md"} ${props.className}`}>{props.children}</button>
}
