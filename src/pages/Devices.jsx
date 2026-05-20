export default function Devices() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-['Space_Grotesk']">

      <main className="pt-24 px-6">

        {/* TITLE */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 uppercase tracking-widest">
            Devices
          </h1>

          <p className="text-slate-500 mt-2 text-sm">
            Browse all PHONIX core devices
          </p>
        </section>

        {/* PRODUCTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-slate-900 border border-cyan-900 p-5 hover:scale-[1.03] transition">
            <h2 className="text-cyan-400 font-semibold">
              PHONIX Nova-9
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              Fast performance + AI system integration
            </p>

            <p className="mt-4 font-bold">$1299</p>

            <button className="mt-4 w-full bg-cyan-500 text-black py-2 hover:bg-cyan-400">
              Buy Now
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-slate-900 border border-pink-800 p-5 hover:scale-[1.03] transition">
            <h2 className="text-pink-400 font-semibold">
              PHONIX Spectra
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              Ultra display with zero delay response
            </p>

            <p className="mt-4 font-bold">$1549</p>

            <button className="mt-4 w-full bg-pink-500 text-black py-2 hover:bg-pink-400">
              Buy Now
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-slate-900 border border-cyan-900 p-5 hover:scale-[1.03] transition">
            <h2 className="text-cyan-400 font-semibold">
              PHONIX Titan-X
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              Strong build + long battery life
            </p>

            <p className="mt-4 font-bold">$1100</p>

            <button className="mt-4 w-full bg-cyan-500 text-black py-2 hover:bg-cyan-400">
              Buy Now
            </button>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center text-slate-600 text-xs py-10 mt-16 border-t border-slate-800">
        PHONIX CORE SYSTEM © 2026
      </footer>

    </div>
  );
}