import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Backend: { bg: "bg-forest-50", text: "text-forest-700" },
  Frontend: { bg: "bg-sky-50", text: "text-sky-700" },
  Personal: { bg: "bg-earth-100", text: "text-earth-700" },
  General: { bg: "bg-earth-100", text: "text-earth-700" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-earth-50 py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link href="/#blog" className="text-forest-600 font-bold hover:text-forest-800 mb-8 inline-block">
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-earth-900 mb-4">All Blog Posts</h1>
        <p className="text-earth-600 mb-12 text-lg font-medium">
          Insights, tutorials, and reflections on software engineering and building products.
        </p>

        <div className="space-y-6">
          {posts.map((post) => {
            const colors = categoryColors[post.category] || categoryColors.General;
            return (
              <article
                key={post.slug}
                className="bg-white rounded-lg p-6 border border-earth-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 text-xs font-bold ${colors.bg} ${colors.text} rounded-full`}>
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-earth-900 mb-2 hover:text-forest-600 transition">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-earth-600 text-sm mb-4 font-medium">{post.excerpt}</p>

                <div className="flex justify-between items-center text-xs text-earth-500 font-semibold">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            );
          })}
        </div>

        {posts.length === 0 && (
          <p className="text-earth-400 text-center py-12">No posts yet. Check back soon!</p>
        )}
      </div>
    </main>
  );
}
