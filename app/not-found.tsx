import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-6">
      <div className="text-center">
        <h1 className="text-9xl font-black text-white/5 mb-[-2rem] select-none">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Lost Your Way?
        </h2>
        <p className="text-xl text-white/40 mb-12 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/"
            className="flex items-center gap-3 bg-[#C8A96A] text-black font-bold py-4 px-10 rounded-[4px] hover:scale-[1.05] transition-transform uppercase tracking-tighter"
          >
            Back to Home
          </Link>
          <Link 
            href="/shop"
            className="flex items-center gap-3 border border-white/10 bg-white/5 text-white font-bold py-4 px-10 rounded-[4px] hover:bg-white/10 transition-colors uppercase tracking-tighter"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </main>
  );
}
