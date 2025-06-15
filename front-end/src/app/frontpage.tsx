// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { X } from "lucide-react"

// export default function CerraDex() {
//   const species = [
//     {
//       name: "Bugio-de-mãos-ruivas-do-Maranhão",
//       tags: [
//         { label: "Mamífero", color: "bg-yellow-400 text-black" },
//         { label: "EN", color: "bg-red-500 text-white" },
//       ],
//     },
//     {
//       name: "Cobra-de-duas-cabeças",
//       tags: [
//         { label: "Réptil", color: "bg-green-500 text-white" },
//         { label: "EN", color: "bg-red-500 text-white" },
//       ],
//     },
//     {
//       name: "Calanguinho-da-chapada-dos-parecis",
//       tags: [
//         { label: "Réptil", color: "bg-green-500 text-white" },
//         { label: "EN", color: "bg-red-500 text-white" },
//       ],
//     },
//     {
//       name: "Égla Franca",
//       tags: [
//         { label: "Invertebrado", color: "bg-purple-500 text-white" },
//         { label: "CR", color: "bg-red-600 text-white" },
//       ],
//     },
//     {
//       name: "Égla Peroba",
//       tags: [
//         { label: "Invertebrado", color: "bg-purple-500 text-white" },
//         { label: "CR", color: "bg-red-600 text-white" },
//       ],
//     },
//     {
//       name: "Mandi-chumbado",
//       tags: [
//         { label: "Peixe", color: "bg-cyan-400 text-black" },
//         { label: "EN", color: "bg-red-500 text-white" },
//       ],
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-[rgba(255,255,237,1)]">
//       {/* Top Navigation */}
//       <nav className="text-white px-6 py-4 bg-[rgba(111,130,106,1)]">
//         <div className="flex gap-8">
//           <button className="hover:text-green-200 transition-colors text-[rgba(255,255,237,1)]">MENU INICIAL</button>
//           <button className="hover:text-green-200 transition-colors text-[rgba(255,255,237,1)]">SOBRE O PROJETO</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="py-16 text-center bg-[rgba(255,255,237,1)]">
//         <div className="max-w-4xl mx-auto px-6">
//           <p className="text-lg mb-4 tracking-wider text-[rgba(111,130,106,1)]">Bem-vindo ao</p>
//           <h1 className="text-5xl font-light text-gray-800 mb-8 tracking-wider">CerraDex</h1>
//           <div className="text-[rgba(111,130,106,1)] text-lg leading-relaxed tracking-wide">
//             <p>Procure por uma espécie</p>
//             <p>ou nos deixe te mostrar algumas!</p>
//           </div>
//         </div>
//       </section>

//       {/* Search/Filter Section */}
//       <section className="text-white bg-[rgba(111,130,106,1)]">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex gap-8">
//               <button className="hover:text-green-200 transition-colors text-[rgba(255,255,237,1)]">Randomizar seleção</button>
//               <button className="hover:text-green-200 transition-colors text-[rgba(255,255,237,1)]">Ordenar de A-Z</button>
//               <div className="relative">
//                 <button className="bg-green-500 px-6 py-2 rounded-full text-white font-medium">Busca avançada</button>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <Input
//                 placeholder="Pesquise por nome"
//                 className="bg-white/10 border-white/20 placeholder:text-white/70 w-64 text-[rgba(255,255,237,1)]"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Species Grid */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {species.map((animal, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
//               {/* Placeholder Image */}
//               <div className="h-48 bg-[rgba(111,130,106,1)]"></div>

//               {/* Content */}
//               <div className="p-4 text-[rgba(240,241,197,1)]">
//                 <h3 className="text-gray-800 font-medium mb-3 leading-tight">{animal.name}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {animal.tags.map((tag, tagIndex) => (
//                     <Badge key={tagIndex} className={`${tag.color} text-xs font-medium px-2 py-1 rounded`}>
//                       {tag.label}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }