export default function Home() {
  return (
    <div className="bg-[#0f1320] text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <p className="text-cyan-400 text-sm mb-4">
          System Online: v2.0.4
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Next-Gen <span className="text-cyan-400">Pulse</span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-6">
          Experience the quantum leap in mobile synchronization. PHONIX CORE provides unparalleled processing power.
        </p>

        <div className="flex gap-4 mb-10">
          <button className="bg-cyan-400 text-black px-6 py-2">
            Initialize Purchase
          </button>
          <button className="border border-cyan-400 text-cyan-400 px-6 py-2">
            Technical Specs
          </button>
        </div>

        <img
          className="w-64"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsRqpsHuWKyTRhqh9Vdu0duGyw6EDPJkgJPoA3pVsmX-jnEb-eQEc2TYekBZ4IoS4JID8IFSbXewEUPo-bDi-I0niJXNYh8eGn26xi6gYW9blpLJTkoxQZfmEofR_L7IFu_p8s9bOeZcID3sKbSYwKpOiKMzI4dH3TIJAsODL63SN8zr-pQTxvH2FhySxQ45dzRckyW-v0ysPa7Qs-2kpGbufVDZm4rMsQ6FNON7UADyJ2ibWbXFrF2iof2vi3tLy-D6nQbDd3er8"
          alt="phone"
        />
      </section>

      {/* FEATURES BAR (رجعنا النصوص اللي قلت عنها) */}
      <section className="grid md:grid-cols-3 text-center border-y border-cyan-900/40 py-10">

        <div>
          <h3 className="text-cyan-400 uppercase">Optimized Price</h3>
          <p className="text-xs text-gray-500">CREDIT_VALUE_STABILIZED</p>
        </div>

        <div>
          <h3 className="text-cyan-400 uppercase">Warp Delivery</h3>
          <p className="text-xs text-gray-500">LATENCY_ZERO_GLOBAL</p>
        </div>

        <div>
          <h3 className="text-cyan-400 uppercase">Core Defense</h3>
          <p className="text-xs text-gray-500">ENCRYPTION_LEVEL_9</p>
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="grid md:grid-cols-3 gap-6 px-10 py-20">

        <div className="border border-cyan-500 p-4">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDri7gB44Y2hMGGWn9MknFmtgup4BL1khuB8x08a5wDjV8xDhStUFMpgE4o6KAqI926RM5JeXOaEiYLNiV-eq2ogpLPuzw66CViSpK8hHZztkTZ_IybZXKl6v0sEUvon0eGOJ4-JtnTS9W2kSGTW1fJBynDokqPFAd1OU0YglHXMgweMdiKPhvzpYZZ1EzNQQNHrfWXVpzJgC9qZ4aF4SOogxaPFj_sCVVtQbmLkJ7ERqj80UwmJA3cPXlmJHfY3_jwFmFhVh2ia9E" className="mb-3"/>
          <h2>Phonix Nova-9</h2>
          <p>$1299</p>
        </div>

        <div className="border border-pink-500 p-4">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3tObapsl8nHJ9eysu08iBC7_03exdzLxJfS_DPoCY7wTp08NNHcALdHOZJUIumjrhHdE-TwCDWhX-DvOw_PIhKkFGuubw6ovjqEGehAr9H2AKJuD-ZrNcDUD8-V5p5r8FsRKitGjP-KARvAPyez4GjAsOLI_x1noWuvSWXhqBEu3uH5kW0IHaPXIRKWHokOVBZOLV3_csM0IW5k87TGB9E2ng6enbparcaiEQtIzL-YrbfUfuVRkZT1k-Ut_ToZ9fnVyc13ff2nA" className="mb-3"/>
          <h2>Phonix Spectra</h2>
          <p>$1549</p>
        </div>

        <div className="border border-cyan-500 p-4">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmjqWdmqv4mhs48O6F8VNR5QFeaRkcYPRlNUpPZ6MDtGS9ioPLw9L9b5_5TNzRTVeiRlEkuSxQmhA4YJXIDIA1FG5dBcCo5MDbT9us1qRwCn4lppvq7jLAqyKgNkug8N-2TX7xYEDVGM77ViQlfNpM7khfr2C-Mu3dSQtjNxKp3yEuXmjyKKPN2IhEamIjvk5TXe7KoNQNAdqU1MI3-DUeP7UmBABhbEUZ28BMZ0NB3qHOtb4P-UAbvkeMnMYko-02UmKiQuE25LE" className="mb-3"/>
          <h2>Phonix Titan-X</h2>
          <p>$1100</p>
        </div>

      </section>

      {/* CONTACT (رجعنا User ID / Email / Message / Send) */}
      <section className="px-10 pb-20">

        <h2 className="text-center text-3xl mb-8 text-cyan-400 uppercase">
          Initialize Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input className="bg-black border border-cyan-500 p-3" placeholder="User ID" />
          <input className="bg-black border border-cyan-500 p-3" placeholder="Email Address" />

          <textarea
            className="md:col-span-2 bg-black border border-cyan-500 p-3"
            rows="5"
            placeholder="Transmission Data"
          />

          <button className="md:col-span-2 bg-cyan-500 text-black py-3">
            SEND TRANSMISSION
          </button>

        </div>

      </section>

    </div>
  );
}