export default function System() {
  return (
    <div className="bg-[#0f1320] text-white min-h-screen">

      <main className="pt-24 px-10">

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          System Core
        </h1>

        <div className="space-y-4">

          <div className="p-6 bg-[#1b1f2d] border border-cyan-900">
            <h2 className="text-cyan-300">CPU Status</h2>
            <p className="text-slate-400">
              Neural Engine operating at optimal performance.
            </p>
          </div>

          <div className="p-6 bg-[#1b1f2d] border border-cyan-900">
            <h2 className="text-cyan-300">Security Layer</h2>
            <p className="text-slate-400">
              Encryption level 9 active and stable.
            </p>
          </div>

          <div className="p-6 bg-[#1b1f2d] border border-cyan-900">
            <h2 className="text-cyan-300">Network</h2>
            <p className="text-slate-400">
              Satellite uplink connected globally.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}