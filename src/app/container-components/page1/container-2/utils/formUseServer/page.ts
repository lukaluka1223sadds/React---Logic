"use server";
import { GestoreSubmitForm_ } from "@/app/common/interfaces/container2form";

export default async function GestoreSubmitForm(e: GestoreSubmitForm_) {
  if (e.email === "magradzeluka39@gmail.com" && e.password === "luka") {
    return {
      message: "login is sucess",
      boll: "true",
    };
  } else {
    return {
      message: "email or password is incorrect",
      boll: "false",
    };
  }
}
