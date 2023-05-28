import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ServiceHero from "@/components/ServiceHero";
import {ServiceHeroData} from "@/Data/Data.js";
import SectionHeader from "@/components/Common/SectionTitle";
import BusinessServices from "@/components/BusinessServices/";
import {CaseStudy, Caret} from "@/components/caseStudy/";
import CaseStudyData from "@/Data/caseStudy.js";
import serviceData from "@/Data/serviceData.js";
const Service = () => {
  return (
    <>
      <ServiceHero data={ServiceHeroData} />
      <section
        className="service-item work pb-7"
        id="service-item"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <SectionHeader
                title="Business Service"
                paragraph="Discover how our services can grow your business. From digital marketing to web development and design, our team delivers tailored solutions to exceed your expectations."
              />
            </div>
          </div>
        </div>
        <div className="container">
          {serviceData.map((services) => (
            <BusinessServices
              key={services.slug}
              props={services}
            />
          ))}
        </div>
      </section>
      <section className="project project-white pt-7 pb-9">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <SectionHeader
                title="Feature Work & Case Study"
                paragraph="Explore our portfolio of successful projects and case studies to see how we've helped businesses like yours achieve their goals. Our work speaks for itself, and we're proud to showcase our expertise and achievements"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {CaseStudyData.slice(0, 6).map((caseStudy, i) => (
              <CaseStudy
                key={i}
                props={caseStudy}
              />
            ))}
            <Caret />
          </div>
        </div>
      </section>
      <BusinessSolution />
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

export default Service;

// export const getPostMetadata = () => {
//   const folder = "Data/services/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   // Get gray-matter data from each file.
//   const posts = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`Data/services/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       ...matterResult.data,
//       slug: fileName.replace(".md", ""),
//     };
//   });

//   return posts;
// };
