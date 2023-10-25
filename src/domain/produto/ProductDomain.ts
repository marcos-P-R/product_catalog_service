import { Product } from "./Product";

export class ProductDomain {
  private product: Product;

  constructor(product:Product) {
    this.product = product
  }

  discountedPrice(): number {
    if (this.product.promotion.length) {
      let valueDiscount: number[] = this.product.promotion.map( (promotion)  => promotion.discount * this.product.price_unit);
      return valueDiscount.reduce((acc, current ) => acc + current, 0) - this.product.price_unit;
    }
    return this.product.price_unit;
  }

}