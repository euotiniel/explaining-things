import React from "react";
import Image from "next/image";

export default function Stairs() {
  return (
    <main>
      <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-start justify-between gap-10">
              <div className="flex-1 flex flex-col gap-6 md:gap-7 text-base font-medium leading-relaxed text-justify ">
                <p className="first-letter:text-4xl">
                  Subimos e descemos escadas todos os dias sem pensar muito sobre elas. Mas já parou para considerar por que algumas escadas são confortáveis e outras parecem cansativas ou até perigosas? Por trás do design aparentemente simples de uma escada existe uma fascinante convergência de física, biomecânica, ergonomia e engenharia — uma ciência desenvolvida ao longo de séculos para garantir segurança e conforto.
                </p>
                <p>

                </p>
              </div>
      
              <div className="flex-1 flex items-center justify-center lg:justify-center w-full select-none bg-amber-50/10 p-5 border-[#333333]/10 border border-dashed">
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