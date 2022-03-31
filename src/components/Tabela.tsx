import { DeleteSvg, EditSvg } from "../icons"
import Cliente from "../model/Cliente"

interface Props {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: Props) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        <tr>
          <th className="text-left p-3">Código</th>
          <th className="text-left p-3">Nome</th>
          <th className="text-left p-3">Idade</th>
          <th className="text-left p-3">Telefone</th>
          {
            exibirAcoes &&
              <th className="p-3">Ações</th>
          }
        </tr>
      </thead>
      <tbody>
        {
          props.clientes?.map((cliente, i) => (
            <tr
              key={cliente.id || i}
              className={`${ i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100' }`}
            >
              <td className="text-left p-3">{ cliente.id }</td>
              <td className="text-left p-3">{ cliente.nome }</td>
              <td className="text-left p-3">{ cliente.idade }</td>
              <td className="text-left p-3">{ cliente.tel }</td>

              {
                exibirAcoes &&
                  <td className="flex justify-center items-center p-1">
                    {
                      props.clienteSelecionado &&
                        <button
                          onClick={() => props.clienteSelecionado?.(cliente)}
                          className={`
                            flex justify-center item-center
                            p-2 text-purple-700 rounded-full
                            m-1 hover:bg-purple-50 h-6
                          `}
                        >
                          {EditSvg}
                        </button>
                    }

                    {
                      props.clienteExcluido &&
                        <button
                          onClick={() => props.clienteExcluido?.(cliente)}
                          className={`
                            flex justify-center item-center
                            p-2 text-red-500 rounded-full
                            m-1 hover:bg-purple-50 h-6
                          `}
                        >
                          {DeleteSvg}
                        </button>
                    }
                  </td>
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}