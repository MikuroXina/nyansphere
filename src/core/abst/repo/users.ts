import type { User } from "../../exp/user";

export interface Users {
  save(user: User): Promise<void>;
}
