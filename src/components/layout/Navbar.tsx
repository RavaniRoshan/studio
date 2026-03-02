
"use client";

import Link from "next/link";
import { GraduationCap, Timer, LayoutDashboard, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
            <GraduationCap className="h-6 w-6 text-primary-foreground group-hover:text-accent-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">AcademiaFlow</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/timer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Study Timer</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
