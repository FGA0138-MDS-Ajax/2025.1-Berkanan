interface ManagerProps {
    id: string;
    name: string;
    tags: Array<{
        label: string;
        color: string;
    }>;
}

export default function Manager(props: ManagerProps) {
  return (
    <div className="grid grid-cols-6 items-center text-black text-center py-2">
      <p className="w-16 mx-auto">{props.id}</p>
      <p className="w-40 mx-auto">{props.name}</p>

      <div className={`bg-opacity-20 rounded-lg p-2 w-32 mx-auto ${props.tags[0].color}`}>
        <p className="text-white truncate">{props.tags[0].label}</p>
      </div>
      <div className={`bg-opacity-20 rounded-lg p-2 w-20 mx-auto ${props.tags[1].color}`}>
        <p className="text-white truncate">{props.tags[1].label}</p>
      </div>

      <p className="w-8 mx-auto">🖌️</p>
      <p className="w-8 mx-auto">🗑️</p>
    </div>
  );
}

