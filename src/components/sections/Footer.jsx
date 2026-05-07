export default function Footer() {
  const names = ['Mosaic', 'Afterlight', 'Softspace', 'Drift', 'Solace', 'Somewhere', 'Orbit', 'Quietly'];

  return (
    <footer className="w-full bg-[var(--ink)] border-t border-[var(--fog)]/20 py-8 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-serif text-[20px] text-[var(--cream)] tracking-tight">MOSAIC</div>
          <div className="font-sans text-[13px] text-[var(--slate)]">A healthier digital social environment.</div>
        </div>

        {/* Center - Names */}
        <div className="flex flex-wrap justify-center gap-2 max-w-[500px]">
          {names.map((name, i) => (
            <span key={i} className="font-sans text-[13px] text-[var(--fog)]/50 flex items-center gap-2">
              <span className="hover:text-[var(--cream)] transition-colors cursor-none">{name}</span>
              {i < names.length - 1 && <span>·</span>}
            </span>
          ))}
        </div>

        {/* Right */}
        <div className="font-handwriting text-[18px] text-[var(--slate)] opacity-80">
          a case study by Annanya
        </div>

      </div>
    </footer>
  );
}
