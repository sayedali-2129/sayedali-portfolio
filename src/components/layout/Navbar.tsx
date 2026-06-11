import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Moon } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo.png");
  const [useFallbackLogo, setUseFallbackLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
            ? "bg-white/80 backdrop-blur-2xl border-slate-200/50 py-4 shadow-sm"
            : "bg-white/40 backdrop-blur-md border-slate-200/20 py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-10 w-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center relative z-10 group-hover:scale-105 transition-all shadow-sm shadow-slate-200/50 overflow-hidden">
                {!useFallbackLogo ? (
                  <img
                    src={logoSrc}
                    alt="Sayed Ali Logo"
                    className="h-8 w-8 object-contain"
                    onError={() => {
                      if (logoSrc === "/logo.png") {
                        setLogoSrc("/logo.svg");
                      } else if (logoSrc === "/logo.svg") {
                        setLogoSrc("/logo.jpg");
                      } else {
                        setUseFallbackLogo(true);
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xs tracking-tighter">
                    SA
                  </div>
                )}
              </div>
            </div>
            <span className="text-slate-900 font-bold text-sm tracking-widest ml-2 hidden sm:block">SAYED ALI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-all font-semibold text-xs uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4 border-l border-slate-200 pl-8">

              <a
                href="https://drive.google.com/file/d/1TwxGYxeh7a1-TOda_niyASSa-XloFY-x/view?usp=sharing"
                download="Sayed Ali MH CV.pdf"
                className="bg-primary hover:bg-primary/95 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                Resume
              </a>
            </div>
          </div>

          <button className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1TwxGYxeh7a1-TOda_niyASSa-XloFY-x/view?usp=sharing"
              className="accent-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl"
            // onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
