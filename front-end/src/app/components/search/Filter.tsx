export default function FilterSection() {
  return (
    <section className="text-white bg-[#6f826a]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <button className="hover:text-[#fffed7] transition-colors text-[#ffffff]">Randomizar seleção</button>
            <button className="hover:text-[#fffed7] transition-colors text-[#ffffff]">Ordenar de A-Z</button>
            <div className="relative">
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Pesquise por nome"
              className="bg-white/10 border border-white/20 placeholder:text-white/70 w-64 text-[#fffed7] px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}