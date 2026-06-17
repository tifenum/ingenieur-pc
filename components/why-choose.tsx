import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-indigo-400 text-sm font-medium tracking-widest">NOTRE ENGAGEMENT AU QUOTIDIEN</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mt-3 leading-tight">
                Pourquoi choisir<br />Ingénieur PC ?
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Depuis plus de 20 ans, nous accompagnons particuliers, professionnels et entreprises avec des solutions informatiques fiables, réactives et adaptées à leurs besoins.
              </p>
              <p>
                Notre objectif est simple : vous permettre de travailler, communiquer et utiliser vos équipements informatiques en toute sérénité.
              </p>
              <p>
                Que vous ayez besoin d’une réparation, d’une assistance à distance, d’une intervention sur site ou d’un accompagnement pour votre infrastructure informatique, nous mettons notre expérience à votre service.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Imperdiet Placerat</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Plus de 20 ans d'expérience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Assistance à distance et sur site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Accompagnement des particuliers et entreprises</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp Number */}
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    href="https://wa.me/21626282800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full sm:w-auto items-center justify-center gap-4 rounded-2xl bg-gray-800/90 hover:bg-gray-700 border border-white/10 px-8 py-4 text-white font-medium transition-all min-w-[260px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#25D366" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <div className="font-mono text-xl tracking-wider">+216 26 282 800</div>
                  </a>
                </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-[3rem]"></div>
              
              {/* Service Available Badge - Moved ABOVE the image */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 bg-gray-900 border border-white/10 rounded-2xl px-6 py-3 shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Service disponible 7j/7</span>
              </div>

              {/* Main Image */}
              <Image
                src="/images/3.jpg"
                alt="Ingénieur PC - Workstation"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}