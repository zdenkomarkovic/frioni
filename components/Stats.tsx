const stats = [
  { value: "15+", label: "godina iskustva", sub: "u servisu klima uređaja" },
  { value: "1.250+", label: "izvršenih servisa", sub: "u Beogradu" },
  { value: "400+", label: "zadovoljnih klijenata", sub: "koji nam se vraćaju" },
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
              <p
                className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text mb-2"
                style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
              >
                {stat.value}
              </p>
              <p className="text-white font-bold text-base mb-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
