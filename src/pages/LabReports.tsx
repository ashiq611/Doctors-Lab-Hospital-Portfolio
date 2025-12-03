
import React from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export const LabReports: React.FC = () => {
  const { lang } = useLanguage();

  const tests =
    lang === "bn"
      ? ["ব্লাড টেস্ট", "ইউরিন টেস্ট", "এক্স-রে", "আল্ট্রাসনোগ্রাফি (USG)", "CT স্ক্যান", "MRI"]
      : ["Blood Tests", "Urine Test", "X-ray", "Ultrasonography (USG)", "CT Scan", "MRI"];

  const steps =
    lang === "bn"
      ? [
          "১) টেস্ট বুকিং",
          "২) স্যাম্পল কালেকশন",
          "৩) ল্যাব প্রসেসিং",
          "৪) রিপোর্ট রেডি",
          "৫) ডাউনলোড / প্রিন্ট",
        ]
      : [
          "1) Test Booking",
          "2) Sample Collection",
          "3) Lab Processing",
          "4) Report Ready",
          "5) Download / Print",
        ];

  return (
    <>
      <Section>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">
              {lang === "bn" ? "ডায়াগনস্টিক ল্যাব" : "Diagnostic Lab"}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              {lang === "bn"
                ? "আধুনিক ডায়াগনস্টিক ও রিপোর্ট সুবিধা"
                : "Modern Diagnostic & Report System"}
            </h1>
            <p className="text-sm text-slate-600">
              {lang === "bn"
                ? "আমাদের ল্যাব নির্ভুল ও সময়মতো রিপোর্ট প্রদানের জন্য ডিজাইন করা।"
                : "Our lab is designed to provide accurate and timely reports."}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">
              {lang === "bn" ? "ল্যাব সার্ভিসসমূহ" : "Lab Services"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {tests.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[2fr,3fr] items-start">
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 text-sm text-slate-600">
              <h3 className="font-semibold text-slate-900 mb-2">
                {lang === "bn" ? "রিপোর্ট ডেলিভারি সিস্টেম" : "Report Delivery System"}
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  {lang === "bn"
                    ? "স্যাম্পল কালেকশনের পর টেস্ট অনুযায়ী আনুমানিক সময় জানিয়ে দেওয়া হয়।"
                    : "Approximate delivery time is shared after sample collection."}
                </li>
                <li>
                  {lang === "bn"
                    ? "রিপোর্ট প্রস্তুত হলে এসএমএস নোটিফিকেশন পাঠানো হয় (ডেমো)।"
                    : "SMS notification is sent when the report is ready (static info)."}
                </li>
                <li>
                  {lang === "bn"
                    ? "রিপোর্ট কাউন্টার থেকে প্রিন্ট কপি বা অনলাইনে ডাউনলোড সুবিধা (স্ট্যাটিক বর্ণনা)।"
                    : "Patients can collect printed copy or download online (static description)."}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">
                {lang === "bn"
                  ? "স্টেপ-বেইজড রিপোর্ট প্রসেস"
                  : "Step-based Report Process"}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-xl bg-white border border-slate-100 shadow-sm p-3 text-sm"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-7 w-7 rounded-full bg-brand text-white flex items-center justify-center text-xs font-semibold">
                        {idx + 1}
                      </div>
                      <p className="font-medium text-slate-900">{step}</p>
                    </div>
                    <p className="text-xs text-slate-600">
                      {lang === "bn"
                        ? "প্রতিটি ধাপই রোগীর সুবিধা ও নিরাপত্তা নিশ্চিত করার জন্য ডিজাইন করা।"
                        : "Each step is designed to ensure patient comfort and safety."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
