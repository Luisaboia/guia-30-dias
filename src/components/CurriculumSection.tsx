"use client";

import React, { useState } from "react";
import { CURRICULUM_DAYS, PILLARS, DayItem } from "@/data/curriculum";
import { DayGeometryIcon } from "@/components/MathFineLineIcons";

export function CurriculumSection() {
  const [selectedPillar, setSelectedPillar] = useState<string>("all");
  const [selectedDay, setSelectedDay] = useState<DayItem>(CURRICULUM_DAYS[11]); // Default to Dia 13 (Círculos) or Dia 12

  const filteredDays =
    selectedPillar === "all"
      ? CURRICULUM_DAYS
      : CURRICULUM_DAYS.filter((d) => d.pillar === selectedPillar);

  return (
    <section id="cronograma" className="relative py-24 border-t border-white/15">
      {/* Subtle geometric background separator */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fine-Line Axis */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
              <span>MAPA TÁTICO COMPLETO</span>
              <span className="h-[1px] w-16 bg-white/30" />
              <span>22 PÁGINAS DIRETO AO PONTO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
              OS 30 DIAS DO RESGATE
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
            Clique em qualquer dia abaixo para inspecionar a analogia real, a
            fórmula destrinchada e o <span className="text-white">Macete de Prova</span> que
            você vai dominar.
          </p>
        </div>

        {/* 4 Pillars Filter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          <button
            onClick={() => setSelectedPillar("all")}
            className={`text-left p-4 border transition-all ${
              selectedPillar === "all"
                ? "border-white bg-white/[0.07] text-white"
                : "border-white/15 bg-[#0b0b0e] text-zinc-400 hover:border-white/35 hover:text-white"
            }`}
          >
            <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              VISÃO INTEGRAL
            </span>
            <span className="mt-1 block text-sm font-bold uppercase">
              Todos os 30 Dias
            </span>
            <span className="mt-2 block text-[11px] font-mono text-zinc-400">
              29 Módulos Táticos
            </span>
          </button>

          {PILLARS.map((pillar) => {
            const active = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setSelectedPillar(pillar.id);
                  const firstInPillar = CURRICULUM_DAYS.find(
                    (d) => d.pillar === pillar.id
                  );
                  if (firstInPillar) setSelectedDay(firstInPillar);
                }}
                className={`text-left p-4 border transition-all ${
                  active
                    ? "border-white bg-white/[0.07] text-white"
                    : "border-white/15 bg-[#0b0b0e] text-zinc-400 hover:border-white/35 hover:text-white"
                }`}
              >
                <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  {pillar.range}
                </span>
                <span className="mt-1 block text-xs font-bold uppercase line-clamp-1">
                  {pillar.title}
                </span>
                <span className="mt-2 block text-[10px] font-mono text-zinc-400 truncate">
                  {pillar.formulaBadge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Split: Grid of Days + Live PDF Page Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 columns: Days Selector Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[620px] overflow-y-auto pr-1">
            {filteredDays.map((item) => {
              const isSelected = selectedDay.day === item.day;
              return (
                <button
                  key={item.day}
                  onClick={() => setSelectedDay(item)}
                  className={`group relative text-left p-4 border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? "border-white bg-white/[0.08]"
                      : "border-white/15 bg-[#0a0a0d] hover:border-white/40 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="shrink-0 border border-white/15 bg-[#070709] p-1.5">
                    <DayGeometryIcon
                      type={item.geometryType}
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                        {item.day}
                      </span>
                      {isSelected && (
                        <span className="text-[9px] font-mono uppercase tracking-widest text-white border border-white/30 px-1.5 py-0.5">
                          ATIVO
                        </span>
                      )}
                    </div>
                    <h4 className="mt-1 text-sm font-bold text-white truncate">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right 5 columns: Sticky "PDF Page Inspector" Replica */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative border border-white/30 bg-[#070709] p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
              {/* Top corner coordinates */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400">
                <span>VETORIAL ESTUDOS // PREVIEW</span>
                <span>{selectedDay.day}</span>
              </div>

              {/* Minimalist Geometric Emblem at Top Center (Just like every page of the PDF!) */}
              <div className="my-6 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-white/15 bg-white/[0.02]">
                  <DayGeometryIcon
                    type={selectedDay.geometryType}
                    className="w-12 h-12"
                  />
                </div>
              </div>

              {/* Day Title in PDF Style */}
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-white/60 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold tracking-[0.08em] text-white uppercase">
                  {selectedDay.day}: {selectedDay.title}
                </h3>
              </div>
              <p className="mt-1 pl-9 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {selectedDay.subtitle}
              </p>

              {/* Storytelling Excerpt */}
              <p className="mt-5 text-sm text-zinc-300 leading-relaxed">
                {selectedDay.analogy}
              </p>

              {/* Monospace Formula Box (Centered like in the PDF) */}
              <div className="my-6 border-y border-white/15 bg-white/[0.02] py-3.5 px-4 text-center">
                <code className="text-xs sm:text-sm font-mono text-white tracking-wider">
                  {selectedDay.formula}
                </code>
              </div>

              {/* Left-Bordered "DICA DE OURO / MACETE" Callout (Exact match to PDF pages) */}
              <div className="border-l-2 border-white pl-4 py-1">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white">
                  {selectedDay.hackTitle}:
                </p>
                <p className="mt-1.5 text-xs sm:text-sm italic text-zinc-300 leading-relaxed">
                  {selectedDay.hackText}
                </p>
              </div>

              {/* Bottom PDF Footer Replica */}
              <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                <span>VETORIAL ESTUDOS</span>
                <span>GUIA 30 DIAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
