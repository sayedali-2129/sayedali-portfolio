import { motion } from "motion/react";
import { SectionHeader } from "../SectionHeader";
import { SERVICES } from "../../data/portfolio";

export const Services = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="What I Do"
          subtitle="Professional Services"
          center
        />
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2.5rem] border-b-4 border-b-primary hover:bg-primary/5 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
