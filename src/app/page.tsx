
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Timer, BarChart3, BookOpen, Sparkles, CheckCircle2, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function LandingPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col items-center text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-primary font-medium text-sm mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Study Sessions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6">
            Master Your Focus, <br />
            <span className="text-accent-foreground italic">Achieve More.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
            AcademiaFlow is the all-in-one productivity suite for students. Track sessions, visualize progress, and use AI to guide your focus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" asChild className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
              <Link href="/signup" className="flex items-center gap-2">
                Start Free Session <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5">
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
          
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src={heroImg?.imageUrl || "https://picsum.photos/seed/hero/1200/800"} 
              alt="AcademiaFlow Dashboard Preview" 
              fill
              className="object-cover"
              data-ai-hint="clean workspace"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Everything You Need to Excel</h2>
            <p className="text-muted-foreground">Designed by students, for students who value their time.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Timer className="h-8 w-8 text-primary" />}
              title="Customizable Timers"
              description="Flexible Pomodoro-style timers with adjustable work and break intervals to fit your flow."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Subject Logging"
              description="Track time across all your courses. Tag sessions with subjects and add key takeaways."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-8 w-8 text-primary" />}
              title="Progress Insights"
              description="Beautiful visualizations show you exactly where your hours are going each week."
            />
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary mb-6">Never Start a Session <br />Unprepared.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our GenAI tool analyzes your subject and suggests 5-7 focused questions to guide your attention before you even hit 'Start'.
            </p>
            <ul className="space-y-4 mb-8">
              {['Smart subject analysis', 'Personalized focus questions', 'Instant session guidance'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-medium text-primary">{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full">Explore AI Features</Button>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-accent" />
                <h3 className="font-bold text-xl">AI Focus Suggestions</h3>
              </div>
              <div className="space-y-4">
                {[
                  "What are the three main causes of the French Revolution?",
                  "How do cell membranes regulate transport?",
                  "Define the core principles of supply and demand."
                ].map((q, i) => (
                  <div key={i} className="p-4 bg-background rounded-xl border border-dashed border-primary/20 text-muted-foreground text-sm italic">
                    "{q}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-primary">AcademiaFlow</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Contact</Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 AcademiaFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-background border border-primary/5 hover:border-primary/20 transition-all hover:shadow-lg group">
      <div className="mb-6 p-4 rounded-2xl bg-white w-fit shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
