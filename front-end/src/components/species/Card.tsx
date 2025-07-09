import { ImageProps } from "@/types/species.types"
import Image from "next/image"

interface SpeciesCardProps {
  name: string
  image: ImageProps
  tags: Array<{
    label: string
    color: string
  }>
}

export default function SpeciesCard(props: SpeciesCardProps) {
  return (
    <div className="bg-medium-green rounded-lg flex flex-col items-center">
      <Image
        src={props.image.url}
        alt={props.image.alt}
        width={300}
        height={200}
        className="rounded-lg"
      />

      <div className="p-5 bg-light-green w-full rounded-b-lg">
        <h3 className="font-medium mt-5 leading-tight">{props.name}</h3>
        <div className="flex mt-5 flex-wrap gap-2">
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