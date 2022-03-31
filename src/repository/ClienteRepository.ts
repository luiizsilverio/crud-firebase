import firebase from "../firebase/config";
import Cliente from "../model/Cliente";

export default class ClienteRepository {

  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
        tel: cliente.tel
      }
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Cliente {
      const dados = snapshot.data(options)
      return new Cliente(dados.nome, dados.idade, dados.tel, snapshot.id)
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.#colecao().doc(cliente.id).set(cliente)
      return cliente

    } else {
      const docRef = await this.#colecao().add(cliente)
      const doc = await docRef.get()
      return doc.data()
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return await this.#colecao().doc(cliente.id).delete()
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await this.#colecao().get()
    return query.docs.map(doc => doc.data()) ?? []
  }

  #colecao() {
    return firebase.firestore()
      .collection('clientes')
      .withConverter(this.#conversor)
  }
}