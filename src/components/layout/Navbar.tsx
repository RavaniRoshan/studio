"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex-1">
          {/* Menu icon or left spacer */}
        </div>

        <Link href="/" className="flex items-center gap-2 group">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">AcademiaFlow</span>
        </Link>

        <div className="flex-1 flex justify-end items-center gap-4">
          <Button variant="ghost" asChild className="hidden sm:flex text-sm font-semibold">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="bg-primary text-white rounded-full px-6 font-semibold">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}