import React from "react";
import { AnimatedNumbers } from "./AnimatedNumbers";

export const AnimatedNumberComponent = ({ value, item }) => {
  return (
    <div className="flex flex-col items-end justify-center xl:items-center">
      <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
        <AnimatedNumbers value={value} />+
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
        {item}
      </h2>
    </div>
  );
};
