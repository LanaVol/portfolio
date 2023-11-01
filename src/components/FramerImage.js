import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);

export const FramerImageComponent = ({
  link,
  img,
  title,
  className,
  sizes,
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={`cursor-pointer overflow-hidden rounded-lg ${className}`}
    >
      <FramerImage
        src={img}
        alt={title}
        className="w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        sizes={sizes}
      />
    </Link>
  );
};
