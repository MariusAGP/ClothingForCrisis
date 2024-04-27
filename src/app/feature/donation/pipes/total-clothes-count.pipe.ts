import { Pipe, PipeTransform } from '@angular/core';
import {Clothing} from "../models/clothing";

@Pipe({
  name: 'totalClothesCount'
})
export class TotalClothesCountPipe implements PipeTransform {

  transform(clothing: Clothing[]): number {
    let totalCount: number = 0;
    clothing.forEach((clothing: Clothing): void => {
      totalCount += clothing.quantity;
    });
    return totalCount;
  }

}
