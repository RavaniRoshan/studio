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
    <Card className="max-w-md mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-white hand-drawn-border overflow-hidden">
      <CardHeader className="text-center pt-8">
        <div className="flex justify-center gap-4 mb-6">
          <Button 
            variant={mode === "study" ? "default" : "ghost"} 
            size="sm" 
            onClick={() => { setMode("study"); setTimeLeft(25 * 60); setIsActive(false); }}
            className={cn("rounded-full px-6 font-black uppercase text-[10px] tracking-widest border-2 border-black", mode === "study" ? "bg-black text-white" : "bg-transparent")}
          >
            Study Session
          </Button>
          <Button 
            variant={mode === "break" ? "default" : "ghost"} 
            size="sm" 
            onClick={() => { setMode("break"); setTimeLeft(5 * 60); setIsActive(false); }}
            className={cn("rounded-full px-6 font-black uppercase text-[10px] tracking-widest border-2 border-black", mode === "break" ? "bg-black text-white" : "bg-transparent")}
          >
            Short Break
          </Button>
        </div>
        <CardTitle className="text-primary serif italic text-3xl flex items-center justify-center gap-3">
          {mode === "study" ? <BookOpen className="h-6 w-6" /> : <Coffee className="h-6 w-6" />}
          {mode === "study" ? "Deep Work" : "Rest & Recharge"}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center pb-12">
        <div className="relative w-72 h-72 flex items-center justify-center mb-10">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="144"
              cy="144"
              r="130"
              fill="transparent"
              stroke="#F3F4F6"
              strokeWidth="12"
            />
            <circle
              cx="144"
              cy="144"
              r="130"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="12"
              strokeDasharray={816.4}
              strokeDashoffset={816.4 - (816.4 * progress) / 100}
              className={cn("transition-all duration-500", mode === "study" ? "text-[#4D7BFF]" : "text-[#FFC107]")}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-6xl font-black tabular-nums tracking-tighter text-primary">{formatTime(timeLeft)}</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mt-2">
              {isActive ? "Flowing" : "Paused"}
            </span>
          </div>
        </div>

        {mode === "study" && (
          <div className="w-full max-w-xs space-y-4 mb-10">
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full rounded-xl bg-[#FCFBF5] border-2 border-black font-bold uppercase tracking-widest text-[10px]">
                <SelectValue placeholder="CHOOSE SUBJECT" />
              </SelectTrigger>
              <SelectContent>
                {SUBJECTS.map((s) => (
                  <SelectItem key={s} value={s}>{s.toUpperCase()}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex gap-6 items-center">
          <Button size="icon" variant="outline" onClick={resetTimer} className="h-14 w-14 rounded-full border-2 border-black hover:bg-black/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            <RotateCcw className="h-6 w-6 text-primary" />
          </Button>
          <Button size="icon" onClick={toggleTimer} className="h-20 w-20 rounded-full bg-black text-white hover:bg-gray-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
            {isActive ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10 ml-2" />}
          </Button>
          <Button size="icon" variant="outline" className="h-14 w-14 rounded-full border-2 border-black hover:bg-black/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            <Bell className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
