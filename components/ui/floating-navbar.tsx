"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems = [
    {name: 'about', link:'#about'},
    {name:'posts', link:'#posts'},
    {name:'contact', link:'#contact'},
    {name:'team', link:'#team'},
  ],
  className,
}: {
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "w-fit  flex flex-wrap justify-center fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2 items-center gap-2",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center text-neutral-600 hover:text-neutral-500 text-sm px-3 py-1.5 rounded-full hover:bg-neutral-100 transition-colors"
            )}
          >
            <span>{navItem.name}</span>
          </Link>
        ))}
        <Link href='/'>
          <button className="border text-sm font-medium relative border-neutral-200 text-black px-4 py-2 rounded-full hover:bg-neutral-100 transition-colors">
            <span>Home</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-rose-500 to-transparent h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};