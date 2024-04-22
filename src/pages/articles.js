import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import ArchProjects from "@/components/ArchProjects";

const FramerImage = motion(Image);

const articles = () => {
  return (
    <>
      <Head>
        <title>SV | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Architecture and IT - environments in different dimensions!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ArchProjects />
        </Layout>
      </main>
    </>
  );
};

export default articles;
