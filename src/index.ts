import { User } from "./models/User";
import axios from "axios";

// See npm run start:db
const baseUrl = "http://localhost:3000";

axios.post(baseUrl + "/users", { name: "Paul", age: 40 });
