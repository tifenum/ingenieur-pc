"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import CentralDiagram from "@/public/images/hero-image-01.jpg";

export default function Features() {
  const services = [
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-blue-500 to-indigo-400 shadow-[0_0_15px_rgba(59,158,255,0.3)]">
          <span className="absolute inset-0 flex items-center justify-center text-xs">🛠️</span>
        </div>
      ),
      title: "Dépannage à Domicile",
      desc: "Intervention rapide chez vous pour tous vos problèmes matériels et logiciels informatique."
    },
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-amber-500 to-orange-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          <span className="absolute inset-0 flex items-center justify-center text-xs">⚡</span>
        </div>
      ),
      title: "Assistance à Distance",
      desc: "Résolution instantanée et sécurisée via TeamViewer sans aucun besoin de vous déplacer."
    },
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-red-600 to-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.3)]">
          <span className="absolute inset-0 flex items-center justify-center text-xs">🛡️</span>
        </div>
      ),
      title: "Éradication de Virus",
      desc: "Nettoyage système en profondeur, désinfection complète et sécurisation de vos accès."
    },
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <span className="absolute inset-0 flex items-center justify-center text-xs">💾</span>
        </div>
      ),
      title: "Récupération de Données",
      desc: "Sauvetage de vos documents et fichiers importants après un crash ou une suppression."
    },
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          <span className="absolute inset-0 flex items-center justify-center text-xs">💿</span>
        </div>
      ),
      title: "Installation OS",
      desc: "Configuration propre de Windows ou macOS avec pilotes officiels et optimisations système."
    },
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse">
          <span className="absolute inset-0 flex items-center justify-center text-xs">🌐</span>
        </div>
      ),
      title: "Création de Sites Web",
      desc: "Conception de sites web modernes, responsives et administrables avec suivi sur-mesure.",
      isWebDev: true 
    },
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-fuchsia-500 to-purple-400 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
          <span className="absolute inset-0 flex items-center justify-center text-xs">🎮</span>
        </div>
      ),
      title: "Assemblage PC Sur Mesure",
      desc: "Montage personnalisé de configurations Gaming avancées ou Workstations professionnelles."
    },
    {
      icon: (
        <div className="relative h-5 w-5 rounded-md bg-gradient-to-tr from-sky-500 to-blue-400 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
          <span className="absolute inset-0 flex items-center justify-center text-xs">🖧</span>
        </div>
      ),
      title: "Réseaux & Serveurs",
      desc: "Configuration de serveurs NAS, solutions Cloud localisées et infrastructures réseau."
    },
  ];

  const mainServices = services.slice(0, 6);
  const bottomTwoServices = services.slice(6);

  const handleWebDevWhatsApp = () => {
    const phoneNumber = "21627049846";
    const text = encodeURIComponent(
      `Bonjour Ingénieur PC,\nJe souhaite obtenir des détails et un devis personnalisé concernant votre service de *Création de Sites Web* 🌐.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gray-950">
      {/* Background Blurs */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2">
        <Image src={BlurredShapeGray} width={760} height={668} alt="" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50">
        <Image src={BlurredShape} width={760} height={668} alt="" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-white/10 py-12 md:py-20">
          
          {/* Section Typography Header */}
          <div className="mx-auto max-w-3xl pb-16 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent text-xs font-mono font-semibold tracking-widest uppercase">
                Expertise Technique
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text pb-4 font-nacelle text-4xl md:text-5xl font-black text-transparent tracking-tight">
              Tout pour votre informatique
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mt-2">
              20 ans d'expérience technique au service des particuliers et des entreprises en Tunisie.
            </p>
          </div>

          {/* Central Process Presentation Mockup */}
          <div className="flex justify-center pb-20">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-30 blur-xl transition duration-1000 group-hover:opacity-50" />
              <Image 
                src={CentralDiagram} 
                width={720} 
                height={420} 
                alt="Processus Ingénieur PC"
                className="rounded-3xl border border-white/10 shadow-2xl relative"
              />
            </div>
          </div>

          {/* Core Services Interactive Elements Layout */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between h-full bg-gray-900/40 border border-white/5 hover:border-white/15 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl backdrop-blur-md"
                >
                  <div className="space-y-4">
                    {/* Horizontal Header Row alignment setup */}
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <h3 className="text-lg font-bold text-gray-200 tracking-tight transition-colors group-hover:text-blue-400">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {service.isWebDev && (
                    <button
                      onClick={handleWebDevWhatsApp}
                      className="mt-6 w-full rounded-xl bg-emerald-500/10 hover:bg-emerald-600 border border-emerald-500/20 hover:border-emerald-500 text-emerald-400 hover:text-white text-xs font-bold py-3 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-950/20 active:scale-[0.99]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>Lancer un projet Web</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Centered Flexbox Row arrangement handles */}
            <div className="flex flex-col md:flex-row md:justify-center gap-6">
              {bottomTwoServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col justify-start bg-gray-900/40 border border-white/5 hover:border-white/15 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full md:max-w-[calc(50%-12px)] lg:max-w-[362px] backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                    <h3 className="text-lg font-bold text-gray-200 tracking-tight transition-colors group-hover:text-blue-400">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Static Performance Statistics Displays */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-16">
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent tracking-tighter font-mono">
                20
              </div>
              <p className="text-gray-400 mt-2 text-sm font-medium uppercase tracking-wider">Ans d'expérience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent tracking-tighter font-mono">
                4,324
              </div>
              <p className="text-gray-400 mt-2 text-sm font-medium uppercase tracking-wider">Interventions réalisées</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent tracking-tighter font-mono">
                3,419
              </div>
              <p className="text-gray-400 mt-2 text-sm font-medium uppercase tracking-wider">Clients satisfaits</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}