import { z } from 'zod';

export const Form = z.object({
    name: z.string({ description: "Your name" })
        .min(2, "Name must be at least 2 characters")
        .max(32, "Name must be at most 32 characters")
        .optional(),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(64, "Password must be at most 64 characters"),
    email: z.string().email(),
    percentage: z.number()
        .min(0, "Percentage must be at least 0")
        .max(100, "Percentage must be at most 100"),
    isAdmin: z.boolean().default(false)
});

export type FormType = z.infer<typeof Form>;