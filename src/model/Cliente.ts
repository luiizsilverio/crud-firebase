export default class Cliente {
  #id: string
  #nome: string
  #idade: number
  #tel: string

  constructor(nome: string, idade: number, tel: string, id: string = null) {
    this.#nome = nome
    this.#idade = idade
    this.#tel = tel
    this.#id = id
  }

  get id() {
    return this.#id
  }

  get nome() {
    return this.#nome
  }

  get idade() {
    return this.#idade
  }

  get tel() {
    return this.#tel
  }

  static vazio() {
    return new Cliente("", 0, "")
  }

}