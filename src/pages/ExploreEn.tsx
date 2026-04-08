import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Navbar,
  Footer,
  SectionHeader,
  FilmCard,
  FilterChip,
} from "@/components/shared";
import { films, countries, genres, moods, festivals } from "@/lib/dataEn";

export default function ExploreEn() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredFilms = useMemo(() => {
    let result = [...films];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.director.toLowerCase().includes(q) ||
          f.country.toLowerCase().includes(q)
      );
    }

    if (selectedCountry.length > 0) {
      result = result.filter((f) => selectedCountry.includes(f.country));
    }

    if (selectedGenre.length > 0) {
      result = result.filter((f) =>
        f.genre.some((g) => selectedGenre.includes(g))
      );
    }

    if (sortBy === "trending") {
      result.sort((a, b) => b.members - a.members);
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === "rewards") {
      result.sort((a, b) => b.rewards - a.rewards);
    }

    return result;
  }, [searchQuery, selectedCountry, selectedGenre, sortBy]);

  const activeFilterCount =
    selectedCountry.length + selectedGenre.length + selectedMood.length;

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F5F0EB]">
            Explore Films
          </h1>
          <p className="mt-3 text-lg text-[#9A9590] max-w-2xl">
            Discover curated independent cinema from across the Ibero-American world.
            Every film is a channel waiting for you to join.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9590]"
            />
            <Input
              placeholder="Search by title, director, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#141414] border-[#262626] text-[#F5F0EB] placeholder:text-[#9A9590]/60 focus:border-[#C8A97E]/50 focus:ring-[#C8A97E]/20 h-11"
            />
          </div>
          <div className="flex gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px] bg-[#141414] border-[#262626] text-[#F5F0EB] h-11">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-[#262626]">
                <SelectItem value="default" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                  Default
                </SelectItem>
                <SelectItem value="trending" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                  Trending
                </SelectItem>
                <SelectItem value="newest" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                  Newest
                </SelectItem>
                <SelectItem value="rewards" className="text-[#F5F0EB] focus:bg-[#262626] focus:text-[#F5F0EB]">
                  Most Rewards
                </SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className={`border-[#262626] text-[#9A9590] hover:text-[#F5F0EB] hover:border-[#C8A97E]/30 h-11 !bg-transparent hover:!bg-[#C8A97E]/5 ${
                showFilters ? "border-[#C8A97E]/40 text-[#C8A97E]" : ""
              }`}
            >
              <SlidersHorizontal size={16} className="mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-2 bg-[#C8A97E] text-[#0A0A0A] text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-[#141414] border border-[#262626] rounded-lg p-6 mb-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#F5F0EB] uppercase tracking-wider font-body">
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedCountry([]);
                    setSelectedGenre([]);
                    setSelectedMood([]);
                  }}
                  className="text-xs text-[#C8A97E] hover:text-[#D4BA94] flex items-center gap-1"
                >
                  <X size={12} /> Clear all
                </button>
              )}
            </div>

            <div>
              <p className="text-xs text-[#9A9590] mb-3 uppercase tracking-wider font-medium">
                Country
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <FilterChip
                    key={c}
                    label={c}
                    active={selectedCountry.includes(c)}
                    onClick={() => toggleFilter(selectedCountry, setSelectedCountry, c)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#9A9590] mb-3 uppercase tracking-wider font-medium">
                Genre
              </p>
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <FilterChip
                    key={g}
                    label={g}
                    active={selectedGenre.includes(g)}
                    onClick={() => toggleFilter(selectedGenre, setSelectedGenre, g)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#9A9590] mb-3 uppercase tracking-wider font-medium">
                Mood
              </p>
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => (
                  <FilterChip
                    key={m}
                    label={m}
                    active={selectedMood.includes(m)}
                    onClick={() => toggleFilter(selectedMood, setSelectedMood, m)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[#9A9590] mb-3 uppercase tracking-wider font-medium">
                Quick Filters
              </p>
              <div className="flex flex-wrap gap-2">
                {["Rewards active", "Event this week", "Festival selection", "Trending"].map(
                  (tag) => (
                    <FilterChip
                      key={tag}
                      label={tag}
                      active={false}
                      onClick={() => {}}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-[#9A9590]">
            Showing{" "}
            <span className="text-[#F5F0EB] font-medium">
              {filteredFilms.length}
            </span>{" "}
            {filteredFilms.length === 1 ? "film" : "films"}
          </p>
        </div>

        {/* Film Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilms.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>

        {filteredFilms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9A9590] text-lg">No films match your filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCountry([]);
                setSelectedGenre([]);
                setSelectedMood([]);
              }}
              className="mt-4 text-[#C8A97E] text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}