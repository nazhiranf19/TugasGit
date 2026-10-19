export default function MenuCard({ item }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={item.image}
        alt={item.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#82936b]">
              {item.category}
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#49382c]">
              {item.name}
            </h3>
          </div>

          <p className="shrink-0 font-bold text-[#594536]">
            {item.price}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-[#85786a]">
          {item.description}
        </p>
      </div>
    </article>
  )
}
