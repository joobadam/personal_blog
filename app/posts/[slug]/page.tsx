"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClient } from '@sanity/client';
import { Post } from '@/app/types/post';


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-08-09',
});

async function getPost(slug: string) {
  return (client as any).fetch(`
    *[_type == "post" && slug.current == $slug][0]{
      "id": _id,
      title,
      "content": body,
      "imageUrl": mainImage.asset->url,
      "additionalImage1": additionalImages[0].asset->url,
      "additionalImage2": additionalImages[1].asset->url,
      "date": publishedAt,
      "category": { 
        "title": categories[0]->title,
        "href": categories[0]->slug.current
      },
      "author": {
        "name": author->name,
        "role": author->role,
        "imageUrl": author->image.asset->url
      }
    }
  `, { slug });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await getPost(params.slug);
      setPost(fetchedPost);
    }
    fetchPost();
  }, [params.slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {post.imageUrl && (
        <div className="relative h-96">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            layout="fill" 
            objectFit="cover"
            className="w-full h-full object-center"
          />
        </div>
      )}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center mb-6">
          {post.author?.imageUrl && (
            <Image 
              src={post.author.imageUrl} 
              alt={post.author.name || 'Author'} 
              width={40} 
              height={40} 
              className="rounded-full mr-4"
            />
          )}
          <div>
            <p className="text-gray-900 font-semibold">{post.author?.name || 'Unknown Author'}</p>
            <p className="text-gray-600">{post.author?.role || 'Contributor'}</p>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <span className="mr-4">
            {post.date ? new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'Unknown date'}
          </span>
          {post.category && (
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {post.category.title}
            </span>
          )}
        </div>
        <div className="prose max-w-none">
          {Array.isArray(post.content) 
            ? post.content.map((block, index) => 
                <p key={index} className="mb-4">{block.children[0].text}</p>
              )
            : <p>{post.content}</p>
          }
        </div>
      </div>
    </div>
    {(post.additionalImage1 || post.additionalImage2) && (
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 gap-4">
        {post.additionalImage1 && (
          <div className="relative h-64">
            <Image 
              src={post.additionalImage1} 
              alt="Additional image 1" 
              layout="fill" 
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        {post.additionalImage2 && (
          <div className="relative h-64">
            <Image 
              src={post.additionalImage2} 
              alt="Additional image 2" 
              layout="fill" 
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    )}
  </div>
  );
}