import {Clothing} from "./clothing";

export interface Donation {
  id: number;
  clothes: Clothing[];
  isPickUp: boolean;
  crisisCountry: string;
  date: string;
  time: string;
}
