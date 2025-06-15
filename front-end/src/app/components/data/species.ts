import type { Species } from "@/app/components/types/species"

//só pra conseguir visualizar enquanto não tem o banco

export const speciesData: Species[] = [
  {
    id: "bugio-maos-ruivas",
    name: "Bugio-de-mãos-ruivas-do-Maranhão",
    category: "mamifero",
    conservationStatus: "EN",
    tags: [
      { label: "Mamífero", color: "bg-yellow-400 text-black" },
      { label: "EN", color: "bg-red-500 text-white" },
    ],
  },
  {
    id: "cobra-duas-cabecas",
    name: "Cobra-de-duas-cabeças",
    category: "reptil",
    conservationStatus: "EN",
    tags: [
      { label: "Réptil", color: "bg-green-500 text-white" },
      { label: "EN", color: "bg-red-500 text-white" },
    ],
  },
  {
    id: "calanguinho-chapada",
    name: "Calanguinho-da-chapada-dos-parecis",
    category: "reptil",
    conservationStatus: "EN",
    tags: [
      { label: "Réptil", color: "bg-green-500 text-white" },
      { label: "EN", color: "bg-red-500 text-white" },
    ],
  },
  {
    id: "egla-franca",
    name: "Égla Franca",
    category: "invertebrado",
    conservationStatus: "CR",
    tags: [
      { label: "Invertebrado", color: "bg-purple-500 text-white" },
      { label: "CR", color: "bg-red-600 text-white" },
    ],
  },
  {
    id: "egla-peroba",
    name: "Égla Peroba",
    category: "invertebrado",
    conservationStatus: "CR",
    tags: [
      { label: "Invertebrado", color: "bg-purple-500 text-white" },
      { label: "CR", color: "bg-red-600 text-white" },
    ],
  },
  {
    id: "mandi-chumbado",
    name: "Mandi-chumbado",
    category: "peixe",
    conservationStatus: "EN",
    tags: [
      { label: "Peixe", color: "bg-cyan-400 text-black" },
      { label: "EN", color: "bg-red-500 text-white" },
    ],
  },
]