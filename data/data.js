// Navabar Data
export const menuData = {
  logo: "/images/logo.svg",
  link: "/contact",
  menuContent: [
    {
      id: 1,
      title: "About",
      path: "/about",
      newTab: false,
    },
    {
      id: 2,
      title: "Services",
      path: "/services",
      newTab: false,
    },
    {
      id: 3,
      title: "Job",
      path: "/career",
      newTab: false,
    },
    {
      id: 5,
      title: "Portfolio",
      path: "/case-study",
      newTab: false,
    },
    {
      id: 6,
      title: "Blog",
      path: "/blog",
      newTab: false,
    },
    {
      id: 7,
      title: "Others",
      newTab: false,
      submenu: [
        {
          id: 71,
          title: "Service Details",
          path: "/services",
          newTab: false,
        },
        {
          id: 72,
          title: "Job Details",
          path: "/career",
          newTab: false,
        },
        {
          id: 73,
          title: "Blog Single",
          path: "/blog",
          newTab: false,
        },
        {
          id: 74,
          title: "Contact",
          path: "/contact",
          newTab: false,
        },
        {
          id: 76,
          title: "Privacy Policy",
          path: "/privacy",
          newTab: false,
        },
        {
          id: 77,
          title: "Terms & Conditions",
          path: "/terms-conditions",
          newTab: false,
        },
        {
          id: 78,
          title: "Business Policy",
          path: "/business-policy",
          newTab: false,
        },
      ],
    },
  ],
};

// Client Data
export const ClientImageData = [
  {
    id: 1,
    images: "/images/client/client-logo-1.svg",
  },
  {
    id: 2,
    images: "/images/client/client-logo-2.svg",
  },
  {
    id: 3,
    images: "/images/client/client-logo-3.svg",
  },
  {
    id: 4,
    images: "/images/client/client-logo-4.svg",
  },
  {
    id: 5,
    images: "/images/client/client-logo-5.svg",
  },
];
// Business Solution
export const BusinessSolutionData = [
  {
    id: 1,
    icon: "/images/service/services-icon-1.svg",
    title: "Strategies",
    paragraph:
      "Whether you're looking to increase your online visibility, drive more traffic to your website, or boost your sales, we have the expertise to create a plan that works for you.",
  },
  {
    id: 2,
    icon: "/images/service/services-icon-2.svg",
    title: "Analysis",
    paragraph:
      "We believe in data-driven decision making. That's why we conduct in-depth analysis to understand your business and identify key areas of improvement.",
  },
  {
    id: 3,
    icon: "/images/service/services-icon-3.svg",
    title: "Formula",
    paragraph:
      "Developing strategies, conducting in-depth analysis, and executing with precision and expertise, we help you achieve your business goals and take your business to next level.",
  },
];

//WorkProcess Data
export const WorkProcessData = [
  {
    id: 1,
    title: "Create your web masterpiece",
    paragraph:
      "Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Our team of expert designers and developers will work closely with you to create a website that not only looks great but also performs at its best.Let us help you bring your vision to life and create a web masterpiece that represents your brand in the best possible light.",
    image: "/images/work/work-bg-1.png",
    user: true,
    userCount: 380,
    sale: false,
    payment: false,
  },
  {
    id: 2,
    title: "Create your web masterpiece",
    paragraph:
      "Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Our team of expert designers and developers will work closely with you to create a website that not only looks great but also performs at its best.Let us help you bring your vision to life and create a web masterpiece that represents your brand in the best possible light.",
    image: "/images/work/work-bg-2.png",
    user: false,
    sale: true,
    currentSale: 38.4,
    previousSale: 34,
    SaleIncrease: 4.5,
    payment: false,
  },
  {
    id: 3,
    title: "Handover the final good result.",
    paragraph:
      "Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Our team of expert designers and developers will work closely with you to create a website that not only looks great but also performs at its best.Let us help you bring your vision to life and create a web masterpiece that represents your brand in the best possible light.",
    image: "/images/work/work-bg-3.png",
    user: false,
    sale: false,
    payment: true,
    paymentAmount: 450,
    paymentDate: "24th May",
  },
];

//Counter Data
export const counterData = [
  {
    id: 1,
    number: "100",
    text: "Project Done",
  },
  {
    id: 2,
    number: "50",
    text: "Happy Client",
  },
  {
    id: 3,
    number: "10",
    text: "Years Experiences",
  },
];

