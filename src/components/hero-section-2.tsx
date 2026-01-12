import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";
// import { p } from 'framer-motion/client';
import { FaFacebook, FaGithub } from "react-icons/fa";

import CardSwap, {
  Card,
} from "../components/blocks/Components/CardSwap/CardSwap";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="flex flex-col lg:flex-row mt-24 lg:mt-0 items-center min-h-screen">
          <div className="relative w-full px-4 lg:px-0 max-w-6xl mx-auto">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"></div>
            {/* <div className="mx-auto max-w-5xl px-6">
                <div className="sm:mx-auto lg:mr-auto"> */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                Ian Belarmino
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg">
                I'm a student and full stack web developer with a passion for
                building responsive, user-focused web applications. I specialize
                in both front-end and back-end development.
              </p>
              <div className="mt-12 flex items-center gap-3">
                <div key={1}>
                  <a
                    href="https://web.facebook.com/r.iannnnn30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={30}
                      className="text-white hover:scale-110 transition cursor-pointer"
                    />
                  </a>
                </div>
                <a
                  href="https://github.com/ianneyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={30}
                    className="text-white hover:scale-110 transition cursor-pointer"
                  />
                </a>
              </div>
            </AnimatedGroup>
          </div>
          <div className="relative h-[300px] sm:h-[300px] md:h-[500px]">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3 className="ml-5">User Experience Design Fundamentals</h3>
                <img
                  src="/img/certificate/IBMDesign20250717-27-ithriq-1.png"
                  alt=""
                  className="w-full object-cover rounded-xl shadow-lg"
                />
              </Card>
              <Card>
                <h3 className="ml-5">Project Management Fundamentals</h3>
                <img
                  src="/img/certificate/Project_Management_Fundamentals_Badge20240919-7-jn5jnr_page-0001.jpg"
                  alt=""
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </Card>
              <Card>
                <h3 className="ml-5">Javascript Essential 1</h3>
                <img
                  src="/img/certificate/Belarmino_Ian_JavaScript_Essentials_1_Certificate.jpg"
                  alt=""
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </Card>

              <Card>
                <h3 className="ml-5">Network Device and Configuration</h3>
                <img
                  src="/img/certificate/Belarmino_Ian_Network_Devices_and_Initial_Configuration.jpg"
                  alt=""
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </Card>
              <Card>
                <h3 className="ml-5">Ethical Hacker</h3>
                <img
                  src="/img/certificate/EthicalHackerUpdate20250717-25-lj35as-1.png"
                  alt=""
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </Card>
              <Card>
                <h3 className="ml-5">Web Development Fundamentals</h3>
                <img
                  src="/img/certificate/IBMDesign20250717-25-r6vvf5-1.png"
                  alt=""
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </Card>
              <Card>
                <h3 className="ml-5">Agile Explorer</h3>
                <img
                  src="/img/certificate/IBMDesign20250717-27-3la3gc-1.png"
                  alt=""
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </Card>
              <Card>
                <h3 className="ml-5">Artificial Intelligence Fundamentals</h3>
                <img
                  src="/img/certificate/IBMDesign20250717-27-5yc20d-1.png"
                  alt=""
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </Card>
            </CardSwap>
          </div>
        </section>
      </main>
    </>
  );
}

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "group fixed z-20 w-full border-b transition-colors duration-150",
          scrolled && "bg-background/50 backdrop-blur-3xl z-[999]"
        )}
      >
        <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                to="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block  ">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = () => {
  return <p>Ian</p>;
};
