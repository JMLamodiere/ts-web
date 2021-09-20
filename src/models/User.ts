import { baseUrl } from "../config";
import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public readonly events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    // @ts-ignore
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`${baseUrl}/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`${baseUrl}/users/${id}`, this.data);
    } else {
      axios.post(`${baseUrl}/users`, this.data);
    }
  }
}
