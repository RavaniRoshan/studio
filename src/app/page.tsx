import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, GraduationCap, Github, Twitter, Linkedin } from "lucide-react";
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
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="w-full max-w-[400px] aspect-[4/3] relative mb-8">
            <Image 
              src={heroImg?.imageUrl || "https://picsum.photos/seed/think/400/300"} 
              alt="Thinking illustration"
              fill
              className="object-contain"
              data-ai-hint="minimalist illustration"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-8 max-w-xl leading-tight">
            The notebook that thinks with you
          </h1>
          <Button size="lg" className="bg-primary text-white rounded-full px-10 py-6 text-base font-bold transition-transform hover:scale-105">
            Log In
          </Button>
        </div>
      </section>

      {/* Feature Nav */}
      <nav className="border-y border-border/50 py-6 mb-20 overflow-x-auto no-scrollbar">
        <div className="container mx-auto flex justify-center gap-8 md:gap-12 px-4 min-w-max">
          {['Notes', 'Flashcards', 'Plan', 'Tasks', 'AI Writer', 'Notebooks', 'Numbers'].map((item) => (
            <Link key={item} href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Feature Showcase */}
      <section className="pb-32 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Everything you need in one place</h2>
          <div className="flex justify-center gap-4 mb-12">
            {['Big Notes', 'AI Flashcards', 'Pro Notebooks', 'The Workspace', 'Productivity'].map((tab, i) => (
              <span key={tab} className={`text-sm font-bold cursor-pointer transition-colors ${i === 0 ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                {tab}
              </span>
            ))}
          </div>
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] bg-[#eef6ff] rounded-3xl p-10 overflow-hidden border border-border/20 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image 
                src={featureImg?.imageUrl || "https://picsum.photos/seed/schematic/800/500"}
                alt="Feature showcase"
                fill
                className="object-contain p-12"
                data-ai-hint="technical drawing"
              />
            </div>
            <div className="relative text-left max-w-xs">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Infinite Notes</h3>
              <p className="text-blue-800/70 text-sm">Write freely without worrying about structure. We organize it for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-20 max-w-lg mx-auto leading-tight">
            All the tools you need and just some more
          </h2>
          <div className="grid md:grid-cols-3 gap-20">
            <FeatureItem 
              img="https://picsum.photos/seed/f1/200/200"
              title="Smart Search"
              desc="Find anything across your notes in milliseconds."
            />
            <FeatureItem 
              img="https://picsum.photos/seed/f2/200/200"
              title="Audio Sync"
              desc="Record and transcribe lectures directly into your notes."
            />
            <FeatureItem 
              img="https://picsum.photos/seed/f3/200/200"
              title="Collaborative"
              desc="Share and edit notebooks with your classmates in real-time."
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
        </div>
        <p className="text-2xl font-bold text-primary max-w-2xl mx-auto leading-tight italic">
          "Now my notes actually lead to better results, not just a bunch of messy files somewhere."
        </p>
        <p className="text-muted-foreground mt-4 font-semibold">— Sarah Jenkins, Med Student</p>
      </section>

      {/* Split Feature */}
      <section className="py-32 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Built for how you learn</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg">Visual Connections</h4>
                  <p className="text-muted-foreground">Map your ideas visually to understand complex topics.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg">Active Recall</h4>
                  <p className="text-muted-foreground">Automatic flashcard generation from your study notes.</p>
                </div>
              </li>
            </ul>
            <Link href="#" className="inline-flex items-center gap-2 mt-10 font-bold text-primary border-b-2 border-primary pb-1">
              Read the story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-[#f5f5ed] p-12 rounded-[40px] border border-border/30 relative">
             <Image 
              src={learnImg?.imageUrl || "https://picsum.photos/seed/learn/500/400"}
              alt="Learning illustration"
              width={500}
              height={400}
              className="object-contain"
              data-ai-hint="artistic sketch"
            />
          </div>
        </div>
      </section>

      {/* Cascading Cards */}
      <section className="py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center mb-24">
          <h2 className="text-4xl font-bold mb-4">Stop juggling ten different apps</h2>
          <p className="text-muted-foreground font-medium">All your productivity tools, reimagined in one notebook.</p>
        </div>
        
        <div className="relative h-[1000px] max-w-2xl mx-auto">
          <TiltedCard 
            color="bg-[#d4e6ff]" 
            rotate="-3deg" 
            title="Notes" 
            desc="Capture ideas as fast as they come."
            top="top-0"
            zIndex="z-[5]"
          />
          <TiltedCard 
            color="bg-[#ffe48d]" 
            rotate="2deg" 
            title="AI Co-pilot" 
            desc="Ask questions about your own research."
            top="top-[180px]"
            zIndex="z-[4]"
          />
          <TiltedCard 
            color="bg-[#fff9e6]" 
            rotate="-1deg" 
            title="Planner" 
            desc="Schedule your week with precision."
            top="top-[360px]"
            zIndex="z-[3]"
          />
          <TiltedCard 
            color="bg-[#ffc2e0]" 
            rotate="3deg" 
            title="To-Do List" 
            desc="Check off your daily academic goals."
            top="top-[540px]"
            zIndex="z-[2]"
          />
          <TiltedCard 
            color="bg-[#d4ffe6]" 
            rotate="-2deg" 
            title="Flashcards" 
            desc="Master any subject with repetition."
            top="top-[720px]"
            zIndex="z-[1]"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto bg-accent rounded-[50px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md relative z-10">
            <h2 className="text-4xl font-bold mb-6">The new standard for notebooks</h2>
            <p className="font-semibold text-accent-foreground mb-8">Join thousands of students who have upgraded their study routine.</p>
            <Button className="bg-primary text-white rounded-full px-8 py-6 font-bold">Start Now</Button>
          </div>
          <div className="relative z-10 w-full max-w-sm">
            <Image 
              src={teamImg?.imageUrl || "https://picsum.photos/seed/team/600/300"}
              alt="Team collaborating"
              width={400}
              height={200}
              className="object-contain"
              data-ai-hint="people sketch"
            />
          </div>
          <div className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none">
             <div className="w-full h-full bg-gradient-to-l from-white/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            <div className="space-y-4">
              <h4 className="font-bold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Features</Link></li>
                <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary">Download</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">About</Link></li>
                <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Help Center</Link></li>
                <li><Link href="#" className="hover:text-primary">Community</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-end gap-6">
              <div className="flex gap-4">
                <Twitter className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
                <Linkedin className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
                <Github className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg text-primary">AcademiaFlow</span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-20 mb-8 opacity-40">
            <Image 
              src={footerImg?.imageUrl || "https://picsum.photos/seed/footer/1200/200"}
              alt="Footer doodle"
              fill
              className="object-cover"
              data-ai-hint="doodle pattern"
            />
          </div>
          <div className="text-center text-xs text-muted-foreground font-semibold">
            © 2024 AcademiaFlow. Reimagined for the future of learning.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ img, title, desc }: { img: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto group">
      <div className="w-24 h-24 relative mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
        <Image src={img} alt={title} fill className="object-contain" />
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function TiltedCard({ color, rotate, title, desc, top, zIndex }: { color: string, rotate: string, title: string, desc: string, top: string, zIndex: string }) {
  return (
    <div 
      className={`absolute ${top} left-1/2 -translate-x-1/2 w-full max-w-sm aspect-[4/3] rounded-[40px] ${color} p-10 flex flex-col justify-end border border-black/5 shadow-2xl tilted-card ${zIndex}`}
      style={{ transform: `translateX(-50%) rotate(${rotate})` }}
    >
      <div className="mb-4">
        <div className="h-12 w-12 bg-white/50 rounded-2xl mb-6"></div>
        <h4 className="text-2xl font-bold mb-2">{title}</h4>
        <p className="text-sm font-semibold opacity-60 leading-tight">{desc}</p>
      </div>
    </div>
  );
}