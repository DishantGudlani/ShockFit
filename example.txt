import React from "react";

// Fetch all blog posts
async function fetchBlogData() {
  try {
    const res = await fetch("https://blog.shockfit.hr/api/records", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures no caching for SSR behavior
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const result = await res.json();

    if (!result.success || !result.data) {
      throw new Error("Failed to fetch blog data from API.");
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return []; // Return empty array for graceful error handling
  }
}

// Blog detail page component
export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const blogPosts = await fetchBlogData(); // Fetch fresh data for every request
  const blog = blogPosts.find((post: { slug: string }) => post.slug === params.slug);

  if (!blog) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-600">The requested blog post does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-8">By: {blog.name}</p>
      <img
        src={`https://blog.shockfit.hr/storage/${blog.image}`}
        alt={blog.title}
        className="w-[300px] h-[300px] rounded-md mb-8 object-cover"
      />
      <div className="prose">
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
