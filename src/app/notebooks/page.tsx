"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { useUser, useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collection, serverTimestamp, doc } from "firebase/firestore";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Plus, BookText, Search, Clock, ChevronRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default function NotebooksPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [searchQuery, setSearchQuery] = useState("");

  const notesQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return collection(firestore, "users", user.uid, "notes");
  }, [firestore, user]);

  const { data: notes, isLoading: isNotesLoading } = useCollection(notesQuery);

  const handleCreateNote = () => {
    if (!firestore || !user) return;
    const notesRef = collection(firestore, "users", user.uid, "notes");
    const newNote = {
      userId: user.uid,
      title: "Untitled Note",
      content: "",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    addDocumentNonBlocking(notesRef, newNote);
  };

  const filteredNotes = notes?.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  if (isUserLoading) return null;

  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      
      <main className="container mx-auto pt-32 pb-12 px-6 max-w-6xl">
        <header className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-5xl font-medium text-primary mb-2">My Notebooks</h1>
            <p className="text-lg text-muted-foreground italic serif">Your digital second brain, organized and accessible.</p>
          </div>
          <Button 
            onClick={handleCreateNote}
            className="bg-primary text-white hover:bg-gray-800 rounded-xl px-8 h-14 font-black uppercase tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all flex gap-3"
          >
            <Plus className="h-5 w-5" />
            New Note
          </Button>
        </header>

        <div className="mb-12 relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH YOUR BRAIN..." 
            className="pl-12 h-14 rounded-2xl border-2 border-black bg-white/50 backdrop-blur-sm font-bold uppercase tracking-widest text-xs focus:ring-accent"
          />
        </div>

        {isNotesLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-accent" />
          </div>
        ) : filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white/30 backdrop-blur-sm rounded-3xl border-2 border-dashed border-black/20 flex flex-col items-center">
            <BookText className="h-16 w-16 text-muted-foreground mb-6 opacity-20" />
            <h3 className="text-2xl font-medium serif italic text-muted-foreground mb-2">No notes found</h3>
            <p className="text-muted-foreground serif italic">Start capturing your thoughts by creating a new note.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function NoteCard({ note }: { note: any }) {
  const lastUpdated = note.updatedAt?.toDate ? note.updatedAt.toDate() : new Date();

  return (
    <Link href={`/notebooks/${note.id}`}>
      <Card className="group h-full border-2 border-black hand-drawn-border bg-white scribble-hover shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-accent/20 rounded-lg border border-black/5 group-hover:bg-accent transition-colors">
              <BookText className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest text-muted-foreground">
              <Clock className="h-3 w-3" />
              {formatDistanceToNow(lastUpdated)} ago
            </div>
          </div>
          <CardTitle className="text-xl font-bold truncate group-hover:text-moxie-blue transition-colors">{note.title || "Untitled"}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 italic serif mb-6">
            {note.content || "No content yet..."}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-black/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Open Note</span>
            <ChevronRight className="h-4 w-4 text-primary/40 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
