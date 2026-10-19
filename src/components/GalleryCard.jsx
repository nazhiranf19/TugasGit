export default function GalleryCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-[#e9e0d2]">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16 text-white">
        <p className="text-xs uppercase tracking-widest text-[#dce6c9]">
          Ngopi Moments
        </p>
        <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
      </div>
    </article>
  )
}
