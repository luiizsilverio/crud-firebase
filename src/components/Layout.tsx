import { ReactNode } from "react"
import Titulo from "./Titulo"

interface Props {
  titulo: string
  children: ReactNode
}

export default function Layout(props: Props) {
  return (
    <div className={`
      flex flex-col w-2/3 rounded-md
      bg-white text-gray-800

    `}>
      <Titulo>{ props.titulo }</Titulo>
      <div className="p-6">
        {props.children}
      </div>
    </div>
  )
}
