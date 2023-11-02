import React from "react";
import Link from "next/link";

export const ButtonProject = ({ text, link, className }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={`rounded-lg text-lg font-semibold ${className}`}
    >
      {text}
    </Link>
  );
};

export const IconButtonProject = ({ Component, link }) => {
  return (
    <Link href={link} target="_blank" className="w-10">
      {Component}
    </Link>
  );
};
