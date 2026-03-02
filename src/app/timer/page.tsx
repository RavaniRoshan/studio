
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { StudyTimer } from "@/components/timer/StudyTimer";
import { AIFocusTool } from "@/components/timer/AIFocusTool";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function TimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto pt-24 pb-12 px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Focus Mode</h1>
            <p className="text-muted-foreground">Eliminate distractions and get things done.</p>
          </div>
          <div className="flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
            <Info className="h-4 w-4" />
            <span>Optimal focus block: 25-50 minutes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Timer Section */}
          <div className="lg:col-span-7">
            <StudyTimer />
          </div>

          {/* AI Assistance Section */}
          <div className="lg:col-span-5 space-y-8">
            <AIFocusTool />
            
            <Card className="border-primary/5 bg-white/50">
              <CardContent className="pt-6">
                <h3 className="font-bold text-primary mb-4">Study Tips</h3>
                <ul className="space-y-4">
                  {[
                    "Clear your physical workspace before starting.",
                    "Use noise-cancelling headphones for deep work.",
                    "Review your AI focus questions every 10 minutes.",
                    "Take physical breaks – stand up and stretch!"
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center shrink-0 font-bold">{i+1}</span>
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
