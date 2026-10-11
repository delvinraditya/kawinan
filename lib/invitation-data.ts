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

  weddingDate: new Date("2025-06-15"),

  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      date: "15 Juni 2025",
      time: "09:00 - 10:30 WIB",
      venue: "Masjid Agung Al-Amal",
      address: "Jl. Gatot Subroto No. 42, Jakarta Selatan 12930",
      mapLink:
        "https://www.google.com/maps/place/-6.2461,106.7944/@-6.2461,106.7944,15z",
      latitude: -6.2461,
      longitude: 106.7944,
    },
    {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      date: "15 Juni 2025",
      time: "12:00 - 17:00 WIB",
      venue: "Ballroom Emerald City Hotel",
      address: "Jl. Sudirman No. 88, Jakarta Pusat 10220",
      mapLink:
        "https://www.google.com/maps/place/-6.2149,106.8113/@-6.2149,106.8113,15z",
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

  musicUrl: "/placeholder.jpg", // Replace with actual audio URL
}

export type InvitationData = typeof invitationData
