export interface MailValidator {
  validate(mail: string): Promise<boolean>;
}
