"use client";

import React, { useState } from "react";

interface MathLabTab {
  id: "circles" | "parabola" | "pythagoras" | "logarithm";
  badge: string;
  title: string;
  subtitle: string;
  storytelling: string;
  formula: string;
  maceteTitle: string;
  maceteBody: string;
}

const LAB_TABS: MathLabTab[] = [
  {
    id: "circles",
    badge: "DIAS 12 & 13 • GEOMETRIA",
    title: "Círculos Inscritos, Circunscritos & Triângulo Equilátero",
    subtitle: "Onde o Raio (r) governa todas as dimensões",
    storytelling:
      "Diferente dos quadriláteros formados por quinas duras, o círculo flui perfeitamente em torno de um único ponto central. Quando inscrevemos e circunscrevemos um triângulo equilátero na circunferência, o raio maior (R) é exatamente o dobro do raio inscrito (r).",
    formula: "C = 2·π·r   |   A = π·r²   |   A_Δ = (L²√3) / 4",
    maceteTitle: "ATALHO DE PROVA (DIÂMETRO & EQUILÁTERO)",
    maceteBody:
      "Se a banca fornecer o Diâmetro em vez do Raio, corte-o pela metade imediatamente. E no Triângulo Equilátero inscrito, esqueça caçar a altura: aplique direto L²√3 / 4.",
  },
  {
    id: "parabola",
    badge: "DIAS 18 & 20 • FUNÇÕES DE 2º GRAU",
    title: "O Voo do Foguete & O Vértice da Parábola",
    subtitle: "Trajetória balística, raízes X' / X'' e Ponto de Máximo",
    storytelling:
      "Quando uma fábrica lança um produto ou um morteiro é disparado no deserto, o movimento não é uma linha reta: ele sobe, atinge um ápice (Vértice) e desaba em arco. As bancas amam cobrar exatamente a crista dessa montanha.",
    formula: "f(x) = ax² + bx + c   |   X_v = -b / 2a   |   Y_v = -Δ / 4a",
    maceteTitle: "MACETE EXECUTIVO (MÁXIMOS E MÍNIMOS)",
    maceteBody:
      "Sempre que o enunciado usar as palavras 'LUCRO MÁXIMO', 'CUSTO MÍNIMO' ou 'ALTURA MÁXIMA', ignore Bhaskara completa e calcule diretamente o Vértice (Xv, Yv).",
  },
  {
    id: "pythagoras",
    badge: "DIAS 14 & 15 • PITÁGORAS & TRIGONOMETRIA",
    title: "O Triângulo Sagrado 3-4-5 & Radar SOH-CAH-TOA",
    subtitle: "Relação inquebrável entre Catetos, Hipotenusa e Ângulo θ",
    storytelling:
      "A escada dos bombeiros (Hipotenusa, sempre de frente para o ângulo reto de 90°), a parede do edifício (Cateto Oposto) e o asfalto (Cateto Adjacente) formam a estrutura mais cobrada em qualquer vestibular ou concurso.",
    formula: "H² = C₁² + C₂²   |   Sen θ = CO/H   |   Cos θ = CA/H   |   Tan θ = CO/CA",
    maceteTitle: "PROPORÇÃO 3-4-5 SEM RAIZ QUADRADA",
    maceteBody:
      "Grave o triângulo 3, 4 e 5. Se a questão trouxer catetos 6 e 8 (multiplicados por 2) ou 30 e 40 (multiplicados por 10), a hipotenusa será instantaneamente 10 ou 50 — zero cálculo!",
  },
  {
    id: "logarithm",
    badge: "DIAS 21 & 29 • EXPONENCIAL & LOGARITMOS",
    title: "Curvas de Juros Compostos & Escala Logarítmica",
    subtitle: "O efeito bola de neve vs. o compactador de expoentes",
    storytelling:
      "Enquanto o Juro Composto acelera em curva parabólica/exponencial (o aluguel gerando seu próprio aluguel), o Logaritmo faz o caminho inverso: ele compacta números gigantescos perguntando apenas qual foi o expoente utilizado.",
    formula: "M = C · (1 + i)ᵗ   |   Log_b(A) = x  ⇔  bˣ = A",
    maceteTitle: "A REGRA DO PETELECO (LOG A³)",
    maceteBody:
      "Se o logaritmando vier com um expoente nas costas (ex: Log de A³), dê um 'peteleco' matemático: o expoente escorrega para a frente multiplicando: 3 × Log(A).",
  },
];

