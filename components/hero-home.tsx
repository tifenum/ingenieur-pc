import VideoThumb from "@/public/images/bruh.jpg";
import ModalVideo from "@/components/modal-video";
import { Phone } from "lucide-react";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Ingénieur PC
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Nous sommes ici pour aider. Réparation informatique, assistance à distance et création de sites web en Tunisie depuis plus de 20 ans.
              </p>
              {/* Buttons */}
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                {/* Call Button */}
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    href="tel:+21650075667"
                    className="group flex w-full sm:w-auto items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:brightness-110 transition-all min-w-[260px]"
                  >
                    <Phone size={28} strokeWidth={2.5} />
                    <div className="font-mono text-xl tracking-wider">+216 50 075 667</div>
                  </a>
                </div>
                {/* WhatsApp Button */}
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
            </div>
          </div>
          {/* Video Thumbnail */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1000}
            thumbHeight={576}
            thumbAlt="Ingénieur PC - Réparation Informatique"
          />
          {/* Brand Logos - Under the thumbnail */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <p className="text-center text-sm text-indigo-200/50 mb-10">Nous travaillons avec les plus grandes marques</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 max-w-5xl mx-auto px-6">
              {[
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/apple.svg", alt: "Apple" },
                { 
                  type: "inline", 
                  alt: "Microsoft", 
                  svg: (
                    <svg viewBox="0 0 23 23" fill="currentColor" className="h-full w-auto object-contain">
                      <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/>
                    </svg>
                  ) 
                },
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/lenovo.svg", alt: "Lenovo" },
{ 
  type: "inline", 
  alt: "IBM", 
  svg: (
    <svg viewBox="0 0 32 14" fill="currentColor" className="h-9 w-auto object-contain">
      {/* Letter I */}
      <g>
        <rect x="0" y="0" width="6" height="1" />
        <rect x="0" y="1.8" width="6" height="1" />
        <rect x="1.8" y="3.6" width="2.4" height="1" />
        <rect x="1.8" y="5.4" width="2.4" height="1" />
        <rect x="1.8" y="7.2" width="2.4" height="1" />
        <rect x="1.8" y="9" width="2.4" height="1" />
        <rect x="0" y="10.8" width="6" height="1" />
        <rect x="0" y="12.6" width="6" height="1" />
      </g>
      {/* Letter B */}
      <g>
        <rect x="8" y="0" width="9" height="1" />
        <rect x="8" y="1.8" width="9.5" height="1" />
        <rect x="8" y="3.6" width="3" height="1" /><rect x="14.5" y="3.6" width="3" height="1" />
        <rect x="8" y="5.4" width="9" height="1" />
        <rect x="8" y="7.2" width="9.2" height="1" />
        <rect x="8" y="9" width="3" height="1" /><rect x="14.7" y="9" width="3.2" height="1" />
        <rect x="8" y="10.8" width="9.8" height="1" />
        <rect x="8" y="12.6" width="9" height="1" />
      </g>
      {/* Letter M */}
      <g>
        <rect x="20" y="0" width="3" height="1" /><rect x="29" y="0" width="3" height="1" />
        <rect x="20" y="1.8" width="3.4" height="1" /><rect x="24.8" y="1.8" width="2.4" height="1" /><rect x="28.6" y="1.8" width="3.4" height="1" />
        <rect x="20" y="3.6" width="3.8" height="1" /><rect x="24.3" y="3.6" width="3.4" height="1" /><rect x="28.2" y="3.6" width="3.8" height="1" />
        <rect x="20" y="5.4" width="4.2" height="1" /><rect x="27.8" y="5.4" width="4.2" height="1" />
        <rect x="20" y="7.2" width="2.5" height="1" /><rect x="23.8" y="7.2" width="1.2" height="1" /><rect x="27" y="7.2" width="1.2" height="1" /><rect x="29.5" y="7.2" width="2.5" height="1" />
        <rect x="20" y="9" width="2.5" height="1" /><rect x="24.8" y="9" width="2.4" height="1" /><rect x="29.5" y="9" width="2.5" height="1" />
        <rect x="20" y="10.8" width="2.5" height="1" /><rect x="29.5" y="10.8" width="2.5" height="1" />
        <rect x="20" y="12.6" width="2.5" height="1" /><rect x="29.5" y="12.6" width="2.5" height="1" />
      </g>
    </svg>
  ) 
},
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/dell.svg", alt: "Dell" },
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/hp.svg", alt: "HP" },
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/samsung.svg", alt: "Samsung" },
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/toshiba.svg", alt: "Toshiba" },
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/acer.svg", alt: "Acer" },
                { type: "cdn", src: "https://unpkg.com/simple-icons@v14/icons/asus.svg", alt: "ASUS" },
              ].map((logo) => (
                <div 
                  key={logo.alt} 
                  className="flex items-center justify-center h-12 md:h-14 min-w-[110px] text-white brightness-0 invert opacity-40 transition-all duration-300 ease-out hover:opacity-100 hover:scale-120 hover:drop-shadow-[0_0_18px_rgba(129,140,248,0.9)] cursor-pointer"
                >
                  {logo.type === "cdn" ? (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    logo.svg
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}