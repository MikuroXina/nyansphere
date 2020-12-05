import fauna, { query as q } from "faunadb";
import type { User } from "../../exp/user";
import type { Users } from "../../abst/repo/users";

const FAUNA_SECRET = process.env.FAUNA_SECRET || "UNSET";

export class FaunaDB implements Users {
  private client = new fauna.Client({ secret: FAUNA_SECRET });

  async save(user: User): Promise<void> {
    await this.client.query(
      q.Create(q.Collection("users"), user.intoCollection()),
    );
  }
}
