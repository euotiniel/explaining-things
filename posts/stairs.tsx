import React from "react";
import Image from "next/image";
import RoughNotationWrapper from "@/components/rough-notation-wrapper";

export default function Stairs() {
  return (
    <main className="flex flex-col gap-10">
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="flex-1 flex flex-col gap-5 md:gap-6 text-base font-medium leading-relaxed text-justify ">
          <p className="first-letter:text-4xl">
            Subimos e descemos escadas todos os dias sem pensar muito nelas. Mas
            já percebeu que algumas são confortáveis e outras cansam ou até
            parecem perigosas? Por trás do que parece um simples conjunto de
            degraus, existe uma lógica, pensada para que cada passo seja seguro
            e natural. Essa lógica é resultado de cálculos, medidas e testes que
            formam a base por trás do design das escadas.
          </p>
          <div className="flex-1 flex items-center justify-center lg:justify-center w-full select-none bg-[#EDEDED]/40 p-5 border-[#333333]/10 border border-dashed">
            <div className="relative w-full max-w-[280px] aspect-square">
              <Image
                src="/posts/stairs/stairs.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5 md:gap-6 text-base font-medium leading-relaxed text-justify ">
          <p>
            Primeiro é que subir e descer escadas não é só
            <RoughNotationWrapper
              type="crossed-off"
              color="#5C5C5C"
              animate={false}
            >
              “levantar o pé”
            </RoughNotationWrapper>
            : é lidar com{" "}
            <RoughNotationWrapper
              type="strike-through"
              color="#5C5C5C"
              animate={false}
            >
              física, biomecânica, ergonomia, engenharia e até psicologia
            </RoughNotationWrapper>
            . Mas calma, não se assuste, nada disso é complicado (ou importa,
            por agora), na verdade você pode continuar a fazer isso de forma
            inconsciente. Tudo se resume a entender como nosso corpo se move e
            como podemos tornar esse movimento o mais natural e seguro possível.
          </p>
          <p>
            Se pararmos para pensar, as escadas são uma das invenções mais
            antigas e, ainda assim, continuam praticamente iguais há séculos.
            Não existe uma prova concreta de quando foram inventadas, mas a
            maioria das fontes aponta para algo entre 2.000 e 10.000 anos antes
            de Cristo.{" "}
          </p>
          <p>
            Não importa se são de madeira, pedra ou ferro, se estão em Luanda,
            São Francisco ou Budapeste, todas seguem uma certa lógica universal.
            E isso não é coincidência. É o resultado de anos e anos de tentativa
            e erro. em que construtores e engenheiros foram ajustando medidas,
            testando proporções e observando o comportamento das pessoas até
            encontrar um padrão que se encaixasse naturalmente ao corpo humano.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex-1 flex gap-10 items-center justify-center lg:justify-center w-full select-none bg-[#EDEDED]/40 p-5 border-[#333333]/10 border border-dashed">
            <div className="relative w-full max-w-[180px] aspect-square">
              <Image
                src="/posts/stairs/stairs.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain opacity-20"
                priority
              />
            </div>
            <div className="relative w-full max-w-[180px] aspect-square">
              <Image
                src="/posts/stairs/stairs.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain opacity-30"
                priority
              />
            </div>
            <div className="relative w-full max-w-[180px] aspect-square">
              <Image
                src="/posts/stairs/stairs.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain opacity-40"
                priority
              />
            </div>
            <div className="relative w-full max-w-[180px] aspect-square">
              <Image
                src="/posts/stairs/stairs.svg"
                alt="Explaining Things Cover"
                fill
                className="object-contain opacity-50"
                priority
              />
            </div>
          </div>
      </div>
     
      <div className="w-full">
        <p>
          Existe uma relação quase invisível que guia a construção das escadas
          e, curiosamente, também o conforto do movimento. É a chamada fórmula
          de Blondel: duas vezes a altura do degrau somada à sua profundidade
          deve se aproximar de 63 centímetros.
        </p>
      </div>
    </main>
  );
}
