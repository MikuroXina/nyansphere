export class User {
  #mailAddress: string;

  constructor(mail: string) {
    this.#mailAddress = mail;
  }
}
