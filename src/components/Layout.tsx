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

/*
apiKey: "AIzaSyABqTshlyYuipUztVvImnVGsuE8NFxHvAI",
authDomain: "react-firebase-a25f9.firebaseapp.com",
projectId: "react-firebase-a25f9",
storageBucket: "react-firebase-a25f9.appspot.com",
messagingSenderId: "23189848355",
appId: "1:23189848355:web:c3521cf6cfa78849f84c96"
*/
