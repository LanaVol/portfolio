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
import project1 from "../../public/images/projects/intergal-city.jpg";
import project2 from "../../public/images/projects/s26.jpg";
import project3 from "../../public/images/projects/volodymyrskyi.jpeg";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const FramerImage = motion(Image);

function Imge({ id, img, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="h-[100vh] flex justify-center items-center relative snap-center">
      <div
        ref={ref}
        className="w-[900px] h-[500px] relative m-5 max-h-[90vh] bg-white overflow-hidden"
      >
        <FramerImage
          src={img}
          alt="alt"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />

        {/* <Image
          src={img}
          alt="Arch project"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-auto"
        /> */}
      </div>
      <motion.h2
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="m-0 left-0 text-[60px] font-bold absolute"
      >
        {title}
      </motion.h2>
      <motion.h2
        style={{ y }}
        className="m-0 left-[calc(70%+130px)] text-[80px] font-bold absolute"
      >{`#00${id}`}</motion.h2>
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
      <Imge id={1} img={project1} title={"Intergal City"} />
      <Imge id={2} img={project2} title={"Business center S26"} />
      <Imge id={3} img={project3} title={"Volodymyrkiy"} />
      <motion.div
        className="fixed left-0 right-0 bottom-[98px] bg-primary h-1"
        style={{ scaleX }}
      />
    </>
  );
};

export default ArchProjects;
