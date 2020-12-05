import type { MailValidator } from "../../abst/mail-validator";

export class MockMailValidator implements MailValidator {
  constructor(private readonly knownMails: readonly string[]) {}

  validate(mail: string): Promise<boolean> {
    return Promise.resolve(this.knownMails.includes(mail));
  }
}
