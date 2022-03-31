import { useState } from "react";
import Cliente from "../model/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface Props {
  cliente: Cliente
  cancelado?: () => void
  confirmado?: (cliente: Cliente) => void
}

export default function Formulario(props: Props) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome)
  const [idade, setIdade] = useState(props.cliente?.idade || 0)
  const [tel, setTel] = useState(props.cliente?.tel)

  return (
    <div>
      {
        id && (
          <Input texto="Código" value={id}
            readOnly className="mb-4"
          />
        )
      }
      <Input texto="Nome" value={nome}
        onChange={(e) => setNome(e.target.value)}
        required className="mb-4"
      />
      <Input texto="Idade" value={idade}
        type="number" required className="mb-4"
        onChange={(e) => setIdade(+e.target.value)}
      />
      <Input texto="Telefone" value={tel}
        onChange={(e) => setTel(e.target.value)}
        pattern="\(\d{2})\s9?\d{4}-\d{4}"
      />
      <div className="flex justify-end mt-4">
        <Botao cor="blue" className="mr-2"
          onClick={() => props.confirmado?.(new Cliente(nome, +idade, tel, id))}
        >
          { id ? 'Alterar' : 'Salvar' }
        </Botao>
        <Botao cor="red" onClick={props.cancelado}>
            Cancelar
        </Botao>
      </div>
    </div>
  )
}