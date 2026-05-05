"use client";

const steps = [
  { step: "01", title: "CLEANSE", desc: "REMOVE THE DAY'S IMPURITIES." },
  { step: "02", title: "TREAT", desc: "ACTIVE INGREDIENTS FOR DEEP REPAIR." },
  { step: "03", title: "PROTECT", desc: "HYDRATE AND SHIELD FROM THE ELEMENTS." }
];

export default function Scene3() {
  return (
    <div className="max-w-5xl relative">
      <h2 
        className="relative z-10 text-[60px] md:text-[140px] font-bold text-white mb-32 leading-[0.9] tracking-tighter" 
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        THE <br /> <span className="text-[#C8A96A]">SYSTEM.</span>
      </h2>
      
      <div className="relative z-10 flex flex-col gap-24">
        {steps.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-start gap-8 group"
          >
            <span className="text-7xl md:text-9xl font-black text-[#C8A96A] leading-none select-none opacity-20 group-hover:opacity-100 transition-opacity duration-700">
              {item.step}
            </span>
            <div className="flex flex-col items-start">
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.title}
              </h3>
              <p className="text-base md:text-xl text-white/40 font-medium tracking-wide max-w-xl leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
