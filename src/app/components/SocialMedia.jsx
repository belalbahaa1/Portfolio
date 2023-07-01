import Link from "next/link";
import React from "react";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
const SocialMedia = () => {
  return (
    <div className="">
      <ul className="flex md:flex-col gap-10 cursor-pointer pt-20 md:p-0">
        <Link href="https://twitter.com/belalBahaa66" target="_blank">
          <AiFillTwitterSquare
            size={35}
            className="hover:-translate-y-1 transition-transform cursor-pointer  dark:text-neutral-100"
          />
        </Link>
        <Link href="https://www.instagram.com/belalbahaa1/" target="_blank">
          <AiFillInstagram
            size={35}
            className="hover:-translate-y-1 transition-transform cursor-pointer  dark:text-neutral-100"
          />
        </Link>
        <Link href="https://github.com/belalbahaa1" target="_blank">
          <AiFillGithub
            size={35}
            className="hover:-translate-y-1 transition-transform cursor-pointer  dark:text-neutral-100"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/belal-bahaa-a300261b6/"
          target="_blank"
        >
          <AiFillLinkedin
            size={35}
            className="hover:-translate-y-1 transition-transform cursor-pointer  dark:text-neutral-100"
          />
        </Link>
      </ul>
    </div>
  );
};

export default SocialMedia;