// Testimonial Data
export const TestimonialData = [
  {
    id: 1,
    author: "Sabo Masties",
    designation: "Foounder of DevsCred",
    paragraph:
      " Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry.",
    rating: 4,
    ratingImage: "/images/testimonial/star.svg",
    authorImage: "/images/testimonial/testimonial-thumb-1.png",
    emoji: "/images/testimonial/icon-love.svg",
  },
  {
    id: 2,
    author: "Liz Carolina",
    designation: "Foounder of DevsCred",
    paragraph:
      " Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry.",
    rating: 5,
    ratingImage: "/images/testimonial/star.svg",
    authorImage: "/images/testimonial/testimonial-thumb-1.png",
    emoji: "/images/testimonial/icon-love.svg",
  },
  {
    id: 3,
    author: "Manual Tereskova",
    designation: "Foounder of DevsCred",
    paragraph:
      " Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry.",
    rating: 3,
    ratingImage: "/images/testimonial/star.svg",
    authorImage: "/images/testimonial/testimonial-thumb-1.png",
    emoji: "/images/testimonial/icon-love.svg",
  },
  {
    id: 4,
    author: "Harnandez",
    designation: "Foounder of DevsCred",
    paragraph:
      " Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry.",
    rating: 2,
    ratingImage: "/images/testimonial/star.svg",
    authorImage: "/images/testimonial/testimonial-thumb-1.png",
    emoji: "/images/testimonial/icon-love.svg",
  },
  {
    id: 5,
    author: "Mac Alister",
    designation: "Foounder of DevsCred",
    paragraph:
      " Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry.",
    rating: 1,
    ratingImage: "/images/testimonial/star.svg",
    authorImage: "/images/testimonial/testimonial-thumb-1.png",
    emoji: "/images/testimonial/icon-love.svg",
  },
];

//Footer Data
export const FooterDatas = {
  logo: "/images/footer-logo.svg",
  footerText:
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .",
  copyright: `Copyright © ${new Date().getFullYear()} Growthus. All right reserved`,
  email: "info@growthus.com",
  phone: "+3 230 705 5448",
  formspreeId: "mpzeewna",
  companyLinks: [
    {
      id: 1,
      name: "Services",
      link: "/services",
    },
    {
      id: 2,
      name: "Career",
      link: "/career",
    },
    {
      id: 3,
      name: "Blogs",
      link: "/blog",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/contact",
    },
  ],
  policyLinks: [
    {
      id: 11,
      name: "Privay Policy",
      link: "/privacy",
    },
    {
      id: 12,
      name: "Terms of Service",
      link: "/terms-conditions",
    },
    {
      id: 13,
      name: "Business Policy",
      link: "/business-policy",
    },
  ],
  locations: [
    {
      id: 21,
      name: "Canada",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      id: 22,
      name: "United States",
      address: "2118 Thornridge Cir. Syracuse,Connecticut 35624",
    },
  ],
  socialLinks: [
    {
      id: 31,
      name: "Facebook",
      link: "/",
    },
    {
      id: 32,
      name: "Twitter",
      link: "/",
    },
    {
      id: 33,
      name: "Linkdin",
      link: "/",
    },
  ],
  resources: [
    {
      id: 41,
      name: "Help & Support",
      link: "/contact",
    },
    {
      id: 42,
      name: "Case Studies",
      link: "/case-study",
    },
  ],
};

