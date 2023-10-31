import React from "react";

export const BlockShadow = ({ className }) => {
  return (
    <div
      className={`absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] ${className}`}
    />
  );
};
