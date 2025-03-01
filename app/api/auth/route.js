import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Query Sanity for a matching auth document.
    const query = `*[_type == "auth" && username == $username && password == $password][0]`;
    const authUser = await client.fetch(query, { username, password });

    if (authUser) {
      return NextResponse.json(
        { message: "Login successful" },
        {
          status: 200,
          headers: {
            "Set-Cookie": `token=${process.env.ADMIN_TOKEN}; HttpOnly; Path=/`,
          },
        }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error in auth API route:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
