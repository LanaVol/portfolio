import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project11 from "../../public/images/projects/events.jpg";
import project1 from "../../public/images/projects/task-manager-app.jpg";
import project2 from "../../public/images/projects/pizza-family.jpg";
import project3 from "../../public/images/projects/kettles-shop.jpg";
import project4 from "../../public/images/projects/react-movies.jpg";
import project5 from "../../public/images/projects/portfolio.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

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
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>SV | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            // text="Imagination Trumps Knowledge!"
            text="Perseverance is the key to success!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Events Application (under revision)"
                img={project11}
                summary="Website for view list of events and information each of them in different cities."
                link="https://task-manager-86pqfp6h4-lanavol.vercel.app/auth"
                github="https://github.com/LanaVol/task-manager-app"
                type="React,Next.js, TypeScript, Redux Toolkit, Axios, Formik-Yup, Material UI"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio"
                img={project5}
                summary=""
                link="https://portfolio-peach-three-32.vercel.app/"
                github="https://github.com/LanaVol/portfolio.git"
                type="React, Next.js, Tailwind CSS, Framer Motion"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pizza Family"
                img={project2}
                summary="Website for choose and order pizza with pizza-constructor and following emplemented functions: drag&drop ingrediends  and make pizza on your own, count total price and get some discount according to the conditions, form validation for entering client's information and send details to the email. Also there are two moods: light and dark."
                link="https://make-pizza-on-your-own.netlify.app/"
                github="https://gitlab.com/LanaVol/pizza-constructor"
                type="JavaScript, Axios, HTML, CSS (SCSS)"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Task-Manager Application"
                img={project1}
                summary="A feature-rich Task-Manager App where you can organize tasks with the ability to group them by topic, add, remove and change tasks and borders. Also there are two moods: light and dark. Invite you to log in with test-user data or you can register yourself"
                link="https://task-manager-86pqfp6h4-lanavol.vercel.app/auth"
                github="https://github.com/LanaVol/task-manager-app"
                type="React, TypeScript, React-Router, Axios, Formik-Yup, Material UI"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Movies"
                img={project4}
                summary=""
                link="https://lanavol.github.io/react-films-practise/"
                github="https://github.com/LanaVol/react-films-practise.git"
                type="React, OMDb API, Materialize"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Kettles"
                img={project3}
                summary=""
                link="https://kettles-store.netlify.app/"
                github="https://gitlab.com/LanaVol/kettles"
                type="JavaScript, HTML, CSS"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
