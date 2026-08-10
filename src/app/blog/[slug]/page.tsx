import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { blogPostsData } from "@/data/blogPosts";
import { ArrowLeft, Clock, Share2, CheckCircle2 } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | THEBLANCMEDIA" };

  return {
    title: `${post.title} | THEBLANCMEDIA`,
    description: post.excerpt
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="pt-28 bg-white">
      
      {/* Back Link & Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black hover:text-[#FE8301] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Insights
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Badge text={post.category} />
          <span className="text-xs text-neutral-500 font-medium">{post.date}</span>
          <span className="text-xs text-neutral-300">•</span>
          <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#FE8301]" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-black leading-tight">
          {post.title}
        </h1>

        {/* Author Details */}
        <div className="mt-8 pt-6 border-t border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-neutral-200">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="block font-heading font-bold text-sm text-black">
                {post.author.name}
              </span>
              <span className="text-xs font-medium text-neutral-500">
                {post.author.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 cursor-pointer hover:text-black">
            <Share2 className="w-4 h-4 text-[#FE8301]" />
            <span>Share</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-80 sm:h-[450px] w-full my-10 overflow-hidden border border-neutral-200">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-[#F4F4F4] border-l-4 border-[#FE8301] p-6 sm:p-8 my-8">
          <h3 className="font-heading font-bold text-lg text-black mb-3">
            Key Strategic Takeaways
          </h3>
          <ul className="flex flex-col gap-2.5">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#FE8301] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Body Paragraphs */}
        <div className="flex flex-col gap-6 text-neutral-800 text-base leading-relaxed font-medium my-10">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Related Posts Section */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <h3 className="font-heading font-bold text-2xl text-black mb-8">
            Related Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="p-6 bg-[#F4F4F4] border border-neutral-200 hover:border-[#FE8301] transition-all"
              >
                <span className="text-xs font-semibold text-[#FE8301] uppercase tracking-wider block mb-2">
                  {rel.category}
                </span>
                <h4 className="font-heading font-bold text-base text-black hover:text-[#FE8301] transition-colors leading-snug">
                  {rel.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

      </article>

      <ContactCTASection />

    </div>
  );
}
