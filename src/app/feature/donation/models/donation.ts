import {Clothing} from "./clothing";

export interface Donation {
  clothes: Clothing[];
  isPickUp: boolean;
  crisisCountry: string;
  date?: string;
  time: string;
  name?: string;
  lastName?: string;
  street?: string;
  postCode?: string;
  city?: string;
}
