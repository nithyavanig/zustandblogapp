import { useCreateBlog } from "./store/createBlog";

export const Blogs = () => {
  const globalStoreBlogs = useCreateBlog((state) => state.allBlogs);
  console.log(globalStoreBlogs);
  return (
    <div className="blogs">
      {globalStoreBlogs.map((bl) => {
        const { title, createdBy, createdOn } = bl;
        return (
          <div className="trend-blog-card">
            <div className="trend-group-1">
              <span className="trend-blog-title">{title}</span>
              <span className="trend-blog-author">{createdBy}</span>
            </div>
            <div className="trend-group-3">
              <span className="trend-blog-createdon">{createdOn}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
