import React from "react";
import Image from "next/image";
import RoughNotationWrapper from "@/components/rough-notation-wrapper";
import StairCalculator from "@/components/stair-calculator";
import { MessageSquareMore } from "lucide-react";
import Feedback from "@/components/feedback";

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
                alt="Explicando Coisas Cover"
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
        <p>
          Existe uma relação quase invisível que guia a construção das escadas
          e, curiosamente, também o conforto do movimento. É a chamada fórmula
          de Blondel: duas vezes a altura do degrau somada à sua profundidade
          deve se aproximar de 64 centímetros.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        <div className="flex-1 flex gap-10 items-center justify-center lg:justify-center w-full">
          <RoughNotationWrapper type="box" color="#5C5C5C" animate={false}>
            <h2 className="text-3xl m-2.5 select-none">2E + P ≈ 64 cm</h2>
          </RoughNotationWrapper>
        </div>

        <div className="font-shantell flex-1 flex flex-row gap-10 items-center justify-center lg:justify-center my-5 select-none">
          <RoughNotationWrapper type="bracket" color="#5C5C5C" animate={false}>
            <div className="flex flex-col gap-2">
              <ul className="space-y-3.5 list-none text-md font-medium leading-relaxed">
                <li>
                  E = profundidade do espalho em cm, também conhecido como{" "}
                  <RoughNotationWrapper
                    type="underline"
                    color="#5C5C5C"
                    animate={false}
                  >
                    rise{" "}
                  </RoughNotationWrapper>
                </li>
                <li>
                  P = profundidade do piso em cm, também conhecido como{" "}
                  <RoughNotationWrapper
                    type="underline"
                    color="#5C5C5C"
                    animate={false}
                  >
                    tread{" "}
                  </RoughNotationWrapper>
                </li>
              </ul>
            </div>
          </RoughNotationWrapper>
          <div>
            <p>Onde</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center lg:justify-center w-full select-none bg-[#EDEDED]/40 p-5 border-[#333333]/10 border border-dashed opacity-70">
        <div className="relative w-full max-w-[280px] aspect-square">
          <Image
            src="/posts/stairs/explaning-stairs.svg"
            alt="Explicando Coisas Cover"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="flex-1 flex flex-col gap-5 md:gap-6 text-base font-medium leading-relaxed text-justify ">
          <p className="first-line:text-2xl">Mas de onde veio essa fórmula?</p>
          <p>
            Antes disso, construir uma escada era mais arte do que ciência. Cada
            carpinteiro fazia do seu jeito, baseado na intuição e no espaço
            disponível. O resultado? Escadas desconfortáveis e frequentemente
            perigosas. Essa proporção não saiu de um manual moderno nem de um
            cálculo acadêmico. Ela veio da observação prática.
          </p>
          <p>
            Foi aí que François Blondel, um arquiteto francês, decidiu que tinha
            que existir uma forma melhor.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 md:gap-6 text-base font-medium leading-relaxed text-justify ">
          <p>
            Ele fez algo simples mas revolucionário: parou para observar como as
            pessoas realmente se movem.
          </p>

          <p>
            Blondel mediu duas coisas básicas: a altura que uma pessoa levanta o
            pé ao subir um degrau (E) e a profundidade do espaço onde o pé pousa
            (P). E ele percebeu que, para a maioria das pessoas, o passo
            horizontal é o dobro da altura vertical. E dois desses "E" mais um
            "P" resultava em algo próximo a 64 centímetros. Essa medida parecia
            ser o ponto ideal onde o movimento se tornava natural e confortável.
          </p>
        </div>
      </div>

      <StairCalculator />

      <div className="flex-1 flex flex-col gap-5 md:gap-6 text-base font-medium leading-relaxed text-justify ">
        <p>
          Anos depois, ainda seguimos subindo e descendo as escadas, na maioria
          das vezes sem nem pensar. Elas estão em todo lugar, funcionando em
          silêncio, porque alguém decidiu observar o que parecia óbvio e medir o
          que todos faziam por instinto.
        </p>

        <p>
          É esse tipo de curiosidade que transforma o comum em conhecimento:
          parar, olhar e perguntar “por que isso funciona?”.
        </p>
      </div>

      <div className=" w-full">
        <div className="flex-1 flex gap-10 items-center justify-center lg:justify-center w-full select-none bg-[#EDEDED]/40 p-5 border-[#333333]/10 border border-dashed">
          <div className="relative w-full max-w-[180px] aspect-square">
            <Image
              src="/posts/stairs/stairs.svg"
              alt="Explicando Coisas Cover"
              fill
              className="object-contain opacity-20"
              priority
            />
          </div>
          <div className="relative w-full max-w-[180px] aspect-square">
            <Image
              src="/posts/stairs/bad-stairs.svg"
              alt="Explicando Coisas Cover"
              fill
              className="object-contain opacity-20"
              priority
            />
          </div>
          <div className="relative w-full max-w-[180px] aspect-square">
            <Image
              src="/posts/stairs/stairs.svg"
              alt="Explicando Coisas Cover"
              fill
              className="object-contain opacity-20"
              priority
            />
          </div>
          <div className="relative w-full max-w-[180px] aspect-square">
            <Image
              src="/posts/stairs/bad-stairs.svg"
              alt="Explicando Coisas Cover"
              fill
              className="object-contain opacity-20"
              priority
            />
          </div>
        </div>
      </div>

      {/* Recursos e referências */}
      <div className="w-full select-none">
        <h4 className="text-md font-semibold mb-4 tracking-tight">
          Recursos e referências
        </h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 leading-relaxed">
          <li>
            François Blondel — <em>Cours d’Architecture</em> (1675)
          </li>
          <li>
            Cálculo de Escada: Veja o Passo a Passo Completo Para Seu Projeto –
            VIVADECORA
          </li>
          <li>Fórmula de Blondel: Como calcular Escadas? — ContruindoDecor</li>
          <li>Calculadora de escadas Online — Arquisefaz</li>
        </ul>
      </div>

      {/* <div className="w-full flex items-end justify-end">
       <Feedback />
      </div> */}
    </main>
  );
}
