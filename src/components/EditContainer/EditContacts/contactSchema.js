import { z } from "zod";

export const contactSchema = z.object({
    fullname: z
        .string()
        .nonempty("Insira um nome!")
        .max(50, "Máximo de 50 caracteres!"),
    email: z
        .string()
        .nonempty("Insira um email!")
        .email("Insira um email válido!"),
    phones: z
        .string()
        .nonempty("Insira um número telefônico!"),
}).partial();