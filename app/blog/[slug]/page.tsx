import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Container from "@/Components/Container";
import { getPost } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const revalidate = 60;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <section className="min-h-screen bg-[#080c10] border-t border-white/[0.06]">

      {/* Hero image */}
      {post.mainImage && (
        <div className="relative w-full h-72 md:h-[480px] overflow-hidden">
        <img
            src={urlFor(post.mainImage).width(1600).height(700).url()}
            alt={post.mainImage.alt || post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-black/40 to-transparent" />
        </div>
      )}

      <Container>
        <div className="max-fulll mx-auto py-16">

          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
              <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
            </svg>
            Back to blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              {post.category && (
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ring-1 bg-cyan-500/10 text-cyan-400 ring-cyan-500/30">
                  {post.category}
                </span>
              )}
              {post.publishedAt && (
                <time className="font-mono text-xs text-slate-500">
                  {formatDate(post.publishedAt)}
                </time>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-slate-400 text-lg leading-relaxed">{post.excerpt}</p>
            )}

            {post.author && (
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-300">
                  {post.author[0]}
                </div>
                <span className="text-sm text-slate-400">{post.author}</span>
              </div>
            )}
          </div>

          <div className="h-px bg-white/[0.06] mb-10" />

          {/* Body */}
          <div className="prose prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-slate-300 prose-p:text-lg prose-p:leading-relaxed
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
            prose-strong:text-white
            prose-code:text-cyan-300 prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/[0.08] prose-pre:rounded-xl
            prose-blockquote:border-cyan-500/40 prose-blockquote:text-slate-400
            prose-li:text-slate-300 prose-li:text-lg
          ">
            <PortableText value={post.body} />
          </div>

        </div>
      </Container>
    </section>
  );
}
