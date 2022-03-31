import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  texto: string
  className?: string
}

export default function Input(props: Props) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-1">{ props.texto }</label>
      <input
        {...props}
        className={`
          border border-purple-500 rounded-lg px-4 py-2
          focus:outline-none bg-gray-100 focus:bg-white
        `}
      />
    </div>
  )
}