"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";


export function LoveCard() {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card  border-black/[0.1] w-full sm:w-[80%] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={0}
          className="w-full mt-4"
        >
         
          <Image
            src="/img/mokolove.jpg"
            height="300"
            width="300"
            className="object-cover rounded-xl group-hover/card:shadow-xl w-full"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
