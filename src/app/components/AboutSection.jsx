import React from "react";
import { Link } from "react-scroll";
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "NextJs" },
  { skill: "Tailwind CSS" },
  { skill: "BootsTrap 5" },
  { skill: "Git & GitHub" },
];
const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl mb-12">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 md:text-lg">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
              <hr className="w-6 h-1 mx-auto md:mx-0  my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <p>
              I'm{" "}
              <span className="font-bold dark:text-teal-400">
                {" "}
                Belal Bahaa{" "}
              </span>
              , a front-end developer. I'm proficient in HTML, CSS, JavaScript,
              and React, and I have a strong understanding of user experience
              design. I'm also a quick learner and I'm always up for a
              challenge.
            </p>
            <br />
            <p>
              I am always up to learning about new tools and features. I
              recently attended the NextJS Summit and learned about the new
              features of{" "}
              <span className="font-bold dark:text-teal-400"> NextJS 13 </span>.
              I am also following the{" "}
              <span className="font-bold dark:text-teal-400">
                {" "}
                TailwindCSS{" "}
              </span>{" "}
              development team on GitHub and am excited to see what new features
              they will release.
            </p>
            <br />
            <p>
              I'm a
              <span className="font-bold dark:text-teal-400">
                {" "}
                highly motivated{" "}
              </span>
              and{" "}
              <span className="font-bold dark:text-teal-400">
                {" "}
                results-oriented{" "}
              </span>{" "}
              individual who is always looking for new challenges. I'm confident
              that I can make a significant contribution to your team.
            </p>
          </div>
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              my Skills
              <hr className="w-6 h-1 mx-auto md:mx-0 my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-4 mr-2 mt-2 text-gray-500 rounded font-semibold text-center hover:bg-teal-400 cursor-pointer transition-all duration-300 hover:text-white"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
