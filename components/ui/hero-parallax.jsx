"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Instagram, Twitter, Discord, Linkedin, LocateFixed, MapPin  } from "lucide-react";

import { Button } from "@/components/ui/button"

import Scramble from "../hooks/scramble";

export const HeroParallax = ({
    pictures,
}) => {
    const firstRow = pictures.slice(0, 5);
    const secondRow = pictures.slice(5, 10);
    const thirdRow = pictures.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[230vh] py-40  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full  left-0 top-0">
            
            <h1 className="text-5xl font-mono md:text-9xl font-bold dark:text-white">
            <Scramble  text="@hackyguru" />
            </h1>
            <div className=" text-xl md:text-2xl mt-10 dark:text-white shadow md:flex hidden">
                developer relations / core contributor at <a className="underline mr-2 flex space-x-2" href="https://codex.storage"><img className="" src="https://codex.storage/theme/image/logo.svg" />codex</a>, <a className="underline mr-2 flex space-x-2" href="https://waku.org"><img className="" src="https://waku.org/theme/image/logo.svg" />waku</a>&<a className="underline flex space-x-2" href="https://logos.co"><img className="" src="https://logos.co/theme/image/logo.svg" />logos</a>
            </div>
            <div className="max-w-4xl text-xl md:text-2xl mt-10 md:mt-4 dark:text-white shadow">
            cypherpunk - digital nomad - indie hacker - privacy & decentralization maxi
            </div>
            <div className="max-w-4xl text-xl md:text-2xl mt-5 dark:text-white shadow md:hidden">
                developer relations & core contributor at 
                <div className="flex space-x-2">
                <img className="" src="https://waku.org/theme/image/logo.svg" /><img className="" src="https://codex.storage/theme/image/logo.svg" /><img className="" src="https://logos.co/theme/image/logo.svg" />
                </div>
            </div>
            <div className="flex justify-between mt-10 items-center">
            <div className="flex space-x-10">
                <Link href="mailto:guru@status.im">
                <Mail />
                </Link>
                <Link href="https://github.com/hackyguru">
                <Github />
                </Link>
                <Link href="https://x.com/hackyguru">
                <Twitter />
                </Link>
                <Link href="https://instagram.com/guuru37">
                <Instagram />
                </Link>
                <Link href="https://linkedin.com/in/kumaraguru7">
                <Linkedin />
                </Link>
            </div>
            <div className="max-w-4xl text-xl md:text-2xl dark:text-white opacity-60 shadow hidden  md:flex space-x-3 items-center">
            <MapPin />
            <h1>
                london / coimbatore / cyberspace
                </h1>
            </div>
            </div>
            
            <hr className="my-5" />

            <div className="max-w-4xl text-xl md:text-2xl dark:text-white opacity-60 shadow md:hidden  flex space-x-3 items-center">
            <MapPin />
            <h1>
                london / coimbatore / cyberspace
                </h1>
            </div>
            <h1 className="mt-10 md:mt-0">Wish to know more?</h1>
            <div className="flex mt-5 justify-between items-center">
            <div className="flex">
            <a href="/#work" className=" text-xl border p-3 flex cursor-pointer">
            <h1
  className="text-xl font-mono flex">{"/"}
  <Scramble  text="about work" /></h1>
            </a>
            <a href="/#life" className="ml-5 text-xl border p-3 flex">
            <h1
  className="text-xl font-mono flex cursor-pointer">{"/"}
  <Scramble  text="about life" /></h1>
            </a>
  </div>
            <h1 className="text-2xl opacity-60 hidden md:block font-mono">kumaraguru / குமரகுரு</h1>
  </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >

            <img
                src={product.thumbnail}
                height="600"
                width="600"
                className="object-cover grayscale hover:grayscale-0 object-left-top absolute h-full w-full inset-0"
                alt={product.title}
            />
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-30 grayscale bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 grayscale filter group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
