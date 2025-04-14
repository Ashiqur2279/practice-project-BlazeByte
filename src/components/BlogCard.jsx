import React from "react";

const BlogCard = ({ title, description, image, time }) => {
  // console.log(time);

  const strippedTime = time.split(" ")[0];
  const formattedDate = new Date(strippedTime).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 max-w-md mx-auto flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4 "
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="flex justify-between mt-auto pt-2 border-t items-center text-sm text-gray-500">
        <div>Published: {formattedDate}</div>
        <div>Bookmark</div>
      </div>
    </div>
  );
};

export default BlogCard;
