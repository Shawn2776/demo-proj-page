import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectContainer({ title, demo_link, code_link, url }) {
  return (
    <div className="col-span-2 row-span-2 mx-2 my-2 text-4xl font-light text-gray-400 transition duration-200 rounded-3xl proj_main_div">
      <span>{title}</span>
      <div className="flex items-center justify-center mt-4 proj_second_div">
        <Image
          src={url}
          height={425}
          width={425}
          alt=""
          className="rounded-lg hover:scale-105"
        />
      </div>
      <div className="flex pt-4 justify-evenly">
        <button className="px-4 py-2 border rounded-md hover:text-black hover:bg-white">
          Demo
        </button>
        <button className="px-4 py-2 border rounded-md hover:text-black hover:bg-white">
          Code
        </button>
      </div>
    </div>
  );
}
