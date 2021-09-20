import { User } from "./models/User";

const user = new User({ name: "new record", age: 40 });

user.events.on("change", () => {
  console.log("change!!");
});

user.set({ name: "new name" });
console.log(user.get("name"));

const firstUser = new User({ id: 1 });
firstUser.on("change", () => {
  console.log(user);
});

firstUser.fetch();
