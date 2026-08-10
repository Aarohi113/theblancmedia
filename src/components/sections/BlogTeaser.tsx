import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { blogPostsData } from "@/data/blogPosts";
import { Clock, ArrowUpRight } from "lucide-react";

export default function BlogTeaser() {
  return (
    <section className="py-28 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            badge="Insights & Thought Leadership"
            title="Insights That Move Brands Forward."
            highlightedWord="Brands Forward."
            description="Proven frameworks, performance breakdowns, and editorial guides from our growth strategists."
          />
          <Button href="/blog" variant="secondary" size="md" className="shrink-0">
            Explore All Insights
          </Button>
        </div>

        {/* 3 Featured Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-neutral-200 hover:border-[#FE8301] transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
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

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FE8301]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-black group-hover:text-[#FE8301] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-neutral-600 text-xs mt-3 leading-relaxed line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-black group-hover:text-[#FE8301]">
                  <span>Read Full Insight</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
