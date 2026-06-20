"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCloudinaryProducts } from "./actions";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function Marketplace() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndices, setActiveImageIndices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    async function loadData() {
      try {
        const liveProducts = await getCloudinaryProducts();
        setProducts(liveProducts);
      } catch (err) {
        console.error("Marketplace UI loader failure:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const changeImageIndex = (productId: string, totalImages: number, direction: number) => {
    const currentIndex = activeImageIndices[productId] || 0;
    let newIndex = currentIndex + direction;
    if (newIndex >= totalImages) newIndex = 0;
    if (newIndex < 0) newIndex = totalImages - 1;
    setActiveImageIndices({ ...activeImageIndices, [productId]: newIndex });
  };

  const handleWhatsAppRedirect = (productTitle: string, productPrice: number) => {
    const phoneNumber = "21626282800";
    const text = encodeURIComponent(
      `Bonjour Ingénieur PC, je suis intéressé par l'article suivant :\n\n💻 *${productTitle}*\n💰 Prix : *${productPrice} DT*\n\nEst-il toujours disponible ?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white pt-28 pb-16 px-4 sm:px-6 relative">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 mb-12 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-100 to-indigo-200 bg-clip-text text-transparent font-nacelle">
              Marketplace Live
            </h1>
            <p className="text-gray-400 text-sm mt-1">Ordinateurs disponibles en temps réel du cloud.</p>
          </div>
          <Link href="/" className="text-xs font-medium text-gray-400 hover:text-white border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-md transition-colors">
            ← Retour aux services
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-400 animate-pulse">Chargement des PC en direct du cloud...</p>
        ) : products.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-gray-900/20">
            <span className="text-5xl block mb-4">🛒</span>
            <h3 className="text-lg font-medium text-gray-200">Aucun PC disponible actuellement</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const activeIndex = activeImageIndices[product.id] || 0;
              const currentImg = product.images[activeIndex] || "/fallback-pc.jpg";

              return (
                <div key={product.id} className="group flex flex-col justify-between h-full bg-gray-900/40 border border-white/10 hover:border-indigo-500/30 rounded-3xl overflow-hidden transition-all duration-300 backdrop-blur-md shadow-xl">
                  {/* Slider Aspect Image Block Area */}
                  <div className="aspect-video w-full overflow-hidden bg-gray-950 relative border-b border-white/5">
                    <img src={currentImg} alt={product.title} className="w-full h-full object-cover" />
                    
                    {/* Price Card Badge */}
                    <div className="absolute top-4 right-4 bg-gray-950/80 backdrop-blur-md border border-white/15 px-3 py-1 rounded-xl text-xs font-mono text-indigo-300 font-bold z-10">
                      {product.price} DT
                    </div>

                    {/* Left/Right Slider Arrow controls overlay (Rendered only if product has multiple images) */}
                    {product.images.length > 1 && (
                      <>
                        <button 
                          onClick={() => changeImageIndex(product.id, product.images.length, -1)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/80 border border-white/10 p-1.5 rounded-full text-white text-xs hover:bg-indigo-600 transition-colors z-10 cursor-pointer"
                        >
                          ‹
                        </button>
                        <button 
                          onClick={() => changeImageIndex(product.id, product.images.length, 1)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 border border-white/10 p-1.5 rounded-full text-white text-xs hover:bg-indigo-600 transition-colors z-10 cursor-pointer"
                        >
                          ›
                        </button>
                        
                        {/* Dot count indicators indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                          {product.images.map((_, dotIdx) => (
                            <span 
                              key={dotIdx} 
                              className={`h-1.5 w-1.5 rounded-full transition-colors ${dotIdx === activeIndex ? 'bg-indigo-500' : 'bg-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Core Descriptions Area Container */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-100 leading-snug line-clamp-1">{product.title}</h3>
                      <p className="text-sm text-gray-400 font-normal line-clamp-3 leading-relaxed min-h-[60px]">
                        {product.description}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleWhatsAppRedirect(product.title, product.price)}
                      className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold py-3 flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
                    >
                      Commander via WhatsApp →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}