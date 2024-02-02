import { z } from "zod";

export const perfilSchema = z.object({
    fullname: z
        .string()
        .nonempty("Insira um nome!")
        .max(50, "Máximo de 50 caracteres!"),
    phones: z
        .string()
        .nonempty("Insira um número!")
}).partial();