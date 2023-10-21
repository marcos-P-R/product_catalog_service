export interface Product {
  id:number;
  name: string;
  description: string;
  labels: {
    [name:string]: string,
  };
  brand: string;
  price_unit: number;
  price_list: number;
  promotion: {
    [namePromotion:string]: boolean
  }
}