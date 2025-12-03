
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export const HospitalFeatures: React.FC = () => {
  const { lang } = useLanguage();

  const features = [
    {
      icon: "🚑",
      bnTitle: "২৪/৭ ইমার্জেন্সি ও আইসিইউ",
      enTitle: "24/7 Emergency & ICU",
      bnDesc: "দ্রুত রেসপন্স টিম ও আধুনিক আইসিইউ সুবিধা।",
      enDesc: "Rapid response team with modern ICU facilities.",
    },
    {
      icon: "🩺",
      bnTitle: "আধুনিক অপারেশন থিয়েটার",
      enTitle: "Modern Operation Theatres",
      bnDesc: "স্টেরাইল, মডুলার ও সুপরিকল্পিত সার্জারি সেটআপ।",
      enDesc: "Sterile, modular and well-equipped surgical setup.",
    },
    {
      icon: "🛏️",
      bnTitle: "ইনডোর ও প্রাইভেট কেবিন",
      enTitle: "In-patient Wards & Cabins",
      bnDesc: "পরিষ্কার-পরিচ্ছন্ন ও আরামদায়ক রোগী কেবিন।",
      enDesc: "Clean and comfortable in-patient cabins.",
    },
    {
      icon: "📱",
      bnTitle: "অনলাইন অ্যাপয়েন্টমেন্ট",
      enTitle: "Online Appointment System",
      bnDesc: "ফোন বা অনলাইনে সহজে বুকিং সিস্টেম।",
      enDesc: "Easy booking via phone or online.",
    },
    {
      icon: "🤝",
      bnTitle: "নার্সিং কেয়ার ও কাউন্সেলিং",
      enTitle: "Nursing Care & Support",
      bnDesc: "অভিজ্ঞ নার্সিং টিম ও পেশেন্ট কাউন্সেলিং।",
      enDesc: "Experienced nursing team with patient counseling.",
    },
  ];

  const timelineSteps =
    lang === "bn"
      ? [
          "চেক-ইন",
          "কনসালটেশন",
          "ডায়াগনসিস",
          "ট্রিটমেন্ট",
          "ফলো-আপ",
        ]
      : ["Check-in", "Consultation", "Diagnosis", "Treatment", "Follow-up"];

  return (
    <>
      <Section>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">
              {lang === "bn" ? "হাসপাতাল ফিচারস" : "Hospital Features"}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              {lang === "bn"
                ? "একই স্থানে সম্পূর্ণ চিকিৎসা সুবিধা"
                : "Complete Hospital Facilities in One Place"}
            </h1>
            <p className="text-sm text-slate-600">
              {lang === "bn"
                ? "ইমার্জেন্সি থেকে ফলো-আপ পর্যন্ত রোগীর সব প্রয়োজনকে আমরা গুরুত্ব দেই।"
                : "From emergency to follow-up, we cover the entire patient journey."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <motion.div
                key={f.enTitle}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 flex flex-col gap-2"
              >
                <div className="text-2xl">{f.icon}</div>
                <h3 className="font-semibold text-slate-900">
                  {lang === "bn" ? f.bnTitle : f.enTitle}
                </h3>
                <p className="text-sm text-slate-600">
                  {lang === "bn" ? f.bnDesc : f.enDesc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
              {lang === "bn"
                ? "রোগী জার্নি (স্টেপ বাই স্টেপ)"
                : "Patient Journey (Step by Step)"}
            </h2>
            <p className="text-sm text-slate-600">
              {lang === "bn"
                ? "রোগী এসে কীভাবে সেবা পাবেন তার সহজ ধাপ।"
                : "Simple steps to guide patients through our services."}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                </div>
                <span className="text-sm font-medium text-slate-800">
                  {step}
                </span>
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-brand/40 to-transparent ml-2" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center">
            <div className="rounded-xl bg-white shadow-sm border border-slate-100 p-3">
              <p className="text-lg font-bold text-brand">50+</p>
              <p className="text-xs text-slate-600">
                {lang === "bn" ? "ডাক্তার" : "Doctors"}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-slate-100 p-3">
              <p className="text-lg font-bold text-brand">10+</p>
              <p className="text-xs text-slate-600">
                {lang === "bn" ? "ডিপার্টমেন্ট" : "Departments"}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-slate-100 p-3">
              <p className="text-lg font-bold text-brand">24/7</p>
              <p className="text-xs text-slate-600">
                {lang === "bn" ? "সেবা" : "Service"}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-slate-100 p-3">
              <p className="text-lg font-bold text-brand">3</p>
              <p className="text-xs text-slate-600">
                {lang === "bn" ? "মডার্ন OT" : "Modern OTs"}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-slate-100 p-3">
              <p className="text-lg font-bold text-brand">30+</p>
              <p className="text-xs text-slate-600">
                {lang === "bn" ? "ক্যাবিন" : "Cabins"}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm border border-slate-100 p-3">
              <p className="text-lg font-bold text-brand">100+</p>
              <p className="text-xs text-slate-600">
                {lang === "bn" ? "ডেইলি টেস্ট" : "Daily Tests"}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
