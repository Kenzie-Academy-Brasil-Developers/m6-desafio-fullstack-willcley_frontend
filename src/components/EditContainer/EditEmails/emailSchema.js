import { z } from "zod";

export const emailSchema = z.object({
    email: z
        .string()
        .nonempty("Insira um email!")
        .email("Insira um email válido!"),
    password: z
        .string()
        .nonempty("Insira uma senha!"),
    updatePassword: z
        .string()
        .nonempty("Insira uma senha!"),
}).partial();