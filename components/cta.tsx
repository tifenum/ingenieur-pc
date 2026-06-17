"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR build execution issues with Leaflet
const Map = dynamic(() => import("./MapComponent"), { ssr: false });

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Ambient background blur graphic overlay */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-gray-900/40 to-gray-800/20 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Side: Copywriting details */}
            <div className="lg:col-span-5 text-left space-y-6" data-aos="fade-up">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl tracking-tight">
                Vous êtes les bienvenus !
              </h2>
              
              <p className="text-indigo-200/65 text-lg leading-relaxed">
                Besoin d'un diagnostic en personne ou d'une réparation matérielle ? Passez directement à notre atelier principal situé à M'saken.
              </p>

              <hr className="border-white/10 my-4" />

              {/* Direct Address Information Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400 font-bold text-sm">📍</div>
                  <div>
                    <h4 className="text-white font-medium">Notre Adresse</h4>
                    <p className="text-sm text-gray-400">Route de Sousse, M'saken 4070, Tunisie</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400 font-bold text-sm">⏰</div>
                  <div>
                    <h4 className="text-white font-medium">Heures d'ouverture</h4>
                    <p className="text-sm text-gray-400">Lundi - Samedi : 08:30 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* External Google Maps redirection link button */}
              <div className="pt-4">
                <a 
                  href="https://maps.google.com/?q=35.7333,10.5833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-800 hover:bg-gray-700/80 border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all shadow-md"
                >
                  Ouvrir dans Google Maps
                  <span className="text-xs text-indigo-400">→</span>
                </a>
              </div>
            </div>

            {/* Right Map Side: Completely Locked & Frozen */}
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group" data-aos="fade-left">
              <Map />
              {/* Optional clean overlay label signifying map layout is stationary */}
              <div className="absolute bottom-3 left-3 z-[1000] bg-gray-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] text-gray-400 border border-white/5 tracking-wide pointer-events-none">
                Carte fixe
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}