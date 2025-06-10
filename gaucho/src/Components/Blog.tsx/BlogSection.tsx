import React, { useState } from 'react';
import { TabType } from './types';
import { blogPosts } from './BlogData';
import { MiniCard } from './MiniCard';
import { NewsList } from './NewsList';
import { CategoryTabs } from './CategoryTabs';

export const BlogSection: React.FC = () => {
  const availableTabs: TabType[] = ['Tendencias', 'Noticias', 'Tips y Buenas Prácticas'];

  const INITIAL_VISIBLE_COUNTS: Record<TabType, number> = {
    'Tendencias': 6,
    'Noticias': 4,
    'Tips y Buenas Prácticas': 6,
  };

  const INCREMENT_COUNT: Record<TabType, number> = {
    'Tendencias': 6,
    'Noticias': 4,
    'Tips y Buenas Prácticas': 6,
  };

  const [activeTab, setActiveTab] = useState<TabType>(availableTabs[0]);
  const [visibleCountByTab, setVisibleCountByTab] = useState<Record<TabType, number>>({ ...INITIAL_VISIBLE_COUNTS });

  const handleVerMas = () => {
    setVisibleCountByTab(prev => ({
      ...prev,
      [activeTab]: prev[activeTab] + INCREMENT_COUNT[activeTab]
    }));
  };

  const handleVerMenos = () => {
    setVisibleCountByTab(prev => ({
      ...prev,
      [activeTab]: INITIAL_VISIBLE_COUNTS[activeTab]
    }));
  };

  const renderContent = () => {
    const postsInCategory = blogPosts.filter(post => post.category === activeTab);
    const visibleCount = visibleCountByTab[activeTab];
    const visiblePosts = postsInCategory.slice(0, visibleCount);

    if (activeTab === 'Noticias') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 bg-[#3a3a39] overflow-hidden max-h-150 rounded-lg p-5">
            <h3 className="text-white text-xl font-semibold mb-4 border-l-4 border-[#80A8D6] pl-3">
              Noticias de la empresa 
            </h3>
            <NewsList 
              title=""
              items={[
                {
                  id: "noticia-1",
                  date: "15 ABRIL 2025",
                  title: "Nuestra empresa reconocida como Top Innovator 2025",
                  summary: "Hemos sido reconocidos en los premios anuales de tecnología como una de las empresas más innovadoras del sector."
                },
                {
                  id: "noticia-2",
                  date: "2 ABRIL 2025",
                  title: "Ampliamos nuestro equipo con 5 nuevos desarrolladores senior",
                  summary: "Como parte de nuestro plan de crecimiento, damos la bienvenida a 5 nuevos talentos en desarrollo."
                },
                {
                  id: "noticia-3",
                  date: "22 MARZO 2025",
                  title: "Lanzamos nuestro nuevo servicio de ciberseguridad avanzada",
                  summary: "Respondiendo a la creciente demanda del mercado, presentamos nuestra nueva línea de servicios especializados."
                }
              ]}
            />
          </div>
          <div className="md:col-span-7">
            <h3 className="text-white text-xl font-semibold mb-4 border-l-4 border-[#80A8D6] pl-3">
              Noticias del blog
            </h3>

            {visiblePosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visiblePosts.map((post) => (
                    <div key={post.id} className="bg-[#3a3a39] rounded-lg overflow-hidden shadow-lg">
                      <MiniCard post={post} />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6 space-x-4">
                  {visibleCount < postsInCategory.length && (
                    <button
                      onClick={handleVerMas}
                      className="px-6 py-2 bg-[#80A8D6] hover:bg-[#5f8cb8] text-white rounded-lg transition duration-200"
                    >
                      Ver más noticias
                    </button>
                  )}
                  {visibleCount > INITIAL_VISIBLE_COUNTS[activeTab] && (
                    <button
                      onClick={handleVerMenos}
                      className="px-6 py-2 border border-[#80A8D6] text-[#80A8D6] hover:bg-[#2d2d2c] rounded-lg transition duration-200"
                    >
                      Ver menos
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-[#3a3a39] rounded-lg text-center py-8">
                <p className="text-gray-400">No hay noticias del blog disponibles actualmente.</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Para Tendencias, Tips y otras secciones
    return (
      <>
        <h3 className="text-white text-xl font-semibold mb-4 border-l-4 border-[#80A8D6] pl-3">
          {activeTab}
        </h3>
        {visiblePosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visiblePosts.map((post) => (
                <div key={post.id}>
                  <div className="bg-[#3a3a39] rounded-lg overflow-hidden shadow-lg">
                    <MiniCard post={post} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 space-x-4">
              {visibleCount < postsInCategory.length && (
                <button
                  onClick={handleVerMas}
                  className="px-6 py-2 bg-[#80A8D6] hover:bg-[#5f8cb8] text-white rounded-lg transition duration-200"
                >
                  Ver más
                </button>
              )}
              {visibleCount > INITIAL_VISIBLE_COUNTS[activeTab] && (
                <button
                  onClick={handleVerMenos}
                  className="px-6 py-2 border border-[#80A8D6] text-[#80A8D6] hover:bg-[#2b2b2c] rounded-lg transition duration-200"
                >
                  Ver menos
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="bg-[#3a3a39] rounded-lg text-center py-12">
            <p className="text-gray-400">No hay artículos disponibles en esta categoría actualmente.</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="py-12 md:py-16 bg-[#2b2b2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block rounded-full bg-[#80A8D6]/20 px-4 py-1 mb-3 border border-[#80A8D6]/30">
            <span className="text-[#80A8D6] font-mono text-sm">TECH INSIGHTS HUB</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white">Conocimiento, Tendencias y Consejos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explora nuestros últimos artículos, noticias de la empresa y consejos prácticos para mantenerte a la vanguardia tecnológica.
          </p>
        </div>

        <div className="mb-8">
          <CategoryTabs 
            tabs={availableTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
