import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, GraduationCap, Github, Twitter, Linkedin, Sparkles, BookOpen, Clock, Target, Users, Layout, Zap, Brain, PenTool, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Navbar } from "@/components/layout/Navbar";

export default function LandingPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-illustration');
  const featureImg = PlaceHolderImages.find(img => img.id === 'feature-main');
  const learnImg = PlaceHolderImages.find(img => img.id === 'learn-illustration');
  const teamImg = PlaceHolderImages.find(img => img.id === 'team-illustration');
  const footerImg = PlaceHolderImages.find(img => img.id === 'footer-illustration');

  const featureNavItems = [
    { label: 'Smart Notes', icon: <PenTool className="h-4 w-4" /> },
    { label: 'Flashcards', icon: <Brain className="h-4 w-4" /> },
    { label: 'Study Planner', icon: <Layout className="h-4 w-4" /> },
    { label: 'Task Flow', icon: <Zap className="h-4 w-4" /> },
    { label: 'AI Co-writer', icon: <PenTool className="h-4 w-4" /> },
    { label: 'Shared Notebooks', icon: <Share2 className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 overflow-hidden">
        <div className="container mx-auto flex flex-col items-center text-center relative">
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>
          
          <div className="inline-flex items-center gap-2 bg-white border border-border/50 px-4 py-2 rounded-full text-xs font-bold text-primary mb-12 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="tracking-tight">VERSION 2.0 IS NOW IN BETA</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-primary mb-8 max-w-5xl leading-[1]">
            Your academic journey, <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">reimagined</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-14 font-medium leading-relaxed">
            The all-in-one workspace where your notes, focus sessions, and AI-powered insights live in perfect harmony.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-24">
            <Button size="lg" className="bg-primary text-white rounded-full px-12 py-8 text-lg font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Start Studying Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-12 py-8 text-lg font-bold border-2 transition-all hover:bg-white hover:shadow-lg">
              Watch the Demo
            </Button>
          </div>

          <div className="w-full max-w-[700px] aspect-[4/3] relative group">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <Image 
              src={heroImg?.imageUrl || "https://picsum.photos/seed/think/400/300"} 
              alt="Thinking illustration"
              fill
              className="object-contain relative z-10"
              data-ai-hint="minimalist illustration"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-16 border-y border-border/30 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground/60 mb-10">Used at the world's leading institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Stanford', 'MIT', 'Oxford', 'Harvard', 'Berkeley'].map(uni => (
              <span key={uni} className="text-2xl font-bold tracking-tighter text-primary">{uni}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Feature Nav - Fixed Z-Index and Alignment */}
      <nav className="sticky top-20 z-40 bg-background/90 backdrop-blur-xl border-b border-border/40 py-4 shadow-sm overflow-x-auto no-scrollbar">
        <div className="container mx-auto flex justify-center gap-6 md:gap-10 px-4 min-w-max">
          {featureNavItems.map((item) => (
            <Link key={item.label} href="#" className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all relative group py-2">
              <span className="p-1.5 rounded-md bg-muted/50 group-hover:bg-accent/10 group-hover:text-accent-foreground transition-colors">
                {item.icon}
              </span>
              {item.label}
              <span className="absolute -bottom-4 left-0 w-0 h-1 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Feature Showcase */}
      <section className="py-40 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-bold text-primary mb-6">Focus deeper. Learn faster.</h2>
            <p className="text-xl text-muted-foreground font-medium">We've stripped away the noise so you can stay in the flow state longer than ever before.</p>
          </div>
          
          <div className="relative w-full max-w-6xl mx-auto aspect-[16/10] bg-white rounded-[3rem] p-4 md:p-8 overflow-hidden border border-border/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <div className="w-full h-full bg-muted/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row">
              <aside className="w-full md:w-72 bg-white border-r border-border/40 p-8 hidden md:block">
                <div className="space-y-6">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                  </div>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-3 bg-muted/50 rounded-full w-full"></div>
                  ))}
                  <div className="pt-12 space-y-4">
                    <div className="h-40 bg-accent/5 rounded-3xl border border-accent/10 flex items-center justify-center">
                      <Zap className="h-10 w-10 text-accent/40" />
                    </div>
                  </div>
                </div>
              </aside>
              <main className="flex-1 p-12 md:p-20 relative flex items-center justify-center bg-white/40">
                <Image 
                  src={featureImg?.imageUrl || "https://picsum.photos/seed/schematic/800/500"}
                  alt="Feature showcase"
                  fill
                  className="object-contain p-12 transition-all duration-1000 group-hover:scale-105"
                  data-ai-hint="technical drawing"
                />
              </main>
            </div>
          </div>
        </div>
      </section>

      {/* Split Feature */}
      <section className="py-40 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">Your notes, but with <span className="text-accent italic">superpowers</span>.</h2>
            <div className="space-y-10">
              <div className="group p-8 rounded-[2.5rem] bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-7 w-7 text-accent-foreground" />
                </div>
                <h4 className="font-bold text-2xl mb-3">Adaptive Spaced Repetition</h4>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">AcademiaFlow predicts which topics you're likely to forget and schedules mini-reviews exactly when you need them.</p>
              </div>
              <div className="group p-8 rounded-[2.5rem] bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h4 className="font-bold text-2xl mb-3">Instant AI Synthesis</h4>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">Turn hours of lecture recordings or pages of raw notes into structured, high-yield study guides with a single click.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square bg-[#f8f8f2] rounded-[4rem] p-16 border border-border/30 shadow-2xl overflow-hidden group">
             <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <Image 
              src={learnImg?.imageUrl || "https://picsum.photos/seed/learn/500/400"}
              alt="Learning illustration"
              fill
              className="object-contain p-16 transition-transform duration-1000 group-hover:scale-110"
              data-ai-hint="artistic sketch"
            />
          </div>
        </div>
      </section>

      {/* Cascading Cards */}
      <section className="py-40 px-4 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto text-center mb-32 relative z-10">
          <h2 className="text-5xl font-bold mb-8">Designed for the modern scholar</h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">We've reimagined every tool in the academic toolkit, stripping away complexity to leave only what matters.</p>
        </div>
        
        <div className="relative h-[900px] max-w-2xl mx-auto px-4">
          <TiltedCard 
            color="bg-white" 
            rotate="-6deg" 
            title="Mind Maps" 
            desc="Visualize the connections between complex concepts automatically from your notebook."
            top="top-0"
            zIndex="z-[10]"
          />
          <TiltedCard 
            color="bg-accent/10" 
            rotate="4deg" 
            title="AI Librarian" 
            desc="Search your personal knowledge base with natural language questions. Find anything in seconds."
            top="top-[200px]"
            zIndex="z-[9]"
          />
          <TiltedCard 
            color="bg-primary/5" 
            rotate="-3deg" 
            title="Session Timer" 
            desc="Optimized Pomodoro blocks synced with your class schedule and energy levels."
            top="top-[400px]"
            zIndex="z-[8]"
          />
          <TiltedCard 
            color="bg-white" 
            rotate="5deg" 
            title="Auto-Flashcards" 
            desc="Generated directly from your handwritten or typed notes using advanced OCR."
            top="top-[600px]"
            zIndex="z-[7]"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4">
        <div className="container mx-auto bg-primary rounded-[4rem] p-16 md:p-32 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-24 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)]">
          <div className="max-w-2xl relative z-10 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white leading-tight tracking-tight">Master your craft.</h2>
            <p className="text-2xl font-medium text-white/70 mb-16 leading-relaxed">Stop fighting your tools and start mastering your subjects. Join 50,000+ students already in the flow.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-16 py-10 text-xl font-bold shadow-xl">Get Started Free</Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-12 py-10 text-xl font-bold">See Pricing</Button>
            </div>
          </div>
          <div className="relative z-10 w-full max-w-md hidden lg:block">
            <div className="aspect-square relative scale-110">
              <Image 
                src={teamImg?.imageUrl || "https://picsum.photos/seed/team/600/300"}
                alt="Team collaborating"
                fill
                className="object-contain"
                data-ai-hint="people sketch"
              />
            </div>
          </div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-40 pb-20 px-4 bg-white border-t border-border/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-20 mb-32">
            <div className="col-span-2 space-y-10">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="font-black text-3xl tracking-tighter text-primary uppercase">AcademiaFlow</span>
              </div>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-sm">
                The ultimate workspace for the modern student. Built to support how you actually learn.
              </p>
              <div className="flex gap-6">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <div key={i} className="h-12 w-12 rounded-2xl bg-muted/50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>
            
            <FooterColumn title="Product" links={['Features', 'Templates', 'Integrations', 'Pricing', 'Security']} />
            <FooterColumn title="Resources" links={['Student Guide', 'Blog', 'Support Center', 'Community', 'Scholarships']} />
            <FooterColumn title="Company" links={['About', 'Our Mission', 'Careers', 'Press', 'Contact']} />
          </div>
          
          <div className="relative w-full h-40 mb-20 opacity-20 rounded-[3rem] overflow-hidden grayscale">
            <Image 
              src={footerImg?.imageUrl || "https://picsum.photos/seed/footer/1200/200"}
              alt="Footer doodle"
              fill
              className="object-cover"
              data-ai-hint="doodle pattern"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-border/30 text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">
            <span>© 2024 AcademiaFlow Inc.</span>
            <div className="flex gap-12">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-8">
      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary/40">{title}</h4>
      <ul className="space-y-5">
        {links.map(link => (
          <li key={link}>
            <Link href="#" className="text-base font-bold text-muted-foreground hover:text-primary transition-colors">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TiltedCard({ color, rotate, title, desc, top, zIndex }: { color: string, rotate: string, title: string, desc: string, top: string, zIndex: string }) {
  return (
    <div 
      className={`absolute ${top} left-1/2 -translate-x-1/2 w-full max-w-xl aspect-[16/9] rounded-[3.5rem] ${color} p-14 flex flex-col justify-between border border-border/40 shadow-2xl tilted-card ${zIndex} transition-all duration-500 hover:rotate-0 hover:-translate-y-4`}
      style={{ transform: `translateX(-50%) rotate(${rotate})` }}
    >
      <div className="flex justify-between items-start">
        <div className="h-16 w-16 bg-accent/20 rounded-2xl flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-accent-foreground" />
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(i => <div key={i} className="h-2.5 w-2.5 rounded-full bg-border"></div>)}
        </div>
      </div>
      <div>
        <h4 className="text-4xl font-bold mb-4 tracking-tight">{title}</h4>
        <p className="text-lg font-medium opacity-60 leading-relaxed max-w-md">{desc}</p>
      </div>
    </div>
  );
}
