import BlurText from "../components/blocks/TextAnimations/BlurText/BlurText";

import { CardStack, type CardStackItem } from "@/components/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Project Management Fundamentals",
    description: "IBM SkillsBuild · Issued Sep 2024",
    imageSrc:
      "/img/certificate/Project_Management_Fundamentals_Badge20240919-7-jn5jnr_page-0001.jpg",
    href: "https://www.credly.com/go/L8u7oRAd",
  },
  {
    id: 2,
    title: "Artificial Intelligence Fundamentals",
    description: "IBM SkillsBuild · Issued Oct 2024",
    imageSrc: "/img/certificate/IBMDesign20250717-27-5yc20d-1.png",
    href: "https://www.credly.com/badges/1611a288-0cc5-48b2-86ce-41b998019d84",
  },
  {
    id: 3,
    title: "JavaScript Essentials 1",
    description: "Cisco Networking Academy · Issued Sep 2024",
    imageSrc:
      "/img/certificate/Belarmino_Ian_JavaScript_Essentials_1_Certificate.jpg",
    href: "https://www.credly.com/badges/8231ea7b-ff30-45df-a936-78b2a1af6559",
  },
  {
    id: 4,
    title: "Web Development Fundamentals",
    description: "IBM SkillsBuild · Issued Sep 2024",
    imageSrc: "/img/certificate/IBMDesign20250717-25-r6vvf5-1.png",
    href: "https://www.credly.com/badges/8231ea7b-ff30-45df-a936-78b2a1af6559",
  },
  {
    id: 5,
    title: "Agile Explorer",
    description: "IBM SkillsBuild · Issued Apr 2025",
    imageSrc:
      "/img/certificate/IBMDesign20250717-27-3la3gc-1.png",
    href: "https://www.credly.com/badges/ec19c9c6-98ab-4375-b2d4-f6eb1da50acd",
  },
  {
    id: 6,
    title: "Networking Devices and Initial Configuration",
    description: "Cisco Networking Academy · Issued Sep 2024",
    imageSrc:
      "/img/certificate/Belarmino_Ian_Network_Devices_and_Initial_Configuration.jpg",
    href: "#",
  },
  {
    id: 7,
    title: "Ethical Hacker",
    description: "Cisco Networking Academy · Issued Sep 2024",
    imageSrc: "/img/certificate/EthicalHackerUpdate20250717-25-lj35as-1.png",
    href: "#",
  },
  {
    id: 8,
    title: "User Experience Design Fundamentals",
    description: "IBM SkillsBuild · Issued Sep 2024",
    imageSrc: "/img/certificate/IBMDesign20250717-27-ithriq-1.png",
    href: "https://www.credly.com/badges/05f11b1e-ed2c-4ab8-91e8-142964f962c7",
  },
];



export const CertificateSection = () => {
  return (
    <section
      className="py-16 px-4 bg-background/80 dark:bg-background/60 "
      id="certificates"
    >
      <div className="max-w-6xl mx-auto">
        <div>
          <BlurText
            text="CERTIFICATES"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl text-center flex justify-center"
          />
          <p className="mt-2  text-center text-muted-foreground text-lg mb-10">
            A collection of certifications showcasing my skills and dedication
            to learning.
          </p>
        </div>
        <div className="w-full ">
          <div className="mx-auto w-full p-8 ">
            <CardStack
              items={items}
              initialIndex={0}
              autoAdvance
              intervalMs={2000}
              pauseOnHover
              showDots
            />
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="http://credly.com/users/ian-belarmino/badges#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2.5 rounded-xl text-sm text-neutral-500 font-semibold transition-colors shadow-md text-lg hover:text-blue-600"
          >
            View All Certificates
          </a>
        </div>
      </div>
    </section>
  );
};

// Dynamically load Credly embed script
if (typeof window !== "undefined") {
  const scriptId = "credly-embed-script";
  if (!document.getElementById(scriptId)) {
                    
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
}
