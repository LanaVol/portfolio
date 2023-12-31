import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon, GitLab } from "@/components/Icons";
import project11 from "../../public/images/projects/events.jpg";
import project1 from "../../public/images/projects/task-manager-app.jpg";
import project2 from "../../public/images/projects/pizza-family.jpg";
import project3 from "../../public/images/projects/kettles-shop.jpg";
import project4 from "../../public/images/projects/react-movies.jpg";
import project5 from "../../public/images/projects/portfolio.jpg";
import project6 from "../../public/images/projects/projectHome.jpg";
import project7 from "../../public/images/projects/barbershop.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import { MainProject } from "@/components/MainProject";
import { BlockShadow } from "@/components/BlockShadow";
import { FramerImageComponent } from "@/components/FramerImage";
import { ButtonProject, IconButtonProject } from "@/components/Button";

const Project = ({ title, type, img, link, github, Component }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <BlockShadow
        className={"w-[101.5%] md:-right-2 md:w-[101%] xs:h-[102%]"}
      />
      <FramerImageComponent
        link={link}
        img={img}
        title={title}
        className={"w-full"}
      />

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
          <ButtonProject
            link={link}
            className={"underline md:text-base"}
            text={"Visit"}
          />
          <IconButtonProject link={github} Component={Component} />
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
            text="Perseverance is the key to success!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <MainProject
                title="Events Application (under revision)"
                img={project11}
                summary="The website shows the information about various exciting events happening around the world. Here, you can explore a diverse range of events, from concerts and exhibitions to sports competitions and cultural festivals. On this website, you will discover an up-to-date event calendar featuring detailed descriptions, dates, venues, and other valuable information."
                link="https://events-application-omega.vercel.app/"
                github="https://github.com/LanaVol/events-application"
                type="React, Next.js, TypeScript, Redux Toolkit, Axios, Formik-Yup, Material UI, AOS (animations)"
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
                Component={<GithubIcon />}
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
                Component={<GitLab />}
              />
            </div>

            <div className="col-span-12">
              <MainProject
                title="Task-Manager Application"
                img={project1}
                summary="A feature-rich Task-Manager App where you can organize tasks with the ability to distribute them by topic in your opinion. There are functions for add, remove and change cards and bords. Each card has several fields of information: title, description, date, label and tasks with remove and complete status. Also there are two moods: light and dark. Invite you to log in with test-user data or you can register yourself."
                link="https://task-manager-app-tau.vercel.app/auth"
                github="https://github.com/LanaVol/task-manager-app"
                type="React, TypeScript, React-Router, Redux Toolkit, Axios, Formik-Yup, Material UI"
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
                Component={<GithubIcon />}
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
                Component={<GitLab />}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Project Home"
                img={project6}
                summary=""
                link="https://project-home-rho.vercel.app/"
                github="https://github.com/LanaVol/project-home"
                type="JavaScript, HTML, CSS(SCSS), Webpack(basic configuration), AOS-Animation"
                Component={<GithubIcon />}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Barbershop"
                img={project7}
                summary=""
                link="https://cut-barbershop.netlify.app/"
                github="https://gitlab.com/LanaVol/home-work_9-it-gen"
                type="JavaScript, HTML, CSS"
                Component={<GitLab />}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
