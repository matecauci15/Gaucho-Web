// src/Components/Blog.tsx/BlogSection.tsx (Rediseñado)
import React, { useState } from 'react';
import { TabType } from './types';
import { blogPosts } from './BlogData';
import { MiniCard } from './MiniCard';
import { NewsList } from './NewsList';
import { CategoryTabs } from './CategoryTabs';

export const BlogSection: React.FC = () => {
  // Eliminar "Todos" y establecer "Tendencias" como pestaña inicial activa
  const availableTabs: TabType[] = ['Tendencias', 'Noticias', 'Tips y Buenas Prácticas'];
  const [activeTab, setActiveTab] = useState<TabType>(availableTabs[0]);
  
  // Function to render content based on active tab
  const renderContent = () => {
    if (activeTab === 'Tendencias' || activeTab === 'Tips y Buenas Prácticas') {
      // Obtenemos todos los posts que pertenecen a esta categoría
      const postsInCategory = blogPosts.filter(post => post.category === activeTab);
      
      // Si hay posts en esta categoría
      if (postsInCategory.length > 0) {
        return (
          <>
            <h3 className="text-white text-xl font-semibold mb-4 border-l-4 border-[#80A8D6] pl-3">
              {activeTab}
            </h3>
            
            {/* Diseño con tarjetas - todas MiniCards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {postsInCategory.map((post) => (
                <div key={post.id}>
                  <div className="bg-[#3a3a39] rounded-lg overflow-hidden shadow-lg">
                    <MiniCard post={post} />
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      } else {
        // Si no hay posts para esta categoría
        return (
          <div className="bg-[#3a3a39] rounded-lg text-center py-12">
            <p className="text-gray-400">No hay artículos disponibles en esta categoría actualmente.</p>
          </div>
        );
      }
    } else if (activeTab === 'Noticias') {
      // Buscar todos los posts de la categoría Noticias
      const newsPosts = blogPosts.filter(post => post.category === 'Noticias');
      
      return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Lista de noticias de la empresa */}
          <div className="md:col-span-5 bg-[#3a3a39] rounded-lg p-5">
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
          
          {/* Posts de noticias del blog */}
          <div className="md:col-span-7">
            <h3 className="text-white text-xl font-semibold mb-4 border-l-4 border-[#80A8D6] pl-3">
              Noticias del blog
            </h3>
            
            {newsPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {newsPosts.map((post) => (
                  <div key={post.id} className="bg-[#3a3a39] rounded-lg overflow-hidden shadow-lg">
                    <MiniCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#3a3a39] rounded-lg text-center py-8">
                <p className="text-gray-400">No hay noticias del blog disponibles actualmente.</p>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // En caso de que se añada una nueva pestaña no contemplada
    return (
      <div className="bg-[#3a3a39] rounded-lg text-center py-12">
        <p className="text-gray-400">Contenido para esta sección en desarrollo.</p>
      </div>
    );
  };

  return (
    <div className="py-12 md:py-16 bg-[#2d2d2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block rounded-full bg-[#80A8D6]/20 px-4 py-1 mb-3 border border-[#80A8D6]/30">
            <span className="text-[#80A8D6] font-mono text-sm">TECH INSIGHTS HUB</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Conocimiento, Tendencias y Consejos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explora nuestros últimos artículos, noticias de la empresa y consejos prácticos para mantenerte a la vanguardia tecnológica.
          </p>
        </div>

        {/* Pestañas de categorías con estilo mejorado */}
        <div className="mb-8">
          <CategoryTabs 
            tabs={availableTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Contenido */}
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};