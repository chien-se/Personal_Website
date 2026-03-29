import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Backend: { bg: "bg-forest-50", text: "text-forest-700" },
  Frontend: { bg: "bg-sky-50", text: "text-sky-700" },
  Personal: { bg: "bg-earth-100", text: "text-earth-700" },
  General: { bg: "bg-earth-100", text: "text-earth-700" },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const colors = categoryColors[post.category] || categoryColors.General;

  return (
    <main className="min-h-screen bg-white py-20">
      <article className="max-w-3xl mx-auto px-4 md:px-8">
        <Link href="/blog" className="text-forest-600 font-bold hover:text-forest-800 mb-8 inline-block">
          &larr; All Posts
        </Link>

        <header className="mb-12">
          <span className={`inline-block px-3 py-1 text-xs font-bold ${colors.bg} ${colors.text} rounded-full mb-4`}>
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-earth-900 mb-4">{post.title}</h1>
          <div className="flex gap-6 text-sm text-earth-500 font-semibold">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-earth-900 prose-a:text-forest-600 prose-strong:text-earth-800">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-16 pt-8 border-t border-earth-200">
          <Link href="/blog" className="text-forest-600 font-bold hover:text-forest-800">
            &larr; Back to All Posts
          </Link>
        </div>
      </article>
    </main>
  );
}
