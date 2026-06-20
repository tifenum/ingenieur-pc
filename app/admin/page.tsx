"use client";

import { useState, useEffect, useTransition } from "react";
import { getCloudinaryProducts } from "../marketplace/actions";
import { deleteCloudinaryProduct } from "../marketplace/actions";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingCatalog, setLoadingCatalog] = useState(true);
  
  const [isPending, startTransition] = useTransition();

  const CLOUD_NAME = "dxmatiufa"; 
  const UPLOAD_PRESET = "isoi2g8i";

  // Load the current active computers on mount so the seller can manage them
  const loadCatalog = async () => {
    try {
      const liveProducts = await getCloudinaryProducts();
      setProducts(liveProducts);
    } catch (err) {
      console.error("Failed to load catalog in admin:", err);
    } finally {
      setLoadingCatalog(false);
    }
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  const handleFiles = (files: FileList) => {
    const validFiles = Array.from(files).filter(file => file.type.startsWith("image/"));
    if (imageFiles.length + validFiles.length > 5) {
      alert("Vous pouvez charger un maximum de 5 images par ordinateur !");
      return;
    }
    const updatedFiles = [...imageFiles, ...validFiles];
    setImageFiles(updatedFiles);

    const urls = validFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...urls]);
  };

  const removeImage = (index: number) => {
    setImageFiles(imageFiles.filter((_, i) => i !== index));
    setPreviewUrls(previewUrls.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !description || imageFiles.length === 0) {
      alert("S'il vous plaît, remplissez tous les champs (titre, prix, description) et ajoutez au moins une photo !");
      return;
    }

    startTransition(async () => {
      try {
        const uniqueGroupId = Date.now(); 
        
        for (let i = 0; i < imageFiles.length; i++) {
          setStatus(`Téléchargement de l'image ${i + 1} sur ${imageFiles.length}...`);

          const formData = new FormData();
          formData.append("file", imageFiles[i]);
          formData.append("upload_preset", UPLOAD_PRESET);
          
          const metadataString = `title=${title}|price=${price}|description=${description}`;
          formData.append("context", metadataString);
          formData.append("tags", `marketplace,marketplace_${uniqueGroupId}`); 

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            { method: "POST", body: formData }
          );

          if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error?.message || "Échec du téléchargement");
          }
        }

        setTitle("");
        setPrice("");
        setDescription("");
        setImageFiles([]);
        setPreviewUrls([]);
        setStatus("Succès ! L'ordinateur et ses photos sont en ligne !");
        
        // Refresh catalog list automatically
        loadCatalog();
      } catch (error) {
        console.error(error);
        setStatus("Erreur lors de la publication de l'annonce.");
      }
    });
  };

  const handleDelete = async (groupId: string) => {
    if (!confirm("Voulez-vous vraiment supprimer définitivement cet ordinateur du marketplace ?")) return;

    setStatus("Suppression de l'article en cours...");
    const res = await deleteCloudinaryProduct(groupId);
    
    if (res.success) {
      setStatus("Article supprimé du cloud.");
      // Instantly wipe item from client array tracking hooks state
      setProducts(products.filter(p => p.id !== groupId));
    } else {
      alert(res.message);
    }
    setStatus("");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-start p-6 pt-24 space-y-12">
      {/* SECTION 1: UPLOAD FORM CARD */}
      <div className="w-full max-w-lg bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Ajouter un PC au Marketplace</h1>
          <p className="text-sm text-gray-400 mt-1">Insérez les détails et chargez jusqu'à 5 photos maximum.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Nom de l'ordinateur</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Asus ROG Strix i7 16GB"
              className="w-full rounded-xl bg-gray-950 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Prix (DT)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ex: 2450"
              className="w-full rounded-xl bg-gray-950 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Description Technique</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: RTX 4060, Écran 144Hz, État neuf, Batterie originale..."
              rows={3}
              className="w-full rounded-xl bg-gray-950 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-gray-300">Photos de l'appareil</span>
              <span className="text-xs text-gray-500">{imageFiles.length}/5 photos</span>
            </div>
            
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
              }}
              className="border-2 border-dashed border-white/10 hover:border-indigo-500/50 rounded-2xl p-6 text-center cursor-pointer transition-colors relative bg-gray-950/40 min-h-[120px] flex flex-col items-center justify-center gap-1 group"
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <span className="text-2xl">📸</span>
              <p className="text-xs text-gray-400">Glissez vos images ou cliquez pour choisir</p>
            </div>

            {previewUrls.length > 0 && (
              <div className="grid grid-cols-5 gap-2 pt-3">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative aspect-square border border-white/10 rounded-lg overflow-hidden bg-gray-950">
                    <img src={url} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-0.5 right-0.5 bg-red-600 rounded-full h-4 w-4 flex items-center justify-center text-[10px] text-white hover:bg-red-500 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3.5 text-sm transition-colors shadow-lg disabled:bg-gray-800 cursor-pointer"
          >
            {isPending ? status : "Publier l'ordinateur"}
          </button>

          {status && <p className="text-center text-xs text-indigo-300 font-mono pt-2">{status}</p>}
        </form>
      </div>

      {/* SECTION 2: LIVE INVENTORY LIVE MANAGEMENT LIST */}
      <div className="w-full max-w-4xl space-y-4">
        <h2 className="text-xl font-bold border-b border-white/10 pb-2">Gestion du Catalogue Actuel</h2>
        
        {loadingCatalog ? (
          <p className="text-gray-500 text-sm">Chargement de l'inventaire...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500 text-sm">Aucun ordinateur en vente sur le cloud actuellement.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-900 border border-white/15 p-4 rounded-2xl flex gap-4 items-center justify-between">
                <div className="flex items-center gap-4 min-w-0">
                  <img src={product.images[0]} alt="" className="h-16 w-24 object-cover rounded-xl bg-gray-950 shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold truncate text-gray-200">{product.title}</h3>
                    <p className="text-xs text-indigo-400 font-mono font-medium mt-0.5">{product.price} DT</p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-950/40 text-red-400 border border-red-900/50 hover:bg-red-600 hover:text-white rounded-xl px-4 py-2 text-xs font-semibold transition-all shrink-0 cursor-pointer"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}