
import GestoreSubmitForm from "./formUseServer/page"

export async function formGestore(e: FormData) {
    const response = await GestoreSubmitForm({ email: e.get("email")?.toString() as string, password: e.get("password")?.toString() as string })
    let message = response.message
    let boll = response.boll
    return { message, boll } 
}