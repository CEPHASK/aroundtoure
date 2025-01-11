import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true; // Include all blogs if 'all' category is selected
      }
      return slugified === params.slug;
    });
  });
  return <div>Category Name: {params.slug}</div>;
};

export default CategoryPage;
