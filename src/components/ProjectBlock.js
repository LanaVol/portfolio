import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlockShadow } from "./BlockShadow";
import { FramerImageComponent } from "./FramerImage";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const FramerImage = motion(Image);

export function ProjectBlock({ id, img, title, link, subtitle }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="h-[90vh] flex justify-center items-center snap-center relative">
      <div
        className="w-[1000px] min-h-[600px] max-h-[90vh] flex items-center justify-center rounded-br-2xl rounded-3xl border border-solid border-dark  bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        ref={ref}
      >
        <BlockShadow />
        <FramerImageComponent
          link={link}
          img={img}
          title={title}
          className={"h-full w-auto lg:w-full"}
          sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"}
          // priority ?
        />

        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-250px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="absolute left-[-50px] top-[-150px] sm:left-2 sm:top-8"
        >
          <h2 className="m-0 text-[50px] font-bold md:text-[24px]">{title}</h2>
          <p className="m-0 text-[20px] font-bold text-primary  xs:text-base">
            {subtitle}
          </p>
        </motion.div>
        <motion.h2
          style={{ y }}
          className="m-0 left-[calc(70%+40px)] text-[80px] font-bold absolute sm:left-[calc(70%-50px)] text-primary"
        >{`#00${id}`}</motion.h2>
      </div>
    </section>
  );
}
