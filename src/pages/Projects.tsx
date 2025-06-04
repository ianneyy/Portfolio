"use client";
import BlurText from "../components/blocks/TextAnimations/BlurText/BlurText";
import SpotlightCard from "../components/blocks/Components/SpotlightCard/SpotlightCard";
import AnimatedContent from "../components/blocks/Animations/AnimatedContent/AnimatedContent";


const Projects = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="pb-52 flex justify-center text-center flex-col max-w-6xl mx-auto ">
      <div className="">
        <BlurText
          text="PROJECTS"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl text-center flex justify-center"
        />
        <p className="mt-2  text-center text-muted-foreground text-lg mb-10">
          A showcase of my technical abilities and tools I work with.
        </p>
      </div>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(210, 235, 237, 0.2)"
          >
            <div className="h-52 max-w-xs bg-zinc-950 rounded-lg text-zinc-500 flex items-center justify-center">
              IMG
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-semibold mt-2">VerifAI</h3>
              <div className="text-xs flex flex-wrap gap-2 w-full max-w-xs mt-1 mb-2">
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  React Native
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  Kotlin
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  Python
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  NewsAPI
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  HuggingFace
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  TensorFlow
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  SQLite
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1 break-words whitespace-normal max-w-xs">
                VerifAI is a fake news detection app that uses AI to analyze
                social media posts, identify credible sources, and highlight
                misleading content. It features screenshot scanning, source
                verification, and real-time fact-checking — helping users spot
                fake news quickly and easily.
              </p>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(210, 235, 237, 0.2)"
          >
            <div className="h-52 max-w-xs bg-zinc-950 rounded-lg text-zinc-500 flex items-center justify-center">
              IMG
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-semibold mt-2 break-words whitespace-normal max-w-xs">
                BAO Uniform Reservation System
              </h3>
              <div className="text-xs flex flex-wrap gap-2 w-full max-w-xs mt-1 mb-2">
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  Laravel
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  MySql
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  Tailwind CSS
                </span>

                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  JavaScript
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1 break-words whitespace-normal max-w-xs">
                BAO Uniform Reservation System is a web-based platform developed
                for LSPU-SPCC students to conveniently browse, reserve, and
                manage their official uniforms online. It streamlines the
                reservation process by allowing users to select sizes, fabric
                types, and departments, while also providing real-time inventory
                tracking and admin management features — reducing long queues
                and manual paperwork on campus.
              </p>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(210, 235, 237, 0.2)"
          >
            <div className="h-52 max-w-xs bg-zinc-950 rounded-lg text-zinc-500 flex items-center justify-center">
              IMG
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-semibold mt-2 break-words whitespace-normal max-w-xs">
                Lab/Room Equipment Inventory System — LSPU SPCC
              </h3>
              <div className="text-xs flex flex-wrap gap-2 w-full max-w-xs mt-1 mb-2">
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  HTML
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  Tailwind CSS
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  JavaScript
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  Laravel
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  MySQL
                </span>
                <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                  DaisyUI
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1 break-words whitespace-normal max-w-xs">
                The Lab/Room Equipment Inventory System is a web-based
                application designed to help faculty and staff efficiently
                manage laboratory and classroom equipment across different
                departments at LSPU-SPCC. The system enables real-time tracking,
                categorization, and auditing of all school-owned equipment.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </AnimatedContent>
    </div>
  );
};
export { Projects };
