import GalleryCard from '../components/GalleryCard'

const galleryItems = [
  {
    title: 'A Cozy Corner',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000',
  },
  {
    title: 'The Art of Brewing',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000',
  },
  {
    title: 'Coffee and Conversations',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000',
  },
  {
    title: 'Slow Morning',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000',
  },
  {
    title: 'Made with Love',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000',
  },
  {
    title: 'Little Coffee Break',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000',
  },
]

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="font-bold uppercase tracking-[0.2em] text-[#82936b]">
          Moments at Ruang Seduh
        </p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          A glimpse of our little world.
        </h1>
        <p className="mt-5 leading-8 text-[#85786a]">
          Dari aroma kopi yang baru diseduh sampai obrolan
          yang tidak terasa sudah berjam-jam, setiap sudut
          punya cerita tersendiri.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <GalleryCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
