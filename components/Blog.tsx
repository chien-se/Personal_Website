import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Backend: { bg: "bg-forest-50", text: "text-forest-700" },
  Frontend: { bg: "bg-sky-50", text: "text-sky-700" },
  Personal: { bg: "bg-earth-100", text: "text-earth-700" },
  General: { bg: "bg-earth-100", text: "text-earth-700" },
};

export default function Blog() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="section bg-earth-50 py-20">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-earth-900 mb-4">
          Latest Blog Posts
        </h2>
        <p className="text-earth-600 mb-12 text-lg max-w-2xl font-medium">
          Insights, tutorials, and reflections on software engineering, learning,
          and building products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => {
            const colors = categoryColors[post.category] || categoryColors.General;
            return (
              <article
                key={post.slug}
                className="bg-white rounded-lg p-6 border border-earth-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-bold ${colors.bg} ${colors.text} rounded-full`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-earth-900 mb-2 line-clamp-2 group-hover:text-forest-600 transition">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-earth-600 text-sm mb-4 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex justify-between items-center text-xs text-earth-500 font-semibold mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-forest-600 font-bold hover:text-forest-800 transition"
                >
                  Read Article <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </article>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/blog" className="btn-primary text-lg">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
