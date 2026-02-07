"use client"
import { Avatar } from "@/components/ui/avatar"
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [menu, setMenu] = useState(1)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <div className={`w-full transition-all duration-300 ${scrolled ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
            <nav className="flex items-center justify-between w-full h-16 px-4 md:px-8">
                <Link onClick={() => setMenu(0)} href="/" className="">
                    <Avatar className="w-10 h-10 rounded-none">
                        <Image height={100} width={100} className={menu == 0 ? "shadow-inner shadow-slate-50" : ""} src="/head.gif" alt="Guru" />
                    </Avatar>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link onClick={() => setMenu(1)} href="/#about">
                        <h1 className={`text-sm font-mono transition-colors hover:text-white ${menu == 1 ? "text-white" : "text-zinc-400"}`}>about</h1>
                    </Link>
                    <Link onClick={() => setMenu(2)} href="/blog">
                        <h1 className={`text-sm font-mono transition-colors hover:text-white ${menu == 2 ? "text-white" : "text-zinc-400"}`}>blog</h1>
                    </Link>
                    <Link onClick={() => setMenu(3)} href="/talks">
                        <h1 className={`text-sm font-mono transition-colors hover:text-white ${menu == 3 ? "text-white" : "text-zinc-400"}`}>talks</h1>
                    </Link>
                    <Link onClick={() => setMenu(4)} href="/awards">
                        <h1 className={`text-sm font-mono transition-colors hover:text-white ${menu == 4 ? "text-white" : "text-zinc-400"}`}>awards</h1>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-zinc-400 hover:text-white" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#121212] border-b border-white/10">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link onClick={() => { setMenu(1); setIsMobileMenuOpen(false); }} href="/#about">
                            <h1 className={`text-sm font-mono ${menu == 1 ? "text-white" : "text-zinc-400"}`}>about</h1>
                        </Link>
                        <Link onClick={() => { setMenu(2); setIsMobileMenuOpen(false); }} href="/blog">
                            <h1 className={`text-sm font-mono ${menu == 2 ? "text-white" : "text-zinc-400"}`}>blog</h1>
                        </Link>
                        <Link onClick={() => { setMenu(3); setIsMobileMenuOpen(false); }} href="/talks">
                            <h1 className={`text-sm font-mono ${menu == 3 ? "text-white" : "text-zinc-400"}`}>talks</h1>
                        </Link>
                        <Link onClick={() => { setMenu(4); setIsMobileMenuOpen(false); }} href="/awards">
                            <h1 className={`text-sm font-mono ${menu == 4 ? "text-white" : "text-zinc-400"}`}>awards</h1>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
