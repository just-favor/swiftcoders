import Link from "next/link";
import Container from "@/Components/Container";
import Animate from "@/Components/Animate";
import { getPosts } from "@/sanity/lib/queries";

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
    <section className="py-24 bg-[#080c10] border-t border-white/[0.06]">
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
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post: any, i: number) => {
              const tagClass =
                categoryColors[post.category] ??
                "bg-slate-500/10 text-slate-400 ring-slate-500/30";

              return (
                <Animate key={post._id} delay={i * 0.1}>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.06]"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_60%)]" />

                    <div className="mb-4 flex items-center justify-between gap-3">
                      {post.category && (
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ring-1 ${tagClass}`}>
                          {post.category}
                        </span>
                      )}
                      {post.publishedAt && (
                        <time className="shrink-0 font-mono text-xs text-slate-500">
                          {formatDate(post.publishedAt)}
                        </time>
                      )}
                    </div>

                    <h2 className="mb-3 text-lg font-bold leading-snug text-white transition-colors duration-200 group-hover:text-cyan-300">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="grow text-sm leading-relaxed text-slate-400">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-all duration-200 group-hover:gap-3 group-hover:text-cyan-300">
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                        <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L9.22 5.03a.75.75 0 0 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                      </svg>
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
