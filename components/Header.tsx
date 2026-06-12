import { Leaf, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "../lib/data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/75 px-3 py-2 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl sm:px-4">
        <Link href="#home" className="flex items-center gap-2 text-emerald-950">
          <span className="grid size-10 place-items-center rounded-full bg-emerald-950 text-lime-200 shadow-lg shadow-emerald-900/20">
            <Leaf size={20} />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black tracking-tight sm:text-xl">
              {siteConfig.brandNameBn}
            </span>
            <span className="hidden text-xs font-bold text-emerald-900/55 sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-emerald-950/5 p-1 text-sm font-bold text-emerald-950/70 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-white hover:text-emerald-950 hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.pickupMapUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-emerald-950/10 bg-white px-4 py-2 text-sm font-extrabold text-emerald-950 transition hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          >
            <MapPin size={16} /> ম্যাপ
          </Link>
          <Link
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-sm font-black text-emerald-950 shadow-lg shadow-lime-500/20 transition hover:-translate-y-0.5 hover:bg-lime-200"
          >
            <Phone size={16} /> কল করুন
          </Link>
        </div>
      </nav>
    </header>
  );
}
