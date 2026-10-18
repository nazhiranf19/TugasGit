import { NavLink } from 'react-router'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e0d2] bg-[#faf7f0]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <NavLink to="/" className="text-xl font-black tracking-tight text-[#594536]">
          ruang<span className="text-[#8a9a72]">seduh.</span>
          <span className="ml-2 text-xs font-normal tracking-widest text-[#88796a]">
            COFFEE
          </span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? 'font-bold text-[#73865d]'
                    : 'text-[#66584b] hover:text-[#73865d]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
