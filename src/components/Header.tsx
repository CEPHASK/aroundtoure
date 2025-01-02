"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navItems } from "@/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          asChild
          onClick={() => setIsOpen(false)}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="w-full bg-black shadow-sm text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white sm:text-2xl">
              Logo
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <NavItems />
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
