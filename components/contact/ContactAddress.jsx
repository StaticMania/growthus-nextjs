import Image from "next/image";
import { imageStyle } from "@/data/data";
const ContactAddress = ({ ContactAddress }) => {
  const { address } = ContactAddress;

  return (
    <section className="service-item contact-details work pt-4 pb-4">
      <div className="container">
        <div className="row work-item-container align-items-center">
          <div className="col-lg-6">
            <div className="work-item">
              <div className="work-item-shape-wrapper">
                <div className="work-item-shape bg-primary-dark">
                  <Image
                    src="images/work/work-shap.svg"
                    alt="hero images"
                    width={530}
                    height={575}
                    style={imageStyle}
                  />
                </div>
              </div>
              <div className="work-item-wraper">
                <div className="work-item-wraper-banner">
                  <Image
                    src={ContactAddress.image}
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
              <div className="work-content">
                <h2>Office Address</h2>
                <div className="contact-details-wrapper">
                  <div className="contact-details-item">
                    <div className="contact-details-item-icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="svg-stroke-primary"
                          d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z"
                          stroke=""
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          className="svg-stroke-primary"
                          d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z"
                          stroke=""
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="contact-details-item-body">
                      {address.map((item, i) => (
                        <div key={i}>
                          <h5> {item.name} </h5>
                          <p>{item.location}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="contact-details-wrapper">
                  <div className="contact-details-item">
                    <div className="contact-details-item-icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="svg-stroke-primary"
                          d="M4 12V25C4 25.2652 4.10536 25.5196 4.29289 25.7071C4.48043 25.8946 4.73478 26 5 26H27C27.2652 26 27.5196 25.8946 27.7071 25.7071C27.8946 25.5196 28 25.2652 28 25V12L16 4L4 12Z"
                          stroke=""
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="svg-stroke-primary"
                          d="M28 12L18.1819 19H13.8181L4 12"
                          stroke=""
                          strokeW="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="contact-details-item-body">
                      <h5>Email:</h5>
                      <p>{ContactAddress.email}</p>
                    </div>
                  </div>
                </div>
                <div className="contact-details-wrapper">
                  <div className="contact-details-item">
                    <div className="contact-details-item-icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="svg-stroke-primary"
                          d="M4 12V25C4 25.2652 4.10536 25.5196 4.29289 25.7071C4.48043 25.8946 4.73478 26 5 26H27C27.2652 26 27.5196 25.8946 27.7071 25.7071C27.8946 25.5196 28 25.2652 28 25V12L16 4L4 12Z"
                          stroke=""
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="svg-stroke-primary"
                          d="M28 12L18.1819 19H13.8181L4 12"
                          stroke=""
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="contact-details-item-body">
                      <h5>Phone:</h5>
                      <p>{ContactAddress.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactAddress;
