"use client";
import BlurText from "../components/blocks/TextAnimations/BlurText/BlurText";
import SpotlightCard from "../components/blocks/Components/SpotlightCard/SpotlightCard";
import AnimatedContent from "../components/blocks/Animations/AnimatedContent/AnimatedContent";

const Projects = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="pb-52 mt-24 lg:mt-0 flex justify-center text-center flex-col max-w-6xl mx-auto ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
          <a
            href="https://verifai-xi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <SpotlightCard
              className="custom-spotlight-card flex flex-col h-full"
              spotlightColor="rgba(210, 235, 237, 0.2)"
            >
              <div className="h-52 max-w-xs rounded-lg overflow-hidden bg-zinc-950">
                <img
                  src="/img/verifai.png"
                  alt="Supply Chain Management System Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-semibold mt-2">
                  VerifAI: Mobile App for Fake News Detection
                </h3>
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
          </a>
          <a
            href="https://invensureph.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <SpotlightCard
              className="custom-spotlight-card flex flex-col h-full"
              spotlightColor="rgba(210, 235, 237, 0.2)"
            >
              <div className="h-52 max-w-xs rounded-lg overflow-hidden bg-zinc-950">
                <img
                  src="/img/invensure.png"
                  alt="Supply Chain Management System Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-semibold mt-2 break-words whitespace-normal max-w-xs">
                  Supply Chain Management System - Sunny & Scramble
                </h3>
                <div className="text-xs flex flex-wrap gap-2 w-full max-w-xs mt-1 mb-2">
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    Laravel
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    Tailwind CSS
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    JavaScript
                  </span>

                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    MySQL
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    DaisyUI
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-1 break-words whitespace-normal max-w-xs">
                  Developed a web-based supply chain management system for Sunny
                  & Scramble to manage inventory, deliveries, and day-to-day
                  logistics operations. The system includes role-based access
                  for Admin, Inventory Manager, Logistics Coordinator, and
                  Customer roles, with demand forecasting using Linear
                  Regression to support planning and inventory decisions.
                </p>
              </div>
            </SpotlightCard>
          </a>
          <a
            href="http://anihanda.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <SpotlightCard
              className="custom-spotlight-card flex flex-col h-full"
              spotlightColor="rgba(210, 235, 237, 0.2)"
            >
              <div className="h-52 max-w-xs rounded-lg overflow-hidden bg-zinc-950">
                <img
                  src="/img/anihanda.png"
                  alt="Supply Chain Management System Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-2xl font-semibold mt-2">
                  Farm Management System
                </h3>
                <div className="text-xs flex flex-wrap gap-2 w-full max-w-xs mt-1 mb-2">
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    HTML & CSS
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    Tailwind CSS
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    PHP
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    JavaScript
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-lg text-zinc-300">
                    MySql
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-1 break-words whitespace-normal max-w-xs">
                  Developed a web-based crop bidding system where farmers can
                  upload their harvest and business partners can place bids on
                  available crops. The platform helps farmers connect directly
                  with buyers and makes the buying and selling process faster
                  and more transparent.
                </p>
              </div>
            </SpotlightCard>
          </a>
          <SpotlightCard
            className="custom-spotlight-card flex flex-col h-full"
            spotlightColor="rgba(210, 235, 237, 0.2)"
          >
            <div className="h-52 max-w-xs rounded-lg overflow-hidden bg-zinc-950">
              <img
                src="/img/bao.png"
                alt="Supply Chain Management System Preview"
                className="w-full h-full object-cover"
              />
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
                and manual paperwork on campus. This project was completed as a
                3rd-year school project.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card flex flex-col h-full"
            spotlightColor="rgba(210, 235, 237, 0.2)"
          >
            <div className="h-52 max-w-xs rounded-lg overflow-hidden bg-zinc-950">
              <img
                src="/img/room_lab.png"
                alt="Supply Chain Management System Preview"
                className="w-full h-full object-cover"
              />
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
                categorization, and auditing of all school-owned equipment. This
                project was completed as a 3rd-year school project.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </AnimatedContent>
    </div>
  );
};
export { Projects };
