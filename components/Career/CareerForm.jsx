const CareerForm = () => {
  return (
    <section className="career-contact-form contact-form py-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="section-header text-start">
              <h2>Apply for this job</h2>
            </div>
            <form className="row g-4" method="POST">
              <div className="col-md-12">
                <label className="form-label d-block">
                  {" "}
                  Upload Your Resume{" "}
                </label>
                <input type="file" id="file-input" hidden />

                <label className="file-input" htmlFor="file-input">
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="svg-stroke-black"
                      d="M11.7495 5.87451L4.59023 13.1527C4.33237 13.4105 4.1875 13.7603 4.1875 14.1249C4.1875 14.4896 4.33237 14.8393 4.59023 15.0972C4.84809 15.3551 5.19783 15.4999 5.5625 15.4999C5.92717 15.4999 6.27691 15.3551 6.53477 15.0972L15.069 6.44406C15.3244 6.18869 15.527 5.88554 15.6652 5.55189C15.8034 5.21825 15.8745 4.86065 15.8745 4.49951C15.8745 4.13838 15.8034 3.78078 15.6652 3.44713C15.527 3.11349 15.3244 2.81033 15.069 2.55497C14.8137 2.29961 14.5105 2.09704 14.1769 1.95884C13.8432 1.82064 13.4856 1.74951 13.1245 1.74951C12.7634 1.74951 12.4058 1.82064 12.0721 1.95884C11.7385 2.09704 11.4353 2.29961 11.18 2.55497L2.64568 11.2081C1.8721 11.9817 1.4375 13.0309 1.4375 14.1249C1.4375 15.2189 1.8721 16.2682 2.64568 17.0417C3.41927 17.8153 4.46848 18.2499 5.5625 18.2499C6.65652 18.2499 7.70573 17.8153 8.47932 17.0417L15.5307 9.99951"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span id="file">Upload CV</span>
                </label>

                <span id="file-chosen"></span>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">
                  Your Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Your Full Name"
                  name="name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail142" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail142"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPhoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhoneNumber"
                  placeholder="Phone Number"
                  name="phoneNUmber"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="InputLInkedIN" className="form-label">
                  Linked In Profile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputLInkedIN"
                  placeholder="linkedin.com/dezakir"
                  name="profile"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPortfolioLInk" className="form-label">
                  Portfolio Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPortfolioLInk"
                  placeholder="Portfolio Link"
                  name="portfolio"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputComapnyWebsite" className="form-label">
                  Current Company Websitet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputComapnyWebsite"
                  placeholder="Current Company Website"
                  name="company-website"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputgulprea" className="form-label">
                  About yourself & tell us why you thought, you are fit on this
                  position?
                </label>
                <textarea
                  className="form-control"
                  id="inputtextArea"
                  placeholder="About Yourself"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Apply The Position
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;
