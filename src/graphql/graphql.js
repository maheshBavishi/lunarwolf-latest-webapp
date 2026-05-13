import { gql } from "graphql-request";
export const GetAllBlogs = gql`
  query Blog($pagination: PaginationArg, $filters: BlogsFiltersInput) {
  blog(pagination: $pagination, filters: $filters) {
    data {
      id
      attributes {
        updatedAt
        title
        slug
        shortDescription
        createdAt
        publishedAt
        coverImage {
          data {
            attributes {
              url
            }
          }
        }
        blog_categories {
          data {
            id
            attributes {
              name
              slug
              createdAt
              updatedAt
              publishedAt
            }
          }
        }
        Author {
          id
          name
          authorProfile {
            data {
              attributes {
                url
              }
            }
          }
          biography
          autherPosition
        }
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;
export const GetExploreBlogs = gql`
  query Query($pagination: PaginationArg, $sort: [String], $filters: BlogsFiltersInput) {
    blog(pagination: $pagination, sort: $sort, filters: $filters) {
      data {
        attributes {
          title
          tags
          slug
          excerpt
          publishedAt
          createdAt
          updatedAt
          coverImage {
            data {
              attributes {
                url
              }
            }
          }
          blogDetail_Image {
            data {
              attributes {
                url
              }
            }
          }
          Markdown_Content
          blogCategory
          Author {
            Name
            Biography
            AuthorPosition
            Picture {
              data {
                attributes {
                  url
                }
              }
            }
          }
          SEO {
            Keywords
            Title
            Description
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          pageSize
          page
          pageCount
        }
      }
    }
  }
`;
export const GetBlogDetails = gql`
  query Query($filters: BlogsFiltersInput) {
    blog(filters: $filters) {
      data {
        id
        attributes {
          slug
          title
          shortDescription
          coverImage {
            data {
              attributes {
                url
              }
            }
          }
          blogDetails
          Author {
            id
            name
            authorProfile {
              data {
                attributes {
                  url
                }
              }
            }
            biography
            autherPosition
          }
          blog_categories {
            data {
              attributes {
                name
                slug
                createdAt
                updatedAt
                publishedAt
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GetBlogsCategory = gql`
  query Query {
    blogCategories {
      data {
        id
        attributes {
          name
          slug
          createdAt
          updatedAt
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;
