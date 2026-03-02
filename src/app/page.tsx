import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, GraduationCap, Github, Twitter, Linkedin, Sparkles, BookOpen, Clock, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Navbar } from "@/components/layout/Navbar";

export default function LandingPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-illustration');
  const featureImg = PlaceHolderImages.find(img => img.id === 'feature-main');
  const learnImg = PlaceHolderImages.find(img => img.id === 'learn-illustration');
  const teamImg = PlaceHolderImages.find(img => img.id === 'team-illustration');
  const footerImg = PlaceHolderImages.find(img => img.id === 'footer-illustration');

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-xs font-bold text-accent-foreground mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="h-3 w-3" />
            <span>POWERED BY ACADEMIC AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-8 max-w-4xl leading-[1.1]">
            Your academic journey, <span className="text-accent underline decoration-accent/30 underline-offset-8">organized</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-medium">
            AcademiaFlow is the all-in-one workspace where your notes, focus sessions, and AI-powered insights live in perfect harmony.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button size="lg" className="bg-primary text-white rounded-full px-10 py-7 text-base font-bold shadow-xl shadow-primary/10 transition-all hover:scale-105 hover:shadow-primary/20">
              Start Studying Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-base font-bold border-2 transition-all hover:bg-muted/50">
              Watch Demo
            </Button>
          </div>

          <div className="w-full max-w-[600px] aspect-[4/3] relative">
            <Image 
              src={heroImg?.imageUrl || "https://picsum.photos/seed/think/400/300"} 
              alt="Thinking illustration"
              fill
              className="object-contain"
              data-ai-hint="minimalist illustration"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-12 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-8">Trusted by students from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            <span className="text-xl font-bold">Stanford</span>
            <span className="text-xl font-bold">MIT</span>
            <span className="text-xl font-bold">Oxford</span>
            <span className="text-xl font-bold">Harvard</span>
            <span className="text-xl font-bold">Berkeley</span>
          </div>
        </div>
      </div>

      {/* Feature Nav */}
      <nav className="py-8 sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border/30 overflow-x-auto no-scrollbar">
        <div className="container mx-auto flex justify-center gap-8 md:gap-12 px-4 min-w-max">
          {['Smart Notes', 'Flashcards', 'Study Planner', 'Task Flow', 'AI Co-writer', 'Shared Notebooks'].map((item) => (
            <Link key={item} href="#" className="text-sm font-bold text-muted-foreground hover:text-primary transition-all relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Feature Showcase */}
      <section className="py-32 px-4 bg-white/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Deep work, simplified.</h2>
          <p className="text-muted-foreground mb-16 max-w-lg mx-auto font-medium">A workspace designed to keep you in the flow state longer.</p>
          
          <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] bg-muted/30 rounded-[2.5rem] p-4 md:p-8 overflow-hidden border border-border/20 shadow-2xl">
            <div className="w-full h-full bg-white rounded-[2rem] shadow-inner overflow-hidden flex flex-col md:flex-row">
              <aside className="w-full md:w-64 bg-muted/10 border-r border-border/50 p-6 hidden md:block">
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-4 bg-muted/40 rounded-full w-full"></div>
                  ))}
                  <div className="pt-8 space-y-2">
                    <div className="h-32 bg-accent/5 rounded-2xl border border-accent/10"></div>
                  </div>
                </div>
              </aside>
              <main className="flex-1 p-8 md:p-12 relative flex items-center justify-center">
                <Image 
                  src={featureImg?.imageUrl || "https://picsum.photos/seed/schematic/800/500"}
                  alt="Feature showcase"
                  fill
                  className="object-contain p-8 md:p-16"
                  data-ai-hint="technical drawing"
                />
              </main>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            <FeatureItem 
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Semantic Organization"
              desc="Our AI automatically links related topics across different subjects and years."
            />
            <FeatureItem 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Focus Analytics"
              desc="Understand your peak performance hours with detailed study session tracking."
            />
            <FeatureItem 
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Peer Collaboration"
              desc="Join study circles and contribute to community notebooks in real-time."
            />
          </div>
        </div>
      </section>

      {/* Split Feature */}
      <section className="py-32 px-4 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Your notes, but with <span className="text-accent italic">superpowers</span>.</h2>
            <div className="space-y-8">
              <div className="p-6 rounded-3xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Smart Recall
                </h4>
                <p className="text-muted-foreground leading-relaxed">AcademiaFlow predicts which topics you're likely to forget and schedules mini-reviews.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  AI Synthesis
                </h4>
                <p className="text-muted-foreground leading-relaxed">Turn long lecture recordings into structured study guides with one click.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square bg-[#f5f5ed] rounded-[3rem] p-12 border border-border/20 shadow-xl overflow-hidden group">
             <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <Image 
              src={learnImg?.imageUrl || "https://picsum.photos/seed/learn/500/400"}
              alt="Learning illustration"
              fill
              className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
              data-ai-hint="artistic sketch"
            />
          </div>
        </div>
      </section>

      {/* Cascading Cards */}
      <section className="py-32 px-4 bg-muted/10">
        <div className="container mx-auto text-center mb-24">
          <h2 className="text-4xl font-bold mb-6">Designed for the modern scholar</h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">We've reimagined every tool you need, stripping away the complexity to leave only the flow.</p>
        </div>
        
        <div className="relative h-[800px] max-w-2xl mx-auto">
          <TiltedCard 
            color="bg-white" 
            rotate="-4deg" 
            title="Mind Maps" 
            desc="Visualize the connections between complex concepts automatically."
            top="top-0"
            zIndex="z-[5]"
          />
          <TiltedCard 
            color="bg-accent/10" 
            rotate="3deg" 
            title="AI Librarian" 
            desc="Search your personal knowledge base with natural language questions."
            top="top-[160px]"
            zIndex="z-[4]"
          />
          <TiltedCard 
            color="bg-primary/5" 
            rotate="-2deg" 
            title="Session Timer" 
            desc="Optimized Pomodoro blocks synced with your course schedule."
            top="top-[320px]"
            zIndex="z-[3]"
          />
          <TiltedCard 
            color="bg-white" 
            rotate="4deg" 
            title="Auto-Flashcards" 
            desc="Generated directly from your handwritten or typed notes."
            top="top-[480px]"
            zIndex="z-[2]"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto bg-primary rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
          <div className="max-w-xl relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">Master your subjects.</h2>
            <p className="text-xl font-medium text-white/70 mb-12">Stop fighting your tools and start mastering your craft. Sign up for the beta today.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-8 text-lg font-bold">Get Started Free</Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-8 py-8 text-lg font-bold">Talk to Sales</Button>
            </div>
          </div>
          <div className="relative z-10 w-full max-w-md hidden lg:block">
            <div className="aspect-[4/3] relative">
              <Image 
                src={teamImg?.imageUrl || "https://picsum.photos/seed/team/600/300"}
                alt="Team collaborating"
                fill
                className="object-contain"
                data-ai-hint="people sketch"
              />
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-20"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-4 bg-white border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-32">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="font-bold text-2xl tracking-tight text-primary">AcademiaFlow</span>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-xs">
                The ultimate workspace for the modern student. Reimagined from the ground up to support how you actually learn.
              </p>
              <div className="flex gap-5">
                <div className="h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <Twitter className="h-4 w-4" />
                </div>
                <div className="h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <Github className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            <FooterColumn title="Product" links={['Features', 'Templates', 'Integrations', 'Pricing', 'Security']} />
            <FooterColumn title="Resources" links={['Student Guide', 'Blog', 'Support Center', 'Community', 'Scholarships']} />
            <FooterColumn title="Company" links={['About', 'Our Mission', 'Careers', 'Press', 'Contact']} />
          </div>
          
          <div className="relative w-full h-32 mb-16 opacity-30">
            <Image 
              src={footerImg?.imageUrl || "https://picsum.photos/seed/footer/1200/200"}
              alt="Footer doodle"
              fill
              className="object-cover"
              data-ai-hint="doodle pattern"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/30 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <span>© 2024 AcademiaFlow Inc.</span>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary">Terms of Service</Link>
              <Link href="#" className="hover:text-primary">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="mb-10 p-6 bg-muted/20 rounded-[2rem] transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/10">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-muted-foreground leading-relaxed font-medium text-sm">{desc}</p>
    </div>
  );
}

function TiltedCard({ color, rotate, title, desc, top, zIndex }: { color: string, rotate: string, title: string, desc: string, top: string, zIndex: string }) {
  return (
    <div 
      className={`absolute ${top} left-1/2 -translate-x-1/2 w-full max-w-lg aspect-[16/10] rounded-[3rem] ${color} p-12 flex flex-col justify-between border border-border shadow-2xl tilted-card ${zIndex}`}
      style={{ transform: `translateX(-50%) rotate(${rotate})` }}
    >
      <div className="flex justify-between items-start">
        <div className="h-16 w-16 bg-accent/20 rounded-2xl flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-accent-foreground" />
        </div>
        <div className="flex gap-1">
          {[1, 2, 3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-border"></div>)}
        </div>
      </div>
      <div>
        <h4 className="text-3xl font-bold mb-3">{title}</h4>
        <p className="text-base font-medium opacity-60 leading-relaxed max-w-xs">{desc}</p>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{title}</h4>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link}>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
