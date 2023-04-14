const ROOCH_TEAM: Record<string, AuthorDetails> = {
  jolestar: {
    name: "Jolestar",
    twitterUsername: "jolestar",
    picture: "/images/people/jolestar.jpg",
  }
};

export type Author = keyof typeof ROOCH_TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  picture: string;
};

export default ROOCH_TEAM;
