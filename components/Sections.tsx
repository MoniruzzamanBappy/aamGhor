import {
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  MapPin,
  MapPinned,
  Navigation,
  Phone,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { faqs, features, products, siteConfig, steps } from "../lib/data";

export function FeatureSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="font-black text-lime-700">কেন আম ঘর?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-emerald-950 sm:text-5xl">
              সহজ, স্বচ্ছ এবং আধুনিক আম কেনার অভিজ্ঞতা।
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-emerald-950/65 lg:justify-self-end">
            অর্ডার করার আগে সব তথ্য পরিষ্কার: দাম, সর্বনিম্ন পরিমাণ, ফোন নম্বর
            এবং পিকআপ লোকেশন।
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2.25rem] border border-emerald-950/10 bg-linear-to-br from-lime-50 to-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/10"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-lime-200/50 blur-2xl transition group-hover:bg-yellow-200/70" />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-emerald-950 text-lime-200 shadow-lg shadow-emerald-950/15">
                {index === 0 ? <ShieldCheck /> : <CheckCircle2 />}
              </span>
              <h3 className="relative mt-6 text-2xl font-black text-emerald-950">
                {item.title}
              </h3>
              <p className="relative mt-3 leading-7 text-emerald-950/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#0d2415] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,242,100,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.16),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-black text-lime-300">প্যাকেজ</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              আপনার প্রয়োজন অনুযায়ী আম্রপালি অর্ডার করুন।
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-white/65">
            বর্তমানে পিকআপ ভিত্তিক অর্ডার নেওয়া হচ্ছে। অর্ডারের আগে ফোনে পরিমাণ
            ও সময় নিশ্চিত করুন।
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => {
            const featured = index === 1;
            return (
              <article
                key={product.name}
                className={`relative overflow-hidden rounded-[2.25rem] p-7 shadow-2xl transition hover:-translate-y-2 ${
                  featured
                    ? "bg-lime-300 text-emerald-950 shadow-lime-950/20"
                    : "bg-white/8 text-white ring-1 ring-white/10 shadow-black/20 backdrop-blur"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`grid size-14 place-items-center rounded-2xl ${
                      featured
                        ? "bg-emerald-950 text-lime-200"
                        : "bg-white/12 text-lime-200"
                    }`}
                  >
                    <ShoppingBag />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      featured
                        ? "bg-white/70 text-emerald-950"
                        : "bg-lime-300/15 text-lime-200"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black">{product.name}</h3>
                <p
                  className={`mt-3 leading-7 ${featured ? "text-emerald-900/75" : "text-white/65"}`}
                >
                  {product.description}
                </p>

                <div className="mt-7">
                  <p className="text-4xl font-black">{product.price}</p>
                  <p
                    className={`mt-1 font-bold ${featured ? "text-emerald-900/70" : "text-lime-200"}`}
                  >
                    {product.unit}
                  </p>
                </div>

                <ul className="mt-7 space-y-3">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-bold"
                    >
                      <CheckCircle2
                        size={18}
                        className={
                          featured ? "text-emerald-900" : "text-lime-300"
                        }
                      />
                      <span
                        className={
                          featured ? "text-emerald-950/80" : "text-white/75"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`tel:${siteConfig.phone}`}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 font-black transition hover:-translate-y-0.5 ${
                    featured
                      ? "bg-emerald-950 text-white"
                      : "bg-white text-emerald-950"
                  }`}
                >
                  অর্ডার করুন <ArrowRight size={18} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowToOrderSection() {
  return (
    <section
      id="how"
      className="bg-linear-to-br from-lime-50 via-white to-yellow-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="font-black text-lime-700">অর্ডার প্রক্রিয়া</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-emerald-950 sm:text-5xl">
            মাত্র ৩ ধাপে আম সংগ্রহ করুন।
          </h2>
          <p className="mt-5 text-lg leading-8 text-emerald-950/65">
            ওয়েবসাইট থেকে তথ্য দেখে সরাসরি ফোন করুন। অর্ডার কনফার্ম হলে
            নির্দিষ্ট পিকআপ পয়েন্ট থেকে আম নিতে হবে।
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-emerald-950/10 md:block" />
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex gap-5 rounded-4xl border border-emerald-950/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10"
              >
                <span className="z-10 grid size-16 shrink-0 place-items-center rounded-2xl bg-emerald-950 text-2xl font-black text-lime-200 shadow-lg shadow-emerald-950/15">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-emerald-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-emerald-950/65">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PickupSection() {
  return (
    <section id="pickup" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-emerald-950 p-8 text-white shadow-2xl shadow-emerald-950/15 md:p-12">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-yellow-300/15 blur-3xl" />
          <div className="relative">
            <p className="font-black text-lime-300">পিকআপ পয়েন্ট</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              Google Maps লোকেশন যুক্ত করা হয়েছে।
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              অর্ডার কনফার্ম করার পর নিচের লোকেশন থেকে আম সংগ্রহ করুন। যাওয়ার
              আগে ফোনে সময় নিশ্চিত করে নিন।
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-4xl bg-white/10 p-5 ring-1 ring-white/10">
                <MapPinned className="text-lime-200" />
                <p className="mt-4 text-sm font-bold text-white/50">ঠিকানা</p>
                <p className="mt-1 text-xl font-black">
                  {siteConfig.pickupDetails}
                </p>
              </div>
              <div className="rounded-4xl bg-lime-300 p-5 text-emerald-950">
                <Clock />
                <p className="mt-4 text-sm font-bold text-emerald-900/60">
                  নোট
                </p>
                <p className="mt-1 text-xl font-black">
                  আগে ফোন করে পিকআপ সময় কনফার্ম করুন।
                </p>
              </div>
            </div>

            <Link
              href={siteConfig.pickupMapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-emerald-950 transition hover:-translate-y-1 hover:bg-lime-100"
            >
              <Navigation size={20} /> Google Maps-এ খুলুন
            </Link>
          </div>
        </div>

        <div className="grid min-h-90 place-items-center overflow-hidden rounded-[2.5rem] border border-emerald-950/10 bg-[radial-gradient(circle_at_50%_40%,#bef264,transparent_35%),linear-gradient(135deg,#ecfccb,#ffffff)] p-8 text-center shadow-sm">
          <div>
            <div className="mx-auto grid size-28 place-items-center rounded-4xl bg-emerald-950 text-5xl shadow-2xl shadow-emerald-950/20 mango-float">
              📍
            </div>
            <h3 className="mt-8 text-3xl font-black text-emerald-950">
              ভুট্টো চত্বর
            </h3>
            <p className="mx-auto mt-3 max-w-sm leading-7 text-emerald-950/65">
              ম্যাপ লিংক ব্যবহার করে সহজে পিকআপ পয়েন্টে পৌঁছে যান।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-emerald-950 p-5 text-white shadow-2xl shadow-emerald-900/20 md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-4xl bg-white/10 p-6 ring-1 ring-white/10 md:p-8">
            <div>
              <p className="font-bold text-lime-300">পিকআপ লোকেশন</p>

              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                ভুট্টো চত্বর থেকে আম সংগ্রহ করুন
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                অর্ডার কনফার্ম করার পর নিচের ম্যাপ দেখে সহজে পিকআপ পয়েন্টে চলে
                আসুন।
              </p>

              <div className="mt-6 flex items-start gap-4 rounded-3xl bg-white p-5 text-emerald-950">
                <MapPin className="mt-1 shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-bold text-emerald-900/60">
                    ঠিকানা
                  </p>
                  <p className="text-xl font-black leading-8">
                    {siteConfig.pickupPoint}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-lime-300 px-6 py-4 font-extrabold text-emerald-950 transition hover:-translate-y-1 hover:bg-lime-200"
              >
                <Phone size={20} />
                কল করুন
              </Link>

              <Link
                href={siteConfig.pickupMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-extrabold text-emerald-950 transition hover:-translate-y-1 hover:bg-lime-50"
              >
                <MapPin size={20} />
                Google Map খুলুন
              </Link>
            </div>
          </div>

          <div className="min-h-90 overflow-hidden rounded-4xl bg-lime-100 shadow-2xl ring-1 ring-white/20 lg:min-h-130">
            <iframe
              title="Aam Ghor Pickup Location"
              src={siteConfig.pickupEmbedUrl}
              className="h-full min-h-90 w-full border-0 lg:min-h-130"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-black text-lime-700">FAQ</p>
          <h2 className="mt-3 text-4xl font-black text-emerald-950 sm:text-5xl">
            সাধারণ প্রশ্ন
          </h2>
        </div>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-4xl border border-emerald-950/10 bg-lime-50/50 p-6"
            >
              <div className="flex gap-4">
                <HelpCircle className="mt-1 shrink-0 text-lime-700" />
                <div>
                  <h3 className="text-xl font-black text-emerald-950">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-7 text-emerald-950/65">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0c2415] px-4 py-10 text-center text-sm text-white/60 sm:px-6 lg:px-8">
      <p className="font-bold">
        © {new Date().getFullYear()} {siteConfig.brandNameBn}. রাজশাহীর আম্রপালি
        আমের সহজ অর্ডার প্ল্যাটফর্ম।
      </p>
    </footer>
  );
}
