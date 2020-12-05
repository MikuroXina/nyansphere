import type { User } from "../../exp/user";
import type { Users } from "../../abst/repo/users";

export class MockUsersRepository implements Users {
  users: User[] = [];

  save(newUser: User): Promise<void> {
    if (this.users.every((existing) => !existing.isEqualTo(newUser))) {
      this.users.push(newUser);
    }
    return Promise.resolve();
  }
}
