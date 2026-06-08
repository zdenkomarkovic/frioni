const reviews = [
  {
    name: "Milica",
    location: "Novi Beograd",
    rating: 5,
    text: "Brzo, uredno i profesionalno. Klima radi kao nova, a vazduh je čist i svež. Topla preporuka za Frioni servis!",
  },
  {
    name: "Marko",
    location: "Voždovac",
    rating: 5,
    text: "Odlična dijagnostika i konkretan pristup. Sve mi je objašnjeno i urađeno u dogovorenom roku. Pouzdan servis!",
  },
  {
    name: "Jelena",
    location: "Zemun",
    rating: 5,
    text: "Temeljno održavanje je napravilo ogromnu razliku. Klima ne smrdi, hladi jače i nema buke. Sjajna usluga!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="recenzije" className="py-20 bg-[#07091a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto lg:mx-0 mb-10">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Recenzije
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Šta kažu naši klijenti
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all"
            >
              <Stars count={review.rating} />
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
