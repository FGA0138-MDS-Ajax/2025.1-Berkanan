"use client"

import { SearchBarProps } from "@/types/general.types"
import type React from "react"


export default function SearchBar({ placeholder = "Pesquise por nome", onSearch, className = "" }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value)
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="bg-white/10 border border-white/20 placeholder:text-white/70 w-64 text-[#fffed7] px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
      />
    </div>
  )
}