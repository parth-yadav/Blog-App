/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import BlogCard from "./BlogCard";

function BlogApp() {
  return (
    <div className="flex flex-col px-9 pt-5 pb-20 font-medium bg-white max-md:px-5">
      <Header />
      <main className="flex justify-center mt-36 max-md:mt-10">
        <BlogCard />
      </main>
    </div>
  );
}

export default BlogApp;