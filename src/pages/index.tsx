import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../model/Cliente'

export default function Home() {

  const contatos: Cliente[] = [
    new Cliente('Luiz', 48, '3232-7752', '1'),
    new Cliente('José Roberto', 55, '3112-9600', '2'),
    new Cliente('Lucas', 34, '9199-5500', '3'),
    new Cliente('Gabriel', 25, '9985-9999', '4'),
  ]

  function seleciona(cliente: Cliente) {
    console.log('seleciona')
  }

  function exclui(cliente: Cliente) {
    console.log('exclui')
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
        bg-gradient-to-r from-blue-500 to-teal-600
        text-white
      `}>

      <Layout titulo="Cadastro de Contatos">
        <Tabela
          clientes={contatos}
          clienteSelecionado={seleciona}
          clienteExcluido={exclui}
        />
      </Layout>

      </div>
    </>
  )
}
