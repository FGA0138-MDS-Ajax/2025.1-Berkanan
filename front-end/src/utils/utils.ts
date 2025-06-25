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

export const getCategoryColor = (status: string): string => {
  switch (status) {
    case 'EN': return 'bg-red-500 text-white';
    case 'VU': return 'bg-orange-500 text-white';
    case 'CR': return 'bg-red-700 text-white';
    case 'LC': return 'bg-green-500 text-white';
    case 'NT': return 'bg-yellow-500 text-white';
    default: return 'bg-gray-500 text-white';
  }
};