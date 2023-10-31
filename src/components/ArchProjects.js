import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import project1 from "../../public/images/projects/intergalCity.jpg";
import project2 from "../../public/images/projects/s26.jpg";
import project3 from "../../public/images/projects/volodymyrsky.jpg";
import project4 from "../../public/images/projects/malahit-5.jpg";
import { ProjectBlock } from "./ProjectBlock";

const arrArchProjects = [
  {
    id: 1,
    img: project1,
    title: "Intergal City",
    subtitle: "Multifunctional Complex | Under Construction",
    link: "https://intergal.city/ua/about/concept/",
  },
  {
    id: 2,
    img: project2,
    title: "S26",
    subtitle: "Business Center | Construction completed",
    link: "https://office.com.ua/business-centers/s26",
  },
  {
    id: 3,
    img: project4,
    title: "Malahyt №5, №4(partly)",
    subtitle: "Residential Complex | Construction completed",
    link: "https://intergal-bud.com.ua/completed-projects/kyiv",
  },
  {
    id: 4,
    img: project3,
    title: "Volodymyrskiy",
    subtitle: "Residential Complex | Construction completed",
    link: "https://volodymyrskyy.com.ua/#close",
  },
];

const ArchProjects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      {arrArchProjects.map((el) => (
        <ProjectBlock
          key={el.id}
          id={el.id}
          img={el.img}
          title={el.title}
          subtitle={el.subtitle}
          link={el.link}
        />
      ))}
      <motion.div
        className="fixed left-0 right-0 bottom-[98px] bg-primary h-1"
        style={{ scaleX }}
      />
    </>
  );
};

export default ArchProjects;
