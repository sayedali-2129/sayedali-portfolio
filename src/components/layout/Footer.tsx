export const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/50">
        <p>© 2026 Sayed Ali MH. Built with Flutter Precision.</p>
        {/* <div className="flex gap-10">
          <a href="#" className="hover:text-primary transition-colors">Github</a>
          <a href="#" className="hover:text-primary transition-colors">Linkedin</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Email</a>
        </div> */}
      </div>
    </footer>
  );
};
