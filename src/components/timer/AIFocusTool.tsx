
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
    <Card className="border-accent/30 bg-accent/5 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-5 w-5 text-accent-foreground" />
          <CardTitle className="text-primary">Focus Prep</CardTitle>
        </div>
        <CardDescription>Get AI-powered focus questions for your session.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger className="rounded-xl border-accent/20 bg-white">
              <SelectValue placeholder="What are you studying?" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            onClick={handleGenerate} 
            disabled={!subject || isLoading}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Guide Me"}
          </Button>
        </div>

        {questions.length > 0 && (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-4 duration-500">
            <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              Key Focus Areas:
            </h4>
            <div className="grid gap-2">
              {questions.map((q, i) => (
                <div key={i} className="group flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-accent/10 hover:border-accent/40 transition-colors">
                  <ArrowRightCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{q}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
