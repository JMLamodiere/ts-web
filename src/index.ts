import { UserEdit } from "./views/UserEdit";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const userEditElement = document.getElementById("user-edit");
if (!userEditElement) {
  throw new Error("Element with id user-edit not found");
}

const user = User.buildUser({ name: "NAME", age: 20 });
const userEdit = new UserEdit(userEditElement, user);
userEdit.render();

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const collectionElement = document.getElementById("collection");
  if (!collectionElement) {
    throw new Error("Element with id collection not found");
  }

  new UserList(collectionElement, users).render();
});

users.fetch();
