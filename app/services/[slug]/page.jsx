import fs from "fs";
import matter from "gray-matter";
import {getPostMetadata} from "../page";
import Client from "@/components/Client";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import Link from "next/link";
export const getPostContent = (slug) => {
  const folder = "Data/services/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const postParams = post.data;
  const imageStyle = {
    width: "auto",
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <>
      <section className="service-hero services-desc-hero pt-8">
        <div className="container">
          <div className="row work-item-container align-items-center">
            <div className="col-lg-6">
              <div className="work-item">
                <div className="work-item-shape-wrapper">
                  <div className="work-item-shape bg-primary-light">
                    <Image
                      src="/images/work/work-shap.svg"
                      alt="hero images"
                      width={500}
                      height={500}
                      style={imageStyle}
                    />
                  </div>
                </div>
                <div className="work-item-wraper">
                  <div className="work-item-wraper-banner">
                    <Image
                      src={postParams.image}
                      alt="work images"
                      width={500}
                      height={500}
                      style={imageStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-item">
                <div className="work-content service-hero-content">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {postParams.title}
                      </li>
                    </ol>
                  </nav>
                  <h1 className="service-type">{postParams.title}</h1>
                  <p>{postParams.serviceDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-desc py-8">
        <div className="container">
          <div className="section-header text-start">
            <div className="row">
              <div className="col-lg-7">
                <h2>{postParams.serviceInfoTitle}</h2>
              </div>
              <div className="col-lg-5">
                <p>{postParams.serviceInfoDesc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {postParams.serviceInfoItems.map((items, i) => (
              <div
                className={`col-xl-4 col-md-6 ${i === 1 || i === 3 ? "offset-xl-2" : ""}`}
                key={i}
              >
                <div className="services-desc-wrapper">
                  <div className="services-desc-header">
                    <div
                      className="services-desc-header-icon"
                      dangerouslySetInnerHTML={{__html: items.icon}}
                    ></div>
                    <h4>{items.title}</h4>
                  </div>
                  <div className="services-desc-body">
                    <p>{items.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Client border="border-top" />
      <Testimonials />
      <CallToAction
        title={
          <>
            <span>Sounds Good? </span> <br /> <span>Let’s Grow your Business.</span>
          </>
        }
        link="/"
      />
    </>
  );
};

export default PostPage;
