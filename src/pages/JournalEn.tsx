import React, { useState } from "react";
import { Navbar, Footer, SectionHeader, EditorialCard, FilterChip } from "@/components/shared";
import { articles, IMAGES } from "@/lib/dataEn";

const categories = ["All", "Interviews", "Festival Notes", "Director's Notes", "Community Highlights"];

export default function JournalEn() {
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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F5F0EB]">
            The Journal
          </h1>
          <p className="mt-3 text-lg text-[#9A9590] max-w-2xl">
            Interviews, festival dispatches, director's notes, and critical
            perspectives on Ibero-American independent cinema.
          </p>
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