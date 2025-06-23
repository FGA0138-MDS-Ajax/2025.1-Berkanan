import Image from 'next/image';
import planetaTerra from '@/img/planetaterra.png'; // Importação via alias @

export default function Navigation() {
  return (
    <nav className="relative text-white px-6 py-4 bg-[#6f826a]">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Lado Esquerdo */}
        <div className="flex gap-8">
          <button className="hover:text-white transition-colors text-[#fffed7]">
            MENU INICIAL
          </button>
        </div>

        {/* Centro - Imagem */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image 
            src={planetaTerra}
            alt="Planeta Terra"
            width={100}
            height={100}
            priority
            className="h-14 w-auto object-contain" 
          />
        </div>

        {/* Lado Direito */}
        <div className="flex gap-8">
          <button className="hover:text-white transition-colors text-[#fffed7]">
            SOBRE O PROJETO
          </button>
        </div>
      </div>
    </nav>
  );
}
