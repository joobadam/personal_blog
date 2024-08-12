import React from 'react'
import DotBackground from './DotBackground'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className='w-full h-screen' id='about'>
      <DotBackground>
      <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card  border-black/[0.1] w-[80%] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          
        >
          
      <h2 className="">
        About
      </h2>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 w-full mx-auto"
        >
          Welcome to my blog! <br /> I created this platform to share the experiences and adventures that inspire me and open up new perspectives. Whether it’s about travel, personal growth, or everyday moments, you’ll find everything here that is close to my heart. I hope my stories and experiences will inspire you as well and help you see the world a little differently. <br />
          Thank you for joining me on this journey!
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href="#contact">
            Contact
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      </DotBackground>

    </div>
  )
}

export default About