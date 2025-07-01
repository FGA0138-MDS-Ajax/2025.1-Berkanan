import Image from 'next/image';
import planetaTerra from '@/resources/planetaterra.png';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Navigation() {
  return (
    <nav className="relative px-6 py-4 bg-[#6f826a] text-[#fffed7] shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Lado Esquerdo - Menu Inicial */}
        <div className="flex gap-8 z-10">
          <button 
            className="relative group transition-all duration-300 hover:text-white"
            aria-label="Menu inicial"
          >
            MENU INICIAL
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Centro - Logo e Texto alinhados */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-0 flex flex-col items-center">
          <div className="flex items-center gap-3 -ml-8">
            <Image 
              src={planetaTerra}
              alt="Planeta Terra"
              width={100}
              height={100}
              priority
              className="h-14 w-auto object-contain"
            />
            <span className={`text-3xl tracking-[0.15em] ${bebasNeue.className}`}>
              CERRADEX
            </span>
          </div>
        </div>

        {/* Lado Direito - Sobre o Projeto */}
        <div className="flex gap-8 z-10">
          <button 
            className="relative group transition-all duration-300 hover:text-white"
            aria-label="Sobre o projeto"
          >
            SOBRE O PROJETO
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}