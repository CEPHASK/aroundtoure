import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div>
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
