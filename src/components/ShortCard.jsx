import React from "react";
import { EllipsisVertical } from "lucide-react";

const ShortCard = ({short_thumbnail, short_timing, short_title, view_count }) => {
  return (
    <>
      {/* We use 'border-transparent' as a base so the border doesn't "jump" when it appears on hover */}
      <div className="card card-compact w-auto cursor-pointer group rounded-2xl border border-transparent hover:border-base-300 hover:bg-amber-50/5 transition-all duration-300 flex-1 p-1.5">
        {/* Thumbnail part */}
        <figure className="relative aspect-9/16 overflow-hidden rounded-xl mx-1 mt-1">
          <img
            src={short_thumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Duration Badge using DaisyUI Badge component */}
          <div className="absolute bottom-2 right-2 badge badge-neutral bg-black/80 border-none text-[11px] font-medium py-1 h-auto">
            {short_timing}
          </div>

          {/* Optional: Hover play overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            {/* You could add a small play icon here */}
          </div>
        </figure>

        {/* Card Content Part */}
        <div className="card-body flex-row gap-3 p-0 mt-3">

          {/* Video details section */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <h3 className="text-sm font-bold leading-5 line-clamp-2 mb-1 text-base-content">
             {short_title}
            </h3>

            <div className="flex flex-col text-[13px] text-base-content/70">

              <div className="flex items-center gap-1">
                <span>{view_count} views</span>
              </div>
            </div>
          </div>

          {/* Options Menu Button - Standard DaisyUI btn-ghost */}
          <div className="opacity-100 transition-opacity flex-none">
            <button className="btn btn-ghost btn-circle btn-xs h-8 w-8">
              <EllipsisVertical size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortCard;
