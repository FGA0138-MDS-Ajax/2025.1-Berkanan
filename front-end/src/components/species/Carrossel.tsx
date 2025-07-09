'use client';

import { Especie } from '@/types/species.types';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';


export default function CarrosselEspecies({ especies }: { especies: Especie[] }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 20 },
  });

  const coresGrupo: Record<string, string> = {
    mamífero: 'bg-red-400',
    réptil: 'bg-green-500',
    ave: 'bg-yellow-400',
    peixe: 'bg-blue-500',
    invertebrado: 'bg-purple-500',
  };

  const corStatus = 'bg-orange-500';

  return (
    <section className="mt-10 px-4">
      <h2 className="text-xl font-semibold mb-4">Outras espécies</h2>
      <div ref={sliderRef} className="keen-slider">
        {especies.map((esp) => (
          <div
            key={esp.id}
            className="keen-slider__slide bg-[#D5E8C2] rounded-2xl overflow-hidden shadow-md"
          >
            <Link href={`/especies/${esp.id}`}>
              <img
                src="https://media.discordapp.net/attachments/1359563507640696834/1390744611676229755/cerradex_logo.png?ex=686ea55a&is=686d53da&hm=a0e67381c92a22d5e246003578f669d149d575e121db46fdb1afec18f5742fbe&=&format=webp&quality=lossless&width=1376&height=865" //imagem
                alt={esp.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold truncate">{esp.name}</h3>
                <div className="flex gap-2 mt-2">
                  <span className={`text-xs text-white px-2 py-1 rounded-full ${coresGrupo[esp.familia.toLowerCase()] || 'bg-gray-500'}`}>
                    {esp.familia}
                  </span>
                  <span className={`text-xs text-white px-2 py-1 rounded-full ${corStatus}`}>
                    () //tipo de risco
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}