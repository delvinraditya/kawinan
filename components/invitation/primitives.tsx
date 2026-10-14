import type { ReactNode } from "react"

/* ---------- Surface ---------- */
const surface = "rounded-[1.75rem] border border-white/15 backdrop-blur-xl"

/** Kartu kaca standar. */
export const glass = `${surface} bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,.13),0_18px_60px_rgba(0,0,0,.2)]`

/** Kartu kaca yang lebih terang, untuk elemen utama (cover, lokasi). */
export const elevated = `${surface} bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,.2),0_22px_75px_rgba(217,185,122,.13)]`

/* ---------- Section ---------- */
export function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="py-20" aria-label={title}>
      <div className="mb-8 text-center">
        <p className="mb-3 text-[10px] uppercase tracking-[.32em] text-[#d9b97a]">{eyebrow}</p>
        <h2 className="font-serif text-3xl tracking-tight text-[#f4efe6] sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
