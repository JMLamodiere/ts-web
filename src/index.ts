import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Element with id root not found");
}

const user = User.buildUser({ name: "NAME", age: 20 });

const userEdit = new UserEdit(rootElement, user);

userEdit.render();

console.log(userEdit);
