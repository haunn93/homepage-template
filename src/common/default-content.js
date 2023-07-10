import { AboutUsImg, Feature, LogoLight, Logo } from "../assets/images"

const titleText = "The mortgage brokers that make you a Gunn."
const subTitleText =
  "We have a huge panel of lenders to help find the right options and industry leading tech for lifetime support."

export const DEFAULT_CONTENT = {
  titleText,
  subTitleText,
  featureImage: Feature,
  rate: {
    numberOfLenders: 40,
    lowestRate: 2.19,
    comparisonRate: 2.49
  },
  contactMethod: "email",
  reviews: [
    {
      clientName: "Darren and Karen,",
      clientScenario: "Property Developers",
      testimonial:
        "Gunn Money platform is relatively simple and easy to use in picking up suitable loan for applicants."
    },
    {
      clientName: "Cabelo Culture",
      clientScenario: "Property Developers",
      testimonial:
        "Five star just isn’t enough when it comes to rating this service. I couldn’t recommend Wealth Pro enough to any one who is looking to get some finance."
    },
    {
      clientName: "Jose Da Silva",
      clientScenario: "Refinance Home & Investment Purchase",
      testimonial:
        "I feel very lucky to have Alex and Fiona on my team. They were both amazing and their assistance and expertise made our dream come true."
    },
    {
      clientName: "Nathan Butler ",
      clientScenario: "Refinance Home & Investment Property",
      testimonial:
        "Alex took time to explain all options and negotiated with the banks on our behalf. Very much appreciated Wealth Pro Thank you."
    },
    {
      clientName: "Lliana C",
      clientScenario: "Loan Review",
      testimonial:
        "Very dedicated and professional, a pleasure to talk to and always prompt in responding to any questions. Would not hesitate to refer."
    },
    {
      clientName: "Carmen Zammit",
      clientScenario: "Home Downsize & Investment Purchase",
      testimonial:
        "They both went above & beyond, & even further. I needed re structuring, of my loans. Wealth Pro made it happen with their knowledge, dedication, hard work and professionalism."
    }
  ],
  aboutUsText:
    "Our experienced team of mortgage professionals is dedicated to making your home buying journey smooth and stress-free. We offer personalised service tailored to your needs, with access to a wide network of lenders and competitive rates. \n\n     Transparency, integrity, and exceptional customer service at the core of our approach, we guide you through the mortgage process step by step.",
  aboutUsImage: AboutUsImg
}

export const DEFAULT_THEME = {
  phoneNumber: "0416338438",
  supportEmail: "clint@wealthx.au",
  logoLight: LogoLight,
  logoDark: Logo,
  calendlyURL: "https://calendly.com/product-lead/finance-app",
  companyName: "GUNN FINTECH",
  companyNumber: "640 789 813"
}
