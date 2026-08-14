import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export default function Hero({ title, subtitle, ctaText }: HeroProps) {
  return (
    <div className="relative bg-slate-950 overflow-hidden text-white min-h-[90vh] flex items-center pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px] animate-pulse duration-[8000ms]"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse duration-[10000ms]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-6 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              Enterprise Technology & Digital Consulting
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-450 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 text-center"
              >
                {ctaText}
              </Link>
              <Link 
                href="#" 
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white px-8 py-4 rounded-full text-base font-bold transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-emerald-500/5 overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all"></div>
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono">eminenture-ecosystem-v4.0.sh</span>
              </div>

              <div className="space-y-4 font-mono text-sm text-slate-350">
                <div className="flex justify-between items-center bg-slate-950/50 p-3.5 rounded-lg border border-slate-800/50 hover:border-slate-800 transition-colors">
                  <span className="text-slate-400">Digital Transformation</span>
                  <span className="text-emerald-400 font-semibold">99.8% Efficiency</span>
                </div>
                
                <div className="flex justify-between items-center bg-slate-950/50 p-3.5 rounded-lg border border-slate-800/50 hover:border-slate-800 transition-colors">
                  <span className="text-slate-400">AI / Cloud Infrastructure</span>
                  <span className="text-blue-400 font-semibold">Scale-on-Demand</span>
                </div>

                <div className="flex justify-between items-center bg-slate-950/50 p-3.5 rounded-lg border border-slate-800/50 hover:border-slate-800 transition-colors">
                  <span className="text-slate-400">Global Connectivity</span>
                  <span className="text-emerald-400 font-semibold">Zero Latency Nodes</span>
                </div>

                <div className="grid grid-cols-6 gap-2 pt-2">
                  {[...Array(18)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-8 rounded ${
                        i % 5 === 0 
                          ? 'bg-emerald-500/20 border border-emerald-500/40 animate-pulse' 
                          : i % 3 === 0 
                            ? 'bg-blue-500/20 border border-blue-500/40' 
                            : 'bg-slate-800/40 border border-slate-800'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
