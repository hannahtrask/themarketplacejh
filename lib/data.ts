import { EventItem, FAQItem, Member, ProcessStep } from "@/lib/types";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/events", label: "Events" },
  { href: "/apply", label: "Apply" }
];

export const valueProps = [
  {
    title: "Browse a Vetted Directory",
    description:
      "See freelancers and small business owners in jackson who are building something real. Find the right fit for your project."
  },
  {
    title: "Get Matched",
    description: "Submit what you need. We find the right person. You collaborate directly."
  },
  {
    title: "Join Community Events",
    description:
      "Monthly gatherings where freelancers and small business owners meet, share work, and build real connections."
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Submit a Request",
    description: "Tell us what you need. Share your budget and timeline.",
    iconLabel: "S"
  },
  {
    title: "We Match You",
    description: "We find the right person from our community.",
    iconLabel: "M"
  },
  {
    title: "You Collaborate",
    description: "Work directly together. 8% commission goes back to community events.",
    iconLabel: "C"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What is The Marketplace?",
    answer:
      "The Marketplace is a community and platform connecting Jackson freelancers and small business owners with work opportunities and each other. We believe in the power of local connections to build sustainable careers."
  },
  {
    question: "Who can join The Marketplace?",
    answer:
      "Anyone creating something real. Designers, developers, artists, writers, marketers, illustrators, bakers, jewelers-if you're building and want community + work opportunities, you're in."
  },
  // {
  //     question: "What's the 8% commission?",
  //     answer:
  //         "When someone gets matched with work through The Marketplace, we take 8% of the project fee. It goes directly back into community events and keeping the platform running."
  // },
  // {
  //     question: "How do I submit a request?",
  //     answer:
  //         "Go to the home page and click 'Submit a Request'. Tell us what you need, your budget, and timeline. We'll match you with the right person."
  // },
  // {
  //     question: "How do I become a directory member?",
  //     answer:
  //         "Click 'Apply' at the top of the site. Tell us about yourself, your work, and why you're interested. We'll confirm and add you to the directory."
  // },
  {
    question: "Are there membership fees?",
    answer:
      "No. Being in the directory and part of the community is completely free. Events are free unless otherwise advertised. The only cost is the 8% commission if you find work through The Marketplace."
  },
  {
    question: "When are events?",
    answer:
      "Monthly community gatherings. Follow us on Instagram @themarketplacejh for dates and details."
  }
];

export const events: EventItem[] = [
  {
    id: 1,
    title: "Founding Member Meetup",
    date: "April 11, 2024",
    time: "5:00 PM",
    location: "Jackson, WY (TBA)",
    description:
      "Come meet the founding members of The Marketplace. No pitch. No pressure. Just community.",
    rsvpUrl: "mailto:hello@themarketplacejh.com?subject=RSVP%20Founding%20Member%20Meetup"
  }
];

export const members: Member[] = [
  {
    id: 1,
    name: "Sarah Chen",
    skills: ["Brand Designer"],
    bio: "Building identities for jackson startups.",
    portfolio: "https://sarahchen.design",
    email: "sarah@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    skills: ["Full Stack Developer"],
    bio: "React, Node, helping ideas come to life.",
    portfolio: "https://github.com/mikerodriguez",
    email: "mike@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 3,
    name: "Emma Walsh",
    skills: ["Illustrator", "Artist"],
    bio: "Vibrant illustrations for brands and products.",
    portfolio: "https://emmawalsh.art",
    email: "emma@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 4,
    name: "James Park",
    skills: ["Copywriter", "Strategist"],
    bio: "Words that move people and businesses.",
    portfolio: "https://jamespark.io",
    email: "james@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    skills: ["Social Media Manager"],
    bio: "Building engaged communities online.",
    portfolio: "https://lisamarketing.co",
    email: "lisa@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 6,
    name: "Noah Bennett",
    skills: ["Photographer"],
    bio: "Golden-hour visuals for local businesses.",
    portfolio: "https://noahbennett.photos",
    email: "noah@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 7,
    name: "Ava Kim",
    skills: ["UX Designer", "Researcher"],
    bio: "Designing intuitive experiences for founders.",
    portfolio: "https://avakim.design",
    email: "ava@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 8,
    name: "Ethan Brooks",
    skills: ["Videographer", "Editor"],
    bio: "Short films and product stories with heart.",
    portfolio: "https://ethanbrooks.video",
    email: "ethan@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 9,
    name: "Mia Patel",
    skills: ["Marketing Strategist"],
    bio: "Helping creative brands grow sustainably.",
    portfolio: "https://miapatel.co",
    email: "mia@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 10,
    name: "Lucas Green",
    skills: ["Webflow Developer"],
    bio: "Shipping clean websites quickly for small teams.",
    portfolio: "https://lucasgreen.dev",
    email: "lucas@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 11,
    name: "Chloe Rivera",
    skills: ["Ceramic Artist"],
    bio: "Functional pottery inspired by mountain light.",
    portfolio: "https://chloerivera.art",
    email: "chloe@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 12,
    name: "Owen Foster",
    skills: ["SEO Specialist"],
    bio: "Search strategy for local-first businesses.",
    portfolio: "https://owenfoster.io",
    email: "owen@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 13,
    name: "Grace Morgan",
    skills: ["Email Marketer"],
    bio: "Campaigns that convert while staying authentic.",
    portfolio: "https://gracemorgan.marketing",
    email: "grace@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 14,
    name: "Daniel Lee",
    skills: ["Product Designer"],
    bio: "Design systems and product flows for startups.",
    portfolio: "https://daniellee.design",
    email: "daniel@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 15,
    name: "Sofia Torres",
    skills: ["Brand Photographer"],
    bio: "Portraits and campaigns with warmth and texture.",
    portfolio: "https://sofiatorres.studio",
    email: "sofia@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 16,
    name: "Henry Collins",
    skills: ["Motion Designer"],
    bio: "Animated explainers for local founders.",
    portfolio: "https://henrycollins.work",
    email: "henry@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 17,
    name: "Aria Nguyen",
    skills: ["Frontend Developer"],
    bio: "Accessible interfaces with strong visual craft.",
    portfolio: "https://arianguyen.dev",
    email: "aria@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 18,
    name: "Mason Reed",
    skills: ["Podcast Producer"],
    bio: "Recording and editing conversations that resonate.",
    portfolio: "https://masonreed.audio",
    email: "mason@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 19,
    name: "Nora Ellis",
    skills: ["Interior Stylist"],
    bio: "Spaces that support creative work and hosting.",
    portfolio: "https://noraellis.studio",
    email: "nora@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  },
  {
    id: 20,
    name: "Leo Carter",
    skills: ["Creative Producer"],
    bio: "From concept to launch, keeping teams aligned.",
    portfolio: "https://leocarter.pro",
    email: "leo@themarketplacejh.com",
    image: "/images/member-placeholder.svg"
  }
];
