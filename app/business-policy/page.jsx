import Markdown from "react-markdown";
import PageHero from "@/components/Common/PageHero";
import CallToAction from "@/components/CallToAction";
import getMarkDownData from "@/utils/GetMarkDownData";

export const metadata = {
  title: "Growthus | Business Policy",
};

const BusinessPolicy = () => {
  const post = getMarkDownData("data/businessPolicy/");
  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>Business Policy</span>
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
            <span>Sounds Good? </span> <br />{" "}
            <span>Let’s Grow your Business.</span>
          </>
        }
      />
    </>
  );
};

export default BusinessPolicy;
