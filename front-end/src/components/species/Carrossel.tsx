'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';

export type Especie = {
  id: number;
  nome_comum: string;
  imagem_url: string;
  grupo: string;
  status_conservacao: string;
};

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
                src={esp.imagem_url}
                alt={esp.nome_comum}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold truncate">{esp.nome_comum}</h3>
                <div className="flex gap-2 mt-2">
                  <span className={`text-xs text-white px-2 py-1 rounded-full ${coresGrupo[esp.grupo.toLowerCase()] || 'bg-gray-500'}`}>
                    {esp.grupo}
                  </span>
                  <span className={`text-xs text-white px-2 py-1 rounded-full ${corStatus}`}>
                    ({esp.status_conservacao})
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