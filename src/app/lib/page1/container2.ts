import GestoreSubmitForm from "../../container-components/page1/container-2/utils/formUseServer/page";

export async function formGestore(e: FormData) {
  const response = await GestoreSubmitForm({
    email: e.get("email")?.toString() as string,
    password: e.get("password")?.toString() as string,
  });
  const message = response.message;
  const boll = response.boll;
  return { message, boll };
}
