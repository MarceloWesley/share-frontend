"use client";

import { z } from "zod";

export const sigInSchema = z.object({
  email: z
    .string()
    .min(2)
    .max(50)
    .email({ message: "Please enter a valid email address" }),

  password: z.string().min(2).max(50),
});
