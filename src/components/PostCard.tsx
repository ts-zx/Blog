"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns/format";
import type { Post } from "@/lib/posts";
import { t as translate, subscribeLocale } from "@/lib/i18n-state";

export function PostCard({ post }: { post: Post }) {
  const { frontmatter, slug, readingMinutes } = post;
  // 用来在语言切换时强制重渲染
  const [, force] = useState(0);
  useEffect(() => {
    return subscribeLocale(() => force((n) => n + 1));
  }, []);

  return (
    <article className="group py-6 border-b last:border-b-0">
      <Link href={`/posts/${slug}`} className="block">
        <h2 className="text-xl font-semibold tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {frontmatter.title}
        </h2>
      </Link>
      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex items-center gap-3">
            <time dateTime={frontmatter.date}>
              {format(new Date(frontmatter.date), "yyyy-MM-dd")}
            </time>
            <span>·</span>
            <span>
              {readingMinutes} {translate("post.minRead")}
            </span>
          </div>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="hidden sm:inline">·</span>
              {frontmatter.tags.map((tag) => (
                <span key={tag} className="text-indigo-600 dark:text-indigo-400">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {frontmatter.description && (
        <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
          {frontmatter.description}
        </p>
      )}
    </article>
  );
}
