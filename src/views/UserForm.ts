import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  protected override eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  private onSaveClick = (): void => {
    this.model.save();
  };

  private onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  private onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (!input) {
      return;
    }

    const name = input.value;

    this.model.set({ name });
  };

  protected override template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
