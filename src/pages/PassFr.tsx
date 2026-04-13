import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar, Footer, SectionHeader, PricingCard } from "@/components/shared";
import { passTiers, faqItems } from "@/lib/dataFr";

export default function PassEs() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#C8A97E]/10 border border-[#C8A97E]/20 rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={14} className="text-[#C8A97E]" />
          <span className="text-xs text-[#C8A97E] font-medium">
            Membresía
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F5F0EB] leading-tight">
          Tu pasaporte de cine hacia{" "}
          <span className="text-[#C8A97E] italic">todo</span>
        </h1>
        <p className="mt-6 text-lg text-[#9A9590] max-w-2xl mx-auto leading-relaxed">
          AGARRA Pass desbloquea películas ilimitadas, eventos en vivo, recompensas en la comunidad y
          beneficios tipo wallet. Elige el nivel que se adapte a tu viaje.
        </p>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {passTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <SectionHeader
          title="El AGARRA Pass"
          subtitle="Desbloquea el ecosistema completo. Apoya el cine independiente y obtén acceso exclusivo a canales, eventos en vivo y recompensas."
        />
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-[#141414] border border-[#262626] rounded-lg px-6 data-[state=open]:border-[#C8A97E]/30"
            >
              <AccordionTrigger className="text-[#F5F0EB] text-sm font-medium hover:text-[#C8A97E] hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#9A9590] text-sm leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F5F0EB]">
          ¿Listo para unirte?
        </h2>
        <p className="mt-4 text-[#9A9590] max-w-lg mx-auto">
          Empieza a explorar gratuitamente, o desbloquea toda la experiencia AGARRA hoy.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/explore">
            <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md px-8 py-6">
              Empezar a Explorar <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}