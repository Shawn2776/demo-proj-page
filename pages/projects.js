import ProjectContainer from "@/components/ProjectContainer";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div className="grid grid-cols-5 h-screen sm:grid-cols-12 sm:text-4xl lg:text-6xl">
      <div className=" text-center flex flex-col justify-evenly bg-slate-800">
        <p className="animate-pulse">P</p>
        <p className="animate-pulse">R</p>
        <p className="animate-pulse">O</p>
        <p className="animate-pulse">J</p>
        <p className="animate-pulse">E</p>
        <p className="animate-pulse">C</p>
        <p className="animate-pulse">T</p>
        <p className="animate-pulse">S</p>
      </div>
      <div className="col-span-4 sm:col-span-10 bg-slate-800 ">
        {/* DESKTOP VIEW */}
        <div className="hidden sm:grid grid-cols-4 gap-24 text-center font-thin grid-rows-4 h-full px-16 py-16">
          <ProjectContainer
            title={"Employee Dashboard"}
            url={"/emp_mgmt.png"}
            demo_link={""}
            code_link={""}
          />
          <ProjectContainer
            title={"Cellphone Tracker"}
            url={"/emp_mgmt.png"}
            demo_link={""}
            code_link={""}
          />
          <ProjectContainer
            title={"Tik Tok Clone"}
            url={"/emp_mgmt.png"}
            demo_link={""}
            code_link={""}
          />
          <ProjectContainer
            title={"Hero Span"}
            url={"/emp_mgmt.png"}
            demo_link={""}
            code_link={""}
          />
        </div>
        {/* MOBILE VIEW */}
        <div className="sm:hidden bg-red-500 h-screen"></div>
      </div>
      <div className=" text-center hidden sm:inline-flex sm:flex-col sm:justify-evenly flipH bg-slate-800">
        <p className="animate-pulse">P</p>
        <p className="animate-pulse">R</p>
        <p className="animate-pulse">O</p>
        <p className="animate-pulse">J</p>
        <p className="animate-pulse">E</p>
        <p className="animate-pulse">C</p>
        <p className="animate-pulse">T</p>
        <p className="animate-pulse">S</p>
      </div>
    </div>
  );
}
