import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  cor?: 'green' | 'blue' | 'gray' | 'red'
  className?: string
  // children: ReactNode
}

export default function Botao(props: Props) {
  const cor = props.cor ?? 'gray'

  return (
    <button
      {...props}
      className={`
        bg-gradient-to-br
        from-${cor}-400
        via-${cor}-400
        to-${cor}-700
        text-white px-4 py-2 rounded-md
        ${props.className}
      `}
    >
      {props.children}
    </button>
  )
}