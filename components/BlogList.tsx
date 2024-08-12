"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { Post } from "@/app/types/post";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-08-09",
});

const POSTS_PER_PAGE = 3;

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `{
        "posts": *[_type == "post"] | order(publishedAt desc) [${(currentPage - 1) * POSTS_PER_PAGE}...${currentPage * POSTS_PER_PAGE}] {
          "id": _id,
          title,
          "slug": slug.current,
          "href": slug.current,
          description,
          "imageUrl": mainImage.asset->url,
          "date": publishedAt,
          "datetime": publishedAt,
          "category": { 
            "title": categories[0]->title, 
            "href": categories[0]->slug.current 
          },
          "author": {
            "name": author->name,
            "role": author->role,
            "href": author->slug.current,
            "imageUrl": author->image.asset->url
          }
        },
        "totalCount": count(*[_type == "post"])
      }`;

      const result = await client.fetch(query);
      setPosts(result.posts);
      setTotalPosts(result.totalCount);
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-white section-padding" id="posts">
      <div className="container-center">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2>From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-secondary">
            Interesting facts from the big world and our own lives.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    alt=""
                    src={post.imageUrl}
                    fill
                    className="rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex-between text-xs">
                    <time dateTime={post.datetime} className="text-secondary">
                      {post.date}
                    </time>
                    <Link
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover-transition"
                    >
                      {post.category.title}
                    </Link>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-gray-600">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="relative z-10"
                      >
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-secondary">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex-center gap-x-4">
                      <Image
                        alt=""
                        src={post.author.imageUrl}
                        width={40}
                        height={40}
                        className="rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-primary">
                          <Link
                            href={post.author.href}
                            className="relative z-10"
                          >
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </Link>
                        </p>
                        <p className="text-secondary">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <nav className="flex-between border-t border-gray-200 px-4 sm:px-0 mt-8">
            <div className="-mt-px flex w-0 flex-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination"
              >
                <ArrowLongLeftIcon
                  className="mr-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Previous
              </button>
            </div>
            <div className="hidden md:-mt-px md:flex">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                    currentPage === index + 1
                      ? "border-rose-500 text-rose-400"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } hover-transition`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination"
              >
                Next
                <ArrowLongRightIcon
                  className="ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}