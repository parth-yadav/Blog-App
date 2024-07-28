import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}
    className="w-full mb-8">
      {/* <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div> */}
      <article className="flex flex-col items-center w-full  max-w-full text-base rounded-3xl shadow-lg shadow-purple-500 bg-orange-300 bg-opacity-10 ">
        <div className="flex relative flex-col items-start self-stretch px-3  pb-4 w-full text-xs leading-5 text-gray-500 rounded-3xl min-h-[254px] max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover absolute inset-0 size-full rounded-3xl "
          />
          <time
            dateTime="2024-02-12"
            className="relative px-3.5 py-3 mt-32 rounded-3xl bg-zinc-300 max-md:mt-10"
          >
            12 Feb 2024
          </time>
          {/* <div className="px-16 py-4 mt-3.5 max-w-full tracking-normal text-center text-white whitespace-nowrap rounded-3xl bg-orange-600 bg-opacity-50 leading-[150%] w-[441px] max-md:px-5">
            {title}
          </div> */}
        </div>
        <h2 className="px-16 py-4 mt-3.5 max-w-full tracking-normal text-center text-white whitespace-nowrap rounded-3xl bg-orange-600 bg-opacity-50 leading-[150%]  max-md:px-5">
          {title}
        </h2>
        {/* <p className="mt-6 mb-16 italic leading-6 text-black max-md:mb-10">
          aqw23e45rtyhbvcxsaq23567ujhbvcdsw23456y7hubgvcd
        </p> */}
      </article>
    </Link>
  );
}

export default PostCard;
