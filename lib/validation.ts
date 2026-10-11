import { z } from "zod"

export const RSVPSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(40, "Nama maksimal 40 karakter"),
  attendance: z.enum(["hadir", "tidak_hadir", "ragu"], {
    errorMap: () => ({ message: "Pilih status kehadiran" }),
  }),
  guestCount: z.coerce
    .number()
    .int("Harus angka bulat")
    .min(1, "Minimal 1 tamu")
    .max(5, "Maksimal 5 tamu"),
})

export type RSVPFormData = z.infer<typeof RSVPSchema>

export const GuestbookSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(40, "Nama maksimal 40 karakter"),
  message: z
    .string()
    .min(1, "Pesan tidak boleh kosong")
    .max(280, "Pesan maksimal 280 karakter"),
})

export type GuestbookFormData = z.infer<typeof GuestbookSchema>