export function InteractiveMathLab() {
  const [activeId, setActiveId] = useState<MathLabTab["id"]>("circles");
  const activeTab = LAB_TABS.find((t) => t.id === activeId) || LAB_TABS[0];

  return (
    <div className="relative border border-white/20 bg-[#0b0b0e]">
      {/* Corner fine-line crosshairs */}
      <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-3 w-3 border-t border-l border-white/60" />
      <span className="pointer-events-none absolute -top-1.5 -right-1.5 h-3 w-3 border-t border-r border-white/60" />
      <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b border-l border-white/60" />
      <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-3 w-3 border-b border-r border-white/60" />

      {/* Top Navigation Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/15">
        {LAB_TABS.map((tab, idx) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`group relative text-left px-5 py-4 transition-all border-b sm:border-b-0 ${
                idx < 3 ? "lg:border-r border-white/15" : ""
              } ${
                isActive
                  ? "bg-white/[0.06] text-white"
                  : "bg-transparent text-zinc-400 hover:bg-white/[0.025] hover:text-zinc-200"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-zinc-400">
                  0{idx + 1} // {tab.id.toUpperCase()}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    isActive ? "bg-white scale-125" : "bg-white/20"
                  }`}
                />
              </div>
              <p className="text-xs font-semibold tracking-wide line-clamp-1">
                {tab.title}
              </p>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Split Content: Animated Fine-Line Blueprint Canvas + Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left 6 cols: Interactive Animated SVG Mathematical Canvas */}
        <div className="lg:col-span-6 relative border-b lg:border-b-0 lg:border-r border-white/15 bg-[#070709] p-6 sm:p-8 flex flex-col justify-between min-h-[370px] overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest z-10">
            <span>FIGURA VETORIAL // ESCALA 1:1</span>
            <span>{activeTab.badge}</span>
          </div>

          {/* Animated SVG Diagram Switcher */}
          <div className="my-auto py-4 flex items-center justify-center z-10">
            {activeId === "circles" && (
              <svg viewBox="0 0 360 260" className="w-full max-w-[360px] h-auto" fill="none">
                {/* Coordinate Axes */}
                <line
                  x1="20"
                  y1="130"
                  x2="340"
                  y2="130"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                />
                <line
                  x1="180"
                  y1="10"
                  x2="180"
                  y2="250"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                />

                {/* Outer Circumscribed Circle (R) */}
                <circle
                  cx="180"
                  cy="130"
                  r="96"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="1.2"
                />
                <circle
                  cx="180"
                  cy="130"
                  r="104"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="0.75"
                  strokeDasharray="4 6"
                  className="math-orbit"
                />

                {/* Inscribed Equilateral Triangle */}
                <polygon
                  points="180,34 263.1,178 96.9,178"
                  stroke="white"
                  strokeWidth="1.25"
                  fill="rgba(255,255,255,0.03)"
                  className="math-draw"
                />

                {/* Inner Inscribed Circle (r = R/2) */}
                <circle
                  cx="180"
                  cy="130"
                  r="48"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  className="math-orbit-reverse"
                />

                {/* Radius R vector */}
                <line
                  x1="180"
                  y1="130"
                  x2="263.1"
                  y2="178"
                  stroke="white"
                  strokeWidth="1"
                />
                {/* Apothem / Inradius r vector */}
                <line
                  x1="180"
                  y1="130"
                  x2="180"
                  y2="178"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />

                {/* Vertex Nodes */}
                <circle cx="180" cy="34" r="3" fill="white" />
                <circle cx="263.1" cy="178" r="3" fill="white" />
                <circle cx="96.9" cy="178" r="3" fill="white" />
                <circle cx="180" cy="130" r="3" fill="white" />

                {/* Mathematical Labels */}
                <text x="225" y="152" fill="white" fontSize="11" fontFamily="var(--font-mono)">
                  R = 2r
                </text>
                <text x="163" y="160" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="var(--font-mono)">
                  r
                </text>
                <text x="275" y="52" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="var(--font-mono)">
                  A = π·r²
                </text>
                <text x="32" y="218" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="var(--font-mono)">
                  L = R√3
                </text>
              </svg>
            )}

            {activeId === "parabola" && (
              <svg viewBox="0 0 360 260" className="w-full max-w-[360px] h-auto" fill="none">
                {/* X and Y Axes */}
                <line x1="30" y1="210" x2="335" y2="210" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
                <line x1="70" y1="20" x2="70" y2="240" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />

                {/* Dashed projection lines to Vertex (Xv, Yv) */}
                <line
                  x1="200"
                  y1="48"
                  x2="200"
                  y2="210"
                  stroke="rgba(255,255,255,0.38)"
                  strokeWidth="0.9"
                  strokeDasharray="4 4"
                  className="math-dash-march"
                />
                <line
                  x1="70"
                  y1="48"
                  x2="200"
                  y2="48"
                  stroke="rgba(255,255,255,0.38)"
                  strokeWidth="0.9"
                  strokeDasharray="4 4"
                />

                {/* Parabola Curve f(x) = ax² + bx + c */}
                <path
                  d="M 95 235 Q 200 -115 305 235"
                  stroke="white"
                  strokeWidth="1.4"
                  fill="none"
                  className="math-draw"
                />

                {/* Tangent horizontal line at Vertex */}
                <line
                  x1="145"
                  y1="48"
                  x2="255"
                  y2="48"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="0.8"
                />

                {/* Key Critical Points: Vertex & Roots x' and x'' */}
                <circle cx="200" cy="48" r="4" fill="white" />
                <circle
                  cx="200"
                  cy="48"
                  r="11"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  className="math-orbit"
                />
                <circle cx="110" cy="210" r="3" fill="white" />
                <circle cx="290" cy="210" r="3" fill="white" />

                {/* Annotations */}
                <text x="165" y="34" fill="white" fontSize="11" fontFamily="var(--font-mono)">
                  Vértice (Xv, Yv)
                </text>
                <text x="32" y="52" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="var(--font-mono)">
                  Yv
                </text>
                <text x="193" y="228" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="var(--font-mono)">
                  Xv
                </text>
                <text x="102" y="228" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="var(--font-mono)">
                  x&apos;
                </text>
                <text x="284" y="228" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="var(--font-mono)">
                  x&apos;&apos;
                </text>
              </svg>
            )}

            {activeId === "pythagoras" && (
              <svg viewBox="0 0 360 260" className="w-full max-w-[360px] h-auto" fill="none">
                {/* Circumscribed Thales Circle around Right Triangle */}
                <circle
                  cx="185"
                  cy="135"
                  r="100"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  className="math-orbit"
                />

                {/* Right Triangle 3-4-5 */}
                <polygon
                  points="105,65 105,195 265,195"
                  stroke="white"
                  strokeWidth="1.4"
                  fill="rgba(255,255,255,0.03)"
                  className="math-draw"
                />

                {/* 90-degree square */}
                <rect
                  x="105"
                  y="179"
                  width="16"
                  height="16"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="1"
                />
                <circle cx="113" cy="187" r="1.5" fill="white" />

                {/* Angle Theta Arc */}
                <path
                  d="M 225 195 A 40 40 0 0 0 233 169"
                  stroke="white"
                  strokeWidth="1"
                />
                <text x="206" y="186" fill="white" fontSize="11" fontFamily="var(--font-mono)">
                  θ
                </text>

                {/* Labels */}
                <text x="42" y="135" fill="white" fontSize="11" fontFamily="var(--font-mono)">
                  CO = 3k
                </text>
                <text x="160" y="218" fill="white" fontSize="11" fontFamily="var(--font-mono)">
                  CA = 4k
                </text>
                <text x="192" y="118" fill="white" fontSize="11" fontFamily="var(--font-mono)">
                  Hipotenusa = 5k
                </text>
              </svg>
            )}

            {activeId === "logarithm" && (
              <svg viewBox="0 0 360 260" className="w-full max-w-[360px] h-auto" fill="none">
                {/* Axes */}
                <line x1="45" y1="215" x2="330" y2="215" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                <line x1="65" y1="25" x2="65" y2="235" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

                {/* Line of symmetry y = x (Inverse functions: Exponential vs Logarithm) */}
                <line
                  x1="65"
                  y1="215"
                  x2="265"
                  y2="25"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="0.9"
                  strokeDasharray="4 4"
                />

                {/* Exponential Curve M = C(1+i)^t */}
                <path
                  d="M 65 190 Q 155 182 215 30"
                  stroke="white"
                  strokeWidth="1.4"
                  className="math-draw"
                />

                {/* Logarithmic Curve y = log_b(x) */}
                <path
                  d="M 90 215 Q 105 125 315 80"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.2"
                  strokeDasharray="3 2"
                />

                <text x="150" y="45" fill="white" fontSize="10" fontFamily="var(--font-mono)">
                  f(x) = bˣ (Juro Composto)
                </text>
                <text x="208" y="122" fill="rgba(255,255,255,0.75)" fontSize="10" fontFamily="var(--font-mono)">
                  g(x) = Log_b(x)
                </text>
              </svg>
            )}
          </div>

          {/* Formula Bar at bottom of canvas */}
          <div className="border border-white/15 bg-white/[0.02] px-4 py-2.5 flex items-center justify-between gap-4 z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              EQUAÇÃO-CHAVE:
            </span>
            <code className="text-xs sm:text-sm font-mono text-white font-semibold">
              {activeTab.formula}
            </code>
          </div>
        </div>

        {/* Right 6 cols: Storytelling + Macete Box */}
        <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              {activeTab.badge}
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {activeTab.title}
            </h3>
            <p className="mt-1 text-sm font-mono text-zinc-400">
              {activeTab.subtitle}
            </p>

            <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              {activeTab.storytelling}
            </p>
          </div>

          {/* Exact PDF Blockquote style ("DICA DE OURO / MACETE") */}
          <div className="mt-8 border-l-2 border-white bg-white/[0.03] p-5">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white">
              {activeTab.maceteTitle}
            </p>
            <p className="mt-2 text-sm italic text-zinc-300 leading-relaxed">
              &ldquo;{activeTab.maceteBody}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
