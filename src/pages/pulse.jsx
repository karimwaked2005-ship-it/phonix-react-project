export default function pulse() {
  return (
    <div className="bg-[#0f1320] text-white min-h-screen">

      {/* CONTENT */}
      <main className="pt-24 px-10">

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          Pulse Control Center
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#1b1f2d] p-6 border border-cyan-900">
            <h2 className="text-cyan-300 mb-2">Live Sync</h2>
            <p className="text-slate-400">
              Real-time neural device synchronization active.
            </p>
          </div>

          <div className="bg-[#1b1f2d] p-6 border border-cyan-900">
            <h2 className="text-cyan-300 mb-2">Signal Monitor</h2>
            <p className="text-slate-400">
              Tracking device pulse stability and latency.
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}