import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard.jsx";

const Blogs = () => {
  const ByteBlazedata = useLoaderData();

  return (
    <section className="bg-gray-800 text-gray-100 m-1">
      {/* <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 grid md:grid-cols-3 md:gap-4"> */}
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ByteBlazedata.map((data) => {
          return (
            <BlogCard
              key={data.id}
              description={data.description}
              image={data.image}
              time={data.publishedDate}
              title={data.title}
              author={data.author}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
        >
          Load more posts...
        </button>
      </div>
    </section>
  );
};

export default Blogs;
