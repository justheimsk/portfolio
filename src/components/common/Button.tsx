export function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`bg-white rounded-full text-black px-2 py-1 text-sm font-bold hover:bg-gray-300 transition ${props.className}`}>{props.children}</button>
}
