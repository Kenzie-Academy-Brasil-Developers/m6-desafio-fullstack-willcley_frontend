import { z } from "zod";

export const registerSchema = z.object({
    fullname: z
        .string()
        .nonempty("Insira um nome de usuário!")
        .max(50, "Máximo de 50 caracteres!"),
    phones: z
        .string()
        .nonempty("É necessário um número telefônico!"),
    email: z
        .string()
        .nonempty("Insira um e-mail!")
        .email("Insira um e-mail válido!")
        .max(50, "Máximo de 50 caracteres!"),
    password: z
        .string()
        .nonempty("Insira uma senha!")
        .min(4, "É necessário que a senha contenha pelo menos oito caracteres!")
        .max(120, "Máximo de 120 caracteres!"),
    confirmPassword: z
        .string()
        .nonempty("Confirme sua senha!")
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não coincidem!",
    path: ["confirmPassword"],
});