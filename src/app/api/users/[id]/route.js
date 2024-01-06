// import { NextResponse } from "next/server";

// export function GET(_, response) {
//     const {id} = response.params;

//     return NextResponse.json({id})
// }  

import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from 'fs'

export async function GET(_, res) {
    const { id } = res.params;
    const user = users.find((u) => u.id === id);

    // if (user) {
    //     return NextResponse.json({ user });
    // } else {
    //     return NextResponse.json({ result: "User not found" });
    // }
}

export async function POST(req, res) {
    const { name, email, password } = await req.json();
    const { id } = await res.params;

    const { name: uName, email: uEmail, password: uPassword } = users.find((f) => f.id === id);

    if (uName === name && uEmail === email && uPassword === password) {
        console.log("Successfully logged in");
        return NextResponse.json({ result: "Successfully logged in" });
    } else if (!name || !password || !email) {
        console.log("Please fill all the inputs");
        return NextResponse.json({ result: "Please fill all the inputs" });
    } else {
        console.log("Invalid Credentials");
        return NextResponse.json({ result: "Invalid Credentials" });
    }
}
export async function DELETE(req,res) {
    const {id} = await res.params;

    const userIndex = users.findIndex((user)=>user.id === id)

    if (userIndex === -1) {
        return NextResponse.json({reult: "User Not Found To delete"})
    }
    users.splice(userIndex,1)
    const updatedUsers = users;
    const updatedData = JSON.stringify(updatedUsers,null,2)
        fs.writeFileSync('./src/app/util/db.js',`export const users = ${updatedData}`,"utf-8")
        return NextResponse.json({success:"Users Successfully deleted"})

}
