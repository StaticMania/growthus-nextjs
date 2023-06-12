import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import RelatedBlog from "@/components/RelatedBlog";
import CallToAction from "@/components/CallToAction";
import { imageStyle } from "@/data/data";
import getMarkDownContent from "@/utils/GetMarkDownContent";
import getMarkDownData from "@/utils/GetMarkDownData";

export const metadata = {
  title: "Growthus | Blog",
};

export const generateStaticParams = async () => {
  const posts = getMarkDownData("data/posts/");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPost = (props) => {
  const folder = "data/posts/";
  const slug = props.params.slug;
  const post = getMarkDownContent(folder, slug);
  const postParams = post.data;

  const postFilter = getMarkDownData("data/posts/");
  const relatedPost = postFilter.filter((element) =>
    element.tags.includes(...postParams.tags)
  );

  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <article className="card">
                <div className="blog-post-meta mb-3">
                  <ul className="list-inline list-unstyled">
                    <li className="list-inline-item">
                      {postParams.tags.map((item, i) => (
                        <Link
                          href={`/taxonomy/${item}`}
                          key={i}
                          className="me-1"
                        >
                          <span className="badge">{item}</span>
                        </Link>
                      ))}
                    </li>
                    <li className="list-inline-item">
                      <span className="ms-2 text-primary">
                        {postParams.date}
                      </span>
                    </li>
                  </ul>
                </div>
                <h2 className="mb-6">{postParams.title}</h2>
                <div className="feature-image">
                  <Image
                    src={postParams.featureImage}
                    alt="featured-image"
                    className="w-100"
                    width={500}
                    height={500}
                    style={imageStyle}
                  />
                </div>
                <Markdown>{post.content}</Markdown>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="profile mt-lg-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="profile py-5 py-lg-7">
                <h4 className="mb-4">Written by</h4>
                <div className="content">
                  <div className="me-5">
                    <Image
                      src={postParams.authorImage}
                      className="mb-0"
                      alt="profile"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h3>{postParams.author}</h3>
                    <h4>{postParams.authorDesignation}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="related-blog pt-xl-8 pt-4 pb-xl-10 pb-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Related Blog</h2>
            </div>
          </div>
          <div className="row">
            {relatedPost
              .filter((post) => post.title !== postParams.title)
              .slice(0, 3)
              .map((item, i) => (
                <RelatedBlog key={i} props={item} />
              ))}
          </div>
        </div>
      </section>
      <CallToAction
        title={
          <>
            <span>Sounds Good? </span> <br />{" "}
            <span>Let’s Grow your Business.</span>
          </>
        }
      />
    </>
  );
};

export default BlogPost;
