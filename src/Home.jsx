import React from "react";
import { useTrendingBlog } from "./store/trendingBlog";

export const Home = () => {
  const tBlogs = useTrendingBlog((state) => state.trendingBlogs);
  console.log(tBlogs);
  return (
    <div className="home">
      <div className="home-trending">
        <div>
          <span>Trending blogs</span>
        </div>
        {tBlogs.map((tb) => {
          const { title, snippets, createdOn, createdBy, noOfFollowers } = tb;
          return (
            <div className="trend-blog-card">
              <div className="trend-group-1">
                <span className="trend-blog-title">{title}</span>
                <span className="trend-blog-author">{createdBy}</span>
              </div>
              <div className="trend-group-2">
                <span className="trend-blog-snip">{snippets}</span>
              </div>
              <div className="trend-group-3">
                <span className="trend-blog-createdon">{createdOn}</span>
                <span className="trend-blog-foll">{noOfFollowers}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
