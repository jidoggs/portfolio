const header = {
  homepage: "/",
  title: "Jidoggs",
};

const about = {
  name: "Olajide Shonuga",
  role: "Front End Engineer",
  description:
    "I love bringing Ideas to life with the help of web technologies.",

  resume:
    "https://drive.google.com/file/d/1UJTu8vgL0JeAwW3YR_s3G8RJYmT-UB6N/view?usp=drive_link",
  // resume:
  //   "https://drive.google.com/file/d/1SQMLmolnhQJXvtaFxUR_cHdD9aSoC0vV/view?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/jide-shonuga",
    github: "https://github.com/jidoggs",
  },
};

const projects = [
  {
    name: "Sneaker City",
    description:
      "An ecommerce store where user inputs are helps in shaping the look of the product the user is trying to purchase. Built with React and three.js",
    stack: ["SASS", "JavaScript", "React", "Three.js"],
    sourceCode: "https://github.com/jidoggs/sneaker-city",
    designLink:
      "https://www.figma.com/file/9KCCJCcsP85071jFHSZvxJ/Sneaker-City%3A-A-concept-for-a-foot-wear-store-(Community)?type=design&t=bMFq10irql9lFuCW-1",
    livePreview: "http://sneaker-city.vercel.app",
  },
  {
    name: "Confam Money",
    description:
      "Confam Money is a secure and reliable third party that holds and regualates payments of funds required for both buyers and seller involved in a given transaction",
    stack: ["SASS", "Tailwind", "TypeScript", "React"],
    designLink:
      "https://www.figma.com/file/ZLn1dvei35RylzFtbQbBp3/Confam-Money-Project?type=design&node-id=1-7",
    livePreview: "https://confam-website.vercel.app/",
  },
  {
    name: "Grant",
    description:
      "Nigerian government grant and loan scheme. Application had a 221,430 application per day at its peak traffic",
    stack: ["Antd", "Tailwind", "TypeScript", "Next"],
    // livePreview: "https://grant.fedgrantandloan.gov.ng/",
    livePreview: "https://new-grant-jidoggs-projects.vercel.app/",
  },
  {
    name: "Enzzyme",
    description: "Landing page a venture capitalist firm",
    stack: ["Tailwind", "TypeScript", "Next"],
    livePreview: "https://enzzyme.com/home",
  },
  {
    name: "Finswich",
    description:
      "Wallet interoperability for crypto platforms as well, further expanding the reach and convenience for users",
    stack: ["Tailwind", "TypeScript", "React"],
    livePreview: "https://finswich.fuspay.finance/",
  },
  {
    name: "Trafico",
    description:
      "A multi section landing page for a traffic management conultancy company.",
    stack: ["CSS", "JavaScript", "HTML"],
    sourceCode: "https://github.com/jidoggs/trafigo",
    designLink:
      "https://www.figma.com/file/Mibgc2ApJoTft9K41MVn9f/traffico-landing-page-for-figma?type=design&t=bMFq10irql9lFuCW-1",
    livePreview: "https://jidoggs.github.io/trafigo/",
  },
  // {
  //   name: "Box Office Mojo Clone",
  //   description:
  //     "A static clone of the popular box office mojo landing page built using 90% HTMl tables.",
  //   stack: ["CSS", "HTML"],
  //   sourceCode: "https://github.com/jidoggs/box-mojo",
  //   designLink: "https://www.boxofficemojo.com/",
  //   livePreview: "https://jidoggs.github.io/box-mojo/",
  // },
  // {
  //   name: "Hacker News Clone",
  //   description: "A static clone of the popular Hacker news landing page.",
  //   stack: ["CSS", "HTML"],
  //   sourceCode: "https://github.com/jidoggs/hacker-news",
  //   designLink: "https://news.ycombinator.com/",
  //   livePreview: "https://jidoggs.github.io/hacker-news/",
  // },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "ANTD",
  "Material UI",
  "Git",
  "Jest",
];

const contact = {
  email: "tomiwa.shonuga@gmail.com",
};

export { header, about, projects, skills, contact };
