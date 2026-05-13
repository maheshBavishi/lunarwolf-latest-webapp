import moment from "moment";

export const getImageUrl = (blog) => {
  if (blog?.attributes?.coverImage?.data?.attributes?.url) {
    return `${process.env.NEXT_PUBLIC_CMS_IMAGE_URL}${blog.attributes.coverImage.data.attributes.url}`;
  }
  return "/assets/images/blog1.png";
};

export const formatDate = (dateString) => {
  return moment(dateString).format("MMM D");
};

export const getAuthorImageUrl = (author) => {
    if (author?.authorProfile?.data?.attributes?.url) {
      return `${process.env.NEXT_PUBLIC_CMS_IMAGE_URL}${author?.authorProfile?.data?.attributes?.url}`;
    }
    return "/assets/images/profile.png";
};
