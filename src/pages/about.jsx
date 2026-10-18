export default function About() {
  const values = [
    {
      title: 'Quality',
      description: 'Memperhatikan kualitas bahan dan konsistensi rasa.',
      symbol: '01',
    },
    {
      title: 'Comfort',
      description: 'Menciptakan tempat yang nyaman untuk semua orang.',
      symbol: '02',
    },
    {
      title: 'Connection',
      description: 'Membangun hubungan melalui keramahan dan cerita.',
      symbol: '03',
    },
  ]

  return (
    <>
      <section className="bg-[#eee5d6] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-[0.2em] text-[#82936b]">
            Our Story
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Setiap ruang punya cerita, setiap kopi punya makna.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-[#746455]">
            Kami hadir untuk menjadikan hal sederhana terasa
            istimewa, dimulai dari secangkir kopi.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000"
          alt="Interior coffee shop"
          className="h-[400px] w-full rounded-3xl object-cover"
        />

        <div>
          <p className="font-bold uppercase tracking-widest text-[#82936b]">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-black">Kenalan dengan Ruang Seduh</h2>
          <p className="mt-5 leading-8 text-[#746455]">
            Ruang Seduh Coffee adalah konsep coffee shop yang
            mengutamakan kopi berkualitas, pelayanan ramah,
            dan suasana yang membuat pengunjung betah.
          </p>
          <p className="mt-4 leading-8 text-[#746455]">
            Kami ingin menjadi tempat untuk berbagai kegiatan:
            mengerjakan tugas, bertemu teman, berdiskusi,
            maupun sekadar menikmati waktu sendiri.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl bg-[#f4efe5] p-8 md:p-10">
              <p className="font-bold uppercase tracking-widest text-[#82936b]">
                Our Vision
              </p>
              <h2 className="mt-4 text-3xl font-black">Visi Kami</h2>
              <p className="mt-5 leading-8 text-[#746455]">
                Menjadi coffee shop pilihan yang menghadirkan
                kopi berkualitas, suasana nyaman, dan pengalaman
                berkesan bagi setiap pelanggan.
              </p>
            </article>

            <article className="rounded-3xl bg-[#dfe5d4] p-8 md:p-10">
              <p className="font-bold uppercase tracking-widest text-[#667653]">
                Our Mission
              </p>
              <h2 className="mt-4 text-3xl font-black">Misi Kami</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-[#59624c]">
                <li>Menyajikan minuman dengan rasa yang konsisten.</li>
                <li>Menciptakan ruang yang nyaman dan inklusif.</li>
                <li>Memberikan pelayanan yang ramah.</li>
                <li>Mendukung kreativitas dan kebersamaan.</li>
              </ul>
            </article>
          </div>

          <h2 className="mt-16 text-center text-3xl font-black">
            Hal yang Kami Percayai
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-[#e9e0d2] p-6">
                <p className="text-sm font-bold text-[#82936b]">{value.symbol}</p>
                <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
                <p className="mt-3 leading-7 text-[#85786a]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
