import Image from "next/image";

const stats: { value: string; label: string; sub: string; icon?: string }[] = [
  { value: "", label: "Značajno iskustvo", sub: "u servisiranju klima uređaja u Beogradu" },
  { value: "5k+", label: "izvršenih servisa", sub: "klima uređaja u Beogradu" },
  { value: "99%", label: "zadovoljnih klijenata", sub: "koji nam se vraćaju", icon: "/rukovanje.png" },
];

export default function Stats() {
  return (
    <section className="bg-[#050810] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 sm:p-8 rounded-2xl bg-[#0c1220] border border-white/8 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                {stat.icon && (
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image src={stat.icon} alt="" fill className="object-contain" />
                  </div>
                )}
                {stat.value && (
                  <p
                    className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
                  >
                    {stat.value}
                  </p>
                )}
              </div>
              <p className="text-white font-bold text-base mb-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
