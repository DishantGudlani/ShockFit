"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./Blogscard";

interface BlogPost {
  name: string;
  title: string;
  slug: string;
  content: string;
  image: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      console.log("Fetching blog data...");
      try {
        const response = await fetch("https://blog.shockfit.hr/api/records");

        if (!response.ok) {
          console.error("Failed to fetch blog posts: ", response.status, response.statusText);
          return;
        }

        const result = await response.json();
        console.log("Fetched blog posts: ", result.data);

        if (result.success && result.data) {
          setBlogPosts(result.data);
        } else {
          console.error("Unexpected API response structure: ", result);
        }
      } catch (error) {
        console.error("Error fetching blog posts: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-4">
      {isLoading ? (
        <p className="text-center col-span-full">Loading...</p>
      ) : (
        blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            imageSrc={`https://blog.shockfit.hr/storage/${post.image}`}
            heading={post.title}
            paragraph={`${post.content.substring(0, 100)}...`}
            link={`/blog/${post.slug}`}
          />
        ))
      )}
    </div>
  );
};

export default Blog;
