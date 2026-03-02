
"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Coffee, BookOpen, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const SUBJECTS = ["Mathematics", "Biology", "History", "Physics", "Literature", "Chemistry"];

export function StudyTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"study" | "break">("study");
  const [selectedSubject, setSelectedSubject] = useState("");
  const { toast } = useToast();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalTime = mode === "study" ? 25 * 60 : 5 * 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      handleTimerComplete();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleTimerComplete = () => {
    const message = mode === "study" ? "Session complete! Time for a break." : "Break over! Ready to focus?";
    toast({
      title: "Timer Finished",
      description: message,
    });
    // In a real app, play a subtle sound here
  };

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "study" ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="max-w-md mx-auto shadow-xl border-primary/10 bg-white/50 backdrop-blur-sm overflow-hidden">
      <CardHeader className="text-center">
        <div className="flex justify-center gap-2 mb-4">
          <Button 
            variant={mode === "study" ? "default" : "ghost"} 
            size="sm" 
            onClick={() => { setMode("study"); setTimeLeft(25 * 60); setIsActive(false); }}
            className="rounded-full"
          >
            Study Session
          </Button>
          <Button 
            variant={mode === "break" ? "default" : "ghost"} 
            size="sm" 
            onClick={() => { setMode("break"); setTimeLeft(5 * 60); setIsActive(false); }}
            className="rounded-full"
          >
            Short Break
          </Button>
        </div>
        <CardTitle className="text-primary flex items-center justify-center gap-2">
          {mode === "study" ? <BookOpen className="h-5 w-5" /> : <Coffee className="h-5 w-5" />}
          {mode === "study" ? "Deep Work" : "Rest & Recharge"}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center pb-8">
        <div className="relative w-64 h-64 flex items-center justify-center mb-8">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted"
            />
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={753.6}
              strokeDashoffset={753.6 - (753.6 * progress) / 100}
              className={cn("timer-ring", mode === "study" ? "text-primary" : "text-accent")}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold tabular-nums text-primary">{formatTime(timeLeft)}</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest mt-1">
              {isActive ? "Flowing" : "Paused"}
            </span>
          </div>
        </div>

        {mode === "study" && (
          <div className="w-full space-y-4 mb-8">
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full rounded-xl bg-background border-primary/20">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {SUBJECTS.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex gap-4">
          <Button size="icon" variant="outline" onClick={resetTimer} className="h-12 w-12 rounded-full border-primary/20 hover:bg-primary/5">
            <RotateCcw className="h-5 w-5 text-primary" />
          </Button>
          <Button size="icon" onClick={toggleTimer} className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            {isActive ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white ml-1" />}
          </Button>
          <Button size="icon" variant="outline" className="h-12 w-12 rounded-full border-primary/20 hover:bg-primary/5">
            <Bell className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
