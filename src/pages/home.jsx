import { Link } from 'react-router'
import MenuCard from '../components/MenuCard'

const featuredMenu = [
  {
    name: 'Kopi Susu Gula Aren',
    category: 'Coffee',
    price: 'Rp22.000',
    description: 'Espresso, susu segar, dan manisnya gula aren.',
    image: '/aren.jpg',
  },
  {
    name: 'Cappuccino',
    category: 'Coffee',
    price: 'Rp24.000',
    description: 'Perpaduan espresso dan foam susu yang lembut.',
    image: '/capucino.jpg',
  },
  {
    name: 'Matcha Latte',
    category: 'Non-Coffee',
    price: 'Rp25.000',
    description: 'Matcha dengan susu creamy untuk menemani harimu.',
    image: '/matcha.jpg',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#eee5d6]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-[#dce3ce] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#536346]">
              Coffee selalu menghangatkan harimu
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-[#49382c] md:text-7xl">
              Jangan lupa ngopi,
              <span className="block font-normal italic text-[#82936b]">
              Hidup selalu lebih baik setelah ngopi.
              </span>
            </h1>

            <p className="mt-6 max-w-lg leading-8 text-[#746455]">
              Lebih dari sekadar kopi. Temukan tempat untuk
              memulai hari, bertukar cerita, atau menikmati
              waktu untuk dirimu sendiri.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="rounded-full bg-[#594536] px-7 py-3.5 font-semibold text-white transition hover:bg-[#75604b]"
              >
              Varian Menu  ↗
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-[#b7a48e] px-7 py-3.5 font-semibold text-[#594536] transition hover:bg-white/60"
              >
                Cerita tentang ngopi
              </Link>
            </div>

            <div className="mt-10 flex gap-8 border-t border-[#d5c7b4] pt-6">
              <div>
                <p className="text-2xl font-black text-[#594536]">Fresh</p>
                <p className="mt-1 text-xs text-[#857667]">Diseduh setiap hari</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#594536]">Cozy</p>
                <p className="mt-1 text-xs text-[#857667]">Ruang yang nyaman</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#594536]">Local</p>
                <p className="mt-1 text-xs text-[#857667]">Dari kopi pilihan</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200"
              alt="Suasana menyeduh kopi"
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-xl md:h-[540px]"
            />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-[#faf7f0] p-5 shadow-lg sm:left-[-20px]">
              <p className="text-xs uppercase tracking-widest text-[#82936b]">
                Buat momenmu di ngopi.yuk
              </p>
              <p className="mt-1 font-bold text-[#594536]">
                Kopi menunggumu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#82936b]">
              Ngopi.yuk
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Teman di setiap suasana
            </h2>
            <p className="mt-3 leading-7 text-[#85786a]">
              Dari kopi favorit sampai minuman untuk hari yang santai.
            </p>
          </div>

          <Link
            to="/menu"
            className="font-bold text-[#71835d] hover:underline"
          >
            Lihat semua menu ↗
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredMenu.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-[#dfe5d4] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#667653]">
            Ngopi.yuk
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#40392f] md:text-5xl">
            Tempat kecil untuk cerita yang besar.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6f725e]">
            Kami percaya bahwa segala momen yang terjadi akan selalu menjadi kenangan terindah.
          </p>
          <Link
            to="/gallery"
            className="mt-7 inline-block rounded-full bg-[#594536] px-7 py-3 text-white hover:bg-[#75604b]"
          >
            Suasana ngopi.yuk
          </Link>
        </div>
      </section>
    </>
  )
}
