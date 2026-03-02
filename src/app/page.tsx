import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-grid flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center bg-transparent relative z-50">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" className="doodle">
            <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"/>
            <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" stroke-dasharray="2 4"/>
          </svg>
          <span className="font-semibold text-lg tracking-tight">AcademiaFlow</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/dashboard" className="hover:text-black">Dashboard</Link>
          <Link href="/timer" className="hover:text-black">Timer</Link>
          <Link href="#" className="hover:text-black">Pricing</Link>
        </div>

        <Link href="/dashboard">
          <Button variant="outline" className="border-black rounded text-xs font-semibold hover:bg-black hover:text-white transition-colors">
            Get Started
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="w-full max-w-3xl mx-auto px-6 pt-16 pb-24 text-center relative z-10">
        <div className="flex justify-center mb-10">
          <svg width="180" height="140" viewBox="0 0 180 140" className="doodle">
            <path d="M30 40 L35 30 L40 40 L50 45 L40 50 L35 60 L30 50 L20 45 Z" fill="#FFC107" stroke="none"/>
            <rect x="60" y="50" width="70" height="80" rx="2" transform="rotate(-10 95 90)"/>
            <line x1="65" y1="55" x2="125" y2="55" transform="rotate(-10 95 90)"/>
            <line x1="65" y1="65" x2="115" y2="65" transform="rotate(-10 95 90)"/>
            <line x1="65" y1="75" x2="120" y2="75" transform="rotate(-10 95 90)"/>
            <path d="M120 20 L150 50 L80 120 L50 120 L50 90 Z" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
            <path d="M110 30 L140 60"/>
            <path d="M50 120 L65 105"/>
            <path d="M60 20 C 40 10, 20 30, 40 40 C 60 50, 40 70, 20 60" stroke-dasharray="4 4"/>
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-medium mb-8 leading-[1.1]">
          The workspace that <br /> <span className="italic">thinks</span> with you
        </h1>
        
        <Link href="/dashboard">
          <Button size="lg" className="bg-black text-white px-10 py-6 text-sm font-semibold rounded hover:bg-gray-800 transition-colors">
            Launch Your Notebook
          </Button>
        </Link>
      </header>

      {/* Blue Lined Section */}
      <div className="w-full bg-lined py-24 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex gap-8 justify-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-12">
            <span>Notes</span>
            <span className="text-black bg-white/50 px-3 py-1 rounded-full border border-black/5">Everything you need in one place</span>
            <span>Docs</span>
          </div>

          <div className="bg-[#4D7BFF] w-full max-w-3xl mx-auto rounded-xl shadow-2xl p-10 md:p-20 text-left relative overflow-hidden h-[350px] hand-drawn-border" style={{ borderColor: '#4D7BFF' }}>
            <h2 className="text-white text-4xl md:text-5xl mb-6 font-medium relative z-10 leading-tight">One tool.<br />A million possibilities.</h2>
            <p className="text-white/80 text-lg max-w-sm relative z-10 font-medium">Capture ideas, connect concepts, and build your digital brain without friction.</p>
            
            <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[120%] bg-white/10 rotate-12 rounded-2xl backdrop-blur-md border border-white/20"></div>
            <div className="absolute right-[15%] top-[25%] w-16 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute right-[10%] top-[40%] w-24 h-4 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Features Vertical List */}
      <section className="w-full max-w-2xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-5xl mb-24 italic">All the tools you <br />need to stay focused</h2>
        
        <div className="flex flex-col gap-28 items-center">
          <FeatureItem 
            title="Writing" 
            desc="Clear whitespace and smart formatting let you focus purely on your thoughts."
            icon={
              <svg width="60" height="60" viewBox="0 0 60 60" className="doodle mx-auto mb-6">
                <rect x="15" y="10" width="30" height="40" rx="2"/>
                <path d="M10 20 L50 20 M15 15 L25 5 L30 10" />
                <circle cx="25" cy="30" r="4"/>
                <line x1="15" y1="40" x2="45" y2="40"/>
                <line x1="15" y1="45" x2="35" y2="45"/>
              </svg>
            }
          />

          <FeatureItem 
            title="Organizing" 
            desc="Tags, folders, and dynamic views ensure nothing ever gets lost again."
            icon={
              <svg width="60" height="60" viewBox="0 0 60 60" className="doodle mx-auto mb-6">
                <path d="M10 50 L50 50 L40 20 L20 20 Z" fill="#FCFBF5"/>
                <path d="M15 20 L15 10 L45 10 L45 20"/>
                <circle cx="30" cy="35" r="5"/>
                <path d="M25 35 L35 35 M30 30 L30 40"/>
              </svg>
            }
          />

          <FeatureItem 
            title="Connecting" 
            desc="Bi-directional linking creates a web of knowledge unique to your brain."
            icon={
              <svg width="60" height="60" viewBox="0 0 60 60" className="doodle mx-auto mb-6">
                <circle cx="15" cy="15" r="6"/>
                <circle cx="45" cy="25" r="6"/>
                <circle cx="25" cy="45" r="6"/>
                <path d="M19 19 L41 21 M21 21 L23 40 M42 29 L29 42" stroke-dasharray="4 4"/>
              </svg>
            }
          />
        </div>
      </section>

      {/* Scattered Notes Section */}
      <section className="w-full max-w-xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl mb-24">Stop juggling five <br />different apps.</h2>
        
        <div className="flex flex-col items-center gap-6 relative pb-20">
          <StickyNote 
            color="bg-[#D1E9FF]" 
            rotate="-rotate-3" 
            title="Note #1" 
            text="A perfectly structured architecture document born from messy thoughts." 
            zIndex="z-10"
          />
          <StickyNote 
            color="bg-[#FFC107]" 
            rotate="rotate-2" 
            title="To-Do" 
            text="Fix the alignment. Ship the MVP. Call mom." 
            zIndex="z-20"
            margin="-mt-8 ml-8"
          />
          <StickyNote 
            color="bg-[#FFDBE6]" 
            rotate="-rotate-2" 
            title="Ideas" 
            text="What if the interface adapted to the user's current context?" 
            zIndex="z-30"
            margin="-mt-8 mr-8"
          />
          <StickyNote 
            color="bg-[#FF94A5]" 
            rotate="rotate-3" 
            title="Meeting Notes" 
            text="Sync with engineering regarding the API rate limits." 
            zIndex="z-40"
            margin="-mt-8 ml-4"
            textColor="text-white"
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 opacity-60">Join the community</h2>
        <div className="text-3xl md:text-4xl font-medium mb-16 max-w-lg mx-auto leading-tight italic serif">
          "I use it for literally everything. It's like an extension of my brain."
        </div>

        <div className="bg-[#FFC107] w-full max-w-2xl mx-auto rounded-2xl p-12 md:p-16 relative overflow-hidden hand-drawn-border border-2 border-black flex flex-col md:flex-row items-center justify-between text-left gap-10">
          <div className="z-10 w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-black font-sans">Build your best work.</h3>
            <p className="text-lg text-black/80 mb-10 font-medium">Join 50,000+ scholars building on AcademiaFlow.</p>
            <Link href="/dashboard">
              <Button className="bg-black text-white px-10 py-6 text-sm font-semibold rounded hover:scale-105 transition-transform">
                Start Now
              </Button>
            </Link>
          </div>
          
          <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-end">
            <svg width="150" height="80" viewBox="0 0 150 80" className="doodle">
              <circle cx="30" cy="30" r="15" fill="#FFC107"/>
              <path d="M15 80 C 15 50, 45 50, 45 80" fill="#FFC107"/>
              <circle cx="75" cy="25" r="16" fill="#FFC107"/>
              <path d="M55 80 C 55 45, 95 45, 95 80" fill="#FFC107"/>
              <circle cx="120" cy="32" r="14" fill="#FFC107"/>
              <path d="M105 80 C 105 55, 135 55, 135 80" fill="#FFC107"/>
              <path d="M25 28 L27 28 M33 28 L35 28 M28 35 C 30 37, 32 35, 32 35"/>
              <path d="M70 23 L72 23 M80 23 L82 23 M73 30 C 75 32, 78 30, 78 30"/>
              <path d="M115 30 L117 30 M123 30 L125 30 M118 36 C 120 38, 122 36, 122 36"/>
            </svg>
          </div>
          
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto py-16 px-6 border-t border-black/5 relative overflow-hidden bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-xs font-bold text-gray-400 uppercase tracking-[0.2em] relative z-10">
          <div className="flex gap-10">
            <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-black transition-colors">Github</Link>
          </div>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms</Link>
            <Link href="#" className="hover:text-black transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-12 opacity-20 pointer-events-none flex justify-center overflow-hidden">
          <svg width="1200" height="40" viewBox="0 0 1200 40" className="doodle" preserveAspectRatio="none">
            <path d="M0 40 Q 50 10, 100 40 T 200 40 T 300 40 T 400 40 T 500 40 T 600 40 T 700 40 T 800 40 T 900 40 T 1000 40 T 1100 40 T 1200 40" fill="none" strokeDasharray="5 5"/>
            <circle cx="150" cy="25" r="3"/>
            <circle cx="350" cy="20" r="4"/>
            <circle cx="650" cy="30" r="2"/>
            <circle cx="850" cy="15" r="5"/>
            <circle cx="1050" cy="25" r="3"/>
          </svg>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="max-w-xs text-center group">
      <div className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 font-sans">{title}</h3>
      <p className="text-gray-500 text-lg leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function StickyNote({ color, rotate, title, text, zIndex, margin = "", textColor = "text-gray-700" }: { color: string, rotate: string, title: string, text: string, zIndex: string, margin?: string, textColor?: string }) {
  return (
    <div className={`${color} p-8 w-72 hand-drawn-border ${rotate} scribble-hover text-left shadow-lg relative ${zIndex} ${margin}`}>
      <div className="w-10 h-2 bg-black/10 mx-auto mb-6 rounded-full mix-blend-multiply opacity-50 absolute top-3 left-1/2 -translate-x-1/2"></div>
      <p className={`font-black text-sm mb-3 mt-4 tracking-tighter uppercase ${textColor}`}>{title}</p>
      <p className={`text-sm leading-relaxed font-medium ${textColor} opacity-90`}>{text}</p>
    </div>
  );
}
