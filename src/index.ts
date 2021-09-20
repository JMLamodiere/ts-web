import { User } from "./models/User";

const user = new User({ name: "new record", age: 40 });

user.events.on("change", () => {
  console.log("change!!");
});

user.set({ name: "new name" });
console.log(user.get("name"));
