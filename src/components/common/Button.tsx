export type ButtonStyles = "normal" | "outline";
export type ButtonRounded = "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  bStyle?: ButtonStyles;
  rounded?: ButtonRounded;
}

export function Button(props: ButtonProps) {
  return <button {...props} className={`${(props.bStyle || "normal") === "normal" ? "bg-white text-black" : " text-white bg-transparent border border-white hover:text-black"} flex items-center justify-center gap-2 px-2 py-1 text-sm font-bold hover:bg-gray-300 transition ${props.rounded || "rounded-md"} ${props.className}`}>{props.children}</button>
}
