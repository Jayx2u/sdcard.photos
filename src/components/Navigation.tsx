"use client"
import React from 'react';
import Link from 'next/link';
import { Moon, Sun, /*Menu*/ } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from "@/components/ui/button";
/*import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"*/

export function Navigation() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="fix top0 left-0 right-0 z-50 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/guides" className="text-sm font-medium">
            Guides
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="ml-4"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}