"use client";

import React, { useState } from "react";
import {
  VetorialLogo,
  HeroMathBackdrop,
  HeroDevicesMockup,
} from "@/components/MathFineLineIcons";
import { InteractiveMathLab } from "@/components/InteractiveMathLab";
import { CurriculumSection } from "@/components/CurriculumSection";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Compass,
  Zap,
  ChevronDown,
  Lock,
} from "lucide-react";

const FAQS = [
  {
    q: "Para quem é o Guia 30 Dias: O Resgate das Exatas?",
    a: "Para estudantes e candidatos do ENEM, Vestibulares Tradicionais (FUVEST, UNICAMP, UERJ) e Concursos Públicos que sentem ansiedade ao ver questões de matemática, travam na interpretação de enunciados ou perdem pontos preciosos por erros na matemática básica.",
  },
  {
    q: "Preciso já ter uma base forte em matemática para acompanhar?",
    a: "Não. O Guia começa literalmente no Dia 1 ('A Fundação do Prédio') explicando regras de sinais, frações e vírgulas do zero absoluto, usando analogias visuais do mundo real (conta bancária, fatias de pizza, troco na padaria, corrida de táxi) antes de avançar para Geometria, Funções, Combinatória e Logaritmos.",
  },
  {
    q: "Como funciona a metodologia sem decoreba (Storytelling Tático)?",
    a: "Em vez de jogar fórmulas frias sem contexto, cada um dos 30 dias apresenta um cenário físico real (um caminhão de bombeiros para Pitágoras, uma balança de pratos para Equações, um morteiro no deserto para Parábolas) seguido da equação limpa e de um Macete de Prova imediato.",
  },
  {
    q: "Como recebo o material após a confirmação?",
    a: "O acesso é 100% imediato e vitalício. Assim que o pagamento de R$ 29,90 (via PIX ou Cartão) é aprovado, você recebe o Guia completo em formato PDF de alta definição — otimizado para leitura no tablet, celular, computador ou impressão.",
  },
  {
    q: "E se eu achar que o material não é para mim?",
    a: "Você conta com garantia incondicional de 7 dias. Se por qualquer motivo sentir que o cronograma de 30 dias não destravou sua visão sobre matemática básica, devolvemos 100% do seu investimento com um único clique.",
  },
];

