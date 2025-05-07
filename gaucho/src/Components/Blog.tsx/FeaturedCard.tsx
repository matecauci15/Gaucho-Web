// // src/Components/Blog.tsx/FeaturedCard.tsx (Modificado)
// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { BlogPost } from './types';
// import { Link } from 'react-router-dom';

// interface FeaturedCardProps {
//   post: BlogPost;
// }

// export const FeaturedCard: React.FC<FeaturedCardProps> = ({ post }) => {
//   return (
//     <div className="md:col-span-2 rounded-xl overflow-hidden relative group shadow-lg">
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
//       <img 
//         src={post.image}
//         alt={post.title} 
//         className="w-full object-cover h-80 md:h-full transition-transform duration-500 group-hover:scale-105"
//       />
//       <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
//         <span className="inline-block px-3 py-1 rounded-full bg-[#F8BC47] text-[#1a1a1a] text-xs font-semibold mb-3">
//           {post.category.toUpperCase()}
//         </span>
//         <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
//           {post.title}
//         </h3>
//         <p className="text-white/80 mb-4 line-clamp-2">
//           {post.summary}
//         </p>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-[#80A8D6] flex items-center justify-center mr-2">
//               <span className="text-xs font-bold">{post.author.initials}</span>
//             </div>
//             <span className="text-sm text-white/70">{post.author.name} • {post.date}</span>
//           </div>
//           <Link 
//             to={`/blog/${post.id}`}
//             className="text-[#80A8D6] hover:text-[#F8BC47] transition-colors duration-300 flex items-center"
//           >
//             Leer más <ArrowRight size={16} className="ml-1" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // src/Components/Blog.tsx/FeaturedCard.tsx (Modificado)
// import React from 'react'; 
// import { ArrowRight } from 'lucide-react'; 
// import { BlogPost } from './types'; 
// import { Link } from 'react-router-dom';  

// interface FeaturedCardProps {   
//   post: BlogPost; 
// }  

// export const FeaturedCard: React.FC<FeaturedCardProps> = ({ post }) => {   
//   return (     
//     <div className="rounded-xl overflow-hidden relative group shadow-lg">       
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>       
//       <img          
//         src={post.image}         
//         alt={post.title}          
//         className="w-full object-cover h-80 md:h-full transition-transform duration-500 group-hover:scale-105"       
//       />       
//       <div className="absolute bottom-0 left-0 right-0 p-4 z-20">         
//         <span className="inline-block px-3 py-1 rounded-full bg-[#F8BC47] text-[#1a1a1a] text-xs font-semibold mb-3">           
//           {post.category.toUpperCase()}         
//         </span>         
//         <h3 className="text-xl md:text-lg font-bold mb-2 text-white">           
//           {post.title}         
//         </h3>         
//         {/* <p className="text-white/80 mb-4 line-clamp-2">           
//           {post.summary}         
//         </p>          */}
//         <div className="flex items-center justify-between">           
//           {/* <div className="flex items-center">             
//             <div className="w-8 h-8 rounded-full bg-[#80A8D6] flex items-center justify-center mr-2">               
//               <span className="text-xs font-bold">{post.author.initials}</span>             
//             </div>             
//             <span className="text-sm text-white/70">{post.author.name} • {post.date}</span>           
//           </div>            */}
//           <Link              
//             to={`/blog/${post.id}`}             
//             className="text-[#80A8D6] hover:text-[#F8BC47] transition-colors duration-300 flex items-center"           
//           >             
//             Leer más <ArrowRight size={14} className="ml-1" />           
//           </Link>         
//         </div>       
//       </div>     
//     </div>   
//   ); 
// };