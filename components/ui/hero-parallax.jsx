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
        useTransform(scrollYProgress, [0, 0.2], [0, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [1, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-50, 50]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="py-20 w-full antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    opacity,
                }}
                className="mt-20"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-10 space-x-20 ">
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
        <div className="max-w-7xl relative mx-auto pt-20 md:py-20 px-4 w-full  left-0 top-0">
            
            <h1 className="text-3xl md:text-5xl font-bold dark:text-white">
            <Scramble  text="@hackyguru" />
            </h1>

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
            <div className="max-w-4xl text-lg md:text-xl dark:text-white opacity-60 hidden  md:flex space-x-3 items-center font-sans font-normal">
            <MapPin />
            <h1>
                london / cyberspace
                </h1>
            </div>
            </div>
            
            <div className="max-w-4xl text-lg md:text-xl dark:text-white opacity-60 md:hidden  flex space-x-3 items-center mt-5 font-sans font-normal">
            <MapPin />
            <h1>
                london / cyberspace
                </h1>
            </div>

            <div className=" text-lg md:text-xl mt-10 text-zinc-400 leading-relaxed md:flex hidden font-sans font-normal">
                i&apos;m leading developer relations at <a className="ml-2 flex space-x-2 items-center text-white" href="https://logos.co"><div className="h-[1.5em] w-[1.5em] relative"><Image alt="logos" fill className="object-contain" src="/logos.svg" /></div>Logos</a>
            </div>
            
            <div className="max-w-4xl text-lg md:text-xl mt-10 md:mt-4 text-zinc-400 leading-relaxed font-sans font-normal">
            i  work on the lines of privacy, web3 and artificial intelligence. i believe in empathy - both in technology and life. i also invest in early-stage startups as a partner at <a className="ml-2 inline-flex space-x-2 items-center text-white align-middle" href="https://www.beryl.vc/"><div className="h-[1.5em] w-[1.5em] relative"><Image alt="beryl vc" fill className="object-contain" src="/walletconnect.svg" /></div><span>Beryl VC</span></a>
            </div>

            <div className="max-w-4xl text-lg md:text-xl mt-10 md:mt-4 text-zinc-400 leading-relaxed font-sans font-normal">
            coding for 10+ years. computer engineer, post-graduate in finance and computing.
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
               
            }}
            key={product.title}
            className="group/product h-52 w-[18rem] md:h-96 md:w-[30rem] relative flex-shrink-0 grainy overflow-hidden"
        >

            <Image
                src={product.thumbnail}
                priority="true"
                loop="infinite"
                width="400"
                height="300"
                className="object-cover grayscale hover:grayscale-0 object-left-top  h-full w-full inset-0"
                alt={product.title}
            />
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-30 grayscale bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 grayscale filter group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
