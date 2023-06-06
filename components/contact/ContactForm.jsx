"use client";
const ContactForm = () => {
  return (
    <section className="contact-form py-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <form className="row g-4">
              <div className="col-md-12 col-lg-6">
                <label htmlFor="inputEmail4" className="form-label">
                  My name is
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Your Name "
                />
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="inputEmail42" className="form-label">
                  I work with
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail42"
                  placeholder="Company Name"
                />
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="goal" className="form-label">
                  I’m looking for a partner to help me with
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="goal"
                  placeholder="My Goal"
                />
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="deadline" className="form-label">
                  with an idea of having that completed on
                </label>
                <input type="date" className="form-control" id="deadline" />
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="budget" className="form-label">
                  I am hoping to stay around a budget
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="budget"
                >
                  <option selected>Budget</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="email" className="form-label">
                  You can reach me at
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  to start the conversation. Optionally, I’m sharing more
                </label>
                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                  placeholder="Description"
                  rows="10"
                  spellcheck="false"
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary mb-3 mt-4 px-6 w-100 w-md-25 w-lg-20 w-xl-20"
                >
                  Start Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
