"use server"
import { GetApi } from "@/app/common/interfaces/container2form";

export async function getApi(e:GetApi){
    console.log(e.email , e.password)
}
