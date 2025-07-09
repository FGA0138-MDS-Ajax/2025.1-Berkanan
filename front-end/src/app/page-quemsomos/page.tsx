import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col justify-between">
      <Navigation />

      <main className="flex-grow flex flex-col items-center px-6 text-center pt-8 md:pt-12">
        {/* Título centralizado */}
        <div className="mb-0">
          <h1 className="text-[64px] font-bold text-[#2A3A2B] mb-0 leading-tight">
            o que é o
          </h1>
          <h2 className="text-[96px] font-extrabold text-medium-green -mt-3">
            CERRADEX?
          </h2>
        </div>

        {/* Caixa com o texto principal */}
        <div className="w-full flex justify-center">
          <div className="bg-medium-green rounded-2xl shadow-lg w-full max-w-6xl p-6 md:p-8">
            <div className="bg-[#BBD8A3] p-2 md:p-4 rounded-xl text-[#2A3A2B] text-base md:text-lg leading-normal text-left">
              <p className="mb-4">
                O Cerradex é um site desenvolvido com o objetivo de levar conhecimento às pessoas sobre os animais do Cerrado brasileiro que estão em risco de extinção. Acreditamos que, ao conhecerem melhor essas espécies, as pessoas se sentirão mais conectadas e motivadas a preservá-las.
              </p>
              <p className="mb-4">
                Nosso projeto se inspira na ODS 11.4 da ONU — “Fortalecer esforços para proteger e salvaguardar o patrimônio cultural e natural do mundo”. Para nós, os animais do Cerrado são parte essencial do nosso patrimônio natural, e o Cerradex é a nossa forma de contribuir com a sua preservação por meio da informação.
              </p>
              <p className="mb-4">
                O site foi desenvolvido como parte da disciplina de Métodos de Desenvolvimento de Software, no curso de Engenharia de Software da Universidade de Brasília (UnB). Ele é fruto de aulas práticas que nos desafiaram a aplicar os conhecimentos técnicos em um projeto com propósito real e impacto social.
              </p>
              <p>
                Com o Cerradex, queremos despertar a curiosidade, o cuidado e o senso de responsabilidade com um dos biomas mais ricos e ameaçados do Brasil: o Cerrado.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
