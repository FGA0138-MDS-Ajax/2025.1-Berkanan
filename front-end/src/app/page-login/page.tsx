import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import SearchBar from "@/components/search/Searchbar";
import Manager from "@/components/species/Manager";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFFFED]">
      {/* Conteúdo principal centralizado */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-[#6F826A] p-8 rounded-2xl shadow-md w-full max-w-sm">
          {/* Título centralizado e destacado */}
          <h1 className="text-4xl font-bold text-white text-center mb-6">Login</h1>

          {/* Campo Usuário */}
          <label className="block text-white text-sm font-semibold mb-1">Usuário</label>
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFFFED]"
            placeholder="Digite seu usuário"
          />

          {/* Campo Senha */}
          <label className="block text-white text-sm font-semibold mb-1">Senha</label>
          <input
            type="password"
            className="w-full mb-6 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFFFED]"
            placeholder="Digite sua senha"
          />

          {/* Link Esqueceu a senha */}
        <div className="text-left mb-6">
          <a
            href="#"
            className="text-sm text-[#FFFFED] hover:underline"
          >
              Esqueceu a sua senha? <span className="underline">Clique aqui.</span>
          </a>
        </div>

          {/* Botão de Login */}
          <button className="w-full bg-[#FFFFED] text-[#6F826A] font-bold py-2 rounded-lg hover:bg-yellow-100 transition duration-200">
            Entrar
          </button>

          <label className="block text-white text-sm text-center font-semibold mt-4">
            *Somente para administradores*
          </label>
        </div>
      </div>
      {/* Rodapé fixo */}
      
     <Footer />
    </div>
  );
}
