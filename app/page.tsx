import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <header className="w-full flex flex-col md:flex-row items-start justify-between border-b border-[#333333]/20 py-6 md:py-10 px-2.5 md:px-6 gap-4">
        <div className="flex flex-col gap-3 md:gap-5 text-start">
          <h1 className=" text-3xl md:text-4xl font-semibold">
            EXPLAINING THINGS
          </h1>
          <p className="text-lg md:text-xl max-w-full leading-relaxed">
            Entenda o mundo a sua volta, explicações simples para curiosidades
            de todos os dias.
          </p>
        </div>
        <div className="text-xs font-departure-mono uppercase">
          Outubro 15, 2025
        </div>
      </header>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 mt-5 md:gap-6 px-2.5 md:px-6">
        <div className="flex-1 flex flex-col gap-6 md:gap-7 text-base font-medium leading-relaxed text-justify ">
          <p className="first-letter:text-4xl">
            Explaining Things é um projeto que busca entender o que está por
            trás do cotidiano. Ele analisa fenômenos comuns — luz, som, toque,
            movimento — de forma técnica, visual e interativa.
          </p>
          <p>
            A ideia é expor o funcionamento real das coisas que usamos todos os
            dias: como a tela detecta o dedo, o que faz o som existir, como uma
            lâmpada funciona, como são feitas as escadas.
          </p>
          <p>
            Cada explicação é objetiva, apoiada em lógica e observação, com
            demonstrações, código e visualização.
          </p>
          <p className="italic">
            O objetivo é simples: tornar o comum compreensível.
          </p>
        </div>

        <div className="flex-1 flex items-start justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/markers.svg"
              alt="Explaining Things Cover"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-6 mt-36 md:mt-20 px-2.5 md:px-6">
        <h2 className="text-3xl text-left max-w-2xl leading-relaxed">
          “O mundo é interessante em todos os lugares onde você decide olhar de
          verdade.”
        </h2>
        <div className="w-full flex items-center justify-end gap-2 opacity-70">
          <div className="w-32 border-b border-[#333333]/20" />
          <span>Richard Feynman</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 opacity-10 mt-10 px-2.5 md:px-6">
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
      </div>

      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-6 my-20 px-2.5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="#"
            className="flex flex-col items-center border border-double border-[#333333]/60 p-5"
          >
            <div className="relative w-full max-w-[250px] aspect-square my-5">
              <Image
                src="/stairs.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col items-start justify-strat text-left">
              <h3 className="text-xl leading-relaxed mt-4">
                Ciência por trás das escadas
              </h3>
              <p className="mt-2">
                Explicações simples, diretas e visuais sobre fenômenos do dia a
                dia.
              </p>
            </div>
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center border border-double border-[#333333]/60 p-5"
          >
            <div className="relative w-full max-w-[250px] aspect-square my-5">
              <Image
                src="/dismantled.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col items-start justify-strat text-left">
              <h3 className="text-xl leading-relaxed mt-4">
                Ciência por trás das escadas
              </h3>
              <p className="mt-2">
                Explicações simples, diretas e visuais sobre fenômenos do dia a
                dia.
              </p>
            </div>
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center border border-double border-[#333333]/60 p-5"
          >
            <div className="relative w-full max-w-[250px] aspect-square my-5">
              <Image
                src="/markers.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col items-start justify-strat text-left">
              <h3 className="text-xl leading-relaxed mt-4">
                Ciência por trás das escadas
              </h3>
              <p className="mt-2">
                Explicações simples, diretas e visuais sobre fenômenos do dia a
                dia.
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 opacity-10 mt-10 px-2.5 md:px-6">
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 md:gap-6 px-2.5 md:px-6 my-20">
        <div className="flex-1 flex items-start justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/dismantled.svg"
              alt="Explaining Things Cover"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 md:gap-7 text-base font-medium leading-relaxed text-justify ">
          <p className="first-letter:text-4xl">
            Um dia, meu professor de Computação Gráfica, Irineu Souto, fez uma
            pergunta para a turma que me travou:
          </p>
          <p className="italic">
            “Se vocês fossem os últimos sobreviventes da humanidade,
            conseguiriam reconstruir a civilização? Os ar-condicionados, as
            lâmpadas, os computadores, etc?”
          </p>
          <p>
            A verdade é que usamos tudo isso todos os dias, mas quase ninguém
            entende de facto como funciona. O engraçado, é que tudo parece
            simples até você tentar explicar.
          </p>
          <p>
            Essa ideia ficou na cabeça. O Explaining Things nasceu disso: da
            vontade de aprender o que está por trás do que já é familiar.
          </p>
          <p>
            O projeto também foi inspirado por “Making Software”, que trata o
            conhecimento técnico de forma aberta, detalhada e visual.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-center gap-4 md:gap-6 mt-36 md:mt-40 px-2.5 md:px-6">
        <h2 className="text-3xl text-left max-w-2xl leading-relaxed">
          “Se você não consegue explicar algo de forma simples, é porque não
          entendeu bem o suficiente.”
        </h2>
        <div className="w-full flex items-center justify-end gap-2 opacity-70">
          <div className="w-32 border-b border-[#333333]/20" />
          <span>Albert Einstein</span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-20 md:mt-28 mb-20 md:mb-24 gap-6">
        <h3 className="text-sm md:text-lg font-semibold tracking-wider uppercase">
          Inscreva-se para atualizações
        </h3>

        <div className="flex flex-col gap-2 max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed">
            Quer saber quando novas explicações forem publicadas?
          </p>
          <p className="text-sm md:text-base text-[#333333]/80 leading-relaxed">
            Inscreva-se para receber atualizações ocasionalmente, sem spam — só
            curiosidade aplicada.
          </p>
        </div>
        <form action="" className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="INSIRA O SEU EMAIL"
            className="border-2 border-black/80 bg-transparent px-16 py-2 text-xs tracking-wide placeholder:text-black/40 focus:outline-none focus:border-black transition-colors"
          />
          <button
            type="submit"
            className="border-2 border-black/80 bg-black text-[#EEE4D9] py-2 text-xs font-semibold uppercase tracking-widest cursor-pointer hover:bg-black/90 transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)]"
          >
            Inscrever
          </button>
        </form>
      </div>

      <div className="w-full flex items-center justify-center mt-36 md:mt-40 px-2.5 md:px-6">
        <h3 className="text-xl text-center leading-relaxed">***</h3>
      </div>

      <footer className="w-full bg-[#EEE4D9] mt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-lg font-semibold uppercase mb-2">
                Explaining Things
              </h2>
              <p className="text-base leading-relaxed max-w-md mx-auto">
                Entenda o mundo a sua volta, explicações simples para
                curiosidades de todos os dias.
              </p>
            </div>

            <p className="text-md opacity-90">Por Otoniel Emanuel</p>

            <nav className="flex items-center justify-center gap-6 text-xs">
              <a
                href="#"
                className="opacity-50 hover:opacity-100 transition-opacity underline decoration-1 underline-offset-4"
              >
                Site
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 transition-opacity underline decoration-1 underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 transition-opacity underline decoration-1 underline-offset-4"
              >
                Twitter
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 transition-opacity underline decoration-1 underline-offset-4"
              >
                Instagram
              </a>
            </nav>

            <div className="pt-8 border-t border-black/10">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs opacity-40">
                <span>Vol. I</span>
                <span>·</span>
                <span>Ed. 2025</span>
                <span>·</span>
                <span>Luanda</span>
                <span>·</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full flex flex-col gap-2 opacity-10 mt-10 px-2.5 md:px-6">
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
        <div className="w-full border-b border-[#333333]/60" />
      </div>
    </div>
  );
}
