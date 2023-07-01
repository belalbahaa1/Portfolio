import React from "react";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-20 border-t-2 pt-2">
      <div className="mx-auto p-2 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between text-neutral-500 dark:text-neutral-100">
        <div> © 2023 Belal Bahaa</div>
        <div>
          <ul className="flex md:flex-row text-center justify-center gap-10 cursor-pointer pt-20 md:p-0">
            <Link href="https://twitter.com/belalBahaa66" target="_blank">
              <AiFillTwitterSquare
                size={35}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              />
            </Link>
            <Link href="https://www.instagram.com/belalbahaa1/" target="_blank">
              <AiFillInstagram
                size={35}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              />
            </Link>
            <Link href="https://github.com/belalbahaa1" target="_blank">
              <AiFillGithub
                size={35}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/belal-bahaa-a300261b6/"
              target="_blank"
            >
              <AiFillLinkedin
                size={35}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
