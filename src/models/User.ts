import { baseUrl } from "../config";
import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collection";

const rootUrl = `${baseUrl}/users`;

export interface UserProps {
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

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  isAdminUser(): boolean {
    return this.get("id") === 1;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
