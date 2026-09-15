import { NextResponse } from "next/server";
import { z } from "zod";
const contactSchema=z.object({name:z.string().min(2),email:z.string().email(),phone:z.string().min(7),company:z.string().min(2),service:z.string().min(1),message:z.string().min(10)});
export async function POST(request:Request){try{const body=await request.json();const result=contactSchema.safeParse(body);if(!result.success)return NextResponse.json({ok:false,error:"Please check the form fields."},{status:400});return NextResponse.json({ok:true,message:"Contact request received."});}catch{return NextResponse.json({ok:false,error:"Invalid request."},{status:400});}}
