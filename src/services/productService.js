class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = Math.floor(Math.random() * 10);
    for(let i = 0; i < limit; i++){
      this.products.push({
        id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 100),
      });
    }
  }

  create(product){
    this.products.push(product);
  }

  find(){
    return this.products;
  }
}

module.exports = ProductService;
