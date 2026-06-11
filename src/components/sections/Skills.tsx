import { motion } from "motion/react";
import { SectionHeader } from "../SectionHeader";
import { SKILLS } from "../../data/portfolio";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface-container-lowest/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="My Expertise"
          subtitle="Technical Proficiency"
          center
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-primary/50 transition-all group hover:translate-y-[-5px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center relative">
                {skill.iconBlue || skill.iconWhite ? (
                  <>
                    {skill.iconBlue && (
                      <img
                        src={skill.iconBlue}
                        alt={skill.name}
                        className="w-8 h-8 object-contain transition-opacity duration-300 group-hover:opacity-0 absolute"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {skill.iconWhite && (
                      <img
                        src={skill.iconWhite}
                        alt={skill.name}
                        className="w-8 h-8 object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </>
                ) : (
                  <skill.icon size={32} />
                )}
              </div>
              <span className="font-bold text-sm tracking-wide text-slate-800">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
