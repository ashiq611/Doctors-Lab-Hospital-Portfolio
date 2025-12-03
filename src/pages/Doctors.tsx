
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  specialtyBn: string;
  qualification: string;
  visitingHours: string;
  visitingHoursBn: string;
  bio: string;
  bioBn: string;
  tags: string[];
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Md. Rahat Hasan",
    specialty: "Cardiologist",
    specialtyBn: "কার্ডিওলজিস্ট",
    qualification: "MBBS, FCPS (Cardiology)",
    visitingHours: "Sat–Thu: 5:00 PM – 9:00 PM",
    visitingHoursBn: "শনি–বৃহঃ: বিকাল ৫টা – রাত ৯টা",
    bio: "Heart disease, hypertension and chest pain specialist.",
    bioBn: "হৃদরোগ, উচ্চ রক্তচাপ ও বুকে ব্যথা বিশেষজ্ঞ।",
    tags: ["Cardiology"],
  },
  {
    id: 2,
    name: "Dr. Nusrat Jahan",
    specialty: "Medicine Specialist",
    specialtyBn: "মেডিসিন বিশেষজ্ঞ",
    qualification: "MBBS, MD (Internal Medicine)",
    visitingHours: "Sat–Wed: 4:00 PM – 8:00 PM",
    visitingHoursBn: "শনি–বুধ: বিকাল ৪টা – রাত ৮টা",
    bio: "Internal medicine, diabetes and long-term care.",
    bioBn: "ইন্টারনাল মেডিসিন, ডায়াবেটিস ও দীর্ঘমেয়াদি রোগ ব্যবস্থাপনা।",
    tags: ["Medicine"],
  },
  {
    id: 3,
    name: "Dr. Tanvir Alam",
    specialty: "Orthopedic Surgeon",
    specialtyBn: "অর্থোপেডিক সার্জন",
    qualification: "MBBS, MS (Ortho)",
    visitingHours: "Sun–Thu: 6:00 PM – 9:30 PM",
    visitingHoursBn: "রবি–বৃহঃ: সন্ধ্যা ৬টা – রাত ৯.৩০টা",
    bio: "Bone, joint and trauma surgery specialist.",
    bioBn: "হাড়, গিঁট ও আঘাতজনিত সার্জারির বিশেষজ্ঞ।",
    tags: ["Orthopedic"],
  },
  {
    id: 4,
    name: "Dr. Shefali Bahar",
    specialty: "Gynecologist & Obstetrician",
    specialtyBn: "গাইনী ও প্রসূতি বিশেষজ্ঞ",
    qualification: "MBBS, FCPS (Gyne & Obs)",
    visitingHours: "Sat–Thu: 3:00 PM – 7:00 PM",
    visitingHoursBn: "শনি–বৃহঃ: বিকাল ৩টা – সন্ধ্যা ৭টা",
    bio: "Women health, pregnancy and infertility management.",
    bioBn: "নারীস্বাস্থ্য, গর্ভকালীন সেবা ও বন্ধ্যাত্ব চিকিৎসায় অভিজ্ঞ।",
    tags: ["Gynecology"],
  },
];

const filters = [
  { key: "all", labelBn: "সব", labelEn: "All" },
  { key: "Cardiology", labelBn: "কার্ডিওলজি", labelEn: "Cardiology" },
  { key: "Medicine", labelBn: "মেডিসিন", labelEn: "Medicine" },
  { key: "Orthopedic", labelBn: "অর্থোপেডিক", labelEn: "Orthopedic" },
  { key: "Gynecology", labelBn: "গাইনী", labelEn: "Gynecology" },
];

export const Doctors: React.FC = () => {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredDoctors =
    activeFilter === "all"
      ? doctors
      : doctors.filter((doc) => doc.tags.includes(activeFilter));

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">
              {lang === "bn" ? "ডাক্তার তালিকা" : "Our Doctors"}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-1">
              {lang === "bn"
                ? "স্পেশালিস্ট ডাক্তার প্যানেল"
                : "Specialist Doctor Panel"}
            </h1>
            <p className="text-sm text-slate-600">
              {lang === "bn"
                ? "বিশেষায়িত বিভাগভিত্তিক অভিজ্ঞ চিকিৎসক দ্বারা সেবা প্রদান করা হয়।"
                : "Experienced consultants across multiple specialties ready to serve you."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition ${
                  activeFilter === f.key
                    ? "bg-brand text-white border-brand"
                    : "bg-white border-slate-200 text-slate-700 hover:border-brand/50"
                }`}
              >
                {lang === "bn" ? f.labelBn : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doc) => (
            <motion.div
              key={doc.id}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-slate-900">{doc.name}</h3>
                  <p className="text-sm text-brand font-medium">
                    {lang === "bn" ? doc.specialtyBn : doc.specialty}
                  </p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-brand/10 text-brand">
                  {lang === "bn" ? "বিশেষজ্ঞ" : "Consultant"}
                </span>
              </div>
              <p className="text-xs text-slate-600">{doc.qualification}</p>
              <p className="text-xs text-slate-600">
                <span className="font-semibold">
                  {lang === "bn" ? "ভিজিটিং আওয়ার: " : "Visiting Hours: "}
                </span>
                {lang === "bn" ? doc.visitingHoursBn : doc.visitingHours}
              </p>
              <p className="text-sm text-slate-600">
                {lang === "bn" ? doc.bioBn : doc.bio}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {doc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
