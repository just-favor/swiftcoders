import Link from "next/link";
import Container from "@/Components/Container";
import Animate from "@/Components/Animate";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    slug: "building-scalable-apis-with-nextjs",
    title: "Building Scalable APIs with Next.js App Router",
    date: "April 14, 2026",
    category: "Web Dev",
    excerpt:
      "Route Handlers in the App Router unlock a clean, composable way to build APIs. We walk through caching strategies, middleware patterns, and error handling that actually scales under pressure.",
  },
  {
    slug: "design-systems-that-dont-suck",
    title: "Design Systems That Don't Suck",
    date: "March 29, 2026",
    category: "Design",
    excerpt:
      "Most design systems die in a shared Figma file nobody updates. Here's how SwiftCoders builds living systems — tokens, component contracts, and the handoff rituals that keep design and code in sync.",
  },
  {
    slug: "fintech-dashboard-case-study",
    title: "Case Study: Rebuilding a Fintech Dashboard in 6 Weeks",
    date: "March 10, 2026",
    category: "Case Study",
    excerpt:
      "A legacy Angular dashboard was costing our client $40k/year in support tickets. We rebuilt it in React, cut load time by 70 %, and shipped in six weeks flat — here's exactly how we did it.",
  },
  {
    slug: "typescript-tips-for-large-teams",
    title: "TypeScript Patterns Every Large Team Should Know",
    date: "February 21, 2026",
    category: "Web Dev",
    excerpt:
      "Branded types, discriminated unions, and the lesser-known `satisfies` operator — a collection of patterns that have saved SwiftCoders' engineers countless hours on large, long-lived codebases.",
  },
];

const categoryColors: Record<string, string> = {
  "Web Dev": "bg-cyan-500/10 text-cyan-400 ring-cyan-500/30",
  Design: "bg-violet-500/10 text-violet-400 ring-violet-500/30",
  "Case Study": "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30",
};

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const tagClass =
    categoryColors[post.category] ??
    "bg-slate-500/10 text-slate-400 ring-slate-500/30";

  return (
    <Animate
      delay={index * 0.1}
      className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.2)]"
    >
      {/* Subtle top-edge glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent transition-all duration-500 group-hover:via-cyan-500/60"
      />

      {/* Header row */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ring-1 ${tagClass}`}
        >
          {post.category}
        </span>
        <time className="shrink-0 font-mono text-xs text-slate-500">
          {post.date}
        </time>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-lg font-bold leading-snug text-white transition-colors duration-200 group-hover:text-cyan-300">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="grow text-sm leading-relaxed text-slate-400">
        {post.excerpt}
      </p>

      {/* Read more */}
      <div className="mt-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-all duration-200 hover:gap-3 hover:text-cyan-300"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-3.5"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M2 8a.75.75 0 0 1 .75-.75h8.69L9.22 5.03a.75.75 0 0 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H2.75A.75.75 0 0 1 2 8Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </Animate>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#080c10] pb-24 pt-16">
      <Container>
        {/* Page header */}
        <Animate className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
            SwiftCoders / Blog
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Thoughts on{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              code&nbsp;&amp;&nbsp;craft
          </span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Deep dives, case studies, and hard-won lessons from the SwiftCoders
            engineering &amp; design team.
          </p>
        </Animate>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </Container>
    </main>
  );
}