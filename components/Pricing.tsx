import Image from "next/image";
import { CONTACT_PHONE_HREF, CONTACT_PHONE } from "@/lib/constants";

const plans = [
  {
    title: "Osnovno održavanje",
    icon: "/12031.png",
    priceLabel: "od",
    price: "4.500",
    priceColor: "text-blue-400",
    unit: "RSD",
  },
  {
    title: "Temeljno održavanje",
    icon: "/12035.png",
    priceLabel: "od",
    price: "6.500",
    priceColor: "text-blue-400",
    unit: "RSD",
  },
  {
    title: "Dijagnostika sistema",
    icon: "/12034.png",
    priceLabel: "od",
    price: "3.000",
    priceColor: "text-orange-400",
    unit: "RSD",
  },
  {
    title: "Dopuna rashladnog gasa",
    icon: "/12033.png",
    priceLabel: null,
    price: "prema količini",
    priceColor: "text-orange-400",
    unit: null,
  },
];

export default function Pricing() {
  return (
    <section id="cene" className="py-20 bg-[#050810]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Slika */}
          <div className="relative h-80 sm:h-[420px] lg:h-[540px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/12028.png"
              alt="Servis klima uređaja FRIONI"
              fill
              className="object-cover"
            />
          </div>

          {/* Cenovnik */}
          <div className="order-1 lg:order-2">
            <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
              Transparentne cene
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Cene usluga
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Investicija u čist vazduh i pouzdan rad klima sistema.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#0c1220] border border-white/8 hover:border-white/20 transition-all"
                >
                  <div className="w-14 h-14 relative flex-shrink-0">
                    <Image src={plan.icon} alt={plan.title} fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{plan.title}</p>
                    <p className="text-gray-500 text-xs mb-0.5">{plan.priceLabel ?? ""}</p>
                    <p className={`font-black text-2xl ${plan.priceColor}`}>
                      {plan.price}
                      {plan.unit && <span className="text-base font-semibold ml-1">{plan.unit}</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/kontakt"
                className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
                style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Pošalji zahtev za servis
              </a>
              <a
                href={CONTACT_PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-6 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Pozovi odmah
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
