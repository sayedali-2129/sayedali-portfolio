import React, { useState } from "react";
import { SectionHeader } from "../SectionHeader";
import { Mail, MapPin, Github, Linkedin, Twitter, Share2, ArrowUpRight, Loader2, Instagram, X } from "lucide-react";
import { addContactEnqry } from "../../functions/contact";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await addContactEnqry({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      if (result) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
        <div className="p-12 lg:w-1/2 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

          <SectionHeader
            title="Get In Touch"
            subtitle="Let's build something extraordinary together."
          />
          <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
            I'm currently available for freelance opportunities and full-time positions. Let's discuss your next big project.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em] mb-1">Email</p>
                <p className="text-lg font-bold text-slate-900">sayedalipld@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em] mb-1">Location</p>
                <p className="text-lg font-bold text-slate-900">Remote / Global</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12 mb-4">
            {[
              { icon: Github, link: "https://github.com/sayedali-2129" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/sayed-ali-mh/" },
              { icon: Instagram, link: "https://www.instagram.com/sayed.ali.m.h_?igsh=MXN4dXhtZmJ5ang0Nw%3D%3D" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="p-12 lg:w-1/2 border-l border-slate-200/60 bg-white">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all shadow-sm"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all shadow-sm"
                  required
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Your Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white py-5 rounded-2xl font-black text-lg glow-shadow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${isSubmitting ? "bg-slate-400 cursor-not-allowed scale-[0.98]" : "bg-primary/90"
                }`}
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <Loader2 className="animate-spin" size={22} />
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={22} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
