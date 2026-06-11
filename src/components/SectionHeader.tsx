"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export const SectionHeader = ({ title, subtitle, center = false }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">{title}</p>
    <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 tracking-tight">{subtitle}</h2>
  </motion.div>
);
