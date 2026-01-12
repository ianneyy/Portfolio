import { HeroSection } from "../components/hero-section-2";
import { Skills } from "../pages/Skills";
import { Timeline } from "@/components/ui/timeline";
import { useEffect } from "react";

import { Footer } from "@/components/footer-section";
import ClickSpark from "../components/blocks/Animations/ClickSpark/ClickSpark";
import { Projects } from "./Projects";
import SplineScreen from "@/SplineScene";
export default function Home() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            At 15 years old, my curiosity in technology began. I was fascinated
            with how tech works and how it's made, which sparked my passion for
            learning more.
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2023 1st Year College",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started my journey as an IT student. Learned the basics of
            programming and got introduced to C#. It was my first hands-on
            experience in writing actual code.
          </p>
        </div>
      ),
    },
    {
      title: "2023 - 2024 2nd Year College",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded my knowledge with Java, HTML, CSS, JavaScript, PHP,
            Bootstrap, and MySQL. This year helped me understand both front-end
            and back-end web development.
          </p>
        </div>
      ),
    },
    {
      title: "2024 - 2025 3rd Year College",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learned to use modern frameworks and tools such as React, Laravel,
            Tailwind CSS, various JavaScript libraries, and NoSQL databases. I
            also began exploring Machine Learning more deeply as part of our
            capstone project, which sparked my interest in applying AI to solve
            real-world problems.
          </p>
        </div>
      ),
    },
    {
      title: "2025 - 2026 4th Year College (Present)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Continued learning modern frameworks and tools such as React,
            Laravel, Tailwind CSS, JavaScript libraries, and NoSQL databases.
            During this year, I developed two major projects: a Supply Chain
            Management System for a real client (Sunny & Scramble) and a Farm
            Management System, both designed to streamline operations and
            improve real-world workflows. These projects allowed me to apply my
            knowledge in full-stack development and understand project
            deployment, client requirements, and user experience in practical
            scenarios.
          </p>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* Your content here */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <Timeline data={data} />
      </section>
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-24 px-4 lg:py-0">
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-24 px-4 lg:py-0">
        <Footer />
      </section>
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/S3WnR8XJLJbPybfU/scene.splinecode"></spline-viewer> */}
      {/* <spline-viewer
  url="https://prod.spline.design/S3WnR8XJLJbPybfU/scene.splinecode"
  style={{ width: "100%", height: "500px", display: "block" }}
/> */}
      <SplineScreen />
    </ClickSpark>
  );
}
