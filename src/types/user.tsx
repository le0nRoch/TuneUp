export interface User {
  id: string;
  subscription: "free" | "premium" | "platinum";
  email: string;
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  tracks: string[]; // not sure
}
