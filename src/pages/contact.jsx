import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `Halo Ruang Seduh Coffee!%0A%0ANama: ${form.name}%0AEmail: ${form.email}%0APesan: ${form.message}`
    window.open(`https://wa.me/6285759326406?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#faf7f0]">
      <section className="bg-[#eee5d6] px-6 py-16 text-center md:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#82936b]">
          Kami ada untuk mu
        </p>

        <h1 className="mt-4 text-4xl font-black text-[#49382c] md:text-6xl">
          Ayo hubungi ngopi.yuk
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-[#746455]">
          Punya pertanyaan, saran, atau ingin berkunjung?
          Ayoo Kirim pesan kepada kami. Kami senang bisa mendengar ceritamu.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#82936b]">
            Get in touch
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#49382c]">
            Ada cerita yang ingin dibagikan?
          </h2>

          <p className="mt-4 leading-8 text-[#85786a]">
            Ngopi.yuk adalah tempat untuk menikmati kopi,
            bertukar cerita, dan mengambil jeda dari kesibukan.
            Kami tunggu kedatanganmu!
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dfe5d4] text-xl">
                📍
              </div>
              <div>
                <h3 className="font-bold text-[#49382c]">Visit Us</h3>
                <p className="mt-1 text-sm leading-6 text-[#85786a]">
                  Bandung, Jawa Barat, Indonesia
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dfe5d4] text-xl">
                ☕
              </div>
              <div>
                <h3 className="font-bold text-[#49382c]">Opening Hours</h3>
                <p className="mt-1 text-sm leading-6 text-[#85786a]">
                  Senin – Minggu
                  <br />
                  09.00 – 22.00 WIB
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dfe5d4] text-xl">
                💬
              </div>
              <div>
                <h3 className="font-bold text-[#49382c]">WhatsApp</h3>
                <p className="mt-1 text-sm leading-6 text-[#85786a]">
                  Hubungi kami jika mau reservasi yaaa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="text-2xl font-black text-[#49382c]">
            Send us a message
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#85786a]">
            Isi formulir berikut untuk mengirim pesan melalui WhatsApp.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#594536]">
                Nama lengkap
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Masukkan nama kamu"
                className="w-full rounded-xl border border-[#e5ddd1] bg-[#faf7f0] px-4 py-3 outline-none focus:border-[#82936b]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#594536]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="nama@email.com"
                className="w-full rounded-xl border border-[#e5ddd1] bg-[#faf7f0] px-4 py-3 outline-none focus:border-[#82936b]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#594536]">
                Pesan
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Ceritakan pesan kamu di sini..."
                className="w-full resize-y rounded-xl border border-[#e5ddd1] bg-[#faf7f0] px-4 py-3 outline-none focus:border-[#82936b]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#594536] px-6 py-3.5 font-bold text-white transition hover:bg-[#75604b]"
            >
              Kirim Pesan via WhatsApp ↗
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
