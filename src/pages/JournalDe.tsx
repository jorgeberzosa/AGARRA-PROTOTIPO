import React, { useState } from "react";
import { Navbar, Footer, SectionHeader, EditorialCard, FilterChip } from "@/components/shared";
import { articles, IMAGES } from "@/lib/dataEs";

const categories = ["All", "Interviews", "Festival Notes", "Director's Notes", "Community Highlights"];

export default function JournalEs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="mb-12">
          <SectionHeader
            title="Das Magazin"
            subtitle="Historias, entrevistas y notas de campo del ecosistema del cine iberoamericano."
          />
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <EditorialCard article={articles[0]} featured />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <EditorialCard key={article.id} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9A9590] text-lg">
              No articles in this category yet.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}