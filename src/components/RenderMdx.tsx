"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Blog } from "contentlayer/generated";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }: { blog: Blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div>
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
