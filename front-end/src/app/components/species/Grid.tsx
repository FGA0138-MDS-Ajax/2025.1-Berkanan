import SpeciesCard from "./Card"
import { speciesData } from "../data/species"

//pega as coisas do data/ pra colocar no card

export default function SpeciesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speciesData.map((animal, index) => (
          <SpeciesCard key={animal.id || index} name={animal.name} tags={animal.tags} />
        ))}
      </div>
    </section>
  )
}
