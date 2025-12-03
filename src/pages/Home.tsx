import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";



export const Home: React.FC = () => {
  const { lang } = useLanguage();

  const slides = [
    {
      src: "/DoctorsLab/hospital_front_pic.webp",
      alt: "Hospital Front",
    },
    {
      src: "/DoctorsLab/Shefali.jpeg",
      alt: "Shefali",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const cards = [
    {
      key: "hospital",
      icon: "🏥",
      bnTitle: "হাসপাতাল",
      enTitle: "Hospital",
      bnDesc: "ইনডোর, আউটডোর এবং জরুরি সেবা একত্রে।",
      enDesc: "Indoor, outdoor and emergency services together.",
    },
    {
      key: "doctors",
      icon: "👨‍⚕️",
      bnTitle: "ডাক্তার",
      enTitle: "Doctors",
      bnDesc: "বিশ্বস্ত স্পেশালিস্ট ও অভিজ্ঞ চিকিৎসক দল।",
      enDesc: "Trusted specialists and experienced consultants.",
    },
    {
      key: "lab",
      icon: "🧪",
      bnTitle: "ডায়াগনস্টিক ল্যাব",
      enTitle: "Diagnostic Lab",
      bnDesc: "আধুনিক ল্যাবে সঠিক ও দ্রুত রিপোর্ট।",
      enDesc: "Modern lab with accurate & fast reports.",
    },
    {
      key: "pharmacy",
      icon: "💊",
      bnTitle: "ফার্মেসি (গ্রাউন্ড ফ্লোর)",
      enTitle: "Pharmacy (Ground Floor)",
      bnDesc: "২৪/৭ ফার্মেসি, নকলবিহীন নির্ভরযোগ্য ওষুধ।",
      enDesc: "24/7 pharmacy with authentic medicines.",
    },
  ];

  return (
    <div>
      <Section>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <motion.p
              className="text-xs uppercase tracking-[0.25em] text-brand-dark mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {lang === "bn"
                ? "হাসপাতাল • ল্যাব • ফার্মেসি"
                : "Hospital • Lab • Pharmacy"}
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {lang === "bn"
                ? "ডক্টর'স ল্যাব অ্যান্ড হাসপাতাল"
                : "Doctors's Lab & Hospital"}
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-slate-600 mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {lang === "bn"
                ? "কমপ্লিট কেয়ার: হাসপাতাল, ডায়াগনস্টিক ল্যাব ও ফার্মেসি এক ছাদের নিচে।"
                : "Complete care: hospital, diagnostic lab & pharmacy under one roof."}
            </motion.p>
            <motion.p
              className="text-sm text-slate-500 mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {lang === "bn"
                ? "লোকেশন: কাজলা, যাত্রাবাড়ী সংলগ্ন, ঢাকা"
                : "Location: Near Kajla, Jatrabari, Dhaka"}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand text-white text-sm font-semibold shadow-sm hover:bg-brand-dark transition"
              >
                {lang === "bn" ? "অ্যাপয়েন্টমেন্ট বুক করুন" : "Book Appointment"}
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-brand/40 text-brand text-sm font-semibold bg-white hover:bg-brand/5 transition"
              >
                {lang === "bn" ? "ডাক্তার দেখুন" : "View Doctors"}
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="relative h-64 md:h-80 rounded-3xl shadow-lg overflow-hidden">
              {slides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-white to-emerald-100 opacity-50" />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <button
                onClick={prevSlide}
                className="bg-white/50 hover:bg-white/80 text-slate-900 p-2 rounded-full shadow-md"
              >
                &lt;
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
              <button
                onClick={nextSlide}
                className="bg-white/50 hover:bg-white/80 text-slate-900 p-2 rounded-full shadow-md"
              >
                &gt;
              </button>
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-2xl bg-white shadow-md p-4 w-48 z-10">
              <p className="text-xs font-semibold text-slate-600">
                {lang === "bn"
                  ? "২৪/৭ এমার্জেন্সি সার্ভিস"
                  : "24/7 Emergency Service"}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {lang === "bn"
                  ? "অভিজ্ঞ ডাক্তার ও নার্সিং টিম প্রস্তুত।"
                  : "Experienced doctors & nursing team on call."}
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            {lang === "bn"
              ? "আমাদের মূল ইউনিটসমূহ"
              : "Our Main Service Units"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <motion.div
                key={card.key}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl bg-slate-50 border border-slate-100 shadow-sm p-4 flex flex-col gap-2"
              >
                <div className="text-2xl">{card.icon}</div>
                <h3 className="font-semibold text-slate-900">
                  {lang === "bn" ? card.bnTitle : card.enTitle}
                </h3>
                <p className="text-sm text-slate-600">
                  {lang === "bn" ? card.bnDesc : card.enDesc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};