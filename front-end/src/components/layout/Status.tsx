import { RiskStatus } from "@/types/general.types";
import React, { useCallback } from "react";

interface SelectStatuProps {
  selectedRiskStatuses: RiskStatus[]
  setSelectedRiskStatuses: React.Dispatch<React.SetStateAction<RiskStatus[]>>;
}

export default function SelectStatus(props: SelectStatuProps) {
  const handleRiskStatusToggle = useCallback((status: RiskStatus) => {
    props.setSelectedRiskStatuses(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  }, []);
  
  const getRiskStatusLabel = (status: RiskStatus): string => ({
    [RiskStatus.CR]: "Criticamente em perigo (CR)",
    [RiskStatus.EN]: "Em perigo (EN)"
  })[status];
  return (
    <div className="flex items-center gap-6">

      <div className="flex items-center gap-6">
        <span className="font-semibold text-dark-green min-w-[100px]">Status</span>
        <div className="flex gap-4 flex-wrap">
          {Object.values(RiskStatus).map(status => (
            <label key={status} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={props.selectedRiskStatuses.includes(status)}
                onChange={() => handleRiskStatusToggle(status)}
                className="w-5 h-5 border-3 border-medium-green bg-transparent appearance-none rounded-sm 
                              checked:bg-[#6f826a] checked:border-[#6f826a] 
                              relative checked:after:content-['✓'] checked:after:text-white 
                              checked:after:text-xs checked:after:absolute checked:after:inset-0 
                              checked:after:flex checked:after:items-center checked:after:justify-center"
              />
              <span className="text-dark-green">{getRiskStatusLabel(status)}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}