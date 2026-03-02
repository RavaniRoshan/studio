"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser, useAuth } from "@/firebase";
import { signOut } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, BookText, Timer, LayoutDashboard } from "lucide-react";

export function Navbar() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-black/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="24" height="24" viewBox="0 0 24 24" className="doodle">
            <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"/>
            <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" strokeDasharray="2 4"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-primary">AcademiaFlow</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-black uppercase tracking-widest text-muted-foreground">
          <Link href="/dashboard" className="hover:text-black flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="/timer" className="hover:text-black flex items-center gap-2">
            <Timer className="h-4 w-4" />
            Focus Timer
          </Link>
          <Link href="/notebooks" className="hover:text-black flex items-center gap-2">
            <BookText className="h-4 w-4" />
            Notebooks
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isUserLoading ? (
            <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Avatar className="h-7 w-7 border border-black/10">
                  <AvatarImage src={user.photoURL || undefined} />
                  <AvatarFallback className="text-[10px] font-bold">
                    {user.displayName?.charAt(0) || user.email?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-[10px] font-black uppercase tracking-tighter hidden sm:inline">
                  {user.displayName?.split(" ")[0] || "Scholar"}
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleSignOut}
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" asChild className="hidden sm:flex text-xs font-bold uppercase tracking-wider">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="bg-black text-white rounded-xl px-6 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none">
                <Link href="/login">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
