import { GetBlogDetails, GetAllBlogs } from "@/graphql/graphql";
import { graphcms } from "@/graphql/graphQLClient";
import BlogDetails from "@/rendering/blogDetails";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const variables = {
    filters: {
      slug: {
        eq: slug,
      },
    },
  };

  try {
    const Data = await graphcms?.request(GetBlogDetails, variables);
    const blogData = Data?.blog?.data?.[0];

    if (blogData) {
      return {
        title: `${blogData.attributes.title} | Lunar Wolf`,
        description: blogData.attributes.shortDescription || "Read the latest news, updates, and articles from Lunar Wolf about AI trading, crypto, and market strategies.",
      };
    }
  } catch (error) {
    console.error("Failed to fetch blog metadata:", error);
  }

  return {
    title: "Blog Post | Lunar Wolf",
    description: "Read the latest news, updates, and articles from Lunar Wolf about AI trading, crypto, and market strategies.",
  };
}

export default async function page({ params }) {
  const { slug } = await params;

  const variables = {
    filters: {
      slug: {
        eq: slug,
      },
    },
  };

  const sidebarVariables = {
    pagination: {
      page: 1,
      pageSize: 5,
    },
    filters: {
      slug: {
        ne: slug,
      },
    },
    sort: ["createdAt:desc"],
  };

  let Data = null;
  let SidebarData = null;

  try {
    Data = await graphcms?.request(GetBlogDetails, variables);
    SidebarData = await graphcms?.request(GetAllBlogs, sidebarVariables);
  } catch (error) {
    console.error("Failed to fetch blog details:", error);
  }

  const blogData = Data?.blog?.data?.[0];

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <BlogDetails blogData={blogData} sidebarBlogs={SidebarData?.blog?.data} />
    </div>
  );
}
