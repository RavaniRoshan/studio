
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Overview } from "@/components/dashboard/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Trophy, Calendar, BookOpen, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto pt-24 pb-12 px-4">
        {/* Welcome Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-1">Welcome back, Alex</h1>
            <p className="text-muted-foreground">You've studied 42 hours this week. Keep it up!</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border shadow-sm w-fit">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://picsum.photos/seed/alex/100/100" />
              <AvatarFallback>AX</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-semibold text-primary">Level 12 Scholar</p>
              <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="bg-accent h-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard icon={<Clock />} title="Focus Time" value="4.5h" trend="+12%" />
          <StatCard icon={<Timer />} title="Sessions" value="8" trend="+2" />
          <StatCard icon={<Trophy />} title="Streak" value="5 days" trend="New high!" />
          <StatCard icon={<Calendar />} title="Completed" value="85%" trend="+5%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            <Overview />
            
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary">Recent Sessions</h3>
                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5">View All</Button>
              </div>
              <div className="space-y-4">
                <SessionRow subject="Advanced Mathematics" duration="45 min" time="2h ago" notes="Focused on calculus integration techniques." />
                <SessionRow subject="Molecular Biology" duration="25 min" time="5h ago" notes="Quick review of DNA replication steps." />
                <SessionRow subject="World History" duration="90 min" time="Yesterday" notes="Read chapters 4-6 for the upcoming midterm." />
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Plus className="h-24 w-24" />
              </div>
              <CardHeader>
                <CardTitle>Quick Start</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80 mb-6 text-sm">Ready to dive back in? Launch a quick 25-minute Pomodoro.</p>
                <Button variant="secondary" className="w-full font-bold" asChild>
                  <a href="/timer">Launch Study Timer</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-primary">Upcoming Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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

function StatCard({ icon, title, value, trend }: { icon: React.ReactNode, title: string, value: string, trend: string }) {
  return (
    <Card className="border-primary/5 hover:border-primary/20 transition-all shadow-sm">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 bg-primary/5 text-primary rounded-lg">{icon}</div>
          <span className="text-xs font-medium text-accent-foreground px-2 py-0.5 bg-accent/20 rounded-full">{trend}</span>
        </div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-primary">{value}</p>
      </CardContent>
    </Card>
  );
}

function SessionRow({ subject, duration, time, notes }: { subject: string, duration: string, time: string, notes: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border hover:shadow-md transition-all group">
      <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center text-primary border border-primary/10 group-hover:scale-110 transition-transform">
        <BookOpen className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-primary truncate">{subject}</h4>
          <span className="text-xs text-muted-foreground font-medium">{time}</span>
        </div>
        <p className="text-xs text-muted-foreground truncate mb-1">{notes}</p>
        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-foreground bg-accent/10 px-2 py-0.5 rounded-md">{duration}</span>
      </div>
    </div>
  );
}

function GoalItem({ title, progress }: { title: string, progress: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-semibold">
        <span className="text-primary">{title}</span>
        <span className="text-muted-foreground">{progress}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
