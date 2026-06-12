export const siteConfig = {
  name: "আম ঘর",
  title: "আম ঘর",
  brandNameBn: "আম ঘর",
  tagline: "রাজশাহীর আম এখন আরও সহজে",
  phone: "01705009705",
  displayPhone: "০১৭০৫০০৯৭০৫",
  pickupPoint: "ভুট্টো চত্বর, ডেমরা, ঢাকা",
  pickupDetails:
    "ভুট্টো চত্বর, হাজী বাদশা মিয়াঁ রোড, ডগাইর পশ্চিম পাড়া, ডেমরা, ঢাকা।",
  pickupMapUrl: "https://maps.app.goo.gl/RtZGWmtdKXocmC746",
  pickupEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.277804445293!2d90.47500169999999!3d23.7017715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7004e95cbdf%3A0x889983e63ef313ea!2z4Kat4KeB4Kaf4KeN4Kaf4KeLIOCmmuCmpOCnjeCmrOCmsCBWdXR0byBDaGF0dGFy!5e0!3m2!1sen!2sbd!4v1781244807662!5m2!1sen!2sbd",
  minOrder: "৫ কেজি",
  price: "১৩০",
  priceLabel: "৳১৩০ / কেজি",
  whatsappUrl:
    "https://wa.me/8801705009705?text=%E0%A6%86%E0%A6%B8%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%20%E0%A6%86%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%81%E0%A6%AE%2C%20%E0%A6%86%E0%A6%AE%20%E0%A6%98%E0%A6%B0%20%E0%A6%A5%E0%A7%87%E0%A6%95%E0%A7%87%20%E0%A6%86%E0%A6%AE%E0%A7%8D%E0%A6%B0%E0%A6%AA%E0%A6%BE%E0%A6%B2%E0%A6%BF%20%E0%A6%86%E0%A6%AE%20%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BE%E0%A6%B0%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
};

export const navItems = [
  { label: "প্যাকেজ", href: "#products" },
  { label: "অর্ডার", href: "#how" },
  // { label: "লোকেশন", href: "#pickup" },
  { label: "যোগাযোগ", href: "#contact" },
];

export const trustStats = [
  { value: "রাজশাহী", label: "সোর্সিং এরিয়া" },
  { value: "৫ কেজি", label: "সর্বনিম্ন অর্ডার" },
  { value: "৳১৩০", label: "প্রতি কেজি" },
];

export const features = [
  {
    title: "প্রিমিয়াম আম্রপালি",
    description:
      "মিষ্টি, রসালো ও সুগন্ধি আম্রপালি — পরিবার, অফিস বা গিফটিংয়ের জন্য পারফেক্ট।",
  },
  {
    title: "পরিষ্কার দাম",
    description:
      "লুকানো চার্জ নেই। প্রতি কেজি ১৩০ টাকা, সর্বনিম্ন অর্ডার ৫ কেজি।",
  },
  {
    title: "ভেরিফায়েড পিকআপ",
    description:
      "অর্ডার কনফার্ম করে নির্দিষ্ট লোকেশন থেকে সহজে আম সংগ্রহ করুন।",
  },
];

export const products = [
  {
    name: "স্ট্যান্ডার্ড অর্ডার",
    price: "৳১৩০/কেজি",
    unit: "সর্বনিম্ন ৫ কেজি",
    badge: "জনপ্রিয়",
    description: "নিজের বাসা বা পরিবারের জন্য তাজা আম্রপালি অর্ডার করুন।",
    items: ["রাজশাহীর আম্রপালি", "ফোনে কনফার্মেশন", "পিকআপ ভিত্তিক সংগ্রহ"],
  },
  {
    name: "ফ্যামিলি প্যাক",
    price: "৳৬৫০",
    unit: "৫ কেজি",
    badge: "বেস্ট ভ্যালু",
    description:
      "ছোট পরিবার, বন্ধু বা ট্রায়াল অর্ডারের জন্য সবচেয়ে সহজ প্যাকেজ।",
    items: ["৫ কেজি আম", "সহজ পিকআপ", "একই দামে সেরা মান"],
  },
  {
    name: "বাল্ক অর্ডার",
    price: "কল করুন",
    unit: "১০ কেজি+",
    badge: "অফিস/গিফট",
    description:
      "অফিস, অনুষ্ঠান বা গিফটিংয়ের জন্য বড় অর্ডারের আগে ফোনে কথা বলুন।",
    items: ["কাস্টম পরিমাণ", "আগে থেকে বুকিং", "অর্ডার অনুযায়ী প্রস্তুতি"],
  },
];

export const steps = [
  {
    title: "পরিমাণ নির্বাচন",
    description: "কমপক্ষে ৫ কেজি বা প্রয়োজন অনুযায়ী প্যাকেজ নির্বাচন করুন।",
  },
  {
    title: "ফোনে কনফার্ম",
    description: "০১৭০৫০০৯৭০৫ নম্বরে কল করে দাম, সময় ও পরিমাণ নিশ্চিত করুন।",
  },
  {
    title: "লোকেশন থেকে সংগ্রহ",
    description: "ভুট্টো চত্বর পিকআপ পয়েন্ট থেকে আপনার অর্ডার সংগ্রহ করুন।",
  },
];

export const faqs = [
  {
    question: "হোম ডেলিভারি আছে?",
    answer:
      "বর্তমানে পিকআপ ভিত্তিক অর্ডার নেওয়া হচ্ছে। পিকআপ পয়েন্ট: ভুট্টো চত্বর, ডেমরা, ঢাকা।",
  },
  {
    question: "সর্বনিম্ন কত কেজি অর্ডার করতে হবে?",
    answer: "সর্বনিম্ন ৫ কেজি অর্ডার করতে হবে।",
  },
  {
    question: "অর্ডার কীভাবে কনফার্ম করব?",
    answer: "ফোন বা WhatsApp-এ যোগাযোগ করে পরিমাণ ও পিকআপ সময় কনফার্ম করুন।",
  },
];
