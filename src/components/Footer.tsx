import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80">
      <div className="section-container py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold mb-2">
            {lang === "bn" ? "হাসপাতালের ঠিকানা" : "Hospital Address"}
          </h3>
          <p className="text-slate-600">
            {lang === "bn"
              ? "ডক্টর'স ল্যাব অ্যান্ড হাসপাতাল"
              : "Doctors's Lab & Hospital"}
            <br />
            {lang === "bn"
              ? "কাজলার পার, যাত্রাবাড়ী, ঢাকা"
              : "Near Kajla, Jatrabari, Dhaka"}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            {lang === "bn" ? "যোগাযোগ" : "Contact"}
          </h3>
          <p className="text-slate-600">
            {lang === "bn" ? "ফোন:" : "Phone:"} +8801985-116815
            <br />
            Email: info@doctorslab.com
          </p>
          <p className="mt-2 text-slate-500 text-xs">
            {lang === "bn"
              ? "মানচিত্র: কাজলা, যাত্রাবাড়ী, ঢাকা সংলগ্ন এলাকায় অবস্থিত।"
              : "Map: Located near Kajla, Demra Highway, Jatrabari, Dhaka area."}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            {lang === "bn" ? "সোশ্যাল মিডিয়া" : "Social Media"}
          </h3>
          <div className="flex gap-3 text-slate-600">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} CarePlus Hospital.{" "}
            {lang === "bn" ? "সকল অধিকার সংরক্ষিত।" : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};