// src/Pages/BlogDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from './BlogData.ts';
import { BlogPost } from './types.ts';
import { ArrowLeft } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // ← Esto vuelve a la página anterior con el scroll exacto como estaba
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // <--- así carga directamente arriba
  }, []);


  useEffect(() => {
    // Buscar el post correspondiente al ID
    const foundPost = blogPosts.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
      // Actualizar el título de la página
      document.title = foundPost.title;
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center">
            <ArrowLeft size={16} className="mr-2" /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Cabecera */}
      <div className="relative h-64 sm:h-80">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F8BC47] text-[#1a1a1a] text-xs font-semibold mb-3">
            {post.category.toUpperCase()}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {post.title}
          </h1>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#80A8D6] flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-white">{post.author.initials}</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
            {post.readTime && (
              <div className="text-sm text-gray-500">
                Tiempo de lectura: {post.readTime}
              </div>
            )}
          </div>
          
          <div className="prose max-w-none mb-8">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mb-6">{paragraph.substring(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.substring(4)}</h3>;
              } else if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-6 mb-2">{paragraph.substring(2)}</li>;
              } else if (paragraph.startsWith('1. ')) {
                return <li key={index} className="ml-6 mb-2 list-decimal">{paragraph.substring(3)}</li>;
              } else if (paragraph.trim() === '') {
                return <br key={index} />;
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={index} className="font-bold mb-4">{paragraph.substring(2, paragraph.length - 2)}</p>;
              } else {
                return <p key={index} className="mb-4">{paragraph}</p>;
              }
            })}
          </div>
          
          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Tags:</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                {post.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                Innovación
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                Tecnología
              </span>
            </div>
          </div>
          
          {/* Botón de volver */}
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleBack} 
              className="bg-[#80A8D6] text-white px-6 py-2 rounded-full hover:bg-[#6090c0] transition-colors duration-300"
            >
              Volver al inicio
            </button>
          </div>
          {/* <div className="flex justify-center mt-12">
            <Link 
              to="/" 
              className="bg-[#80A8D6] text-white px-6 py-2 rounded-full hover:bg-[#6090c0] transition-colors duration-300"
            >
              Volver al inicio
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};