"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function MojoCard() {
  return (
    <CardContainer className="inter-var translate-y-[50%] translate-x-[50%]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
        >
          Who am I?
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         Experiment, lab accident, the main antagonist of The Powerpuff Girls
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
         
          <Image
            src="img/mojojojo.svg"
            height="300"
            width="300"
            className="object-cover rounded-xl group-hover/card:shadow-xl w-full"
            alt="thumbnail"
          />
    
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href="#team">
            More information
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
