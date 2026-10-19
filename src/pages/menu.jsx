import { useState } from 'react'
import MenuCard from '../components/MenuCard'

const menuItems = [
  {
    name: 'Kopi Susu Gula Aren',
    category: 'Coffee',
    price: 'Rp22.000',
    description: 'Espresso, susu segar, dan gula aren.',
    image: '/aren.jpg',
  },
  {
    name: 'Cappuccino',
    category: 'Coffee',
    price: 'Rp24.000',
    description: 'Espresso dan foam susu yang lembut.',
    image: '/capucino.jpg',
  },
  {
    name: 'Americano',
    category: 'Coffee',
    price: 'Rp18.000',
    description: 'Espresso dengan air untuk rasa kopi yang ringan.',
    image: '/americano.jpg',
  },
  {
    name: 'Matcha Latte',
    category: 'Non-Coffee',
    price: 'Rp25.000',
    description: 'Matcha dan susu dengan tekstur creamy.',
    image: '/matcha.jpg',
  },
  {
    name: 'Chocolate Latte',
    category: 'Non-Coffee',
    price: 'Rp23.000',
    description: 'Cokelat dan susu untuk teman bersantai.',
    image: '/coklat.jpg',
  },
  {
    name: 'Butter Croissant',
    category: 'Food',
    price: 'Rp20.000',
    description: 'Pastry berlapis yang cocok dinikmati bersama kopi.',
    image: '/croisant.jpg',
  },
]

const categories = ['All', 'Coffee', 'Non-Coffee', 'Food']

export default function Menu() {
  const [selected, setSelected] = useState('All')

  const filteredItems =
    selected === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selected)

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="text-center">
        <p className="font-bold uppercase tracking-[0.2em] text-[#82936b]">
          nikmatilah
        </p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Our Menu</h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#85786a]">
          Ayo lihat dan temukan minuman favoritmu, jangan sampai salah memilih. Tapi di ngopi.yuk semuanya enak.
        </p>
      </div>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelected(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              selected === category
                ? 'bg-[#594536] text-white'
                : 'border border-[#ded3c3] bg-white text-[#66584b] hover:bg-[#eee5d6]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mt-8 text-sm text-[#85786a]">
        {filteredItems.length} pilihan menu
      </p>

      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-[#85786a]">
        Harga terbaik, kualitas terbaik
      </p>
    </section>
  )
}