// About Hero Data
export const AboutHeroData = {
  title: "We make strategies, development to grow your business",
  paragraph:
    "At our agency, we're always looking for talented individuals who are passionate about what they do. We believe that our success is driven by our team, and we are committed to creating an environment where our employees can thrive. We offer a collaborative and dynamic work environment where creativity and innovation are encouraged. Our team members are not just employees, they are partners in our success. We value diversity and are committed to creating an inclusive and supportive work environment. If you are ready to take your career to the next level, then we invite you to join our team. We offer competitive salaries, comprehensive benefits, and opportunities for professional growth and development.",
  images: [
    {
      image: "/images/about/about-hero-4.jpg",
    },
    {
      image: "/images/about/about-hero-3.jpg",
    },
    {
      image: "/images/about/about-hero-2.jpg",
    },
    {
      image: "/images/about/about-hero-1.jpg",
    },
  ],
};
// About Story Data
export const AboutStory = {
  title: "Our Story",
  paragraph:
    "Founded in 1994, our agency started with a simple goal: to help businesses grow and thrive in the ever-evolving digital landscape. Over the years, we've worked with countless clients, helping them achieve their goals and reach their full potential through our customized strategies and services. Our team of experts is passionate about what we do, and we're dedicated to staying on the cutting edge of technology and innovation. We're committed to delivering exceptional results that exceed our clients' expectations, and we're proud to have built long-lasting relationships with many of them.",
  imageShape: "/images/work/work-shap.svg",
  image: "/images/about/story.png",
  videoLink: "#storyModal",
};
// Join Team Data
export const JoinTeam = {
  title: "Join Our Team",
  paragraph:
    "Looking for a career in digital marketing? Join our team of experts! We offer opportunities across various departments and a supportive team culture that values collaboration and innovation. With competitive compensation and flexible work arrangements, we're confident that you'll love working with us. Check out our current openings and apply today to take your career to the next level.",
  imageShape: "/images/work/work-shap.svg",
  image: "/images/about/story2.png",
  btnLinK: "/contact",
};

// Team Members
export const TeamData = {
  Leads: [
    {
      id: 1,
      name: "Marvin McKinney",
      designation: "Founder and CEO",
      image: "/images/team/team-member1.png",
    },
    {
      id: 2,
      name: "Floyd Miles McKinney",
      designation: "Co-Founder and CEO",
      image: "/images/team/team-member2.png",
    },
    {
      id: 3,
      name: "Kristin Watson",
      designation: "Co-Founder and CEO",
      image: "/images/team/team-member3.png",
    },
  ],
  Members: [
    {
      id: 111,
      name: "Ammete Black",
      designation: "Head of Sales",
      image: "/images/team/team-member4.png",
    },
    {
      id: 112,
      name: "Arthor Conan",
      designation: "Marketing Officer",
      image: "/images/team/team-member5.png",
    },
    {
      id: 113,
      name: "Tom Wilson",
      designation: "Trainer",
      image: "/images/team/team-member6.png",
    },
    {
      id: 114,
      name: "Jeromy Bell",
      designation: "Designer",
      image: "/images/team/team-member7.png",
    },
    {
      id: 115,
      name: "Mak ALister",
      designation: "Marketing Officer",
      image: "/images/team/team-member8.png",
    },
    {
      id: 116,
      name: "Ronald Watson",
      designation: "Advisor",
      image: "/images/team/team-member9.png",
    },
  ],
};

//Business Service Data
export const BusinessServicesData = [
  {
    id: 1,
    title: "Web Development",
    paragraph:
      "Establish a strong online presence with our web development services. Our team delivers high-quality results, from custom website design to e-commerce solutions, using the latest technology.",
    image: "/images/service/service-item2.png",
    btnLink: "/",
    serviceInclude: [
      {
        id: 11,
        serviceIncludeItem: "Custom Website Design",
      },
      {
        id: 12,
        serviceIncludeItem: "E-commerce Development",
      },
      {
        id: 13,
        serviceIncludeItem: "CMS Development",
      },
      {
        id: 14,
        serviceIncludeItem: "Web Application Development",
      },
    ],
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    paragraph:
      "Boost your website's visibility and attract more organic traffic with our proven SEO strategies. Our experts provide detailed analytics and regular reports to measure success and make ongoing improvements.",
    image: "/images/service/service-item1.png",
    btnLink: "/",
    serviceInclude: [
      {
        id: 21,
        serviceIncludeItem: "Keyword Research and Optimization",
      },
      {
        id: 22,
        serviceIncludeItem: "Link Building",
      },
      {
        id: 23,
        serviceIncludeItem: "On-Page Optimization",
      },
    ],
  },
  {
    id: 3,
    title: "Design Service",
    paragraph:
      "Capture your brand's personality and make a lasting impression with our professional design services. Our team provides customized solutions that meet your unique business needs and enhance your visual identity.",
    image: "/images/service/service-item3.png",
    btnLink: "/",
    serviceInclude: [
      {
        id: 31,
        serviceIncludeItem: "Brand Identity",
      },
      {
        id: 32,
        serviceIncludeItem: "Website Design",
      },
      {
        id: 33,
        serviceIncludeItem: "Mobile App Design",
      },
      {
        id: 34,
        serviceIncludeItem: "UI/UX Design",
      },
    ],
  },
];

