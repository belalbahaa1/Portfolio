"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import SocialMedia from "./SocialMedia";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-11 md:text-left">
        <div className="md:mt-2 md:w-full rounded-full">
          <Image
            className="rounded-br-lg rounded-tl-lg shadow-2xl"
            src="/me.jpeg"
            width={300}
            height={300}
            alt="img"
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="md:mt-2">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I'm Belal!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am a{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              Software Engineer
            </span>
            I am a recent graduate with a Bachelor of Science in Computer
            Science. I am passionate about front-end development and I am eager
            to apply my skills to create beautiful and user-friendly web
            applications.
          </p>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-sm shadow cursor-pointer hover:bg-teal-700 transition-all duration-500"
          >
            Projects
          </Link>
        </div>
        <SocialMedia />
      </div>
      <div className="flex flex-row justify-center">
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <HiArrowDown size={30} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
