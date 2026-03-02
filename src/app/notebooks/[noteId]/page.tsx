"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc, serverTimestamp } from "firebase/firestore";
import { updateDocumentNonBlocking, deleteDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Trash2, Clock, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default function NoteDetailPage() {
  const { noteId } = useParams() as { noteId: string };
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  const noteRef = useMemoFirebase(() => {
    if (!firestore || !user || !noteId) return null;
    return doc(firestore, "users", user.uid, "notes", noteId);
  }, [firestore, user, noteId]);

  const { data: note, isLoading: isNoteLoading } = useDoc(noteRef);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setContent(note.content || "");
    }
  }, [note]);

  const handleSave = () => {
    if (!noteRef) return;
    setIsSaving(true);
    updateDocumentNonBlocking(noteRef, {
      title,
      content,
      updatedAt: serverTimestamp(),
    });
    // Visual feedback
    setTimeout(() => setIsSaving(false), 800);
  };

  const handleDelete = () => {
    if (!noteRef) return;
    if (confirm("Are you sure you want to delete this note? This action cannot be undone.")) {
      deleteDocumentNonBlocking(noteRef);
      router.push("/notebooks");
    }
  };

  if (isUserLoading || isNoteLoading) {
    return (
      <div className="min-h-screen bg-grid flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-accent" />
      </div>
    );
  }

  if (!note && !isNoteLoading) {
    return (
      <div className="min-h-screen bg-grid">
        <Navbar />
        <main className="container mx-auto pt-32 px-6 text-center">
          <h1 className="text-4xl serif italic mb-4">Note not found</h1>
          <Button asChild variant="outline">
            <Link href="/notebooks">Return to Notebooks</Link>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      
      <main className="container mx-auto pt-32 pb-12 px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" asChild className="text-xs font-black uppercase tracking-widest gap-2">
            <Link href="/notebooks">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={handleDelete}
              className="border-2 border-black rounded-xl hover:bg-destructive hover:text-destructive-foreground transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-primary text-white hover:bg-gray-800 rounded-xl px-6 font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all flex gap-2"
            >
              {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Save
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] overflow-hidden hand-drawn-border min-h-[600px] flex flex-col">
          <div className="p-8 border-b-2 border-black/5 bg-accent/5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex-1">
              <Input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="NOTE TITLE..."
                className="text-4xl font-medium serif italic bg-transparent border-none p-0 focus-visible:ring-0 placeholder:opacity-20 h-auto"
              />
              <div className="flex items-center gap-4 mt-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Edited {note.updatedAt?.toDate ? format(note.updatedAt.toDate(), "MMM d, yyyy 'at' h:mm a") : "Just now"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-widest">Co-Writer Active</span>
            </div>
          </div>

          <div className="flex-1 p-8 bg-lined">
            <Textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your thoughts here..."
              className="w-full h-full min-h-[400px] text-lg leading-relaxed serif italic bg-transparent border-none p-0 focus-visible:ring-0 resize-none placeholder:opacity-20"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center opacity-30">
          <div className="flex gap-10 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground">
            <span>Thoughts</span>
            <span>Reflections</span>
            <span>Ideas</span>
          </div>
        </div>
      </main>
    </div>
  );
}
