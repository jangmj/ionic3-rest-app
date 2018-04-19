//Model class
export class Product {
  id:number;
  name:string;
  cost:number;
  quantity:number;

  //constructor
  constructor(variables:Object={}) {
    Object.assign(this,variables)
  }
}
