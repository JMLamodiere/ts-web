import { baseUrl } from "../config";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

const rootUrl = `${baseUrl}/users`;

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public readonly events: Eventing = new Eventing();
  public readonly sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    // @ts-ignore
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
