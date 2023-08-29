import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/intergalCity.jpg";
import project2 from "../../public/images/projects/s26.jpg";
import project3 from "../../public/images/projects/volodymyrsky.jpg";
import project4 from "../../public/images/projects/malahit-5.jpg";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const FramerImage = motion(Image);

function Imge({ id, img, title, link, subtitle }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="h-[90vh] flex justify-center items-center snap-center relative">
      <div
        className="w-[900px] h-[500px] max-h-[90vh] flex items-center justify-center rounded-br-2xl rounded-3xl border border-solid border-dark  bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        ref={ref}
      >
        <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

        <Link
          href={link}
          target="_blank"
          className="h-full w-auto cursor-pointer overflow-hidden rounded-lg lg:w-full "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            // className="w-auto h-full m-auto rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>

        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-250px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="absolute left-[-50px] top-[-150px] sm:left-2"
        >
          <h2 className="m-0 text-[50px] font-bold">{title}</h2>
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

const ArchProjects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Imge
        id={1}
        img={project1}
        title={"Intergal City"}
        subtitle={"Multifunctional Complex | Under Construction"}
        link={"https://intergal.city/ua/about/concept/"}
      />
      <Imge
        id={2}
        img={project2}
        title={"S26"}
        subtitle={"Business Center | Construction completed"}
        link={"https://office.com.ua/business-centers/s26"}
      />
      <Imge
        id={3}
        img={project4}
        title={"Malahyt №5, №4(partly)"}
        subtitle={"Residential Complex | Construction completed"}
        link={"https://intergal-bud.com.ua/completed-projects/kyiv"}
      />
      <Imge
        id={4}
        img={project3}
        title={"Volodymyrskiy"}
        subtitle={"Residential Complex | Construction completed"}
        link={"https://volodymyrskyy.com.ua/#close"}
      />
      <motion.div
        className="fixed left-0 right-0 bottom-[98px] bg-primary h-1"
        style={{ scaleX }}
      />
    </>
  );
};

export default ArchProjects;
