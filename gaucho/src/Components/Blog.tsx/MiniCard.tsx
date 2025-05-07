// // src/Components/Blog.tsx/MiniCard.tsx (Modificado)
// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { BlogPost } from './types';
// import { Link } from 'react-router-dom';

// interface MiniCardProps {
//   post: BlogPost;
// }

// export const MiniCard: React.FC<MiniCardProps> = ({ post }) => {
//   return (
//     <div className="rounded-xl overflow-hidden relative group shadow-lg">
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
//       <img 
//         src={post.image} 
//         alt={post.title} 
//         className="w-full object-cover h-60 transition-transform duration-500 group-hover:scale-105"
//       />
//       <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
//         <span className="inline-block px-3 py-1 rounded-full bg-[#F8BC47] text-[#1a1a1a] text-xs font-semibold mb-2">
//           {post.category.toUpperCase()}
//         </span>
//         <h3 className="text-lg font-bold mb-2 text-white">
//           {post.title}
//         </h3>
//         <Link
//           to={`/blog/${post.id}`}
//           className="text-[#80A8D6] hover:text-[#F8BC47] transition-colors duration-300 flex items-center text-sm"
//         >
//           Leer más <ArrowRight size={14} className="ml-1" />
//         </Link>
//       </div>
//     </div>
//   );
// };


// src/Components/Blog.tsx/MiniCard.tsx (Modificado)
import React from 'react'; 
import { ArrowRight } from 'lucide-react'; 
import { BlogPost } from './types'; 
import { Link } from 'react-router-dom';  

interface MiniCardProps {   
  post: BlogPost; 
}  

export const MiniCard: React.FC<MiniCardProps> = ({ post }) => {   
  return (     
    <div className="rounded-xl overflow-hidden relative group shadow-lg">       
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>       
      <img          
        src={post.image}          
        alt={post.title}          
        className="w-full object-cover h-60 transition-transform duration-500 group-hover:scale-105"       
      />       
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">         
        <span className="inline-block px-3 py-1 rounded-full bg-[#F8BC47] text-[#1a1a1a] text-xs font-semibold mb-2">           
          {post.category.toUpperCase()}         
        </span>         
        <h3 className="text-lg font-bold mb-2 text-white">           
          {post.title}         
        </h3>         
        <Link           
          to={`/blog/${post.id}`}           
          className="text-[#80A8D6] hover:text-[#F8BC47] transition-colors duration-300 flex items-center text-sm"         
        >           
          Leer más <ArrowRight size={14} className="ml-1" />         
        </Link>       
      </div>     
    </div>   
  ); 
};