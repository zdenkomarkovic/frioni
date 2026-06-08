import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Lično vođenje",
    desc: "Na adresu dolazim lično i posao ne prepuštam drugim serviserima.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Jasna komunikacija",
    desc: "Objasnim stanje uređaja i predložim rešenje pre početka rada.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Bez neprijatnih iznenađenja",
    desc: "Realna procena, fer cena i dogovor bez skrivenih troškova.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Dugotrajan odnos",
    desc: "Vodimo istoriju svakog uređaja i uvek znate kome da se obratite.",
  },
];

export default function PersonalService() {
  return (
    <section id="o-servisu" className="py-20 bg-[#050810]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-80 sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/12030.png"
                alt="Lično vođen servis FRIONI"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-[#0c1220]/95 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 relative flex-shrink-0">
                  <Image src="/12031.png" alt="Sigurnost" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">
                    Lično vođen servis klima
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Svaki posao vodim lično, bez posrednika
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
              O servisu
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Lično vođen klima servis koji pravi razliku
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-2">Moje ime je Nikola.</p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              FRIONI nije veliki servisni centar. Većinu intervencija obavljam lično i odgovaram za
              kvalitet rada od prvog kontakta do završne provere uređaja.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Ne žurim sa intervencijama. Svakoj klimi posvećujem dvostruko vremena kako bi posao
              bio urađen temeljno i uredno.
            </p>

            <div className="space-y-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0c1220] border border-white/5 hover:border-orange-500/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/kontakt"
              className="mt-8 inline-block text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              Pošalji zahtev za servis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
