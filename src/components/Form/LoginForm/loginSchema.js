import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .nonempty("Insira um e-mail!")
        .email("Insira um e-mail válido!")
        .max(50, "Máximo de 50 caracteres!"),
    password: z
        .string()
        .nonempty("Insira uma senha!")
        .max(120, "Máximo de 120 caracteres!")
});