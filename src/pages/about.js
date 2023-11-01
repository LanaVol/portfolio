import React from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/profile-picture-2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { BlockShadow } from "@/components/BlockShadow";
import { AnimatedNumberComponent } from "@/components/AnimatedNumbersComponent";

const about = () => {
  return (
    <>
      <Head>
        <title>SV | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                - Hi, I&#039;m Svitlana, a Frontend developer looking for an
                opportunity to be employed as a Junior/Trainee Frontend
                Developer.
              </p>
              <p className="my-4 font-medium">
                - My decision to change position of an experienced architect
                with more than 5 years of experience in designing and
                implementing large-scale residential and commercial real estate
                projects to Frontend developer is well-considered and grounded
                in the expertise I have gained and a determined desire for
                career growth.
              </p>
              <p className="my-4 font-medium">
                - For me, architecture and web development share a fundamental
                approach - creating comfortable, aesthetic, and functional
                environments for people.
              </p>
              <p className="font-medium">
                - However, I see more prospects and possibilities for personal
                fulfillment and professional advancement in the IT-field. So,
                Ibelieve that dedication to learning, persistence and the
                previous experience I&#039;ve acquired will help meachieve the
                goals I&#039;ve set.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <BlockShadow className={"w-[102%]"} />
              <Image
                src={profilePic}
                alt="Sv"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <AnimatedNumberComponent value={6} item={"pet-projects"} />
              <AnimatedNumberComponent
                value={10}
                item={"tech skills mastered"}
              />
              <AnimatedNumberComponent
                value={1}
                item={"years of experienced"}
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
