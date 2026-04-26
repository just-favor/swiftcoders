import Link from "next/link";
import Container from "@/Components/Container";
import Animate from "@/Components/Animate";
import { getPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const categoryColors: Record<string, string> = {
  "Web Dev": "bg-cyan-500/10 text-cyan-400 ring-cyan-500/30",
  Design: "bg-violet-500/10 text-violet-400 ring-violet-500/30",
  "Case Study": "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="min-h-screen py-24 bg-[#080c10] border-t border-white/[0.06]">
      <Container>
        <Animate className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
            SwiftCoders / Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Thoughts on{" "}
            <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent">
              code &amp; craft
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Deep dives, case studies, and hard-won lessons from the SwiftCoders team.
          </p>
        </Animate>

        {posts.length === 0 ? (
          <Animate delay={0.1}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-14 text-center">
              <p className="text-slate-400 text-sm">No posts yet — check back soon.</p>
            </div>
          </Animate>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any, i: number) => {
              const tagClass =
                categoryColors[post.category] ??
                "bg-slate-500/10 text-slate-400 ring-slate-500/30";

              return (
                <Animate key={post._id} delay={i * 0.1}>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
                  >
                    <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />

                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-white/[0.04]">
                      {post.mainImage ? (
                        <img
                          src={urlFor(post.mainImage).width(800).height(500).url()}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-slate-700 text-xs uppercase tracking-widest">No image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {post.category && (
                        <span className={`absolute bottom-3 left-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ring-1 ${tagClass}`}>
                          {post.category}
                        </span>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="text-base font-bold leading-snug text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                        {post.title}
                      </h2>

                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-300">
                            {post.author?.[0] ?? "S"}
                          </div>
                          <span className="text-xs text-slate-500">{post.author ?? "SwiftCoders"}</span>
                        </div>
                        {post.publishedAt && (
                          <time className="font-mono text-xs text-slate-600">
                            {formatDate(post.publishedAt)}
                          </time>
                        )}
                      </div>
                    </div>
                  </Link>
                </Animate>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
