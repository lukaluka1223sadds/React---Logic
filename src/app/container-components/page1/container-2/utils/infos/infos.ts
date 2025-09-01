import { ChangeEvent } from "react";

export function Infos(Info: { email: string; password: string } , event: ChangeEvent<HTMLInputElement>) {
  if (event.target.name == "email") {
    return {
      email: event.target.value,
      password: Info.password,
    };
  } else {
    return ({
      email: Info.email,
      password: event.target.value,
    });
  }
}
