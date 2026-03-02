"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, GraduationCap } from "lucide-react";

export default function LoginPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !isUserLoading) {
      router.push("/dashboard");
    }
  }, [user, isUserLoading, router]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-grid flex items-center justify-center p-6">
      <Card className="max-w-md w-full border-2 border-black hand-drawn-border bg-[#FCFBF5] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <CardHeader className="text-center pt-12 pb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent rounded-2xl border-2 border-black rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-4xl font-medium serif italic">Welcome Scholar</CardTitle>
          <CardDescription className="text-lg italic serif mt-2">
            The workspace that thinks with you.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-10 pb-12 space-y-8">
          <p className="text-center text-sm font-medium text-muted-foreground leading-relaxed">
            Join thousands of students who have mastered their focus with AcademiaFlow.
          </p>
          
          <Button 
            onClick={handleGoogleLogin}
            className="w-full h-14 bg-white hover:bg-gray-50 text-black border-2 border-black rounded-xl font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all flex gap-3"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50">
            <div className="h-[1px] flex-1 bg-black/10" />
            <span>Secure Access</span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          <div className="flex justify-center items-center gap-2 text-primary/60 hover:text-primary transition-colors cursor-default">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Master Your Mind</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
