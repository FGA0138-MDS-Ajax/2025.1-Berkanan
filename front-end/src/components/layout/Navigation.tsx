import Image from 'next/image';
import planetaTerra from '@/resources/planetaterra.png';

export default function Navigation() {
  return (
    <nav className="relative px-6 py-4 bg-medium-green text-background shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Lado Esquerdo - Menu Inicial */}
        <div className="flex gap-8 z-10">
          <button 
            className="relative group transition-all duration-300 hover:text-white"
            aria-label="Menu inicial"
          >
            MENU INICIAL
            <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Centro - Planeta Terra */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
          <Image 
            src={planetaTerra}
            alt="Planeta Terra"
            width={100}
            height={100}
            priority
            className="h-14 w-auto object-contain transition-transform duration-700 hover:scale-105 hover:rotate-2"
          />
        </div>

        {/* Lado Direito - Sobre o Projeto */}
        <div className="flex gap-8 z-10">
          <button 
            className="relative group transition-all duration-300 hover:text-white"
            aria-label="Sobre o projeto"
          >
            SOBRE O PROJETO
            <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}