'use client';

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { Mail, Home } from 'lucide-react'

export default function Navbar() {
    return (
        <main>
            <div className="relative isolate overflow-hidden bg-gray-900 pt-12 pb-6 mb-8">
                <img
                    src="https://images.pexels.com/photos/2909261/pexels-photo-2909261.jpeg"
                    alt="Image Fail to Load"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />

                <div className="mx-auto text-center mb-4">
                    <h2 className="text-4xl font-bold text-white mb-8">CFA</h2>
                    <p className="text-lg text-gray-300">知识点总结</p>
                </div>

                <nav className="flex justify-center space-x-4 font-medium">
                    <Link href="/episodes" className={buttonVariants({ variant: "secondary" })} ><Home className="mr-2 h-4 w-4" />主页</Link>
                    <Link href="/" className={buttonVariants({ variant: "secondary" })} >订阅收听</Link>
                    <Link href="mailto:lanxirye@gmail.com" className={buttonVariants({ variant: "secondary" })} ><Mail className="mr-2 h-4 w-4" />联系我们</Link>
                </nav>
            </div>




        </main>
    )
}