import { ImageProps } from "@/types/species.types"
import Image from "next/image"

interface SpeciesCardProps {
  name: string
  image: ImageProps[]
  tags: Array<{
    label: string
    color: string
  }>
}

export default function SpeciesCard(props: SpeciesCardProps) {
  return (
    <div className="bg-[#BBD8A3] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Placeholder da imagem */}
      <Image
        src={props.image[0].url}
        alt={props.image[0].alt}
        width={500}
        height={300}
        className="rounded-lg"
      />

      {/* Infos */}
      <div className="p-4">
        <h3 className="text-gray-800 font-medium mb-3 leading-tight">{props.name}</h3>
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className={`${tag.color} text-xs font-medium px-2 py-1 rounded inline-block`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}