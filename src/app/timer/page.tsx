"use client";

import { Navbar } from "@/components/layout/Navbar";
import { StudyTimer } from "@/components/timer/StudyTimer";
import { AIFocusTool } from "@/components/timer/AIFocusTool";
import { Card, CardContent } from "@/components/ui/card";
import { Info, HelpCircle } from "lucide-react";

export default function TimerPage() {
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      
      <main className="container mx-auto pt-32 pb-12 px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-5xl font-medium text-primary mb-2">Focus Mode</h1>
            <p className="text-lg text-muted-foreground italic serif">Eliminate distractions and enter your flow state.</p>
          </div>
          <div className="flex items-center gap-3 bg-accent p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-black uppercase tracking-widest hand-drawn-border">
            <Info className="h-5 w-5" />
            <span>Optimal focus: 25-50 min</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Timer Section */}
          <div className="lg:col-span-7">
            <StudyTimer />
          </div>

          {/* AI Assistance Section */}
          <div className="lg:col-span-5 space-y-10">
            <AIFocusTool />
            
            <Card className="border-2 border-black bg-white/80 hand-drawn-border shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)]">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-6 w-6 text-[#4D7BFF]" />
                  <h3 className="text-2xl font-medium text-primary serif italic">Study Wisdom</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Clear your physical workspace before starting.",
                    "Use noise-cancelling headphones for deep work.",
                    "Review your AI focus questions every 10 minutes.",
                    "Take physical breaks – stand up and stretch!"
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-4 text-sm font-medium text-muted-foreground leading-relaxed italic serif">
                      <span className="h-6 w-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center shrink-0 font-black">{i+1}</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
