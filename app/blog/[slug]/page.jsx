import Link from "next/link";
import { getPostMetadata } from "../page";

const BlogPost = ({ params }) => {
  const posts = getPostMetadata();
  const post = posts.find((post) => post.id === +params.slug);

  return (
    <div className="my-5 container">
      <div className="mt-5">
        <h4>{post.title}</h4>
        <p>{post.subtitle}</p>
        <Link className="btn btn-warning" href="/blog">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
