import CallToAction from "@/components/CallToAction";
import CaseStudyHero from "@/components/caseStudy/caseStudyHero.jsx";
import {CaseStudy} from "@/components/caseStudy/";
import GetcaseStudyMetadata from "@/components/caseStudy/GetCaseStudyData.js";
const CaseStudyPage = () => {
  const caseStudyMetadata = GetcaseStudyMetadata();
  return (
    <>
      <CaseStudyHero
        pageTitle={
          <>
            <span>Let’s See </span> <br /> <span> Our Recent Work </span>
          </>
        }
      />
      <div className="container py-10">
        <div className="row">
          {caseStudyMetadata.map((caseStudy, i) => (
            <CaseStudy
              key={i}
              props={caseStudy}
            />
          ))}
        </div>
      </div>
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

export default CaseStudyPage;

// export const getPostMetadata = () => {
//   const folder = "Data/caseStudy/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   // Get gray-matter data from each file.
//   const posts = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`Data/caseStudy/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       ...matterResult.data,
//       slug: fileName.replace(".md", ""),
//     };
//   });

//   return posts;
// };
