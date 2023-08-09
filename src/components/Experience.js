import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize block font-medium my-2 text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Leading Architect (Construction)"
            company="Intergal-Bud"
            companyLink="https://intergal-bud.com.ua/ua"
            time="December, 2019 - Present"
            address="Kyiv, Ukraine"
            work="Architectural leading and support of residential (multi-storey) and commercial building's projects from concept to realization in the project management group.
            Development of technical tasks, checking, local  refinement and approval of project documentation, selection of materials, external and internal curatorship with related organizations, teamwork and holding working meetings in the architectural part of projects."
          />

          <Details
            position="Architect (Construction)"
            company="Intergal-Bud"
            companyLink="https://intergal-bud.com.ua/ua"
            time="March, 2018 - December, 2019"
            address="Kyiv, Ukraine"
            work="Checking, local  refinement and approval of project documentation,selection of materials, external and internal curatorship with related organizations, teamwork."
          />

          <Details
            position="Architect (Construction)"
            company="Architectural workshop AMA"
            companyLink="https://who-is-who.ua/main/page/budarh2010/100/439"
            time="March, 2017 - March, 2018"
            address="Kyiv, Ukraine"
            work="Development and design of non-residential and residential high-rise buildings (up to 33 floors inclusive) at the EP, PP, P, R stages in accordance with current regulatory requirements, development of presentation materials; preparation of documentation for approval in examination or with Customer."
          />
          <Details
            position="Assistant to the chief architect"
            company="Architectural workshop AMA"
            companyLink="https://who-is-who.ua/main/page/budarh2010/100/439"
            time="July, 2016 - February, 2017"
            address="Kyiv, Ukraine"
            work="development and adjustment of project documentation for non-residential and residential objects, work and correcting in accordance with regulatory requirements and tasks chief architect, development of investment albums of objects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
