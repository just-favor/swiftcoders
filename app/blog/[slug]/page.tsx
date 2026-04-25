import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Container from "@/Components/Container";
import { getPost } from "@/sanity/lib/queries";
import Link from "next/link";

export const revalidate = 60;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <section className="py-24 bg-[#080c10] border-t border-white/[0.06]">
      <Container>
        <div className="max-w-2xl mx-auto">

          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
              <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
            </svg>
            Back to blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-slate-400 text-base leading-relaxed">{post.excerpt}</p>
            )}
            {post.author && (
              <p className="mt-4 text-xs text-slate-500">By <span className="text-slate-300">{post.author}</span></p>
            )}
          </div>

          <div className="h-px bg-white/[0.06] mb-10" />

          {/* Body */}
          <div className="prose prose-invert prose-sm max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-400 prose-p:leading-relaxed prose-a:text-cyan-400 prose-strong:text-white prose-code:text-cyan-300 prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/[0.08] prose-pre:rounded-xl">
            <PortableText value={post.body} />
          </div>

        </div>
      </Container>
    </section>
  );
}
