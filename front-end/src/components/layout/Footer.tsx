import { Bebas_Neue } from 'next/font/google'; 

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className="bg-medium-green text-white text-start px-5 py-3 w-full mt-auto">
      <p className={`text-xl ml-10 ${bebasNeue.className}`}>C E R R A D E X</p>
    </footer>
  );
}