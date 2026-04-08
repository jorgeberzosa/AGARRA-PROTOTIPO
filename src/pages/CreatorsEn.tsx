import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  Gift,
  BarChart3,
  MessageCircle,
  Film,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Zap,
  Globe,
} from "lucide-react";
import { Navbar, Footer, SectionHeader } from "@/components/shared";
import { IMAGES } from "@/lib/dataEn";

export default function CreatorsEn() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-16">
        <div className="absolute inset-0">
          <img
            src={IMAGES.director}
            alt="For Creators"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C8A97E]/10 border border-[#C8A97E]/20 rounded-full px-4 py-1.5 mb-8">
            <Film size={14} className="text-[#C8A97E]" />
            <span className="text-xs text-[#C8A97E] font-medium">
              For Filmmakers
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F5F0EB] leading-tight">
            Turn your film into a{" "}
            <span className="text-[#C8A97E] italic">living channel</span>
          </h1>

          <p className="mt-6 text-lg text-[#9A9590] max-w-2xl mx-auto leading-relaxed">
            AGARRA gives independent filmmakers the tools to build lasting audiences,
            host events, create rewards, and generate ongoing value from their work.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md px-8 py-6 text-base">
              Apply as Creator
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link to="/pass">
              <Button
                variant="outline"
                className="border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 !bg-transparent rounded-md px-8 py-6 text-base"
              >
                View Creator Plan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          title="Creator Benefits"
          subtitle="Everything you need to transform your film into an engaged community."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Users size={28} />,
              title: "Activate Your Audience",
              description:
                "Transform passive viewers into an engaged community. Build a dedicated channel around your film with discussion, participation, and shared experiences.",
            },
            {
              icon: <MessageCircle size={28} />,
              title: "Build Community",
              description:
                "Create a space where your audience connects with each other and with your work. Foster conversations that extend the life of your film.",
            },
            {
              icon: <Calendar size={28} />,
              title: "Launch Events",
              description:
                "Host live Q&As, watch parties, panel discussions, and premieres. Bring your audience together in real-time around your cinema.",
            },
            {
              icon: <Gift size={28} />,
              title: "Unlock Rewards",
              description:
                "Design exclusive collectibles, early access passes, and special content. Give your most engaged viewers something to collect and cherish.",
            },
            {
              icon: <BarChart3 size={28} />,
              title: "Audience Insights",
              description:
                "Understand who watches, participates, and engages. Use data to make informed decisions about distribution and community building.",
            },
            {
              icon: <Globe size={28} />,
              title: "Global Distribution",
              description:
                "Reach audiences across the Ibero-American world and beyond. AGARRA connects your film with viewers who value independent storytelling.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#141414] border border-[#262626] rounded-lg p-8 hover:border-[#C8A97E]/30 transition-all duration-300 glow-hover group"
            >
              <div className="text-[#C8A97E] group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#F5F0EB]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-[#9A9590] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works for Creators */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            title="How It Works"
            subtitle="From submission to thriving channel in four simple steps."
          />
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Apply & Submit",
                description:
                  "Submit your film through our creator portal. Our curatorial team reviews every submission for artistic merit and cultural relevance.",
              },
              {
                step: "02",
                title: "Launch Your Channel",
                description:
                  "Once approved, your film becomes a living channel. Add editorial context, set up your community space, and configure your rewards.",
              },
              {
                step: "03",
                title: "Engage Your Audience",
                description:
                  "Host events, start conversations, and build a community around your work. AGARRA provides the tools — you bring the vision.",
              },
              {
                step: "04",
                title: "Grow & Earn",
                description:
                  "As your community grows, so does your impact. Access analytics, revenue sharing, and festival submission support.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 bg-[#141414] border border-[#262626] rounded-lg p-8 hover:border-[#C8A97E]/30 transition-all duration-300 group"
              >
                <span className="font-display text-4xl font-bold text-[#C8A97E]/20 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#F5F0EB] group-hover:text-[#C8A97E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#9A9590] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F5F0EB] leading-tight">
            Your film deserves an{" "}
            <span className="text-[#C8A97E] italic">audience</span>
          </h2>
          <p className="mt-6 text-lg text-[#9A9590] max-w-xl mx-auto leading-relaxed">
            Join the growing community of Ibero-American filmmakers who are building
            lasting connections with their audiences on AGARRA.
          </p>
          <div className="mt-10">
            <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md px-10 py-6 text-base">
              Apply as Creator
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}