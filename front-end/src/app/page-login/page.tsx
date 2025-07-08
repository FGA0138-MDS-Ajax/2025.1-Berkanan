'use client'

import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { login } from "./actions";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginPageContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />

      <form
        className="flex-grow flex items-center justify-center"
        action={login}
      >
        <div className="bg-medium-green p-8 rounded-2xl shadow-md w-full max-w-sm">
          <h1 className="text-4xl font-bold text-white text-center mb-6">Login</h1>
          <label
            htmlFor="email"
            className="block text-white text-sm font-semibold mb-1"
          >
            Usuário
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full mb-4 px-3 py-2 rounded-lg border border-background focus:outline-none focus:ring-2 focus:ring-[#FFFFED]"
            placeholder="Digite seu usuário"
          />

          <label
            htmlFor="password"
            className="block text-white text-sm font-semibold mb-1"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full  px-3 py-2 rounded-lg border border-background focus:outline-none focus:ring-2 focus:ring-[#FFFFED]"
            placeholder="Digite sua senha"
          />
            {error && (
            <div className="text-red-900 mb-7 text-sm text-center">
              {decodeURIComponent(error)}
            </div>
          )}

          <div className="text-left mb-6">
            <a href="#" className="text-sm text-background hover:underline">
              Esqueceu a sua senha?{" "}
              <span className="underline">Clique aqui.</span>
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-background text-[#6F826A] font-bold py-2 rounded-lg hover:bg-yellow-100 transition duration-200"
          >
            Entrar
          </button>

          <p className="text-white text-sm text-center font-semibold mt-4">
            *Somente para administradores*
          </p>
        </div>
      </form>

      <Footer />
    </div>
  );
}
export default function LoginPage() {
return (
  <Suspense fallback={<div>Carregando...</div>}>
    <LoginPageContent />
  </Suspense>
);
}