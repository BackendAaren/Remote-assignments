function avg(data) {
  let totalprice = 0;
  for (let i = 0; i < data.size; i++) {
    totalprice += data.products[i].price;
  }
  return totalprice / data.size;
}

let obj = {
  size: 3,
  products: [
    {
      name: "Product1",
      price: 100,
    },
    {
      name: "Product2",
      price: 700,
    },
    {
      name: "Product3",
      price: 250,
    },
  ],
};

console.log(avg(obj)); //should print 350
