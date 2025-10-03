// import { useParams } from "react-router-dom";
// import { BlogPostData } from "../../data/BlogPostData";

// const BlogDetails = () => {
//   const params = useParams();
//   const blogData = BlogPostData.find(
//     (blog) => blog.slug.trim().toLowerCase() === params.slug.trim().toLowerCase()
//   );

//   return (
//     <div>
//       <h2>{blogData.title}</h2>
//       {/* {params.slug} */}
//       <img src={blogData.image || blogData.imgage} alt={blogData.title} />
//       <p>{blogData.body}</p>
//       <pre>{JSON.stringify(blogData, null, 2)}</pre>
//     </div>
//   );
// };

// export default BlogDetails;

// id are are used to find the blog post.
import { useLocation, useParams } from "react-router-dom";
import { BlogPostData } from "../../data/BlogPostData";
import { NavLink } from "react-router-dom";

const BlogDetails = () => {

  const { id } = useParams();
  const path =useLocation();
  const blogData = BlogPostData.find(
    (blog) => Number(blog.id) === Number(id)
  );

  return (
    <div>
      <h2>{blogData.title}</h2>
      <img src={blogData.image || blogData.imgage} alt={blogData.title} />
      <p>{blogData.body}</p>
      <NavLink to="/blog">Back to Blog Listing</NavLink>
      
      <pre>{JSON.stringify(path, null, 2)}</pre>
      {typeof id}

    </div>
  );
};

export default BlogDetails;



// Both id and slug are used to find the blog post.
//  import { useLocation, useParams } from "react-router-dom";
// import { BlogPostData } from "../../data/BlogPostData";
// const BlogDetails = () => {

//   const path = useLocation();
//   const { id, slug } = useParams();

//   const blogData = BlogPostData.find(
//     (blog) => Number(blog.id) === Number(id) && blog.slug === slug
//   );

//   if (!blogData) {
//     return <h2>Blog not found (ID: {id}, Slug: {slug})</h2>;
//   }

//   return (
//     <div>
//       <h2>{blogData.title}</h2>
//       <img src={blogData.image || blogData.imgage} alt={blogData.title} />
//       <p>{blogData.body}</p>
//       <pre>{JSON.stringify(path,null,2)}</pre>
//     </div>
//   );
// };
// export default BlogDetails;

