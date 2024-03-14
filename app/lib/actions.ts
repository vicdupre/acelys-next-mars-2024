"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  try {
    const data: {
      title: string;
      content: string;
    } = Object.fromEntries(formData.entries()) as {
      title: string;
      content: string;
    };
    const result =
      await sql`INSERT INTO posts (title, content) VALUES (${data.title}, ${data.content})`;
    console.log("result", result);
    redirect("/posts");
  } catch (error) {
    console.log("error", error);
  }
}

export async function getPosts() {
  const result = await sql`SELECT * FROM posts`;
  return result;
}
