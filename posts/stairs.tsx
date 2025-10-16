import React from "react";
import Image from "next/image";

export default function Stairs() {
  return (
    <main>
      <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-start justify-between gap-10">
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
      
              <div className="flex-1 flex items-center justify-center lg:justify-center w-full select- bg-amber-50/10 p-5 border-[#333333]/10 border border-dashed">
                <div className="relative w-full max-w-xs aspect-square">
                  <Image
                    src="/stairs.svg"
                    alt="Explaining Things Cover"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
    </main>
  );
}