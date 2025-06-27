export const colorMap: Record<string, string> = {
  mamifero: 'bg-blue-500 text-white',
  reptil: 'bg-green-500 text-white',
  ave: 'bg-yellow-500 text-white',
  peixe: 'bg-purple-500 text-white',
  invertebrado: 'bg-pink-500 text-white',
  EN: 'bg-red-500 text-white',
  VU: 'bg-orange-500 text-white',
  CR: 'bg-purple-700 text-white',
  LC: 'bg-gray-500 text-white',
  NT: 'bg-teal-500 text-white',
};
export const getCategoryName = (status: string | undefined): string => {
  if (!status) return 'NÃO AVALIADA';

  switch (status) {
    case 'EN': return 'EM PERIGO';
    case 'VU': return 'VULNERÁVEL';
    case 'CR': return 'CRITICAMENTE EM PERIGO';
    case 'LC': return 'MENOS PREOCUPANTE';
    case 'NT': return 'QUASE AMEAÇADA';
    default: return 'NÃO AVALIADA';
  }
};