// Career Hero Data
export const CareerHeroData = {
  title: "We are looking for next talent! are you ready?",
  paragraph:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  details:
    "At our agency, we're always looking for talented individuals who are passionate about what they do. We believe that our success is driven by our team, and we are committed to creating an environment where our employees can thrive. We offer a collaborative and dynamic work environment where creativity and innovation are encouraged. Our team members are not just employees, they are partners in our success. We value diversity and are committed to creating an inclusive and supportive work environment. If you are ready to take your career to the next level, then we invite you to join our team. We offer competitive salaries, comprehensive benefits, and opportunities for professional growth and development.",
  image: "/images/career/career-banner.png",
};

export const ContactFormData = {
  image: "/images/contact/contact.png",
  Email: "info@growthus.com",
  phone: "+96099969996",
  address: [
    {
      name: "London",
      location: "1421 San Pedro St, Los Angeles, CA 90015",
    },
    {
      name: "Japan",
      location: "1421 San Pedro St, Los Angeles, CA 90015",
    },
  ],
  experts: [
    {
      name: "Marvin McKinney",
      image: "/images/contact/contact-person1.png",
      designation: "Founder and CEO",
      phone: "+96099969996",
      email: "info@example.com",
    },
    {
      name: "Floyd Miles",
      image: "/images/contact/contact-person2.png",
      designation: "Co-Founder and CTO",
      phone: "+96099969996",
      email: "info@example.com",
    },
    {
      name: "Kristin Watson",
      image: "/images/contact/contact-person3.png",
      designation: "Co-Founder and CTO",
      phone: "+96099969996",
      email: "info@example.com",
    },
  ],
};

// Common Image style
export const imageStyle = {
  width: "auto",
  maxWidth: "100%",
  height: "auto",
};

