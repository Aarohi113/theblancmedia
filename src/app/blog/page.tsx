"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { blogPostsData } from "@/data/blogPosts";
import { Clock, ArrowUpRight } from "lucide-react";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Web Development",
    "PPC & Ads",
    "SEO & Local",
    "Growth Strategy"
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPostsData
    : blogPostsData.filter((post) => post.category === selectedCategory);

  return (
    <div className="pt-28 bg-white">
      
      {/* Blog Hero */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <SectionHeader
            badge="Growth Intelligence"
            title="Ideas, Insights & Digital Growth."
            highlightedWord="Digital Growth."
            description="Editorial analysis, performance breakdowns, and strategic playbooks written by theBlancMedia strategists."
            align="center"
            isHero={true}
          />

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-xs cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FE8301] text-white shadow-xs"
                    : "bg-[#F4F4F4] text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-neutral-200/90 hover:border-[#FE8301] transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge text={post.category} />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#FE8301]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-black group-hover:text-[#FE8301] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 text-xs mt-3 leading-relaxed font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-black group-hover:text-[#FE8301]">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />

    </div>
  );
}
