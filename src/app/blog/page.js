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
      pageSize: 1,
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

  const Data = await graphcms?.request(GetAllBlogs, variables);
  const CategoriesData = await graphcms?.request(GetBlogsCategory);
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
