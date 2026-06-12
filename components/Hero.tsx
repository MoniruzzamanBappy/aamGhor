import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Phone,
  ShoppingBasket,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { siteConfig, trustStats } from "../lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#f6ffe9] px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(190,242,100,0.75),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(253,224,71,0.65),transparent_28%),linear-gradient(135deg,#f7fee7_0%,#ffffff_48%,#ecfccb_100%)]" />
      <div className="absolute left-1/2 top-16 -z-10 h-152 w-152 -translate-x-1/2 rounded-full border border-emerald-900/10 bg-white/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-black text-emerald-950 shadow-sm backdrop-blur">
            <Sparkles size={16} className="text-yellow-500" />
            রাজশাহীর ফ্রেশ আম্রপালি • পিকআপ অর্ডার
          </div>

          <h1 className="mt-3 max-w-5xl text-[2.6rem] font-black leading-[1.35] tracking-[-0.02em] text-emerald-950 sm:text-6xl sm:leading-[1.3] lg:text-7xl">
            <span className="block">তাজা আম্রপালি,</span>

            <span className="block bg-linear-to-r from-lime-700 via-emerald-700 to-yellow-600 bg-clip-text text-transparent">
              সরাসরি আম ঘর থেকে।
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-950/72 sm:text-xl">
            রাজশাহীর প্রিমিয়াম আম্রপালি এখন মাত্র{" "}
            <strong>{siteConfig.priceLabel}</strong>। সর্বনিম্ন অর্ডার{" "}
            <strong>{siteConfig.minOrder}</strong> — সংগ্রহ করতে হবে
            <strong> {siteConfig.pickupPoint}</strong> থেকে।
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`tel:${siteConfig.phone}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-7 py-4 text-base font-black text-white shadow-2xl shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-emerald-800"
            >
              <Phone size={20} /> এখনই অর্ডার করুন
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={siteConfig.pickupMapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white/85 px-7 py-4 text-base font-black text-emerald-950 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white"
            >
              <MapPin size={20} /> পিকআপ লোকেশন দেখুন
            </Link>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 shadow-sm ring-1 ring-emerald-950/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10"
              >
                <p className="text-2xl font-black text-emerald-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold text-emerald-900/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-4 top-10 z-10 hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl shadow-emerald-950/10 backdrop-blur md:block mango-float">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-lime-200 text-2xl">
                🥭
              </span>
              <div>
                <p className="text-sm font-bold text-emerald-900/60">
                  আজকের দাম
                </p>
                <p className="text-xl font-black text-emerald-950">
                  {siteConfig.priceLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-16 z-10 hidden rounded-3xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-emerald-950/10 backdrop-blur md:block mango-float-delayed">
            <div className="flex items-center gap-2 text-emerald-950">
              <BadgeCheck className="text-lime-700" />
              <span className="font-black">পিকআপ রেডি</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/55 p-4 shadow-2xl shadow-emerald-950/15 backdrop-blur-xl sm:rounded-[3.5rem] sm:p-5">
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-emerald-950 via-emerald-800 to-lime-700 p-6 text-white sm:rounded-[3rem] sm:p-8">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-300/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-black text-lime-100 ring-1 ring-white/15">
                    <Star size={15} className="fill-lime-200 text-lime-200" />{" "}
                    Premium Amrapali
                  </p>
                  <h2 className="mt-7 text-4xl font-black leading-none sm:text-6xl">
                    রাজশাহীর
                    <span className="block text-lime-200">আম্রপালি</span>
                  </h2>
                </div>
                <span className="text-7xl sm:text-8xl mango-float">🥭</span>
              </div>

              <div className="relative mt-10 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-white/12 p-5 ring-1 ring-white/15 backdrop-blur">
                  <p className="text-sm font-bold text-white/60">মূল্য</p>
                  <p className="mt-1 text-4xl font-black text-lime-200">
                    ৳{siteConfig.price}
                  </p>
                  <p className="font-bold text-white/70">প্রতি কেজি</p>
                </div>
                <div className="rounded-[1.75rem] bg-white p-5 text-emerald-950">
                  <p className="text-sm font-bold text-emerald-900/55">
                    অর্ডার
                  </p>
                  <p className="mt-1 text-4xl font-black">
                    {siteConfig.minOrder}
                  </p>
                  <p className="font-bold text-emerald-900/70">সর্বনিম্ন</p>
                </div>
              </div>

              <div className="relative mt-4 flex items-center gap-3 rounded-[1.75rem] bg-lime-200 p-4 text-emerald-950">
                <ShoppingBasket className="shrink-0" />
                <p className="font-black">
                  ফোনে কনফার্ম করে লোকেশন থেকে সংগ্রহ করুন
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
