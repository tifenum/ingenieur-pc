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

  const setImageIndexDirect = (productId: string, index: number) => {
    setActiveImageIndices({ ...activeImageIndices, [productId]: index });
  };

  const handleWhatsAppRedirect = (productTitle: string, productPrice: number) => {
    const phoneNumber = "21626282800";
    const text = encodeURIComponent(
      `Bonjour Ingénieur PC, je suis intéressé par l'article suivant :\n\n💻 *${productTitle}*\n💰 Prix : *${productPrice} DT*\n\nEst-il toujours disponible ?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white pt-28 pb-24 px-4 sm:px-6 relative">
      {/* Premium Ambient Glowing Background Shapes */}
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Header Navigation Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 font-mono">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">Marketplace</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              Marketplace Live
            </h1>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Découvrez nos configurations prêtes pour le gaming et le milieu professionnel, validées et certifiées par nos experts.
            </p>
          </div>
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl px-5 py-3 backdrop-blur-xl transition-all shadow-lg"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span> Retour aux services
          </Link>
        </div>

        {/* Loading Spinner Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-[420px] rounded-3xl bg-gray-900/40 border border-white/5 animate-pulse" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-gray-900/10 backdrop-blur-md max-w-xl mx-auto">
            <span className="text-5xl block mb-4">💻</span>
            <h3 className="text-xl font-bold text-gray-200 tracking-tight">Aucune configuration disponible</h3>
            <p className="text-gray-400 text-sm mt-2 px-6">
              Tous nos ordinateurs ont été vendus ! Les nouveaux stocks du vendeur apparaîtront en direct ici.
            </p>
          </div>
        ) : (
          /* PRODUCT GRID COVERS */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const activeIndex = activeImageIndices[product.id] || 0;
              const currentImg = product.images[activeIndex] || "/fallback-pc.jpg";

              return (
                <div 
                  key={product.id} 
                  className="group flex flex-col justify-between h-full bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-white/10 hover:border-blue-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/[0.03] backdrop-blur-2xl"
                >
                  {/* HERO IMAGE SLIDER BLOCK */}
                  <div className="aspect-video w-full overflow-hidden bg-gray-950 relative border-b border-white/10 group/slider">
                    <img 
                      src={currentImg} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" 
                    />
                    
                    {/* Floating Glow Ambient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Glowing Live Status Indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gray-950/80 border border-white/10 backdrop-blur-md py-1 px-2.5 rounded-full shadow-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-sm" />
                      <span className="text-[10px] font-mono tracking-wider text-gray-300 font-bold uppercase">Disponible</span>
                    </div>

                    {/* Premium Price Tag Badge */}
                    <div className="absolute top-4 right-4 bg-blue-600 font-mono text-white text-sm font-black px-3 py-1.5 rounded-xl shadow-xl shadow-blue-600/20 border border-blue-400/20 tracking-tight">
                      {product.price.toLocaleString("fr-FR")} DT
                    </div>

                    {/* Image Counting indicator number overlay */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-3 right-4 bg-gray-950/80 border border-white/5 px-2 py-0.5 rounded-md text-[10px] text-gray-400 font-mono">
                        {activeIndex + 1}/{product.images.length}
                      </div>
                    )}

                    {/* Slider Control Arrows (Fades smoothly on slider box area hover) */}
                    {product.images.length > 1 && (
                      <>
                        <button 
                          onClick={() => changeImageIndex(product.id, product.images.length, -1)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-gray-900/90 hover:bg-blue-600 border border-white/10 text-white rounded-full text-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 z-20"
                        >
                          ‹
                        </button>
                        <button 
                          onClick={() => changeImageIndex(product.id, product.images.length, 1)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-gray-900/90 hover:bg-blue-600 border border-white/10 text-white rounded-full text-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 z-20"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>

                  {/* THUMBNAIL GALLERY MANAGER PANEL ROW */}
                  {product.images.length > 1 && (
                    <div className="flex gap-1.5 px-6 pt-3 overflow-x-auto scrollbar-none">
                      {product.images.map((imgUrl, thumbIdx) => (
                        <button
                          key={thumbIdx}
                          onClick={() => setImageIndexDirect(product.id, thumbIdx)}
                          className={`relative h-10 w-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                            thumbIdx === activeIndex ? "border-blue-500 scale-95" : "border-white/5 opacity-40 hover:opacity-100"
                          }`}
                        >
                          <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* DESCRIPTIVE CARD TEXT METADATA CONTENT */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
                    <div className="space-y-2.5">
                      <h3 className="text-xl font-bold tracking-tight text-gray-100 line-clamp-1 group-hover:text-blue-400 transition-colors duration-300">
                        {product.title}
                      </h3>
                      
                      {/* Formatted Technical Description Panel */}
                      <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3.5 min-h-[76px] flex items-start">
                        <p className="text-xs text-gray-400 font-normal leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Luxury Action Call-To-Action Button */}
                    <button
                      onClick={() => handleWhatsAppRedirect(product.title, product.price)}
                      className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white text-xs font-bold py-3.5 flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl shadow-blue-900/10 cursor-pointer border border-blue-400/10 hover:shadow-blue-600/20 active:scale-[0.99]"
                    >
                      <span>Commander via WhatsApp</span>
                      <span className="text-xs tracking-normal transition-transform duration-300 group-hover:translate-x-0.5">→</span>
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