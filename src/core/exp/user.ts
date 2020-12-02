export class User {
  #mailAddress: string;

  constructor(mail: string) {
    this.#mailAddress = mail;
  }

  isEqualTo(other: User): boolean {
    return this.#mailAddress === other.#mailAddress;
  }
}
