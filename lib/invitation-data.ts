/**
 * Data dummy undangan. Ganti semua nilai sebelum dipakai sungguhan.
 *
 * Aturan waktu: startsAt / endsAt ditulis ISO 8601 lengkap dengan offset zona
 * waktu (+07:00 = WIB). Dari sini countdown, tanggal di hero, dan file
 * kalender (.ics) dihitung, jadi tanggal cukup diubah di satu tempat.
 * Field `date` dan `time` hanya teks tampilan, tulis manual sesuai gaya yang diinginkan.
 */
export const invitationData = {
  couple: {
    first: {
      name: "Nadia",
      fullName: "Nadia Putri Santoso",
      parents: "Orang tua: Dr. Santoso & Ibu Sri Handoko",
      image: "/placeholder.jpg",
    },
    second: {
      name: "Raka",
      fullName: "Raka Wijaya",
      parents: "Orang tua: Bpk. Wijaya & Ibu Rini Kusuma",
      image: "/placeholder.jpg",
    },
  },

  // Acara pertama (events[0]) dipakai untuk countdown, tanggal hero, dan lokasi utama.
  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      date: "12 Desember 2026",
      time: "09:00 - 10:30 WIB",
      startsAt: "2026-12-12T09:00:00+07:00",
      endsAt: "2026-12-12T10:30:00+07:00",
      venue: "Masjid Agung Al-Amal",
      address: "Jl. Gatot Subroto No. 42, Jakarta Selatan 12930",
      latitude: -6.2461,
      longitude: 106.7944,
    },
    {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      date: "12 Desember 2026",
      time: "12:00 - 17:00 WIB",
      startsAt: "2026-12-12T12:00:00+07:00",
      endsAt: "2026-12-12T17:00:00+07:00",
      venue: "Ballroom Emerald City Hotel",
      address: "Jl. Sudirman No. 88, Jakarta Pusat 10220",
      latitude: -6.2149,
      longitude: 106.8113,
    },
  ],

  gallery: Array.from({ length: 8 }, (_, i) => ({
    id: `photo-${i}`,
    src: "/placeholder.jpg",
    alt: `Foto Nadia & Raka ${i + 1}`,
  })),

  bankAccounts: [
    {
      bank: "Bank Mandiri",
      accountNumber: "1700-0123-4567",
      accountName: "Nadia Putri Santoso",
    },
    {
      bank: "Bank BCA",
      accountNumber: "4835-0123-4567",
      accountName: "Raka Wijaya",
    },
  ],

  // Taruh file audio di public/audio/. Kalau file belum ada, tombol musik otomatis tidak muncul.
  musicUrl: "/audio/wedding-theme.mp3",
}

export type InvitationData = typeof invitationData
