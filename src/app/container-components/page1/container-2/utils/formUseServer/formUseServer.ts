"use server";
import { IGestoreSubmitForm_ } from "@/app/common/interfaces/container2form";

export default async function GestoreSubmitForm(e: IGestoreSubmitForm_) {
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
