"use server";

import { z } from "zod";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const customerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const getAllCustomers = async () => {
  const feed = await prisma.customer.findMany({
    include: {
      invoices: true,
    },
  });
  return feed;
};

export const createCustomer = async (prevData: any, formData: FormData) => {
  const createCustomer = customerSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });
  try {
    const { name } = createCustomer.parse(Object.fromEntries(formData));
    const result = await prisma.customer.create({
      data: {
        name,
      },
    });
    console.log("createCustomer", result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: error.errors,
      };
    }
    console.error("createCustomer", error);
    return {
      errors: [
        {
          message: "An error occurred",
        },
      ],
    };
  }
  revalidatePath("/customers");
  redirect("/customers");
};
