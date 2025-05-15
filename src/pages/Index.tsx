
import { useState } from "react";
import { IntroVideo } from "@/components/IntroVideo";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/components/sections/Home";
import { Services } from "@/components/sections/Services";
import { Events } from "@/components/sections/Events";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <div className="relative">
      {/* Intro Video */}
      {!introCompleted && (
        <IntroVideo onIntroComplete={() => setIntroCompleted(true)} />
      )}

      {/* Navbar */}
      <Navbar introCompleted={introCompleted} />

      {/* Main Content */}
      <main className="relative">
        <Home />
        <Services />
        <Events />
        <Projects />
        <Blog />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
