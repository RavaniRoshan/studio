"use client";

import { useState } from "react";
import { Sparkles, Loader2, ListChecks, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateFocusQuestions } from "@/ai/flows/generate-focus-questions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SUBJECTS = ["Mathematics", "Biology", "History", "Physics", "Literature", "Chemistry", "Computer Science", "Economics"];

export function AIFocusTool() {
  const [subject, setSubject] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!subject) return;
    setIsLoading(true);
    try {
      const result = await generateFocusQuestions({ subject });
      setQuestions(result.focusedQuestions);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-2 border-black bg-accent/20 backdrop-blur-sm hand-drawn-border shadow-[8px_8px_0px_0px_rgba(255,193,7,0.3)]">
      <CardHeader>
        <div className="flex items-center gap-3 mb-1">
          <Sparkles className="h-6 w-6 text-primary" />
          <CardTitle className="text-3xl font-medium serif italic">Focus Prep</CardTitle>
        </div>
        <CardDescription className="italic serif text-md">AI-powered clarity for your next session.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 mb-8">
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger className="rounded-xl border-2 border-black bg-white font-bold text-[10px] uppercase tracking-widest h-12">
              <SelectValue placeholder="WHAT ARE YOU STUDYING?" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((s) => (
                <SelectItem key={s} value={s}>{s.toUpperCase()}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            onClick={handleGenerate} 
            disabled={!subject || isLoading}
            className="bg-black hover:bg-gray-800 text-white rounded-xl h-12 font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "GENERATE STUDY GUIDE"}
          </Button>
        </div>

        {questions.length > 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary flex items-center gap-3 border-b-2 border-black/5 pb-2">
              <ListChecks className="h-5 w-5" />
              Key Focus Areas:
            </h4>
            <div className="grid gap-3">
              {questions.map((q, i) => (
                <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-white border-2 border-black hover:translate-x-1 transition-transform hand-drawn-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                  <ArrowRightCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-md text-primary font-medium italic serif leading-tight">{q}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
