interface Stat {
  _id?: string;
  label: string;
  value: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="bg-slate-950 py-24 sm:py-32 relative border-t border-slate-900">
      {/* Visual background details */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Eminenture by the Numbers
          </h2>
          <p className="text-lg text-slate-455">
            Delivering measurable value and technological excellence to enterprise organizations globally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={stat._id || idx} 
              className="group relative flex flex-col justify-between bg-slate-900/30 backdrop-blur-xl border border-slate-900 hover:border-emerald-500/30 p-8 rounded-2xl hover:bg-slate-900/60 transition-all duration-300 shadow-xl"
            >
              {/* Card top border light-up on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="space-y-4">
                <div className="text-5xl font-black text-white bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-350 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
