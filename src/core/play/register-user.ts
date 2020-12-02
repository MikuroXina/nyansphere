import type { MailValidator } from "../abst/mail-validator";
import type { Registrator } from "../abst/registrator";
import { User } from "../exp/user";
import type { Users } from "../abst/repo/users";

export async function register(
  { mail }: Registrator,
  validator: MailValidator,
  repo: Users,
): Promise<boolean> {
  if (!(await validator.validate(mail))) {
    return false;
  }
  const newUser = new User(mail);
  await repo.save(newUser);
  return true;
}
