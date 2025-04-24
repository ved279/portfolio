"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-[50px]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="text-center md:text-left">
          <p className="font-semibold">Connect with me</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <a href="mailto:vsrvedant@gmail.com" className="hover:underline">
              vsrvedant@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <a href="tel:+911234567890" className="hover:underline">
              +91 6269074560
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github size={20} />
            <Link href="https://github.com/ved0010" className="hover:underline" target="_blank">
              GitHub
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={20} />
            <Link href="https://linkedin.com/in/vedant10" className="hover:underline" target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
