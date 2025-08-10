 "use server"
import { GetApi } from "@/app/common/interfaces/container2form";

export async function getApi(e:GetApi){
    const sendApi = fetch("/Api Route/component-2-form",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            "email":e.email,
            "password":e.password
        })
    })
}