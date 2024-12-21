"use client";

import { z } from "zod";

export const sigUpSchema = z.object({
  email: z.string().min(2).max(50).email({
    message: "Please enter a valid email address",
  }),

  password: z.string().min(2).max(50),

  code: z
    .string()
    .min(5, { message: "O código deve conter no minimo 5 caracteres" })
    .max(5, { message: "O código deve conter no máximo 5 caracteres" }),

  codeControll: z.boolean().default(false),
});
