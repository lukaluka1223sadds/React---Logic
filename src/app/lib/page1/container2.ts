import GestoreSubmitForm from "../../container-components/page1/container-2/utils/formUseServer/formUseServer";

interface S{
    email: string, password: string
}

export async function formGestore(e: S) {
  const response = await GestoreSubmitForm({
    email: e.email?.toString() as string,
    password: e.password?.toString() as string,
  });
  const message = response.message;
  const boll = response.boll;
  return { message, boll };
}
