import Image from "next/image";

const services = [
  {
    icon: "/12035.png",
    title: "Mali servis klima uređaja",
    description: "Čišćenje filtera, unutrašnje jedinice i provera rada sistema.",
  },
  {
    icon: "/12036.png",
    title: "Veliki servis klima uređaja",
    description: "Kompletan servis sa pranjem pod pritiskom i detaljnom inspekcijom.",
  },
  {
    icon: "/12033.png",
    title: "Čišćenje spoljašnje jedinice",
    description: "Profesionalno pranje spoljašnje jedinice za bolju efikasnost i duži vek.",
  },
  {
    icon: "/12037.png",
    title: "Dijagnostika kvara",
    description: "Brzo i precizno pronalaženje kvara uz profesionalnu opremu.",
  },
  {
    icon: "/12034.png",
    title: "Dopuna rashladnog plina",
    description: "Punjenje freonom uz prethodno testiranje sistema za curenje.",
  },
  {
    icon: "/12038.png",
    title: "Servis inverter klima uređaja",
    description: "Specijalizovani servis za inverter tehnologiju i pametne sisteme.",
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-[#07091a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Moje usluge
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Kompletan servis za vaš komfor
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sve što vaš klima uređaj treba da bi radio besprekorno.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#0c1220] border border-white/8 rounded-2xl p-6 hover:border-orange-500/40 hover:bg-[#0f1628] transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 relative mb-5">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/kontakt"
            className="inline-block text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 hover:shadow-xl hover:shadow-orange-500/25 transition-all"
            style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
          >
            Pošalji zahtev za servis
          </a>
        </div>
      </div>
    </section>
  );
}
