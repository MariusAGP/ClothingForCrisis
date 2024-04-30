import { TotalClothesCountPipe } from './total-clothes-count.pipe';
import {Clothing} from "../models/clothing";

describe('TotalClothesCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TotalClothesCountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return total for clothing', () => {
    const pipe = new TotalClothesCountPipe();
    const clothing: Clothing[] = [{quantity: 20} as Clothing, {quantity: 30} as Clothing];
    const result: number = pipe.transform(clothing);
    expect(result).toBe(50);
  });
});
