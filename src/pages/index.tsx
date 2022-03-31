import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../model/Cliente'

const contatos: Cliente[] = [
  new Cliente('Luiz', 48, '3232-7752', '1'),
  new Cliente('José Roberto', 55, '3112-9600', '2'),
  new Cliente('Lucas', 34, '9199-5500', '3'),
  new Cliente('Gabriel', 25, '9985-9999', '4'),
]

type Tela = 'tabela' | 'formulário'

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [telaVisivel, setTelaVisivel] = useState<Tela>('tabela')

  function seleciona(cliente: Cliente) {
    setCliente(cliente)
    setTelaVisivel('formulário')
  }

  function exclui(cliente: Cliente) {
    console.log('exclui')
  }

  function salvarCliente(cliente: Cliente) {

    setTelaVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setTelaVisivel('formulário')
  }

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
                  clienteSelecionado={seleciona}
                  clienteExcluido={exclui}
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
