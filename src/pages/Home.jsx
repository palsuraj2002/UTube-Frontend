import React from "react";
import Card from "../components/Card";
import ShortCard from "../components/ShortCard";
import { EllipsisVertical } from "lucide-react";

const videoData = [
  {
    id: 1,
    video_img:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    video_timing: "12:45",
    channel_img: "https://i.pravatar.cc/150?u=techworld",
    video_title:
      "Mastering React Server Components: A Deep Dive into the Future of Web Development",
    channel_name: "Tech Academy",
    video_view_count: "1.2M",
    video_upload_date: "2 days",
  },
  {
    id: 2,
    video_img:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    video_timing: "08:12",
    channel_img: "https://i.pravatar.cc/150?u=designhub",
    video_title: "10 CSS Tricks You Didn't Know Existed in 2024",
    channel_name: "Design Hub",
    video_view_count: "450K",
    video_upload_date: "1 week",
  },
  {
    id: 3,
    video_img:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    video_timing: "1:05:30",
    channel_img: "https://i.pravatar.cc/150?u=codestream",
    video_title:
      "Building a Full-Stack YouTube Clone with Tailwind CSS and DaisyUI",
    channel_name: "CodeStream",
    video_view_count: "89K",
    video_upload_date: "5 hours",
  },
];

const ShortsVideoData = [
  {
    id: 101,
    short_thumbnail:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1080&h=1920&auto=format&fit=crop",
    short_timing: "0:58",
    short_title: "How to set up Tailwind CSS with Vite in 60 seconds 🚀",
    view_count: "1.2M",
  },
  {
    id: 102,
    short_thumbnail:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=600&h=1067",
    short_timing: "0:45",
    short_title: "The secret to centering a div every single time #coding",
    view_count: "850K",
  },
  {
    id: 103,
    short_thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600&h=1067",
    short_timing: "0:15",
    short_title: "React 19 features you need to know about! #reactjs",
    view_count: "2.4M",
  },
  {
    id: 104,
    short_thumbnail:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600&h=1067",
    short_timing: "0:30",
    short_title: "Why you should stop using 'any' in TypeScript 🛑",
    view_count: "120K",
  },
  {
    id: 105,
    short_thumbnail:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600&h=1067",
    short_timing: "0:30",
    short_title: "Why you should stop using 'any' in TypeScript 🛑",
    view_count: "120K",
  },
];

const Home = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 px-2">Home Page</h3>

      {/* Standard Video Grid: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {videoData.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </div>

      {/* Shorts Header */}
      <div className="flex justify-between items-center px-2 mt-10 mb-5">
        <div className="flex items-center gap-2">
          <img
            src="https://img.icons8.com/?size=100&id=ot8QhAKun4rZ&format=png&color=000000"
            alt="Shorts Icon"
            className="w-6 h-6"
          />
          <h2 className="font-bold text-xl">Shorts</h2>
        </div>
        <button className="btn btn-ghost btn-circle btn-sm">
          <EllipsisVertical size={18} />
        </button>
      </div>

      {/* Shorts Grid: 2 cols on mobile, 3 on tablet, 5-6 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {ShortsVideoData.map((short) => (
          <ShortCard key={short.id} {...short} />
        ))}
      </div>
    </div>
  );
};

export default Home;
