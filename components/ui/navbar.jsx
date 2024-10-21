"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React, {useState} from 'react'
import { HoverBorderGradient } from './hover-border-gradient'
import Link from "next/link"
import { Button } from "./button"
import Image from "next/image"



export default function Navbar() {
        const [menu, setMenu] = useState(1)
    return (
        <>
            <HoverBorderGradient
                containerClassName="rounded-none"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 z-50tele"
            >
                <div className='flex space-x-5 items-center'>
                <Link onClick={() => setMenu(0)} href="/">
                    <Avatar className="w-16 h-16 rounded-none">
                        <Image height={100} width={100} className={menu == 0?"shadow-inner shadow-slate-50":""} src="/head.gif" />
                    </Avatar>
                    </Link>

                    <nav className="flex space-x-5 items-center">
                    <Link onClick={() => setMenu(1)} href="/">
                    <h1 className={menu == 1 ? "":"opacity-70"}>about</h1>
                    </Link>
                    <Link onClick={() => setMenu(2)} href="/blog">
                    <h1 className={menu == 2 ? "":"opacity-70"}>blog</h1>
                    </Link>
                    <Link onClick={() => setMenu(3)} href="/talks">
                    <h1 className={menu == 3 ? "":"opacity-70"}>talks</h1>
                    </Link>
                    <Link onClick={() => setMenu(4)} href="/awards">
                    <h1 className={menu == 4 ? "":"opacity-70"}>awards</h1>
                    </Link>
                    </nav>
                </div>
            </HoverBorderGradient>
        </>
    )
}
