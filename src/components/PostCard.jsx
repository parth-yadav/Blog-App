import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, $createdAt }) {
  // Format the date
  const formattedDate = new Date($createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link to={`/post/${$id}`} className="w-full mb-8">
      <article className="flex flex-col items-center w-full max-w-full text-base rounded-3xl shadow-lg shadow-purple-500 bg-orange-300 bg-opacity-10 ">
        <div className="flex relative flex-col items-start self-stretch px-3  w-full text-xs leading-5 text-gray-500 rounded-3xl min-h-[254px] max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover absolute inset-0 size-full rounded-3xl"
          />
          <time
            dateTime={$createdAt}
            className="relative px-1 text-white py-1 mt-4 rounded-lg bg-white bg-opacity-30 max-md:mt-10"
          >
            {formattedDate}
          </time>
        </div>
        <h2 className="px-16 py-4 mt-3.5 max-w-full tracking-normal text-center text-white whitespace-nowrap rounded-3xl bg-orange-600 bg-opacity-50 leading-[150%] max-md:px-5">
          {title}
        </h2>
      </article>
    </Link>
  );
}

export default PostCard;
