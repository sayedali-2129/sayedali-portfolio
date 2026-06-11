import { motion } from "motion/react";
import { SectionHeader } from "../SectionHeader";
import { EXPERIENCES } from "../../data/portfolio";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="Career Journey"
          subtitle="Work Experience"
          center
        />
        <div className="relative space-y-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-slate-200 ml-4">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="relative pl-12 group">
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.3)]" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-[2rem]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold font-display text-slate-900">{exp.role}</h3>
                  <span className="text-primary font-bold text-sm">{exp.period}</span>
                </div>
                <p className="text-lg font-semibold text-on-surface-variant mb-6">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-on-surface-variant/80 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
