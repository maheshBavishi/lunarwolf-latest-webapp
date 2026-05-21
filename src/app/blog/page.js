import { GetAllBlogs, GetBlogsCategory } from "@/graphql/graphql";
import { graphcms } from "@/graphql/graphQLClient";
import Blog from "@/rendering/blog";

export default async function page({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const category = params?.category;

  const variables = {
    pagination: {
      page: page,
      pageSize: 7,
    },
    filters: {
      blog_categories: {
        slug: {
          containsi: category,
        },
      },
    },
    sort: ["createdAt:desc"],
  };

  let Data = null;
  let CategoriesData = null;

  try {
    Data = await graphcms?.request(GetAllBlogs, variables);
    CategoriesData = await graphcms?.request(GetBlogsCategory);
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
  }
  return (
    <div>
      <Blog
        blogsData={Data?.blog?.data}
        paginationData={Data?.blog?.meta?.pagination}
        categoriesData={CategoriesData?.blogCategories?.data}
        currentCategory={category}
        currentPage={page}
      />
    </div>
  );
}
