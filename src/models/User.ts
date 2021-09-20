import { baseUrl } from "../config";
import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";

const rootUrl = `${baseUrl}/users`;

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }

  isAdminUser(): boolean {
    return this.get("id") === 1;
  }
}
