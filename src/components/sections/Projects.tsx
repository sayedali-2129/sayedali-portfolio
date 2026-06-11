"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { PROJECTS } from "../../data/portfolio";
import { getProjects } from "../../data/projectSlice";
import { Project } from "../../types";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetched: Project[] = await getProjects();
        if (fetched && fetched.length > 0) {
          const enabledSorted = fetched
            .filter((p) => p.enabled)
            .sort((a, b) => a.index - b.index);
          setProjects(enabledSorted);
        } else {
          // Fallback if no projects exist in Firebase yet
          const fallback = PROJECTS.filter((p) => p.enabled).sort((a, b) => a.index - b.index);
          setProjects(fallback);
        }
      } catch (error) {
        console.error("Error fetching projects from Firebase, falling back to local:", error);
        const fallback = PROJECTS.filter((p) => p.enabled).sort((a, b) => a.index - b.index);
        setProjects(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="Portfolio"
          subtitle="Featured Projects"
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="glass-card rounded-[2.5rem] overflow-hidden animate-pulse h-[480px] flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-slate-200/60" />
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="h-7 bg-slate-200/80 rounded-md w-3/4" />
                    <div className="h-4 bg-slate-200/60 rounded-md w-1/2" />
                    <div className="space-y-2 pt-2">
                      <div className="h-4 bg-slate-200/40 rounded-md w-full" />
                      <div className="h-4 bg-slate-200/40 rounded-md w-5/6" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="flex flex-wrap gap-2">
                      <div className="h-6 w-16 bg-slate-200/60 rounded-md" />
                      <div className="h-6 w-16 bg-slate-200/60 rounded-md" />
                      <div className="h-6 w-16 bg-slate-200/60 rounded-md" />
                    </div>
                    <div className="flex gap-6 border-t border-slate-100/80 pt-6">
                      <div className="h-4 w-20 bg-slate-200/60 rounded-md" />
                      <div className="h-4 w-20 bg-slate-200/60 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-[2.5rem] overflow-hidden group hover:translate-y-[-10px] transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-display text-slate-900">{project.title}</h3>
                  <h4 className="text-sm font-display text-slate-900 mb-2">Collaborated with {project.collaboratedWith}</h4>
                  <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 border-t border-slate-100/80 pt-6 mt-4">
                    {project.playstoreLink && (
                      <a
                        href={project.playstoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-bold text-xs uppercase tracking-wider transition-colors group/play"
                      >
                        Play Store
                        <ArrowRight size={14} className="group-hover/play:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                    {project.appstoreLink && (
                      <a
                        href={project.appstoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-bold text-xs uppercase tracking-wider transition-colors group/app"
                      >
                        App Store
                        <ArrowRight size={14} className="group-hover/app:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
