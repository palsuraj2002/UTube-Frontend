import React from "react";
import { EllipsisVertical, BadgeCheck, Dot } from "lucide-react";

const Card = () => {
  return (
    <>
      {/* We use 'border-transparent' as a base so the border doesn't "jump" when it appears on hover */}
      <div className="card card-compact bg-base-100 w-96 cursor-pointer group rounded-2xl border border-transparent hover:border-base-300 transition-all duration-300">
        {/* Thumbnail part */}
        <figure className="relative aspect-video overflow-hidden rounded-xl mx-1 mt-1">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Video Thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Duration Badge using DaisyUI Badge component */}
          <div className="absolute bottom-2 right-2 badge badge-neutral bg-black/80 border-none text-[11px] font-medium py-1 h-auto">
            10:45
          </div>

          {/* Optional: Hover play overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            {/* You could add a small play icon here */}
          </div>
        </figure>

        {/* Card Content Part */}
        <div className="card-body p-3 flex-row gap-3">
          {/* User Avatar section */}
          <div className="shrink-0">
            <div className="avatar">
              <div className="w-9 h-9 rounded-full ring-primary ring-offset-base-100 ring-offset-1 hover:ring-2 transition-all">
                <img
                  src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                  alt="Channel"
                />
              </div>
            </div>
          </div>

          {/* Video details section */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <h3 className="text-sm font-bold leading-5 line-clamp-2 mb-1 text-base-content">
              Building a Modern YouTube Clone with DaisyUI and React Context API
            </h3>

            <div className="flex flex-col text-[13px] text-base-content/70">
              <div className="flex items-center gap-1 hover:text-base-content transition-colors w-fit">
                <span>SNP</span>
                <div className="tooltip tooltip-right" data-tip="Verified">
                  <BadgeCheck size={14} className="text-info fill-info/20" />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span>5.1M views</span>
                <span className="text-lg leading-none"><Dot size={15}/></span>
                <span>2 years ago</span>
              </div>
            </div>
          </div>

          {/* Options Menu Button - Standard DaisyUI btn-ghost */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex-none">
            <button className="btn btn-ghost btn-circle btn-xs h-8 w-8">
              <EllipsisVertical size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
