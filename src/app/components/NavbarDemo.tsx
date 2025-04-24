"use client";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
} from "./ui/resizable-navbar";
// import { useState } from "react";
 
export function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "/project",
    },
    {
      name: "Certifications",
      link: "/certifications",
    },
  ];
 
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            <NavbarButton variant="primary" href="/contact">Contact</NavbarButton>
          </div>
        </NavBody>
        </Navbar>
        </div>
        )
    }
