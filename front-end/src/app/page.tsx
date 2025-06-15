import Navigation from "@/app/components/layout/Navigation"
import Hero from "@/app/components/layout/Hero"
import Filter from "@/app/components/search/Filter"
import Grid from "@/app/components/species/Grid"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fffed7]">
      <Navigation />
      <Hero />
      <Filter />
      <Grid />
    </div>
  )
}