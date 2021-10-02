import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Element with id root not found");
}

const user = User.buildUser({ name: "John", age: 20 });

const userForm = new UserForm(rootElement, user);

userForm.render();
