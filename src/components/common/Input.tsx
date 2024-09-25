export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  inputId: string;
  textarea?: boolean;
  onChange?: (e: any) => void;
}

export function Input(props: InputProps) {
  return (
    <>
      <div className={`flex flex-col text-white ${props.className}`}>
        <label htmlFor={props.inputId}>{props.label}</label>
        {props.textarea ? <textarea
          onChange={(e) => props.onChange?.(e)}
          className="bg-white/30 border border-white/30 rounded-md p-1 outline-none min-h-[100px] max-h-[150px]"
        ></textarea> :
          <input
            onChange={(e) => props.onChange?.(e)}
            className="bg-white/30 border border-white/30 rounded-md pl-2 py-1 outline-none"
            id={props.inputId} />}
      </div>
    </>
  )
}
