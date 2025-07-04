import Header from '@/components/layout/Navigation';

export default function Loading() {
        return (
          <div className="min-h-screen  font-[var(--magra-font)]">
            <Header />
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medium-green mx-auto mb-4"></div>
                <p className="text-medium-green text-lg">Carregando informações...</p>
              </div>
            </div>
          </div>
        )
}