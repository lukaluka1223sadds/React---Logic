import { NextResponse } from "next/server"

async function POST(request:Request){
    const { email , password } = await request.json()
    function Boolean():boolean{
        if (email == "magradzeluka39@gmail.com" && password == "luka12345"){
            return true 
        }else{
            return false
    }
        return NextResponse.json({
            Boolean
        })
    }
}