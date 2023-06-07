"use client";

import PageHero from "@/components/Common/PageHero";
import ContactForm from "@/components/Contact/ContactForm";
import SectionTitle from "@/components/Common/SectionTitle";
import { ContactFormData } from "@/data/data";
import ContactAddress from "@/components/Contact/ContactAddress";
import ContactExperts from "@/components/Contact/ContactExperts";
import CallToAction from "@/components/CallToAction";
import useTitle from "@/hooks/useTitle";

const Contact = () => {
  useTitle("Growthus | Contact Us");
  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>Let’s start a </span> <br /> <span> project together. </span>
          </>
        }
      />
      <ContactForm />
      <ContactAddress ContactAddress={ContactFormData} />

      <section className="team contact-team py-3 pb-md-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle title="Talk To the Experts" />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="team-wrapper d-grid grid-template-3">
                <ContactExperts contactExperts={ContactFormData} />
              </div>
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

export default Contact;
