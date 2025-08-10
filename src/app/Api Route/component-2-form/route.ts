import { NextResponse } from "next/server"

async function POST(request:Request){
    const { email , password } = await request.json()
        if (email == "magradzeluka39@gmail.com" && password == "luka12345"){
            return Response.json({
                boll:true,
                message:"login is success"
            },
            {
                status: 200
            }
        ) 
        }else{
            return NextResponse.json({
                boll:false,
                message:"email or password is incorrect"
            },{
               status: 404
            })
        }
}