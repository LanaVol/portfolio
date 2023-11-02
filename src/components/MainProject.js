import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import { BlockShadow } from "./BlockShadow";
import { FramerImageComponent } from "./FramerImage";
import { ButtonProject, IconButtonProject } from "./Button";

export const MainProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <BlockShadow />
      <FramerImageComponent
        link={link}
        img={img}
        title={title}
        className={"w-1/2 lg:w-full"}
        sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"}
      />

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <IconButtonProject link={github} Component={<GithubIcon />} />
          <ButtonProject
            link={link}
            text={"Visit Project"}
            className={
              "ml-4 bg-dark text-light p-2 px-6 dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            }
          />
        </div>
      </div>
    </article>
  );
};
