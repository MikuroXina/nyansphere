export class User {
  private mailAddress: string;

  constructor(mail: string) {
    this.mailAddress = mail;
  }

  isEqualTo(other: User): boolean {
    return this.mailAddress === other.mailAddress;
  }

  intoCollection(): unknown {
    return { mail: this.mailAddress };
  }
}
