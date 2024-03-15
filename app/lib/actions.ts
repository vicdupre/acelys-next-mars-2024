"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { z } from "zod";

export async function createPost(prevState: any, formData: FormData) {
  try {
    const FormSchema = z.object({
      id: z.number(),
      title: z
        .string()
        .min(5, { message: "Title must be at least 5 characters" }),
      content: z
        .string()
        .min(10, { message: "Content must be at least 10 characters" }),
    });
    console.log("formData", Object.fromEntries(formData));
    const createPost = FormSchema.omit({ id: true });
    //const { title, content } = createPost.parse(Object.fromEntries(formData));
    const { title, content } = createPost.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    const result =
      await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;
    console.log("result", result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("error", error.errors);
      return {
        message: error.errors[0].message,
      };
    }
    console.log("error", error);
    return {
      message: "An error occurred",
    };
  }
  revalidatePath("/posts");
  redirect("/posts");
}

export async function getPosts() {
  noStore();
  const result = await sql`SELECT * FROM posts`;
  return result;
}