const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/85qtlBi";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f4f4f6] relative selection:bg-white selection:text-black">
      {/* =====================================================================
          HEADER / NAVBAR (Faithful to uploaded reference mockup)
      ===================================================================== */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#08080a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
          <a href="#" aria-label="Vetorial Estudos Home">
            <VetorialLogo />
          </a>

          {/* Center-Right Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-normal tracking-wide text-zinc-300">
            <a
              href="#produto"
              className="hover:text-white transition-colors py-1"
            >
              Produto
            </a>
            <a
              href="#laboratorio"
              className="hover:text-white transition-colors py-1"
            >
              Sobre o Método
            </a>
            <a
              href="#caracteristicas"
              className="hover:text-white transition-colors py-1"
            >
              Características
            </a>
            <a
              href="#contrastes"
              className="hover:text-white transition-colors py-1"
            >
              Contrastes
            </a>
            <a
              href="#cronograma"
              className="hover:text-white transition-colors py-1"
            >
              Cronograma 30 Dias
            </a>
          </nav>

          {/* Header CTA Button */}
          <a
            href={KIWIFY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[4px] border border-white/50 bg-transparent px-4 sm:px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:border-white hover:bg-white hover:text-black"
          >
            GARANTIR MEU ACESSO
          </a>
        </div>
      </header>

      {/* =====================================================================
          HERO SECTION + "O QUE VOCÊ VAI RECEBER" (Exact match to mockup)
      ===================================================================== */}
      <main>
        <section id="produto" className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-28">
          {/* Animated Fine-Line Mathematical Background */}
          <HeroMathBackdrop />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left 7 Cols: Headline, Subtitle, CTA & Price Caption */}
              <div className="lg:col-span-7 max-w-2xl">
                <div className="inline-flex items-center gap-2.5 border border-white/20 bg-white/[0.02] px-3 py-1 mb-6 text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  MÉTODO TÁTICO • ENEM, VESTIBULARES & CONCURSOS
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-[0.02em] text-white leading-[1.12]">
                  RESGATE SEUS
                  <br />
                  PONTOS EM
                  <br />
                  MATEMÁTICA BÁSICA
                </h1>

                <p className="mt-6 text-base sm:text-lg lg:text-[19px] text-zinc-400 font-normal leading-[1.6] max-w-xl">
                  O cronograma estratégico de 30 dias para vencer a ansiedade e
                  gabaritar as questões mais cobradas do ENEM, Vestibulares e
                  Concursos.
                </p>

                <div className="mt-9 flex flex-col items-start">
                  <a
                    href={KIWIFY_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center rounded-[4px] border border-white/60 bg-white/[0.03] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
                  >
                    <span>QUERO RESGATAR MINHA NOTA</span>
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <p className="mt-3.5 text-xs text-zinc-400 font-normal tracking-wide">
                    Acesso imediato e vitalício por apenas{" "}
                    <span className="text-zinc-200 font-semibold">R$ 29,90</span>
                  </p>
                </div>
              </div>

              {/* Right 5 Cols: Tablet & Phone Mockup with Animated Geometric Fine Lines */}
              <div className="lg:col-span-5">
                <HeroDevicesMockup />
              </div>
            </div>

            {/* =================================================================
                "O QUE VOCÊ VAI RECEBER" (Exact Architectural Line Layout from Mockup)
            ================================================================= */}
            <div id="caracteristicas" className="mt-20 lg:mt-24">
              {/* Top Horizontal Line with Label on Left */}
              <div className="flex items-center gap-5">
                <span className="text-xs sm:text-sm font-normal uppercase tracking-[0.14em] text-zinc-400 shrink-0">
                  O QUE VOCÊ VAI RECEBER
                </span>
                <div className="h-[1px] w-full bg-white/25 relative">
                  {/* Small animated pulse node along the horizontal axis */}
                  <span className="absolute right-0 -top-1 h-2 w-2 rounded-full border border-white/60 bg-[#08080a]" />
                </div>
              </div>

              {/* 3 Cards separated by vertical fine-line dividers connected to the top bar */}
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Pillar 1 */}
                <div className="pt-8 md:pr-7 pb-4">
                  <div className="group relative h-full rounded-[3px] border border-white/25 bg-[#0b0b0e]/90 p-7 transition-all duration-300 hover:border-white/60 hover:bg-[#0f0f14]">
                    {/* Animated geometric mini-diagram in top-right corner */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
                        01 // FUNDAMENTO VISUAL
                      </span>
                      <svg viewBox="0 0 40 40" className="w-8 h-8 opacity-75" fill="none">
                        <circle
                          cx="20"
                          cy="20"
                          r="16"
                          stroke="rgba(255,255,255,0.45)"
                          strokeWidth="0.9"
                          strokeDasharray="2 2"
                          className="math-orbit"
                        />
                        <polygon
                          points="20,6 33,28 7,28"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <circle cx="20" cy="20" r="2" fill="white" />
                      </svg>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-white leading-snug">
                      Storytelling Prático
                      <br />
                      (zero decoreba)
                    </h3>

                    <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                      Esqueça definições abstratas. Cada conceito nasce de uma
                      cena física impossível de esquecer: a fundação de um
                      prédio, a bandeirada de um táxi, a escada dos bombeiros ou
                      o voo balístico de um foguete.
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Linguagem Direta</span>
                      <span className="text-white">f(x) = ax + b</span>
                    </div>
                  </div>
                </div>

                {/* Pillar 2 (With vertical border-l and border-r connecting to the top horizontal line!) */}
                <div className="pt-8 md:px-7 pb-4 md:border-x md:border-white/25">
                  <div className="group relative h-full rounded-[3px] border border-white/25 bg-[#0b0b0e]/90 p-7 transition-all duration-300 hover:border-white/60 hover:bg-[#0f0f14]">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
                        02 // PROGRESSÃO TÁTICA
                      </span>
                      <svg viewBox="0 0 40 40" className="w-8 h-8 opacity-75" fill="none">
                        <polyline
                          points="6,32 15,22 24,25 34,9"
                          stroke="white"
                          strokeWidth="1.1"
                          className="math-draw"
                        />
                        <circle cx="6" cy="32" r="2" fill="white" />
                        <circle cx="15" cy="22" r="2" fill="white" />
                        <circle cx="24" cy="25" r="2" fill="white" />
                        <circle cx="34" cy="9" r="2.5" fill="white" />
                      </svg>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-white leading-snug">
                      30 Dias de
                      <br />
                      Cronograma Focado
                    </h3>

                    <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                      Um protocolo diário de leitura rápida (15 a 20 minutos por
                      dia). Você avança em ordem lógica: Aritmética, Estatística,
                      Geometria Plana/Espacial, Funções, Combinatória, Logaritmos
                      e Estratégia TRI.
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Dia 01 → Dia 30</span>
                      <span className="text-white">100% Estruturado</span>
                    </div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="pt-8 md:pl-7 pb-4">
                  <div className="group relative h-full rounded-[3px] border border-white/25 bg-[#0b0b0e]/90 p-7 transition-all duration-300 hover:border-white/60 hover:bg-[#0f0f14]">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
                        03 // VELOCIDADE DE PROVA
                      </span>
                      <svg viewBox="0 0 40 40" className="w-8 h-8 opacity-75" fill="none">
                        <rect
                          x="8"
                          y="8"
                          width="24"
                          height="24"
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth="0.9"
                        />
                        <line
                          x1="8"
                          y1="8"
                          x2="32"
                          y2="32"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <line
                          x1="32"
                          y1="8"
                          x2="8"
                          y2="32"
                          stroke="white"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-white leading-snug">
                      Fórmulas & Macetes
                      <br />
                      Prontos
                    </h3>

                    <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                      Cada capítulo entrega um atalho cirúrgico para cortar
                      contas pela metade: <span className="text-zinc-200">Macete da Borboleta</span>,{" "}
                      <span className="text-zinc-200">Triângulo 3-4-5</span>,{" "}
                      <span className="text-zinc-200">Mantra SOH-CAH-TOA</span>,{" "}
                      <span className="text-zinc-200">Veto de Bhaskara</span> e{" "}
                      <span className="text-zinc-200">Regra do Peteleco</span>.
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Atalhos Táticos</span>
                      <span className="text-white">H² = C₁² + C₂²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            INTERACTIVE MATHEMATICAL FINE-LINE LABORATORY
        ===================================================================== */}
        <section id="laboratorio" className="relative py-24 border-t border-white/15 bg-[#060608]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
                  <span>GEOMETRIA & FUNÇÕES EM MOVIMENTO</span>
                  <span className="h-[1px] w-14 bg-white/30" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                  A MATEMÁTICA VISUALIZADA EM TRAÇOS PUROS
                </h2>
              </div>
              <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
                Interaja com quatro pilares do Guia 30 Dias e veja como círculos
                inscritos, parábolas, triângulos retângulos e curvas logarítmicas
                deixam de ser bichos de sete cabeças.
              </p>
            </div>

            <InteractiveMathLab />
          </div>
        </section>

        {/* =====================================================================
            "CONTRASTES" SECTION (Why Traditional Study Fails vs. Vetorial)
        ===================================================================== */}
        <section id="contrastes" className="relative py-24 border-t border-white/15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                ASSIMETRIA TÁTICA // CONTRASTES
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                POR QUE CANDIDATOS BRILHANTES PERDEM PONTOS FÁCEIS?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                O sistema de Teoria de Resposta ao Item (TRI) do ENEM e as bancas
                de alta segurança não recompensam quem gasta 45 minutos na
                questão mais difícil — eles premiam a consistência letal na
                Matemática Básica.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/20 bg-[#0a0a0d]">
              {/* Left Column: O Candidato Comum */}
              <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/20">
                <div className="flex items-center justify-between pb-5 border-b border-white/15">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
                      CENÁRIO A // ESTUDO CONVENCIONAL
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-zinc-300 uppercase">
                      O Estudante Refém da Decoreba
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 border border-white/15 px-2.5 py-1">
                    Δ &lt; 0
                  </span>
                </div>

                <ul className="mt-7 space-y-5 text-sm text-zinc-400">
                  <li className="flex items-start gap-3.5">
                    <span className="mt-1 text-xs font-mono text-zinc-500">✕</span>
                    <span>
                      <strong className="text-zinc-200">Decora fórmulas soltas</strong>{" "}
                      sem entender a diferença física entre Comprimento da
                      Circunferência (2πr) e Área do Círculo (πr²).
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-1 text-xs font-mono text-zinc-500">✕</span>
                    <span>
                      <strong className="text-zinc-200">Cai em armadilhas visuais</strong>{" "}
                      de gráficos com eixos cortados ou calcula a Mediana sem
                      antes ordenar o Rol estatístico.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-1 text-xs font-mono text-zinc-500">✕</span>
                    <span>
                      <strong className="text-zinc-200">Perde minutos preciosos</strong>{" "}
                      aplicando Bhaskara inteira quando a questão pedia apenas o
                      Vértice da Parábola (Máximo/Mínimo).
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-1 text-xs font-mono text-zinc-500">✕</span>
                    <span>
                      <strong className="text-zinc-200">Inicia a prova pela questão 1</strong>{" "}
                      em ordem cega, esgotando o cérebro antes de garantir as
                      questões de Frações, Razão e Proporção.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column: O Estudante Vetorial */}
              <div className="p-8 sm:p-10 bg-white/[0.02] relative overflow-hidden">
                {/* Subtle animated inscribed circle in bottom-right corner */}
                <svg
                  viewBox="0 0 200 200"
                  className="pointer-events-none absolute -right-12 -bottom-12 w-56 h-56 opacity-15"
                  fill="none"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="math-orbit"
                  />
                  <polygon
                    points="100,20 169,140 31,140"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>

                <div className="flex items-center justify-between pb-5 border-b border-white/20">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white">
                      CENÁRIO B // PROTOCOLO VETORIAL ESTUDOS
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white uppercase">
                      O Estrategista do Guia 30 Dias
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-black bg-white font-bold px-2.5 py-1">
                    TRI MAX
                  </span>
                </div>

                <ul className="mt-7 space-y-5 text-sm text-zinc-200 relative z-10">
                  <li className="flex items-start gap-3.5">
                    <Check className="h-4 w-4 text-white shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Domina a fundação invisível:</strong>{" "}
                      opera sinais, frações (Macete da Borboleta) e vírgulas
                      decimais com velocidade cirúrgica.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <Check className="h-4 w-4 text-white shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Leitura fria de provas:</strong>{" "}
                      aplica o Macete do Investigador em gráficos (Título →
                      Legenda → Unidade) eliminando 80% das pegadinhas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <Check className="h-4 w-4 text-white shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Atalhos de alta performance:</strong>{" "}
                      usa Fatores de Multiplicação (0,7 e 1,25), Traços Curtos em
                      Arranjo e a Regra do Peteleco em Logaritmos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <Check className="h-4 w-4 text-white shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Domínio do Tempo (Dia 30):</strong>{" "}
                      usa os 10 minutos inaugurais para caçar os pontos mais
                      valiosos da TRI e blindar a nota de corte.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            FULL 30-DAY INTERACTIVE CURRICULUM SECTION
        ===================================================================== */}
        <CurriculumSection />

        {/* =====================================================================
            PRICING / OFFER SECTION ("GARANTIR MEU ACESSO — R$ 29,90")
        ===================================================================== */}
        <section id="oferta" className="relative py-28 border-t border-white/15 overflow-hidden">
          {/* Background Sacred Mathematical Geometry Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15"
          >
            <svg viewBox="0 0 600 600" className="w-[680px] h-[680px]" fill="none">
              <circle
                cx="300"
                cy="300"
                r="270"
                stroke="white"
                strokeWidth="0.75"
              />
              <circle
                cx="300"
                cy="300"
                r="220"
                stroke="white"
                strokeWidth="0.75"
                strokeDasharray="6 6"
                className="math-orbit"
              />
              <polygon
                points="300,80 490.5,410 109.5,410"
                stroke="white"
                strokeWidth="0.75"
              />
              <polygon
                points="300,520 490.5,190 109.5,190"
                stroke="white"
                strokeWidth="0.75"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative border border-white/40 bg-[#09090c] p-8 sm:p-12 lg:p-14 shadow-[0_0_100px_rgba(0,0,0,0.95)]">
              {/* Architectural Corner Ticks */}
              <span className="pointer-events-none absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-white" />
              <span className="pointer-events-none absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-white" />
              <span className="pointer-events-none absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-white" />
              <span className="pointer-events-none absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-white" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left 7 Cols: Offer Details */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 border border-white/25 bg-white/[0.04] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-white">
                    EDIÇÃO COMPLETA • ACESSO IMEDIATO
                  </div>

                  <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                    GUIA 30 DIAS: O RESGATE DAS EXATAS
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Matemática Básica para Concursos, ENEM e Vestibulares —
                    Vetorial Estudos.
                  </p>

                  <ul className="mt-7 space-y-3.5 text-sm text-zinc-300">
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-white shrink-0" />
                      <span>
                        <strong>Cronograma completo de 30 Dias</strong> (Da
                        fundação das regras de sinais ao Dia 30 de revisão TRI)
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-white shrink-0" />
                      <span>
                        <strong>Storytelling Prático</strong> com analogias
                        visuais (zero decoreba mecânica)
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-white shrink-0" />
                      <span>
                        <strong>+25 Dicas de Ouro, Macetes e Alertas</strong> de
                        pegadinhas clássicas de banca
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-white shrink-0" />
                      <span>
                        <strong>Design Dark Minimalista</strong> (conforto
                        visual para ler no Tablet, Celular ou Notebook)
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-white shrink-0" />
                      <span>
                        <strong>Acesso Vitalício</strong> + Garantia
                        Incondicional de 7 Dias
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Right 5 Cols: Price & CTA Box */}
                <div className="lg:col-span-5 border border-white/20 bg-[#060608] p-7 text-center flex flex-col items-center">
                  {/* Animated Inscribed Hexagram Emblem from Cover */}
                  <svg viewBox="0 0 80 80" className="w-16 h-16 mb-4" fill="none">
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="28"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                      className="math-orbit"
                    />
                    <polygon
                      points="40,11 65,54.5 15,54.5"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <polygon
                      points="40,69 65,25.5 15,25.5"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="0.8"
                    />
                    <circle cx="40" cy="40" r="2.5" fill="white" />
                  </svg>

                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 line-through">
                    DE R$ 97,00 POR APENAS
                  </span>

                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="text-sm font-mono text-zinc-300">R$</span>
                    <span className="text-5xl font-extrabold tracking-tight text-white">
                      29,90
                    </span>
                  </div>
                  <span className="mt-1 text-xs font-mono text-zinc-400">
                    Pagamento único • Acesso vitalício
                  </span>

                  <a
                    href={KIWIFY_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center rounded-[4px] border border-white bg-white py-4 px-6 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-transparent hover:text-white"
                  >
                    QUERO RESGATAR MINHA NOTA
                  </a>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
                    <ShieldCheck className="h-4 w-4 text-white" />
                    <span>7 dias de garantia incondicional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            FAQ SECTION
        ===================================================================== */}
        <section className="py-20 border-t border-white/15 bg-[#060608]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-zinc-400">
                DÚVIDAS FREQUENTES
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                PERGUNTAS & RESPOSTAS
              </h2>
            </div>

            <div className="divide-y divide-white/15 border-y border-white/15">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between text-left gap-4"
                    >
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed pr-6">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          FOOTER
      ===================================================================== */}
      <footer className="border-t border-white/15 bg-[#050507] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <VetorialLogo />
          <p className="text-xs font-mono text-zinc-500 text-center sm:text-right">
            © {new Date().getFullYear()} VETORIAL ESTUDOS — GUIA 30 DIAS: O
            RESGATE DAS EXATAS. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </footer>
    </div>
  );
}
