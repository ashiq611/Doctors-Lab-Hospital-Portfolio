
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export const Pharmacy: React.FC = () => {
  const { lang } = useLanguage();

  const categories =
    lang === "bn"
      ? ["অ্যান্টিবায়োটিক", "কার্ডিয়াক", "ডায়াবেটিক", "পেডিয়াট্রিক", "ওটিসি", "সার্জিকেল আইটেম"]
      : ["Antibiotics", "Cardiac", "Diabetic", "Pediatric", "OTC", "Surgical Items"];

  return (
    <>
      <Section>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">
              {lang === "bn" ? "ফার্মেসি (গ্রাউন্ড ফ্লোর)" : "Pharmacy (Ground Floor)"}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              {lang === "bn"
                ? "২৪/৭ ফার্মেসি সার্ভিস"
                : "24/7 Pharmacy Service"}
            </h1>
            <p className="text-sm text-slate-600">
              {lang === "bn"
                ? "হাসপাতালের গ্রাউন্ড ফ্লোরেই অবস্থিত আমাদের ফার্মেসি থেকে রোগীরা দ্রুত ও নিরাপদভাবে ওষুধ সংগ্রহ করতে পারেন।"
                : "Our pharmacy is located on the ground floor, providing quick and safe access to medicines."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 text-sm text-slate-600"
            >
              <h2 className="font-semibold text-slate-900 mb-2">
                {lang === "bn" ? "ফার্মেসি ফিচারস" : "Pharmacy Features"}
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  {lang === "bn"
                    ? "২৪/৭ খোলা থাকে, জরুরি ওষুধ সব সময় পাওয়া যায়।"
                    : "Open 24/7 with essential medicines always in stock."}
                </li>
                <li>
                  {lang === "bn"
                    ? "শুধুমাত্র অথেন্টিক ও ব্র্যান্ডেড ওষুধ বিক্রয়।"
                    : "Only authentic and branded medicines are dispensed."}
                </li>
                <li>
                  {lang === "bn"
                    ? "ডাক্তারের প্রেসক্রিপশন অনুযায়ী ওষুধ দেওয়া হয়।"
                    : "Medicines are provided strictly against valid prescriptions."}
                </li>
                <li>
                  {lang === "bn"
                    ? "হাসপাতালে ভর্তি রোগীদের জন্য বিশেষ ডিসকাউন্ট সুবিধা।"
                    : "Special discounts for in-house admitted patients."}
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 text-sm text-slate-600"
            >
              <h2 className="font-semibold text-slate-900 mb-2">
                {lang === "bn" ? "মেডিসিন ক্যাটাগরি" : "Medicine Categories"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {lang === "bn"
                  ? "নির্ভরযোগ্য ফার্মেসি টিম ও ওষুধ কাউন্সেলিং সুবিধা রয়েছে।"
                  : "Reliable pharmacy team with basic medicine counseling support."}
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};
