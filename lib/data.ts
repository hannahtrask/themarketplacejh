import { EventItem, FAQItem, Member, ProcessStep } from "@/lib/types";

export const navigationLinks = [
  { href: "/directory", label: "Directory" },
  { href: "/how-it-works", label: "How It Works" },
  // { href: "/events", label: "Events" },
  { href: "/apply", label: "Join" }
];

export const valueProps = [
  {
    title: "Browse the directory",
    description:
      "See freelancers and small business owners in jackson who are building something real. Find the right fit for your project."
  },
  {
    title: "Connect and collaborate",
    description:
      "Reach out directly to connect and collaborate. Make local connections that lead to real work and relationships."
  },
  {
    title: "Join community events",
    description:
      "Monthly gatherings where freelancers and small business owners meet, share work, and build community."
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Browse the directory",
    description: "Look for what you need and find the right person for your project.",
    iconLabel: "1"
  },
  {
    title: "Connect and collaborate",
    description:
      "Once you find the right person from our community, reach out directly to start collaborating.",
    iconLabel: "2"
  },
  {
    title: "You collaborate",
    description: "Work directly together, get your project done!",
    iconLabel: "3"
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
  {
    question: "How do I get listed in the directory?",
    answer:
      "Click 'Get listed in the directory' at the top of the site. Tell us about yourself, your work, and why you're interested. We'll confirm and add you to the directory."
  },
  {
    question: "Are there membership fees?",
    answer:
      "No! Being in the directory and part of the community is completely free. Events are free unless otherwise advertised."
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
    rsvpUrl: "mailto:hello@wearesagebrush.com?subject=RSVP%20Founding%20Member%20Meetup"
  }
];
