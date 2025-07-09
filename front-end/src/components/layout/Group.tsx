interface SelectGroupProps {
  showAll: boolean;
  selected: string
  onClick: (grupo: string) => void;
}

export default function SelectGroup(props: SelectGroupProps) {
  const grupos = ["Mamífero", "Invertebrado", "Réptil", "Peixe"];
  if(props.showAll) grupos.join("Todos");
  
  return (
    <div className="flex items-center gap-6">
      <span className="font-semibold text-dark-green min-w-[60px]">Grupo</span>
      <div className="flex gap-4 flex-wrap">
        {grupos.map(grupo => (
          <button
            key={grupo}
            className={`px-4 py-1 rounded-full transition-colors ${props.selected === grupo
              ? "bg-[#6f826a] text-white"
              : "bg-white border border-[#6f826a] text-[#6f826a]"
              }`}
            onClick={() => props.onClick(grupo)}
          >
            {grupo}
          </button>
        ))}
      </div>
    </div>
  )
}