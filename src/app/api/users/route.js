// import { NextResponse } from "next/server";
// import { users } from "@/app/util/db";
// export function GET() {
//     const data = users;
//     return NextResponse.json({data})

// import { NextResponse } from "next/server"

    
// }
// export async function POST(req,res) {
    // let data = await req.json()
    // console.log(data)

    // let {email,name,age} = await req.json()
      
    // console.log(email,password)
    
//     if (!email || !name || !age) {
//         return NextResponse.json({error: "Not found",ok:false},{status: 400})
//     }
    
//     return NextResponse.json({res: "User successfully logged in",ok:true},{status:201})
// }


//Fake User Management project
import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from 'fs';

export function GET(){
    const data = users;
    return NextResponse.json({data},{status: 200})
}
export async function POST(req,res) {
    let {id,name,password,email} = await req.json();
    if (!id || !name || !password || !email) {
        return NextResponse.json({result: "User filled not found"},{status:400})
    }
    else{
        users.push({id,name,password,email})

        const updatedUsers = users;
        const updatedData = JSON.stringify(updatedUsers,null,2)
        fs.writeFileSync('./src/app/util/db.js',`export const users = ${updatedData}`,"utf-8")
        return NextResponse.json({success:"Users Successfully Created"})
    }
    
}
export async function PUT(req,res) {
    let {id,name,password,email} = await req.json();
    const userIndex = users.findIndex((u)=>u.id === id)
    if (userIndex === -1) {
        return NextResponse.json({result:"User Not found"},{status:404})
    }
    if(name){
        users[userIndex].name = name
    }
    if(email){
        users[userIndex].email = email
    }
    if(password){
        users[userIndex].password = password
    }
    const updatedUsers = users;
    const updatedData = JSON.stringify(updatedUsers,null,2)
        fs.writeFileSync('./src/app/util/db.js',`export const users = ${updatedData}`,"utf-8")
        return NextResponse.json({success:"Users Successfully updsated"})

}
