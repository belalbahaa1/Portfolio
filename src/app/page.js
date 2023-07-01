"use client";
import { Link } from "react-scroll";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import { HiArrowUp } from "react-icons/hi";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <div className="absolute  right-10 bottom-[-240%]">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="w-10 h-19 bg-teal-600 leading-9 px-1 py-2  rounded-sm  cursor-pointer">
            <HiArrowUp
              size={30}
              color="white"
              className="hover:animate-bounce"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
