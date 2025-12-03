
import React from "react";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export const Contact: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-dark mb-2">
            {lang === "bn" ? "অ্যাপয়েন্টমেন্ট" : "Appointment"}
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            {lang === "bn"
              ? "অ্যাপয়েন্টমেন্ট বা তথ্যের জন্য যোগাযোগ করুন"
              : "Book an Appointment or Contact Us"}
          </h1>
          <p className="text-sm text-slate-600 mb-4">
            {lang === "bn"
              ? "নিচের ফর্মটি পূরণ করে আপনার সমস্যার সংক্ষিপ্ত বর্ণনা লিখুন। আমাদের কল সেন্টার থেকে আপনার সাথে যোগাযোগ করা হবে (ডেমো ফর্ম, ডেটা সাবমিট হবে না)।"
              : "Fill up the form below with a short description of your problem. Our call center will contact you (demo form, no data is actually submitted)."}
          </p>

          <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 text-sm text-slate-600">
            <h2 className="font-semibold text-slate-900 mb-2">
              {lang === "bn" ? "হটলাইন ও ঠিকানা" : "Hotline & Address"}
            </h2>
            <p>
              {lang === "bn" ? "হটলাইন: " : "Hotline: "} 106XX, +8801985-116815
            </p>
            <p>
              Email: info@doctorslab.com
            </p>
            <p className="mt-2">
              {lang === "bn"
                ? "লোকেশন: কাজলার পার, যাত্রাবাড়ী, ঢাকা"
                : "Location: Near Kajla, Demra Highway, Jatrabari, Dhaka"}
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4">
            {/* 
              IMPORTANT: Please replace the following src with your own Google Form link.
              To get the correct link, go to your Google Form, click "Send",
              go to the "<>" (Embed) tab, and copy the src from the iframe code.
            */}
            <iframe
              src="https://forms.gle/VeB8ewCkDY2ddsN67"
              width="100%"
              height="800"
              title="Appointment Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};
