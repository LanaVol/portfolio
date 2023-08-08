// import { motion } from "framer-motion";
// import React from "react";
// import { Image, Link } from "next";
// import { GithubIcon } from "./Icons";

// const FramerImage = motion(Image);

// export const FeaturedProject = ({
//   type,
//   title,
//   summary,
//   img,
//   link,
//   github,
// }) => {
//   return (
//     <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
//       <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
//       <Link
//         href={link}
//         target="_blank"
//         className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
//       >
//         <FramerImage
//           src={img}
//           alt={title}
//           className="w-full h-auto"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//           priority
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
//         />
//       </Link>

//       <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
//         <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
//           {type}
//         </span>
//         <Link
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-2"
//         >
//           <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
//             {title}
//           </h2>
//         </Link>
//         <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
//           {summary}
//         </p>

//         <div className="mt-2 flex items-center">
//           <Link href={github} target="_blank" className="w-10">
//             <GithubIcon />
//           </Link>
//           <Link
//             href={link}
//             target="_blank"
//             className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
//           >
//             Visit Project
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

// export const Project = ({ title, type, img, link, github }) => {
//   return (
//     <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
//       <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
//       <Link
//         href={link}
//         target="_blank"
//         className="w-full cursor-pointer overflow-hidden rounded-lg"
//       >
//         <FramerImage
//           src={img}
//           alt={title}
//           className="w-full h-auto"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//         />
//       </Link>

//       <div className="w-full flex flex-col items-start justify-between mt-4">
//         <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
//           {type}
//         </span>
//         <Link
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-2"
//         >
//           <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
//             {title}
//           </h2>
//         </Link>

//         <div className="w-full mt-2 flex items-center justify-between">
//           <Link
//             href={link}
//             target="_blank"
//             className="rounded-lg text-lg font-semibold underline md:text-base"
//           >
//             Visit
//           </Link>
//           <Link href={github} target="_blank" className="w-8 md:w-6">
//             <GithubIcon />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };
