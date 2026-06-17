"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  category: "materiel" | "portables" | "entreprises";
  logo: React.ReactNode;
  text: string;
  name: string;
  locationOrRole: string;
  avatar: string;
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<"tous" | "materiel" | "portables" | "entreprises">("tous");

  const categories = [
    { id: "tous", label: "Tous" },
    { id: "materiel", label: "Montage & Matériel" },
    { id: "portables", label: "PC Portables & Mac" },
    { id: "entreprises", label: "Entreprises & Serveurs" },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      category: "portables",
      logo: (
        <svg className="h-8 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h11.4v11.4H0V0zm12.6 0H24v11.4H12.6V0zM0 12.6h11.4V24H0V12.6zm12.6 0H24V24H12.6V12.6z"/>
        </svg>
      ), // Windows
      text: "Mon PC portable était complètement bloqué après une attaque de virus. L'équipe d'Ingénieur PC l'a nettoyé et réparé en moins de 48h. Service ultra professionnel !",
      name: "Mohamed Ben Ali",
      locationOrRole: "Tunis",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 2,
      category: "portables",
      logo: (
        <svg className="h-8 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12v12h24V12H0zm21.32 8.32h-18.64v-4.64h18.64v4.64zM0 0v9.6h24V0H0zm21.32 5.92h-18.64V3.68h18.64v2.24z"/>
        </svg>
      ), // Intel
      text: "Assistance à distance via TeamViewer incroyable pour optimiser mon système de fichiers lent. Ils ont résolu le problème en 30 minutes sans bouger de chez moi.",
      name: "Amina Khelifi",
      locationOrRole: "Sfax",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 3,
      category: "entreprises",
      logo: (
        <svg className="h-6 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 14.124h-3.64l-1.92-3.48-2.64 5.94-3-8.82-2.88 5.76H0v1.68h11.16l1.8-3.6 2.88 8.46 3.12-7.02 1.08 1.98H24z"/>
        </svg>
      ), // NVIDIA
      text: "Nous avons fait appel à eux pour l'installation complète d'un serveur NAS et la maintenance réseau de nos 12 postes de travail. Très compétents et réactifs.",
      name: "Karim Mejri",
      locationOrRole: "Entreprise de BTP",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 4,
      category: "materiel",
      logo: (
        <svg className="h-10 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), // ASUS ROG
      text: "Récupération complète de toutes mes données professionnelles après un crash de mon disque dur interne. Merci infiniment pour votre expertise et votre rapidité.",
      name: "Sarah Ben Romdhane",
      locationOrRole: "La Marsa",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 5,
      category: "materiel",
      logo: (
        <svg className="h-10 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 3.5L19 7.5v9l-7 4-7-4v-9l7-4z"/>
        </svg>
      ), // AMD
      text: "J'ai fait assembler mon PC Gaming sur mesure chez eux. Un câble management impeccable, d'excellents conseils sur le choix des composants et un prix très raisonnable.",
      name: "Hatem Gharbi",
      locationOrRole: "Ariana",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 6,
      category: "entreprises",
      logo: (
        <svg className="h-8 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-5c-1.1 0-2 .9-2 2v3H2c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3V2c0-1.1-.9-2-2-2zM4 19h4v2H4v-2zm0-4h4v2H4v-2zm0-4h4v2H4v-2zm12 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2z"/>
        </svg>
      ), // Server
      text: "Ils gèrent la maintenance informatique de notre école privée depuis un an. Nos machines sont toujours à jour et stables. Un suivi impeccable !",
      name: "Leila Trabelsi",
      locationOrRole: "Enseignante / Sousse",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 7,
      category: "portables",
      logo: (
        <svg className="h-8 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 23a11 11 0 100-22 11 11 0 000 22zm-1-17h2v7h-2V6zm0 9h2v2h-2v-2z"/>
        </svg>
      ), // Corsair
      text: "Changement de l'écran cassé et mise à niveau de la RAM de mon MacBook Pro en seulement 24h. Travail d'une propreté remarquable avec des pièces d'origine.",
      name: "Youssef Amri",
      locationOrRole: "Monastir",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 8,
      category: "entreprises",
      logo: (
        <svg className="h-8 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
        </svg>
      ), // Support
      text: "Contrat de support annuel signé pour notre agence de communication. Moins de pannes, des diagnostics rapides à distance et aucun temps mort pour nos designers.",
      name: "Nour Bouaziz",
      locationOrRole: "PME Sousse",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 9,
      category: "materiel",
      logo: (
        <svg className="h-8 w-auto text-indigo-400/90 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
      ), // Expansion
      text: "Nettoyage thermique complet de ma tour gamer avec remplacement de la pâte thermique + installation propre de Windows. Mon PC ne surchauffe plus du tout !",
      name: "Walid Chouchane",
      locationOrRole: "Ingénieur Freelance",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Strings */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl pb-4">
            Ils nous ont fait confiance
          </h2>
          <p className="text-indigo-200/50 text-sm md:text-base">
            Plus de 3400 clients satisfaits à travers toute la Tunisie.
          </p>
        </div>

        {/* Categories/Filters Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 border cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20"
                  : "bg-gray-900/60 text-gray-400 border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {testimonials.map((item) => {
            // Check if the current card matches the filter rules
            const isMatched = activeFilter === "tous" || item.category === activeFilter;

            return (
              <div
                key={item.id}
                className={`bg-gray-900/40 border p-6 rounded-2xl flex flex-col justify-between space-y-6 backdrop-blur-sm transition-all duration-500 ease-in-out transform shadow-lg ${
                  isMatched
                    ? "opacity-100 scale-100 grayscale-0 border-white/5 hover:border-indigo-500/30 hover:shadow-indigo-500/5 hover:-translate-y-1"
                    : "opacity-10 scale-[0.98] grayscale pointer-events-none border-transparent"
                }`}
              >
                <div className="space-y-4">
                  {/* Brand Vector Component */}
                  <div className="h-10 flex items-center justify-start opacity-80">
                    {item.logo}
                  </div>
                  
                  {/* Quote Block */}
                  <p className="text-indigo-200/75 text-sm md:text-base leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                {/* Profile Card Summary Row */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">{item.name}</h4>
                    <p className="text-xs text-indigo-400/60">{item.locationOrRole}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}