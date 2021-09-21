export class Product {
  constructor(
    public author: string = "",
    public description: string = "",
    public email: string = "",
    public keywords: string = "",
    public name: string = "",
    public revenue: string = "",
    public timestamp: number = 0,
    public url: string = ""
  ) {}
}

export class Comic {
  constructor(public _id: string = "", public _source: Product) {}
}
