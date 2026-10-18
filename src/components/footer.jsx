import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-[#40362e] px-6 py-10 text-[#f8f1e6]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row">
        <div>
          <Link to="/" className="text-2xl font-black">
            ruang<span className="text-[#b5c49a]">seduh.</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[#d7cbbb]">
            Secangkir kopi, ruang untuk cerita, dan jeda kecil
            di tengah kesibukan.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Temukan Kami</h3>
          <p className="mt-3 text-sm text-[#d7cbbb]">
            Bandung, Jawa Barat
          </p>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm text-[#b5c49a] hover:underline"
          >
            Instagram ↗
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-xs text-[#d7cbbb]">
        © 2026 Ruang Seduh Coffee. Konsep perusahaan fiktif untuk tugas website.
      </div>
    </footer>
  )
}
