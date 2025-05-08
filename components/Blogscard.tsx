"use client";

import React from "react";
import Link from "next/link";

interface BlogCardProps {
  imageSrc: string;
  heading: string;
  paragraph: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, heading, paragraph, link }) => {
  return (
    <div className="w-[360px] relative mt-4 h-[400px] overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
      <Link href={link}>
        <div className="w-full h-full">
          <img
            src={imageSrc}
            alt={heading}
            className="h-[300] w-[300] scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
          />
        </div>
        <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-gradient-to-t from-purple-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
            <h1 className="md:text-2xl font-semibold">{heading}</h1>
            <p className="sm:text-base text-sm">{paragraph}</p>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default BlogCard;
