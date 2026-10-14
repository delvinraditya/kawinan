export type CalendarEvent = {
  uid: string
  title: string
  location: string
  start: string | Date
  end: string | Date
}

/** 2026-12-12T02:00:00.000Z -> 20261212T020000Z */
const toIcsDate = (value: string | Date) =>
  new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")

/** Karakter khusus wajib di-escape agar kalender tidak salah baca (RFC 5545). */
const escapeText = (text: string) =>
  text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n")

export function buildIcs(event: CalendarEvent) {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Undangan Pernikahan//ID",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${event.uid}@undangan`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(event.start)}`,
    `DTEND:${toIcsDate(event.end)}`,
    `SUMMARY:${escapeText(event.title)}`,
    `LOCATION:${escapeText(event.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n") // ICS wajib pakai CRLF
}

export function downloadIcs(event: CalendarEvent, filename: string) {
  const url = URL.createObjectURL(new Blob([buildIcs(event)], { type: "text/calendar;charset=utf-8" }))
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link) // Safari butuh elemen ada di DOM
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000) // jangan langsung di-revoke, download bisa gagal
}
