import { motion } from "motion/react";
import { SectionHeader } from "../SectionHeader";

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group max-w-md mx-auto w-full lg:max-w-sm"
          >
            <div className="absolute -inset-4 accent-gradient opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity" />
            <img
              src="/profile.png"
              alt="Profile"
              className="rounded-3xl w-full aspect-square object-cover border-4 border-white filter grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </motion.div>

          <div>
            <SectionHeader
              title="About Me"
              subtitle="Passion for Precision, Code for Impact"
            />
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              I am a dedicated Flutter Developer with a sharp eye for detail and a commitment to creating seamless user interfaces. My journey in mobile development is fueled by the desire to build apps that don't just work, but feel effortless to use.
            </p>
            <p className="text-on-surface-variant/80 mb-10 leading-relaxed font-normal">
              With over 2+ years of experience in mobile engineering, I specialize in Flutter and Dart, transforming complex business logic into fluid, high-fidelity user interfaces.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-2xl text-center">
                <p className="text-primary text-4xl font-black mb-1">2+</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Years Exp</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <p className="text-primary text-4xl font-black mb-1">15+</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Apps Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
