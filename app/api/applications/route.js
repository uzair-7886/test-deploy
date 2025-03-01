import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the full application document (all fields) so that payment info is included.
    const query = `*[_type == "application"] | order(submittedAt desc)`;
    const applications = await client.fetch(query);
    return NextResponse.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { message: "Error fetching applications" },
      { status: 500 }
    );
  }
}