// ServiceData
export const servicesData = [
  {
    id: 1,
    slug: "design-service",
    title: "Design Service",
    paragraph:
      "Capture your brand's personality and make a lasting impression with our professional design services. Our team provides customized solutions that meet your unique business needs and enhance your visual identity.",
    image: "/images/service/service-item1.png",
    btnLink: "/",
    serviceInclude: [
      {
        id: 31,
        serviceIncludeItem: "Brand Identity",
      },
      {
        id: 32,
        serviceIncludeItem: "Website Design",
      },
      {
        id: 33,
        serviceIncludeItem: "Mobile App Design",
      },
      {
        id: 34,
        serviceIncludeItem: "UI/UX Design",
      },
    ],
    serviceDetails:
      "Want to be on top of the world? Check out this magnificent and chic diamond collection! These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",

    serviceInfoTitle: "Grow your business with our web development services",
    serviceInfoDesc:
      "Want to be on top of the world? Check out this magnificent and chic diamond collection! These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",

    serviceInfoItems: [
      {
        title: "Transform your idea into a product",
        icon: "/images/service/service-details-icon-1.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Build trust among investors",
        icon: "/images/service/service-details-icon-2.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Craft excellent user experiences",
        icon: "/images/service/service-details-icon-3.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Become a digital standard bearer",
        icon: "/images/service/service-details-icon-4.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
    ],
  },
  {
    id: 2,
    slug: "web-development",
    title: "Web Development",
    paragraph:
      "Capture your brand's personality and make a lasting impression with our professional design services. Our team provides customized solutions that meet your unique business needs and enhance your visual identity.",
    image: "/images/service/service-item2.png",
    btnLink: "/",
    serviceInclude: [
      {
        id: 231,
        serviceIncludeItem: "Custom Website Design",
      },
      {
        id: 232,
        serviceIncludeItem: "E-commerce Development",
      },
      {
        id: 233,
        serviceIncludeItem: "CMS Development",
      },
      {
        id: 234,
        serviceIncludeItem: "Web Application Development",
      },
    ],
    serviceDetails:
      "Want to be on top of the world? Check out this magnificent and chic diamond collection! These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",

    serviceInfoTitle: "Grow your business with our web development services",
    serviceInfoDesc:
      "Want to be on top of the world? Check out this magnificent and chic diamond collection! These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",

    serviceInfoItems: [
      {
        title: "Transform your idea into a product",
        icon: "/images/service/service-details-icon-1.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Build trust among investors",
        icon: "/images/service/service-details-icon-2.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Craft excellent user experiences",
        icon: "/images/service/service-details-icon-3.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Become a digital standard bearer",
        icon: "/images/service/service-details-icon-4.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
    ],
  },
  {
    id: 3,
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    paragraph:
      "Capture your brand's personality and make a lasting impression with our professional design services. Our team provides customized solutions that meet your unique business needs and enhance your visual identity.",
    image: "/images/service/service-item3.png",
    btnLink: "/",
    serviceInclude: [
      {
        id: 331,
        serviceIncludeItem: "Keyword Research and Optimization",
      },
      {
        id: 332,
        serviceIncludeItem: "Link Building",
      },
      {
        id: 333,
        serviceIncludeItem: "On-Page Optimization",
      },
    ],
    serviceDetails:
      "Want to be on top of the world? Check out this magnificent and chic diamond collection! These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",

    serviceInfoTitle: "Grow your business with our web development services",
    serviceInfoDesc:
      "Want to be on top of the world? Check out this magnificent and chic diamond collection! These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",

    serviceInfoItems: [
      {
        title: "Transform your idea into a product",
        icon: "/images/service/service-details-icon-1.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Build trust among investors",
        icon: "/images/service/service-details-icon-2.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Craft excellent user experiences",
        icon: "/images/service/service-details-icon-3.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
      {
        title: "Become a digital standard bearer",
        icon: "/images/service/service-details-icon-4.svg",
        details:
          "Want to be on top of the world? Check out this magnificent and chic diamond collection!These are the most unique and of course Chef’s favourite in Static Mania.",
      },
    ],
  },
];

// Case Study Data
export const caseStudyData = [
  {
    id: 1,
    slug: "exclusive-content-storage",
    title: "Exclusive Content Sources",
    date: "23-05-2023",
    thumbnail: "/images/project/project-1.png",
    tag: "Content",
    featureImage: "/images/project/feature-image.png",
    category: ["Design", "Development"],
    brandOverview:
      "If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially. Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",
    services: [
      {
        item: "Research & Discovery",
      },
      {
        item: "Prototyping & Interactions",
      },
      {
        item: "Competitive Analysis",
      },
      {
        item: "Motion Graphics",
      },
      {
        item: "Front-End Development",
      },
    ],

    subFeatureImage: [
      {
        image: "/images/project/feature-image-sub1.png",
      },
      {
        image: "/images/project/feature-image-sub2.png",
      },
      {
        image: "/images/project/feature-image-sub3.png",
      },
      {
        image: "/images/project/feature-image-sub4.png",
      },
      {
        image: "/images/project/feature-image-sub5.png",
      },
      {
        image: "/images/project/feature-image-sub6.png",
      },
    ],
    visualIdentity:
      "A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold. If you use the animated text widget of exclusive addons for elementor, it’s a matter of a while to animate your desired text anytime. The widget lets you add free animated text in different styles as you like. In a word, it gives you the option to configure text in your own preference. Can’t you believe it? Let’s see.",

    finalResult:
      "Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Do you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",

    author: [
      {
        name: "Kristin Bale",
        designation: "Co-founder and CDO",
        image: "/images/project/profile-picture.png",
        quote:
          "“Trust their process. They will provide a lot of different options, but generally, they’ve put a lot of thinking behind them.They’re very experienced and know what they’re doing as designers. Listen to them and they will help elevate your brand and achieve your goals.” 😍",
      },
    ],
    workDesription:
      " Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.",
    managementTeam: [
      {
        item: "Annette Black",
      },
      {
        item: "Devon Lane",
      },
      {
        item: " Floyd Miles",
      },
    ],
    developmentTeam: [
      {
        item: "Courtney Harry",
      },
      {
        item: "Courtney Harry",
      },
      {
        item: " Kristin Watson",
      },
      {
        item: "Davod lane",
      },
    ],
  },
  {
    id: 2,
    slug: "exclusive-intro-video",
    title: "Redesign Exclusive New Site Look",
    date: "23-05-2023",
    thumbnail: "/images/project/project-2.png",
    tag: "3D Design",
    featureImage: "/images/project/feature-image.png",
    category: ["Marketing", "Design"],
    brandOverview:
      "If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially. Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",
    services: [
      {
        item: "Research & Discovery",
      },
      {
        item: "Prototyping & Interactions",
      },
      {
        item: "Competitive Analysis",
      },
      {
        item: "Motion Graphics",
      },
      {
        item: "Front-End Development",
      },
    ],

    subFeatureImage: [
      {
        image: "/images/project/feature-image-sub1.png",
      },
      {
        image: "/images/project/feature-image-sub2.png",
      },
      {
        image: "/images/project/feature-image-sub3.png",
      },
      {
        image: "/images/project/feature-image-sub4.png",
      },
      {
        image: "/images/project/feature-image-sub5.png",
      },
      {
        image: "/images/project/feature-image-sub6.png",
      },
    ],
    visualIdentity:
      "A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold. If you use the animated text widget of exclusive addons for elementor, it’s a matter of a while to animate your desired text anytime. The widget lets you add free animated text in different styles as you like. In a word, it gives you the option to configure text in your own preference. Can’t you believe it? Let’s see.",

    finalResult:
      "Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Do you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",

    author: [
      {
        name: "Kristin Bale",
        designation: "Co-founder and CDO",
        image: "/images/project/profile-picture.png",
        quote:
          "“Trust their process. They will provide a lot of different options, but generally, they’ve put a lot of thinking behind them.They’re very experienced and know what they’re doing as designers. Listen to them and they will help elevate your brand and achieve your goals.” 😍",
      },
    ],
    workDesription:
      " Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.",
    managementTeam: [
      {
        item: "Annette Black",
      },
      {
        item: "Devon Lane",
      },
      {
        item: " Floyd Miles",
      },
    ],
    developmentTeam: [
      {
        item: "Courtney Harry",
      },
      {
        item: "Courtney Harry",
      },
      {
        item: " Kristin Watson",
      },
      {
        item: "Davod lane",
      },
    ],
  },
  {
    id: 3,
    slug: "exclusive-new-site-look",
    title: "Exclusive New Site Look",
    date: "23-05-2023",
    thumbnail: "/images/project/project-3.png",
    tag: "Mobile App",
    featureImage: "/images/project/feature-image.png",
    category: ["Development", "Design"],
    brandOverview:
      "If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially. Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",
    services: [
      {
        item: "Research & Discovery",
      },
      {
        item: "Prototyping & Interactions",
      },
      {
        item: "Competitive Analysis",
      },
      {
        item: "Motion Graphics",
      },
      {
        item: "Front-End Development",
      },
    ],

    subFeatureImage: [
      {
        image: "/images/project/feature-image-sub1.png",
      },
      {
        image: "/images/project/feature-image-sub2.png",
      },
      {
        image: "/images/project/feature-image-sub3.png",
      },
      {
        image: "/images/project/feature-image-sub4.png",
      },
      {
        image: "/images/project/feature-image-sub5.png",
      },
      {
        image: "/images/project/feature-image-sub6.png",
      },
    ],
    visualIdentity:
      "A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold. If you use the animated text widget of exclusive addons for elementor, it’s a matter of a while to animate your desired text anytime. The widget lets you add free animated text in different styles as you like. In a word, it gives you the option to configure text in your own preference. Can’t you believe it? Let’s see.",

    finalResult:
      "Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Do you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",

    author: [
      {
        name: "Kristin Bale",
        designation: "Co-founder and CDO",
        image: "/images/project/profile-picture.png",
        quote:
          "“Trust their process. They will provide a lot of different options, but generally, they’ve put a lot of thinking behind them.They’re very experienced and know what they’re doing as designers. Listen to them and they will help elevate your brand and achieve your goals.” 😍",
      },
    ],
    workDesription:
      " Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.",
    managementTeam: [
      {
        item: "Annette Black",
      },
      {
        item: "Devon Lane",
      },
      {
        item: " Floyd Miles",
      },
    ],
    developmentTeam: [
      {
        item: "Courtney Harry",
      },
      {
        item: "Courtney Harry",
      },
      {
        item: " Kristin Watson",
      },
      {
        item: "Davod lane",
      },
    ],
  },
  {
    id: 4,
    slug: "exclusive-themes",
    title: "Exclusive Themes",
    date: "23-05-2023",
    thumbnail: "/images/project/project-4.png",
    tag: "Animation",
    featureImage: "/images/project/feature-image.png",
    category: ["Marketing", "Development"],
    brandOverview:
      "If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially. Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",
    services: [
      {
        item: "Research & Discovery",
      },
      {
        item: "Prototyping & Interactions",
      },
      {
        item: "Competitive Analysis",
      },
      {
        item: "Motion Graphics",
      },
      {
        item: "Front-End Development",
      },
    ],

    subFeatureImage: [
      {
        image: "/images/project/feature-image-sub1.png",
      },
      {
        image: "/images/project/feature-image-sub2.png",
      },
      {
        image: "/images/project/feature-image-sub3.png",
      },
      {
        image: "/images/project/feature-image-sub4.png",
      },
      {
        image: "/images/project/feature-image-sub5.png",
      },
      {
        image: "/images/project/feature-image-sub6.png",
      },
    ],
    visualIdentity:
      "A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold. If you use the animated text widget of exclusive addons for elementor, it’s a matter of a while to animate your desired text anytime. The widget lets you add free animated text in different styles as you like. In a word, it gives you the option to configure text in your own preference. Can’t you believe it? Let’s see.",

    finalResult:
      "Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Do you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",

    author: [
      {
        name: "Kristin Bale",
        designation: "Co-founder and CDO",
        image: "/images/project/profile-picture.png",
        quote:
          "“Trust their process. They will provide a lot of different options, but generally, they’ve put a lot of thinking behind them.They’re very experienced and know what they’re doing as designers. Listen to them and they will help elevate your brand and achieve your goals.” 😍",
      },
    ],
    workDesription:
      " Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.",
    managementTeam: [
      {
        item: "Annette Black",
      },
      {
        item: "Devon Lane",
      },
      {
        item: " Floyd Miles",
      },
    ],
    developmentTeam: [
      {
        item: "Courtney Harry",
      },
      {
        item: "Courtney Harry",
      },
      {
        item: " Kristin Watson",
      },
      {
        item: "Davod lane",
      },
    ],
  },
  {
    id: 5,
    slug: "ichiba-redesign-concept",
    title: "Ichiba Redesign Concept",
    date: "23-05-2023",
    thumbnail: "/images/project/project-5.png",
    tag: "Content",
    featureImage: "/images/project/feature-image.png",
    category: ["Design", "Development"],
    brandOverview:
      "If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially. Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",
    services: [
      {
        item: "Research & Discovery",
      },
      {
        item: "Prototyping & Interactions",
      },
      {
        item: "Competitive Analysis",
      },
      {
        item: "Motion Graphics",
      },
      {
        item: "Front-End Development",
      },
    ],

    subFeatureImage: [
      {
        image: "/images/project/feature-image-sub1.png",
      },
      {
        image: "/images/project/feature-image-sub2.png",
      },
      {
        image: "/images/project/feature-image-sub3.png",
      },
      {
        image: "/images/project/feature-image-sub4.png",
      },
      {
        image: "/images/project/feature-image-sub5.png",
      },
      {
        image: "/images/project/feature-image-sub6.png",
      },
    ],
    visualIdentity:
      "A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold. If you use the animated text widget of exclusive addons for elementor, it’s a matter of a while to animate your desired text anytime. The widget lets you add free animated text in different styles as you like. In a word, it gives you the option to configure text in your own preference. Can’t you believe it? Let’s see.",

    finalResult:
      "Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Do you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",

    author: [
      {
        name: "Kristin Bale",
        designation: "Co-founder and CDO",
        image: "/images/project/profile-picture.png",
        quote:
          "“Trust their process. They will provide a lot of different options, but generally, they’ve put a lot of thinking behind them.They’re very experienced and know what they’re doing as designers. Listen to them and they will help elevate your brand and achieve your goals.” 😍",
      },
    ],
    workDesription:
      " Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.",
    managementTeam: [
      {
        item: "Annette Black",
      },
      {
        item: "Devon Lane",
      },
      {
        item: " Floyd Miles",
      },
    ],
    developmentTeam: [
      {
        item: "Courtney Harry",
      },
      {
        item: "Courtney Harry",
      },
      {
        item: " Kristin Watson",
      },
      {
        item: "Davod lane",
      },
    ],
  },
  {
    id: 6,
    slug: "staticmania-mobile-app",
    title: "StaticMania Mobile app",
    date: "23-05-2023",
    thumbnail: "/images/project/project-6.png",
    tag: "Redesign",
    featureImage: "/images/project/feature-image.png",
    category: ["Development", "Marketing"],
    brandOverview:
      "If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially. Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",
    services: [
      {
        item: "Research & Discovery",
      },
      {
        item: "Prototyping & Interactions",
      },
      {
        item: "Competitive Analysis",
      },
      {
        item: "Motion Graphics",
      },
      {
        item: "Front-End Development",
      },
    ],

    subFeatureImage: [
      {
        image: "/images/project/feature-image-sub1.png",
      },
      {
        image: "/images/project/feature-image-sub2.png",
      },
      {
        image: "/images/project/feature-image-sub3.png",
      },
      {
        image: "/images/project/feature-image-sub4.png",
      },
      {
        image: "/images/project/feature-image-sub5.png",
      },
      {
        image: "/images/project/feature-image-sub6.png",
      },
    ],
    visualIdentity:
      "A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold. If you use the animated text widget of exclusive addons for elementor, it’s a matter of a while to animate your desired text anytime. The widget lets you add free animated text in different styles as you like. In a word, it gives you the option to configure text in your own preference. Can’t you believe it? Let’s see.",

    finalResult:
      "Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Do you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",

    author: [
      {
        name: "Kristin Bale",
        designation: "Co-founder and CDO",
        image: "/images/project/profile-picture.png",
        quote:
          "“Trust their process. They will provide a lot of different options, but generally, they’ve put a lot of thinking behind them.They’re very experienced and know what they’re doing as designers. Listen to them and they will help elevate your brand and achieve your goals.” 😍",
      },
    ],
    workDesription:
      " Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.",
    managementTeam: [
      {
        item: "Annette Black",
      },
      {
        item: "Devon Lane",
      },
      {
        item: " Floyd Miles",
      },
    ],
    developmentTeam: [
      {
        item: "Courtney Harry",
      },
      {
        item: "Courtney Harry",
      },
      {
        item: " Kristin Watson",
      },
      {
        item: "Davod lane",
      },
    ],
  },
  {
    id: 7,
    slug: "staticmania-web-app",
    title: "StaticMania Web App",
    date: "23-05-2023",
    thumbnail: "/images/project/project-3.png",
    tag: "Brand Identity",
    featureImage: "/images/project/feature-image.png",
    category: ["Design", "Marketing"],
    brandOverview:
      "If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially. Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",
    services: [
      {
        item: "Research & Discovery",
      },
      {
        item: "Prototyping & Interactions",
      },
      {
        item: "Competitive Analysis",
      },
      {
        item: "Motion Graphics",
      },
      {
        item: "Front-End Development",
      },
    ],

    subFeatureImage: [
      {
        image: "/images/project/feature-image-sub1.png",
      },
      {
        image: "/images/project/feature-image-sub2.png",
      },
      {
        image: "/images/project/feature-image-sub3.png",
      },
      {
        image: "/images/project/feature-image-sub4.png",
      },
      {
        image: "/images/project/feature-image-sub5.png",
      },
      {
        image: "/images/project/feature-image-sub6.png",
      },
    ],
    visualIdentity:
      "A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Don’t you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold. If you use the animated text widget of exclusive addons for elementor, it’s a matter of a while to animate your desired text anytime. The widget lets you add free animated text in different styles as you like. In a word, it gives you the option to configure text in your own preference. Can’t you believe it? Let’s see.",

    finalResult:
      "Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.You may have seen the animated text on many other websites, haven’t you?If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.If so, you know how amazing and attractive they look. Yes, it is a smart way to grow the reader’s attention, and the moving text inspires the users to concentrate on that specific part, especially.Do you apply this amazing thing on your website yet? Don’t worry; we are offering our helping hand, just hold.",

    author: [
      {
        name: "Kristin Bale",
        designation: "Co-founder and CDO",
        image: "/images/project/profile-picture.png",
        quote:
          "“Trust their process. They will provide a lot of different options, but generally, they’ve put a lot of thinking behind them.They’re very experienced and know what they’re doing as designers. Listen to them and they will help elevate your brand and achieve your goals.” 😍",
      },
    ],
    workDesription:
      " Within 30 days after the launch, A lot of font generators are there. Definitely, they also offer their own features. But we recommend exclusive Addons animated text generator widgets. Don’t you want to know why? Well, numerous reasons are there for choosing this widget. However, the followings are the primary reasons.",
    managementTeam: [
      {
        item: "Annette Black",
      },
      {
        item: "Devon Lane",
      },
      {
        item: " Floyd Miles",
      },
    ],
    developmentTeam: [
      {
        item: "Courtney Harry",
      },
      {
        item: "Courtney Harry",
      },
      {
        item: " Kristin Watson",
      },
      {
        item: "Davod lane",
      },
    ],
  },
];
