// import { NextResponse } from "next/server.js";
// const contentful = require("contentful");
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
import { NextResponse } from "next/server";
import * as contentful from "contentful";  // Import contentful correctly

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function GET(req) {
  try {
    // Initialize Contentful client correctly
    const client = contentful.createClient({
      space: process.env.SPACE,
      accessToken: process.env.ACCESS_TOKEN,
    });

    // Fetch entries from Contentful
    const data = await client.getEntries({
      content_type: "trekCategories",
    });

    // Check if data exists
    if (!data || !data.items) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }

    return NextResponse.json({ data: data.items });
  } catch (err) {
    console.error("Error fetching trek categories:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
