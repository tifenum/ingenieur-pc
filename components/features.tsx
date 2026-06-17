import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

// You can create or use a central diagram image (recommended)
// For now we'll use a nice placeholder — replace with your own visual
import CentralDiagram from "@/public/images/hero-image-01.jpg"; // ← Add this image

export default function Features() {
  const services = [
    {
      icon: "🛠️",
      title: "Dépannage à Domicile",
      desc: "Intervention rapide chez vous pour tous vos problèmes matériels et logiciels."
    },
    {
      icon: "🌐",
      title: "Assistance à Distance",
      desc: "Résolution instantanée via TeamViewer sans vous déplacer."
    },
    {
      icon: "🦠",
      title: "Éradication de Virus",
      desc: "Nettoyage complet et sécurisation de votre système."
    },
    {
      icon: "💾",
      title: "Récupération de Données",
      desc: "Sauvetage de vos fichiers importants après crash ou suppression."
    },
    {
      icon: "💻",
      title: "Installation OS",
      desc: "Windows, Mac OSX, et configuration complète."
    },
    {
      icon: "🌍",
      title: "Création de Sites Web",
      desc: "Sites professionnels avec WordPress et maintenance."
    },
    {
      icon: "🎮",
      title: "Assemblage PC Sur Mesure",
      desc: "PC Gamer, Workstation ou stockage haut de gamme."
    },
    {
      icon: "📱",
      title: "Remplacement Écran",
      desc: "Pour PC portables Windows & MacBook."
    },
    {
      icon: "🔗",
      title: "Réseaux & Serveurs",
      desc: "Installation NAS, Cloud, et infrastructure réseau."
    },
  ];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Blurs */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2">
        <Image src={BlurredShapeGray} width={760} height={668} alt="" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50">
        <Image src={BlurredShape} width={760} height={668} alt="" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-white/10 py-12 md:py-20">
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm font-medium">
                NOS SERVICES
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl md:text-5xl font-semibold text-transparent">
              Tout pour votre informatique
            </h2>
            <p className="text-lg text-indigo-200/65 mt-4">
              20 ans d'expérience au service des particuliers et des entreprises en Tunisie.
            </p>
          </div>

          {/* Central Visual */}
          <div className="flex justify-center pb-16">
            <div className="relative">
              <Image 
                src={CentralDiagram} 
                width={720} 
                height={420} 
                alt="Processus Ingénieur PC"
                className="rounded-3xl shadow-2xl"
              />
              {/* Optional glowing overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent rounded-3xl pointer-events-none" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/70 border border-white/10 hover:border-indigo-500/30 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl mb-6 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-100 mb-3 font-nacelle">
                  {service.title}
                </h3>
                
                <p className="text-indigo-200/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-transparent">
                20
              </div>
              <p className="text-indigo-200/65 mt-2 text-lg">Ans d'expérience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-transparent">
                4,324
              </div>
              <p className="text-indigo-200/65 mt-2 text-lg">Interventions réalisées</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-transparent">
                3,419
              </div>
              <p className="text-indigo-200/65 mt-2 text-lg">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}