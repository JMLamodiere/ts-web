import { baseUrl } from "../config";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

const rootUrl = `${baseUrl}/users`;

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public readonly events: Eventing = new Eventing();
  public readonly sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public readonly attributes: Attributes<UserProps>;

  constructor(private attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
