interface SpeciesCardProps {
  name: string
  tags: Array<{
    label: string
    color: string
  }>
}

export default function SpeciesCard({ name, tags }: SpeciesCardProps) {
  return (
    <div className="bg-[#BBD8A3] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Placeholder da imagem */}
      <div className="h-48 bg-[#6f826a]"></div>

      {/* Infos */}
      <div className="p-4">
        <h3 className="text-gray-800 font-medium mb-3 leading-tight">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className={`${tag.color} text-xs font-medium px-2 py-1 rounded inline-block`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}