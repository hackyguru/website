"use client"
import { Avatar } from "@/components/ui/avatar"
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
    { id: 1, href: "/#about", label: "about" },
    { id: 2, href: "/articles", label: "articles" },
    { id: 3, href: "/talks", label: "talks" },
    { id: 4, href: "/awards", label: "awards" },
]

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

    // Lock page scroll while the full-screen mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <div className={`w-full transition-all duration-300 border-b ${scrolled ? "bg-[#121212]/80 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"}`}>
            <nav className="relative z-50 flex items-center justify-between w-full h-16 px-4 md:px-8">
                <Link onClick={() => { setMenu(0); setIsMobileMenuOpen(false); }} href="/" className="">
                    <Avatar className="w-10 h-10 rounded-none">
                        <Image height={100} width={100} className={menu == 0 ? "shadow-inner shadow-slate-50" : ""} src="/head.gif" alt="Guru" />
                    </Avatar>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md shadow-lg shadow-black/20">
                    {links.map(({ id, href, label }) => (
                        <Link key={id} onClick={() => setMenu(id)} href={href}>
                            <h1 className={`text-sm font-mono transition-colors hover:text-white ${menu == id ? "text-white" : "text-zinc-400"}`}>{label}</h1>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button aria-label="Toggle menu" className="md:hidden text-zinc-200 hover:text-white" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu — full screen overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 bg-[#121212] md:hidden">
                    {links.map(({ id, href, label }) => (
                        <Link
                            key={id}
                            onClick={() => { setMenu(id); setIsMobileMenuOpen(false); }}
                            href={href}
                            className={`font-mono text-3xl transition-colors ${menu == id ? "text-white" : "text-zinc-400 hover:text-white"}`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
