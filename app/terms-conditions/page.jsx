import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";
import PageHero from "@/components/Common/PageHero";
import CallToAction from "@/components/CallToAction";
export const metadata = {
  title: "Grouwthus | Terms & Conditions",
};
const TermsCondition = () => {
  const post = getPostMetadata();
  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>Terms & Conditions</span>
          </>
        }
      />
      <section className="privacy py-8 pt-lg-9 pb-07">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {post.map((item, i) => (
                <div key={i}>
                  <Markdown>{item.content}</Markdown>
                </div>
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
};

export default TermsCondition;

export const getPostMetadata = () => {
  const folder = "Data/terms/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(folder, file);
    const content = fs.readFileSync(filePath, "utf8");
    const data = matter(content);
    return data;
  });

  return postsData;
};
