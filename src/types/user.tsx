export interface User {
  id: string;
  subscription: "free" | "premium" | "platinum";
  name: {
    first: string;
    last: string;
  };
  email: string;
  avatar: string;
  tracks: string[]; // not sure
}
