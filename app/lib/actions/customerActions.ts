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

export const getAllCustomers = async (withInvoices = false) => {
  const feed = await prisma.customer.findMany({
    include: {
      invoices: withInvoices,
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

export const getCustomerById = async (id: string, withInvoices = false) => {
  const customer = await prisma.customer.findUnique({
    where: {
      id,
    },
    include: {
      invoices: withInvoices,
    },
  });
  return customer;
};

export const updateCustomer = async (
  id: string,
  prevData: any,
  formData: FormData
) => {
  const updateCustomer = customerSchema.omit({
    createdAt: true,
    updatedAt: true,
    id: true,
  });

  try {
    const { name } = updateCustomer.parse(Object.fromEntries(formData));
    const result = await prisma.customer.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: error.errors,
      };
    }
    return {
      errors: [
        {
          message: "An error occurred",
        },
      ],
    };
  }

  revalidatePath(`/customers/${id}`);
  redirect(`/customers/${id}`);
};

export const deleteCustomer = async (id: string) => {
  await prisma.customer.delete({
    where: {
      id,
    },
  });
  revalidatePath("/customers");
  redirect("/customers");
};
