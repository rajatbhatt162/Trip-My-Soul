import { NextResponse } from "next/server.js";
const contentful = require("contentful");

export async function GET(req){

    try {
        const entries = contentful.createClient({
          space: process.env.SPACE,
          accessToken: process.env.ACCESS_TOKEN
        });
        
        const data = await entries.getEntries({
          content_type: "treks",
        });
    
       return NextResponse.json({ data: data });
      } catch (err) {
       
        return NextResponse.error({
          code: 500,
          status: "err",
        });
      }
}