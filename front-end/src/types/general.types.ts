export interface SearchBarProps {
  placeholder?: string
  onSearch?: (value: string) => void
  className?: string
}
export enum RiskStatus {
  CR = "CR",
  EN = "EN"
}
