"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Overview } from "@/components/dashboard/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Trophy, Calendar, BookOpen, Clock, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      
      <main className="container mx-auto pt-32 pb-12 px-6">
        {/* Welcome Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-medium text-primary mb-2">Welcome back, Alex</h1>
            <p className="text-lg text-muted-foreground italic serif">You've studied 42 hours this week. Making great progress!</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-3 pr-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit hand-drawn-border">
            <Avatar className="h-12 w-12 border-2 border-black">
              <AvatarImage src="https://picsum.photos/seed/alex/100/100" />
              <AvatarFallback>AX</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-black uppercase tracking-tighter text-primary">Level 12 Scholar</p>
              <div className="w-32 h-2 bg-muted rounded-full mt-1 border border-black/10 overflow-hidden">
                <div className="bg-accent h-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard icon={<Clock className="h-5 w-5" />} title="Focus Time" value="4.5h" trend="+12%" color="bg-[#D1E9FF]" />
          <StatCard icon={<Timer className="h-5 w-5" />} title="Sessions" value="8" trend="+2" color="bg-[#FFDBE6]" />
          <StatCard icon={<Trophy className="h-5 w-5" />} title="Streak" value="5 days" trend="New high!" color="bg-[#FFC107]" />
          <StatCard icon={<Calendar className="h-5 w-5" />} title="Completed" value="85%" trend="+5%" color="bg-[#DFFFD6]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <Overview />
            
            <section>
              <div className="flex items-center justify-between mb-8 border-b-2 border-black/5 pb-4">
                <h3 className="text-3xl font-medium text-primary italic">Recent Sessions</h3>
                <Button variant="link" className="text-primary font-bold uppercase text-xs tracking-widest">View History</Button>
              </div>
              <div className="space-y-6">
                <SessionRow subject="Advanced Mathematics" duration="45 min" time="2h ago" notes="Focused on calculus integration techniques." />
                <SessionRow subject="Molecular Biology" duration="25 min" time="5h ago" notes="Quick review of DNA replication steps." />
                <SessionRow subject="World History" duration="90 min" time="Yesterday" notes="Read chapters 4-6 for the upcoming midterm." />
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-10">
            <Card className="bg-[#4D7BFF] text-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(77,123,255,0.3)] hand-drawn-border overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="h-24 w-24" />
              </div>
              <CardHeader>
                <CardTitle className="serif italic text-3xl">Deep Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-8 text-lg font-medium">Ready to dive back in? Launch a quick 25-minute Pomodoro.</p>
                <Button variant="secondary" className="w-full font-black uppercase tracking-widest py-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[1px] transition-all" asChild>
                  <a href="/timer">Launch Study Timer</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-black hand-drawn-border bg-[#FCFBF5] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)]">
              <CardHeader>
                <CardTitle className="text-primary serif text-2xl">Upcoming Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <GoalItem title="Math Midterm Prep" progress={75} />
                <GoalItem title="History Essay Draft" progress={30} />
                <GoalItem title="Bio Lab Report" progress={90} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, title, value, trend, color }: { icon: React.ReactNode, title: string, value: string, trend: string, color: string }) {
  return (
    <Card className={`${color} border-2 border-black hand-drawn-border scribble-hover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/40 border border-black/10 rounded-lg">{icon}</div>
          <span className="text-[10px] font-black uppercase tracking-tighter px-2 py-1 bg-black/10 rounded-full">{trend}</span>
        </div>
        <p className="text-xs font-black uppercase tracking-widest text-black/60 mb-1">{title}</p>
        <p className="text-3xl font-bold text-black">{value}</p>
      </CardContent>
    </Card>
  );
}

function SessionRow({ subject, duration, time, notes }: { subject: string, duration: string, time: string, notes: string }) {
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] transition-all group hand-drawn-border">
      <div className="h-14 w-14 rounded-xl bg-[#FCFBF5] flex items-center justify-center text-primary border-2 border-black group-hover:scale-110 transition-transform">
        <BookOpen className="h-7 w-7" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-xl font-bold text-primary truncate">{subject}</h4>
          <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground truncate mb-2 italic serif">{notes}</p>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-foreground bg-accent px-3 py-1 rounded-full border border-black/20">{duration}</span>
      </div>
    </div>
  );
}

function GoalItem({ title, progress }: { title: string, progress: number }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs font-black uppercase tracking-widest">
        <span className="text-primary">{title}</span>
        <span className="text-muted-foreground">{progress}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full border border-black/10 overflow-hidden">
        <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
