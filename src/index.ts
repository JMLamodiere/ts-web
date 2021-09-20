import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: "My new name", age: 55 });
user.save();

const newUser = new User({ name: "new record", age: 40 });
newUser.save();
