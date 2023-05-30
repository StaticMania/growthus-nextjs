import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/Common/PageHero.jsx";
import Caret from "@/components/Common/Caret.jsx";
import BlogPostMetaData from "@/components/Blog/BlogPostMetaData.js";
import CallToAction from "@/components/CallToAction";
function Blog() {
  const posts = BlogPostMetaData();
  const imageStyle = {
    width: "auto",
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>Blog</span>
          </>
        }
      />
      <section className="blog py-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {posts.map((post, i) => (
                <article
                  className="card flex-lg-row"
                  key={i}
                >
                  <div className="blog-post-item-thumb">
                    <Image
                      src={post.thumbnail}
                      alt="featured-thumb1"
                      className="w-100"
                      width={500}
                      height={500}
                      style={imageStyle}
                    />
                  </div>
                  <div className="blog-post-content">
                    <div className="blog-post-meta mb-3">
                      <ul className="list-inline list-unstyled">
                        <li className="list-inline-item">
                          {post.tags.map((item, i) => (
                            <Link
                              href="/"
                              key={i}
                              className="me-1"
                            >
                              <span className="badge">{item}</span>
                            </Link>
                          ))}
                        </li>
                        <li className="list-inline-item">
                          <span className="ms-2">{post.date}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="blog-post-body">
                      <div className="blog-post-body-title">
                        <Link href={`/blog/${post.slug}`}>
                          <h3>{post.title}</h3>
                        </Link>
                        <p>{post.excerpts}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="btn btn-secondary"
                        >
                          <span>
                            Read the Blog
                            <Caret />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CallToAction
        title={
          <>
            <span>Sounds Good? </span> <br /> <span>Let’s Grow your Business.</span>
          </>
        }
      />
    </>
  );
}

export default Blog;
