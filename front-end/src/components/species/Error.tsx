import Header from '@/components/layout/Navigation';

interface SpeciesErrorProps {
  error?: string;
  router: any;
}
export default function SpeciesError(props: SpeciesErrorProps) {
    const { error, router } = props;
    return (
      <div className="min-h-screen">
            <Header />
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
              <div className="text-center">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <p className="text-dark-green text-lg mb-4">{error || 'Espécie não encontrada'}</p>
                <button
                  onClick={router.back}
                  className="px-6 py-2 bg-medium-green text-white rounded hover:bg-[#6a7a5f] transition-colors"
                >
                  Voltar para a lista
                </button>
              </div>
            </div>
          </div>
        )
}