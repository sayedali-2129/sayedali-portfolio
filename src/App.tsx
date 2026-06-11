/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { ExperienceSection } from "./components/sections/Experience";
import { ProjectsSection } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/20 relative overflow-x-hidden">
      <ToastContainer aria-label="Notification Container" position="bottom-right" autoClose={5000} hideProgressBar={false} theme="colored" />
      {/* Background Orbs */}
      <div className="bg-orb top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/10" />
      <div className="bg-orb bottom-[10%] right-[-100px] w-[600px] h-[600px] bg-secondary-container/10" />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
