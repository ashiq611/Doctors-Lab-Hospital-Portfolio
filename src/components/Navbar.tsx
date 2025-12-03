import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const navItems = [
  { path: "/", key: "home" },
  { path: "/doctors", key: "doctors" },
  { path: "/features", key: "features" },
  { path: "/lab-reports", key: "lab" },
  { path: "/pharmacy", key: "pharmacy" },
  { path: "/contact", key: "contact" },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const labels: Record<string, { bn: string; en: string }> = {
    home: { bn: "হোম", en: "Home" },
    doctors: { bn: "ডাক্তার তালিকা", en: "Doctors" },
    features: { bn: "হাসপাতাল ফিচারস", en: "Hospital Features" },
    lab: { bn: "ল্যাব ও রিপোর্ট", en: "Lab & Reports" },
    pharmacy: { bn: "ফার্মেসি", en: "Pharmacy" },
    contact: { bn: "যোগাযোগ", en: "Contact" },
  };

  return (
    <nav className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-30">
      <div className="section-container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/DoctorsLab/logo.png" alt="Logo" className="h-9 w-9" />
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">
              {lang === "bn"
                ? "ডক্টর'স ল্যাব অ্যান্ড হাসপাতাল"
                : "Doctors's Lab & Hospital"}
            </p>
            <p className="text-xs text-slate-500">
              {lang === "bn"
                ? "হাসপাতাল, ডায়াগনস্টিক ও ফার্মেসি"
                : "Hospital • Diagnostics • Pharmacy"}
            </p>
          </div>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 px-2 py-1 text-sm"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-brand" : "text-slate-600 hover:text-brand"
                }`
              }
            >
              {labels[item.key][lang]}
            </NavLink>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs font-semibold border rounded-full px-3 py-1 bg-slate-50 hover:bg-brand hover:text-white transition"
          >
            {lang === "bn" ? "EN" : "বাংলা"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="section-container flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-1 ${
                    isActive ? "text-brand" : "text-slate-700"
                  }`
                }
              >
                {labels[item.key][lang]}
              </NavLink>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setOpen(false);
              }}
              className="mt-2 text-xs font-semibold border rounded-full px-3 py-1 w-fit bg-slate-50"
            >
              {lang === "bn" ? "Switch to English" : "বাংলায় দেখুন"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};