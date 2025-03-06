// import { NextResponse } from "next/server.js";
// // const contentful = require("contentful");
// import { createClient } from "contentful";
// export const dynamic = "force-dynamic";
// export const maxDuration = 30;
// export async function GET(req) {
//   try {
//     const entries = contentful.createClient({
//       space: process.env.SPACE,
//       accessToken: process.env.ACCESS_TOKEN,
//     });

//     const data = await entries.getEntries({
//       content_type: "trekCategories",
//     });

//     return NextResponse.json({ data: data });
//   } catch (err) {
//     return NextResponse.error({
//       code: 500,
//       status: "err",
//     });
//     // NextResponse.status(500).send({ msg: "Internal server error" });
//   }
// }
import { createClient } from "contentful";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function GET(req) {
  try {
    // Initialize Contentful Client
    const client = createClient({
      space: process.env.SPACE,
      accessToken: process.env.ACCESS_TOKEN,
    });

    // Fetch entries from Contentful
    const data = await client.getEntries({
      content_type: "trekCategories",
    });

    return NextResponse.json({ data });
  } catch (err) {
    console.error("Contentful Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
