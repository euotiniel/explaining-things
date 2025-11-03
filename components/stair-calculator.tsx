"use client"

import { useState, useMemo, useEffect } from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion"
import clsx from "clsx"

export default function StairVisualizer() {
  const [rise, setRise] = useState(17)
  const [tread, setTread] = useState(29)

  const blondel = useMemo(() => 2 * rise + tread, [rise, tread])
  const isGood = blondel >= 63 && blondel <= 65

  const xScale = useMotionValue(1)
  const yScale = useMotionValue(1)

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max)

  const updateScales = (newRise = rise, newTread = tread) => {
    const newX = clamp(newTread / 29, 0.8, 1.4)
    const newY = clamp(newRise / 17, 0.8, 1.4)
    animate(xScale, newX, { duration: 0.4, ease: "easeOut" })
    animate(yScale, newY, { duration: 0.4, ease: "easeOut" })
  }

  // Atualiza escala a cada mudança
  useEffect(() => {
    updateScales(rise, tread)
  }, [rise, tread])

  // Cor animada suave
  const color = useTransform(
    [xScale, yScale],
    () => (isGood ? "rgb(34,197,94)" : "rgb(239,68,68)")
  )

  // Animação de pulse leve no SVG quando muda o estado
  const svgPulse = {
    scale: [1, 1.03, 1],
    transition: { duration: 0.4, ease: "easeOut" },
  }

  return (
    <div className="flex-1 flex flex-col gap-10 items-center justify-center lg:justify-center w-full select-none bg-[#EDEDED]/40 p-6 border-[#333333]/10 border border-dashed py-10">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold tracking-tight">
          Visualize a sua escada
        </h3>
        <p className="text-sm text-neutral-500">
          Ajuste os valores e veja a proporção mudar
        </p>
      </div>

      {/* Inputs */}
      <div className="flex gap-6">
        <div className="flex flex-col items-start gap-1">
          <label className="text-sm text-neutral-600 font-medium">E (cm)</label>
          <input
            type="number"
            min={5}
            value={rise}
            onChange={(e) => {
              const val = Math.max(5, Number(e.target.value) || 5)
              setRise(val)
              updateScales(val, tread)
            }}
            className="w-24 px-3 py-1.5 rounded-md border border-neutral-300 text-center text-sm focus:outline-none focus:ring-1 focus:ring-neutral-500 bg-white/80"
          />
        </div>

        <div className="flex flex-col items-start gap-1">
          <label className="text-sm text-neutral-600 font-medium">P (cm)</label>
          <input
            type="number"
            min={5}
            value={tread}
            onChange={(e) => {
              const val = Math.max(5, Number(e.target.value) || 5)
              setTread(val)
              updateScales(rise, val)
            }}
            className="w-24 px-3 py-1.5 rounded-md border border-neutral-300 text-center text-sm focus:outline-none focus:ring-1 focus:ring-neutral-500 bg-white/80"
          />
        </div>
      </div>

      {/* SVG animado */}
      <div className="relative w-full flex items-center justify-center overflow-hidden py-4">
        <motion.svg
          width="220"
          height="160"
          viewBox="0 0 200 160"
          style={{ scaleX: xScale, scaleY: yScale }}
          className="max-h-[200px] min-h-[100px]"
        >
          <motion.path
            d="M10 150 L10 100 L60 100 L60 50 L110 50 L110 0"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ stroke: isGood ? "#22c55e" : "#ef4444" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 120,
            }}
          />
        </motion.svg>
      </div>

      {/* Resultado animado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isGood ? "ok" : "bad"}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.4,
              type: "spring",
              stiffness: 100,
            },
          }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          className={clsx(
            "text-base font-medium",
            isGood ? "text-green-600" : "text-red-600"
          )}
        >
          {isGood
            ? `Boa escada — 2E + P = ${blondel.toFixed(1)} cm`
            : `Escada desconfortável — 2E + P = ${blondel.toFixed(1)} cm`}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-neutral-500">Ideal entre 63 – 65 cm</p>
    </div>
  )
}
