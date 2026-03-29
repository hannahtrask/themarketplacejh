export type Member = {
  id: number;
  name: string;
  skills: string[];
  bio: string;
  portfolio: string;
  email: string;
  image: string;
};

export type EventItem = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  rsvpUrl: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  iconLabel: string;
};
