import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', 
});

export default function Footer() {
  return (
    <footer
      className={`bg-medium-green text-white text-start px-5 py-3 w-full mt-auto ${bebasNeue.className}`}
    >
      <p className="text-xl">C e r r a d e x</p>
    </footer>
  );
}
