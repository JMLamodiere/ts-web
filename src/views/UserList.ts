import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  protected override renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
