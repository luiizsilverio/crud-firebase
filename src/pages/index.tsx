import Head from 'next/head'
import { useEffect, useState } from 'react'

import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import ClienteRepository from '../repository/ClienteRepository'
import Cliente from '../model/Cliente'


type Tela = 'tabela' | 'formulário'

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [contatos, setContatos] = useState<Cliente[]>([])
  const [telaVisivel, setTelaVisivel] = useState<Tela>('tabela')

  const repo = new ClienteRepository()


  function seleciona(cliente: Cliente) {
    setCliente(cliente)
    setTelaVisivel('formulário')
  }


  function novoCliente() {
    setCliente(Cliente.vazio())
    setTelaVisivel('formulário')
  }


  async function excluir(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }


  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }


  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setContatos(clientes)
      setTelaVisivel('tabela')
    })
  }

  useEffect(obterTodos, [])


  return (
    <>

      <Head>
        <title>CRUD Firebase</title>
        <meta name="description" content="CRUD simples com Firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-br from-blue-500 via-blue-500 to-blue-900
        text-white
      `}>

        <Layout titulo="Cadastro de Contatos">

        {
          telaVisivel === 'tabela'
          ? (
              <>
                <div className="flex justify-end">
                  <Botao className="mb-4" cor="green"
                    onClick={novoCliente}
                  >
                    Novo Cliente
                  </Botao>
                </div>
                <Tabela
                  clientes={contatos}
                  selecionarCliente={seleciona}
                  excluirCliente={excluir}
                />
              </>
            )
          : (
              <Formulario
                cliente={cliente}
                cancelado={() => setTelaVisivel('tabela')}
                confirmado={salvarCliente}
              />
            )
        }

        </Layout>

      </div>
    </>
  )
}
