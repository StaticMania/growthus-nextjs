import React from "react";
import Link from "next/link";
import { FooterDatas } from "@/data/Data.js";

const CompanyAddress = () => {
  const { locations, phone, email } = FooterDatas;
  return (
    <section className="about-contact py-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-6">
            <div className="about-contact-wrapper">
              {locations.map((item, i) => (
                <div className="card d-flex" key={i}>
                  <div className="flex-shrink-0">
                    <svg
                      width="33"
                      height="41"
                      viewBox="0 0 33 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4484 36.2226C14.5364 32.4374 11.1818 28.0648 9.1971 23.7519C8.89914 23.1043 9.07756 22.3354 9.63048 21.8902L17.9059 15.2278C18.6826 14.6377 19.5434 14.2131 20.4412 13.9537C17.7536 12.3566 14.3235 12.5199 11.7888 14.4458L4.7127 20.1427C3.42527 21.1792 3.04961 22.9907 3.81175 24.4644C5.98149 28.6599 9.25753 33.2306 11.9465 36.6765C13.825 39.084 17.1258 39.5144 19.5179 37.975C18.7405 37.5639 18.0312 36.98 17.4484 36.2226Z"
                        fill="#CBD6DA"
                      />
                      <path
                        d="M16.4403 40.4385C14.1984 40.4385 12.1172 39.4189 10.7301 37.6412C8.22867 34.4349 4.75981 29.671 2.43927 25.1833C1.33637 23.0502 1.88635 20.4145 3.74713 18.9162L10.8233 13.2184C10.8346 13.2094 10.846 13.2005 10.8575 13.1916C14.1683 10.6756 18.7927 10.6756 22.1035 13.1916L23.715 14.4164V13.0168C23.715 12.1538 24.4079 11.4543 25.2625 11.4543C26.1172 11.4543 26.81 12.1538 26.81 13.0168V17.5481C26.81 18.1405 26.4783 18.6818 25.9534 18.9463C25.4284 19.2107 24.8005 19.1526 24.332 18.7965L20.2423 15.6885C18.033 14.0095 14.9489 14.0054 12.7354 15.6761L5.67685 21.3595C4.97189 21.9272 4.76406 22.9271 5.18289 23.737C7.39294 28.0111 10.7415 32.6056 13.1614 35.7073C13.9577 36.728 15.1528 37.3134 16.4403 37.3134C17.7298 37.3134 18.9272 36.7267 19.7253 35.7036C26.1947 27.4109 29.905 20.6613 29.905 17.1853C29.905 9.67425 23.8655 3.56353 16.4418 3.56353C9.66373 3.56353 3.92084 8.68462 3.08326 15.4756C2.97764 16.3319 2.20467 16.9397 1.35641 16.833C0.508305 16.7264 -0.0935925 15.9458 0.0120238 15.0894C1.04219 6.73701 8.10549 0.438477 16.4418 0.438477C20.8711 0.438477 25.0317 2.18093 28.1573 5.34488C31.2801 8.50602 33 12.7111 33 17.1853C33 19.7639 31.7533 23.1375 29.1888 27.4987C27.4069 30.529 25.0409 33.9402 22.1565 37.6374C20.7678 39.4174 18.6843 40.4384 16.4403 40.4385Z"
                        fill="#455157"
                      />
                      <path
                        d="M16.4422 26.307C15.3739 26.307 14.5078 25.4322 14.5078 24.3532C14.5078 23.2742 15.3739 22.3994 16.4422 22.3994C17.5105 22.3994 18.3765 23.2742 18.3765 24.3532C18.3765 25.4322 17.5105 26.307 16.4422 26.307Z"
                        fill="#455157"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span>{item.name}</span>
                    <p>{item.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-5 ms-lg-auto">
            <div className="about-contact-info d-flex align-items-center">
              <div className="flex-shrink-0">
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7099 28.9668C7.03186 22.78 2.42753 12.9725 8.85953 6.53965C9.2754 6.12373 9.68747 5.78507 10.1288 5.41478C10.7276 4.91231 11.4371 4.62118 12.1634 4.53667L11.0615 3.43275C9.65204 2.02068 7.40351 1.9333 5.87536 3.21551C5.43405 3.5858 5.72156 3.21804 5.30907 3.63734C-1.71742 10.7796 1.56628 20.6429 8.68119 27.6967C13.4154 32.3903 19.3731 35.3223 24.9075 34.6302C21.068 33.8868 17.2137 32.213 13.7099 28.9668Z"
                    fill="#C8F9EA"
                  />
                  <path
                    d="M23.2806 36.1318C22.3389 36.1318 21.3765 36.0436 20.3966 35.8657C16.082 35.0827 11.5697 32.5339 7.69078 28.6889C3.78202 24.8143 1.16143 20.2961 0.311842 15.9664C-0.679106 10.9167 0.70212 6.31142 4.30621 2.64852C4.74493 2.20257 5.20929 1.77357 5.68639 1.37331C6.69533 0.526897 7.97365 0.0903694 9.28507 0.144074C10.6018 0.19799 11.8398 0.741506 12.7711 1.67438C12.7771 1.68043 12.7832 1.68661 12.7891 1.6928L15.1676 4.16442C16.3799 5.38515 16.8998 7.12037 16.5583 8.80898C16.2172 10.4962 15.064 11.8908 13.4736 12.5394C12.4347 12.9631 11.772 13.3394 11.5949 13.4667C10.2852 14.8012 9.45139 16.9697 14.3503 21.8771C15.94 23.4695 18.2946 25.5866 20.3792 25.5866C21.225 25.5866 22.0012 25.2287 22.7506 24.4929C22.8481 24.35 23.1848 23.7763 23.6192 22.694C24.2643 21.0872 25.6611 19.9213 27.3556 19.5753C29.0436 19.2307 30.7785 19.7511 31.9989 20.9678L34.4419 23.3319C34.4477 23.3375 34.4535 23.3432 34.4592 23.3489C35.3867 24.278 35.9295 25.5126 35.9874 26.8252C36.0453 28.137 35.614 29.4146 34.773 30.4227C34.3999 30.8699 34.0014 31.3064 33.5884 31.7201C30.6793 34.6343 27.1574 36.1318 23.2806 36.1318ZM9.07067 2.94784C8.51492 2.94784 7.95586 3.13967 7.4936 3.52741C7.08483 3.87038 6.68675 4.23809 6.31054 4.62049C3.34542 7.63401 2.2555 11.2691 3.07099 15.4249C3.81338 19.208 6.15701 23.2093 9.67021 26.6919C13.1497 30.141 17.1374 32.4164 20.8986 33.099C25.022 33.8473 28.622 32.715 31.5985 29.7334C31.9526 29.3787 32.2942 29.0045 32.6139 28.6212C33.4254 27.6486 33.3658 26.2411 32.4769 25.3428L30.0354 22.9801C30.0295 22.9745 30.0238 22.9688 30.0181 22.9631C29.4585 22.4026 28.693 22.1718 27.9181 22.3301C27.1407 22.4888 26.525 23.0032 26.2287 23.7413C26.0321 24.2309 25.347 25.8722 24.7819 26.4383C23.4836 27.7388 22.0023 28.3981 20.3792 28.3981C17.2842 28.3981 14.4681 25.9747 12.3603 23.8634C11.0944 22.5953 9.30545 20.6596 8.3893 18.5C7.25917 15.836 7.69148 13.3963 9.63971 11.4449C10.2313 10.8522 11.911 10.1399 12.4117 9.93566C13.1391 9.63902 13.646 9.02514 13.8024 8.25155C13.96 7.47198 13.7288 6.70282 13.1682 6.14117C13.1621 6.13512 13.1561 6.12894 13.1501 6.12275L10.7731 3.65261C10.3015 3.18473 9.68814 2.94784 9.07067 2.94784Z"
                    fill="#05AA77"
                  />
                  <path
                    d="M34.5919 16.9436C33.8725 16.9436 33.2592 16.3942 33.1933 15.6635C32.5839 8.89974 27.2336 3.54821 20.4714 2.93868C19.6981 2.869 19.1277 2.18543 19.1974 1.41194C19.267 0.638375 19.9509 0.0677988 20.7238 0.137618C24.6393 0.490581 28.3318 2.22143 31.1212 5.01139C33.9105 7.80134 35.6409 11.4947 35.9937 15.4111C36.0635 16.1846 35.493 16.8682 34.7197 16.9379C34.6768 16.9417 34.6342 16.9436 34.5919 16.9436ZM23.6385 16.9415C24.3751 16.6957 24.773 15.8993 24.5272 15.1625C23.9758 13.5092 22.6819 12.1812 21.0662 11.6099C20.3343 11.351 19.5309 11.7348 19.2722 12.4671C19.0134 13.1993 19.3971 14.0028 20.1292 14.2616C20.9337 14.5461 21.5808 15.2156 21.86 16.0526C22.0565 16.6416 22.6049 17.0142 23.1934 17.0142C23.3408 17.0142 23.4909 16.9908 23.6385 16.9415ZM29.1618 16.9294C29.9305 16.8194 30.4643 16.107 30.3545 15.3381C29.6502 10.4138 25.7199 6.48258 20.7967 5.77813C20.0289 5.6683 19.3158 6.20218 19.2058 6.9711C19.096 7.73989 19.6298 8.45228 20.3985 8.56232C24.0931 9.09092 27.0425 12.041 27.5709 15.7364C27.6712 16.4377 28.2726 16.9436 28.9609 16.9436C29.0272 16.9437 29.0943 16.939 29.1618 16.9294Z"
                    fill="#FF862E"
                  />
                </svg>
              </div>
              <div className="flex-grow-1 ms-4">
                <span>Phone Number</span>
                <p>
                  <Link href={`tel:${phone}`}> {phone} </Link>
                </p>
              </div>
            </div>

            <div className="about-contact-info d-flex align-items-center">
              <div className="flex-shrink-0">
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.13526 21.9795V9.39388C6.13526 5.15552 9.56932 1.71973 13.8054 1.71973H9.20331C4.96726 1.71973 1.5332 5.15552 1.5332 9.39388V21.9795C1.5332 26.2179 4.96726 29.6537 9.20331 29.6537H13.8054C9.56932 29.6537 6.13526 26.2179 6.13526 21.9795Z"
                    fill="#C8F9EA"
                  />
                  <path
                    d="M30.0668 31.1816H9.20412C4.12897 31.1816 0 27.051 0 21.9737V9.38956C0 4.31231 4.12897 0.181641 9.20412 0.181641H30.0668C35.142 0.181641 39.2709 4.31231 39.2709 9.38956V21.9737C39.2709 27.051 35.142 31.1816 30.0668 31.1816ZM9.20412 3.25095C5.82069 3.25095 3.06804 6.00473 3.06804 9.38956V21.9737C3.06804 25.3586 5.82069 28.1123 9.20412 28.1123H30.0668C33.4502 28.1123 36.2029 25.3586 36.2029 21.9737V9.38956C36.2029 6.00473 33.4502 3.25095 30.0668 3.25095H9.20412Z"
                    fill="#05AA77"
                  />
                  <path
                    d="M19.6742 20.2888C17.7048 20.2888 15.7359 19.6616 14.0927 18.4072C14.0889 18.4043 14.0852 18.4015 14.0815 18.3986L6.72935 12.6781C6.06044 12.1576 5.93972 11.193 6.45967 10.5235C6.97955 9.85394 7.94338 9.73302 8.61229 10.2535L15.9588 15.9696C18.1495 17.6379 21.2066 17.6366 23.3957 15.9654L30.9771 10.1689C31.6504 9.6541 32.613 9.78308 33.1274 10.457C33.6416 11.1309 33.5128 12.0945 32.8395 12.6092L25.2572 18.4064C23.6135 19.6613 21.6436 20.2888 19.6742 20.2888Z"
                    fill="#FF862E"
                  />
                </svg>
              </div>
              <div className="flex-grow-1 ms-4">
                <span>Email Address</span>
                <p>
                  <Link href={`mailto:${email}`}>{email}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAddress;
