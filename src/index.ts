import { UserForm } from "./views/UserForm";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Element with id root not found");
}

const userForm = new UserForm(rootElement);

userForm.render();
