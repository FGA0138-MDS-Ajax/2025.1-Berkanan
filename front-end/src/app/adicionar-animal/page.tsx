'use client'
import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

import { postAnimals } from '@/_api/animals.api'
import Footer from "@/components/layout/Footer"
import { AnimalData } from '@/types/species.types'
import { RiskStatus } from '@/types/general.types'
import SelectGroup from '@/components/layout/Group'
import SelectStatus from '@/components/layout/Status'
import TextInput from "@/components/layout/TextInput"
import Navigation from "@/components/layout/Navigation"

export default function AddAnimal() {
  const supabase = createClient()
  const [selectedRiskStatuses, setSelectedRiskStatuses] = useState<RiskStatus[]>([]);
  const [grupoSelecionado, setGrupoSelecionado] = useState("Todos");
  const [animalData, setAnimalData] = useState<AnimalData>({
    name: '',
    order: '',
    height: '',
    phylum: '',
    family: '',
    lifeExpectancy: '',
    class: '',
    weight: '',
    habitat: '',
    image: null,
    risk: selectedRiskStatuses[0],
    group: 'Peixe',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (field: keyof AnimalData, value: string) => {
    setAnimalData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAnimalData(prev => ({
        ...prev,
        image: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postAnimals(animalData);

  }
  supabase.auth.getUser().then(({data, error}) => {
    if (error || !data?.user) {
      redirect('/login')
    }
  })
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <form onSubmit={handleSubmit} className="flex  px-10 py-10 gap-6">
        <div className="min-w-[65vw] flex bg-light-green rounded p-5 ">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-dark-green">Adicionar Espécie</h2>
            <div className="grid grid-cols-3 grid-rows-4 gap-4 ">
              <TextInput
                title="Nome da Espécie"
                placeholder="Digite o nome"
                onText={(value) => handleInputChange('name', value)}
              />
              <TextInput
                title="Ordem"
                placeholder="Digite a ordem"
                onText={(value) => handleInputChange('order', value)}
              />
              <TextInput
                title="Altura"
                placeholder="Digite a altura"
                onText={(value) => handleInputChange('height', value)}
              />
              <TextInput
                title="Filo"
                placeholder="Digite o filo"
                onText={(value) => handleInputChange('phylum', value)}
              />
              <TextInput
                title="Família"
                placeholder="Digite a família"
                onText={(value) => handleInputChange('family', value)}
              />
              <TextInput
                title="Expectativa de Vida"
                placeholder="Digite a expectativa"
                onText={(value) => handleInputChange('lifeExpectancy', value)}
              />
              <TextInput
                title="Classe"
                placeholder="Digite a classe"
                onText={(value) => handleInputChange('class', value)}
              />
              <TextInput
                title="Peso"
                placeholder="Digite o peso"
                onText={(value) => handleInputChange('weight', value)}
              />
              <TextInput
                title="Habitat"
                placeholder="Digite o habitat"
                onText={(value) => handleInputChange('habitat', value)}
              />
            </div>
            <div className='flex flex-col gap-8 items-center'>
              <SelectGroup selected={grupoSelecionado} onClick={(value) => handleInputChange('group', value)} showAll={false}/>
              <SelectStatus selectedRiskStatuses={selectedRiskStatuses} setSelectedRiskStatuses={setSelectedRiskStatuses} />
              <button className="bg-medium-green text-white px-8 py-2 rounded-lg flex items-center gap-2">
                <span>➕</span> Adicionar Espécie
              </button>
            </div>
          </div>
          <div className='ml-4 mt-[6.3vh]'>
            <p className='text-dark-green'>Sobre</p>
            <textarea placeholder='Digite uma descrição' className='bg-medium-green placeholder-white h-50 rounded text-start' />
          </div>

        </div>
        <div className="bg-light-green p-5 rounded min-w-[20vw]">
          <div className='flex flex-col'>
            <h2 className="text-2xl font-bold mb-4 text-dark-green">Adicionar Imagem</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4 text-dark-green"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Pré-visualização"
                className="max-w-full h-auto rounded"
              />
            )}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}