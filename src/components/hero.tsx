import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  // SiHtml5,
  // SiCss3,
  // SiJavascript,
  SiLaravel,
  SiReact,
  // SiPhp,
  // SiPython,
  // SiKotlin,
  // SiXml,
  SiTailwindcss,
  // SiBootstrap,
  // SiAlpinedotjs,
  // SiHuggingface,
  // SiInertia,
  SiMysql,
  // SiSqlite,
  // SiMongodb,
  // SiKaggle,
  // SiGithub,
  // SiTensorflow,
  // SiSpacy,
} from "react-icons/si";
// import { GiArtificialIntelligence } from "react-icons/gi";
import ShinyText from './blocks/TextAnimations/ShinyText/ShinyText';

import StarBorder from "./blocks/Animations/StarBorder/StarBorder";


const techButtons = [
  { label: "Laravel", icon: <SiLaravel /> },
  { label: "React", icon: <SiReact /> },
  // { label: "React Native", icon: <SiReact /> },
  { label: "Tailwind", icon: <SiTailwindcss /> },
  // { label: "PHP", icon: <SiPhp /> },
  // { label: "Python", icon: <SiPython /> },
  // { label: "Alpine", icon: <SiAlpinedotjs /> },
  // { label: "Inertia", icon: <SiInertia /> },
  { label: "MySQL", icon: <SiMysql /> },
  // { label: "MongoDB", icon: <SiSqlite /> },
  // { label: "SQLite", icon: <SiMongodb /> },
  // { label: "JavaScript", icon: <SiJavascript /> },
  // { label: "Postman", icon: <SiPostman /> },
  // { label: "GitHub", icon: <SiGithub /> },
  // { label: "Bootstrap", icon: <SiBootstrap /> },
  // { label: "Machine Learning", icon: <GiArtificialIntelligence /> },
  // { label: "TensorFlow", icon: <SiTensorflow /> },
  // { label: "HuggingFace", icon: <SiHuggingface /> },
];
const Hero = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full items-center justify-center overflow-hidden rounded-md bg-background",
          className
        )}
        {...props}
      >
        <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
          {/* Optional top blur */}
          <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

          {/* Main glow */}
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

          {/* Lamp effect */}
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
          />

          {/* Top line */}
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
          />

          {/* Left gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-full left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-full left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Right gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-full right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-full right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          {/* 🟡 Text Inside Lamp */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="z-50 mt-16 text-center text-white text-lg"
          >
            <div>
              <div className="flex-col max-w-2xl gap-8 items-center justify-center z-20 space-x-3 space-y-3 w">
                {techButtons.map(({ label, icon }, index) => (
                  <StarBorder
                    as="button"
                    color="white"
                    speed="5s"
                    key={index}
                    className="custom-class group relative z-10 bg-zinc-900 text-zinc-200 overflow-hidden text-xl duration-1000 cursor-pointer"
                  >
                    {/* Background animations */}
                    <span className="absolute bg-zinc-500 w-36 h-36 rounded-full -left-2 -top-10 scale-0 group-hover:scale-100 -z-10 group-hover:duration-500 duration-700 transform transition-all" />
                    <span className="absolute bg-zinc-800 w-36 h-36 rounded-full -left-2 -top-10 scale-0 group-hover:scale-100 -z-10 group-hover:duration-700 duration-500 transform transition-all" />

                    {/* Text swap on hover */}
                    <span className="relative transition-opacity duration-500 group-hover:opacity-0 flex justify-center text-center text-xs">
                      <ShinyText
                        text={label}
                        disabled={false}
                        speed={5}
                        className="custom-class"
                      />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                      {icon}
                    </span>
                  </StarBorder>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);
Hero.displayName = "Hero";

export { Hero };
