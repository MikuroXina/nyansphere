import { MockMailValidator } from "../skin/mock/mail-validator";
import { MockUsersRepository } from "../skin/mock/users";
import { User } from "../exp/user";
import { register } from "./register-user";

test("known", async (done) => {
  const mail = "safe@example.com";

  const validator = new MockMailValidator([mail]);
  const repo = new MockUsersRepository();
  expect(await register({ mail }, validator, repo)).toBe(true);
  expect(repo.users[0].isEqualTo(new User(mail))).toBe(true);

  done();
});

test("unknown", async (done) => {
  const mail = "safe@example.com";

  const validator = new MockMailValidator([]);
  const repo = new MockUsersRepository();
  expect(await register({ mail }, validator, repo)).toBe(false);
  expect(repo.users[0]).toBe(undefined);

  done();
});
