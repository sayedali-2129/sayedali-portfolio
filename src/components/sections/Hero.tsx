import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import RotatingText from "./RotatingText";



export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="xl:text-[25px] md:text-[30px] text-[23px] text-on-surface-variant font-display font-semibold">
            Hey There,
          </h2>


          <h2 className="xl:text-[40px] flex gap-2 items-center pb-3 text-[30px] text-slate-900 font-extrabold font-display">
            I'm <RotatingText />
          </h2>

          <p className="md:text-lg text-sm font-display text-on-surface-variant max-w-lg mb-10 leading-relaxed">
            Crafting fluid, high-performance cross-platform experiences with Flutter. Transforming complex business logic into elegant, user-centric mobile applications.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {/* <a
              href="#contact"
              className="accent-gradient text-white px-4 md:px-8 py-2 md:py-4 rounded-xl font-bold text-base md:text-lg glow-shadow hover:translate-y-[2px] hover:scale-105 hover:shadow-primary/30 transition-all active:scale-95 flex items-center gap-2"
            >
              Hire Me
              <ArrowRight size={20} />
            </a> */}
            <a
              href="#projects"
              className="bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 hover:translate-y-[-2px] px-4 md:px-8 py-2 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all active:scale-95 shadow-sm shadow-slate-100 text-center"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-full order-1 md:order-2 md:h-[530px] h-72 pb-16 md:pb-0 pt-6 justify-center items-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,

            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/flutter-bird.png"
            alt="Flutter Developer"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};
