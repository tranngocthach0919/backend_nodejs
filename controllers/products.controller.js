const { pagination, totalPage, nextId, products } = require("../shared/shared");

class ProductsController {
  // [GET] /products
  getProducts(req, res) {
    const { search = '', page = 1 } = req.query;
    let filterProducts = products;
    let saleprice;

    for (let i = 0; i < filterProducts.length; i++) {
      let discount = filterProducts[i].discount;
      let price = filterProducts[i].price;
      if (discount > 0) {
        saleprice = price - (price * discount / 100)
      }
      else {
        saleprice = price;
      }
      filterProducts[i] = { ...filterProducts[i], saleprice };
    }

    if (search) {
      filterProducts = filterProducts.filter(
        (product) =>
          product.id.toString().toLowerCase().includes(search.toLowerCase()) ||
          product.proname.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()) ||
          product.color.toLowerCase().includes(search.toLowerCase()) ||
          product.quantity.toString().includes(search.toString()) ||
          product.entryprice.toString().includes(search.toString()) ||
          product.saleprice.toString().includes(search.toString()) ||
          product.price.toString().includes(search.toString())
      );
    }

    let categories = [];

    for (let i = 0; i < products.length; i++) {
      for (let j = i + 1; j < products.length; j++) {
        if (products[i].category === products[j].category && !categories.includes(products[i].category)) {
          categories.push(products[i].category);
        }
      }
    }
    
    const dataProducts = pagination(products, page, products.length);
    const paginatedProducts = pagination(filterProducts, page, 5);
    const totalPages = totalPage(filterProducts, 5);

    res.json({ dataProducts, filterProducts, categories, paginatedProducts, totalPages });
  };

  // [GET] /products/:id
  getProduct(req, res) {
    const { id } = req.params;
    const product = products.find(product => product.id === Number(id));

    if (product) {
      res.json(product)
    } else {
      res.sendStatus(404);
    }
  };

  // [POST] /products
  addProduct(req, res) {
    const product = {
      id: nextId(products),
      ...req.body,
    };

    products.push(product);
    res.json(products);
  };

  // [PATCH] /products/:id
  updateProduct(req, res) {
    const { id } = req.params;
    const { proname, category, color, quantity, entryprice, price, discount, image } = req.body;

    const product = products.find((product) => product.id === Number(id));
    if (product) {
      product.proname = proname || product.proname;
      product.category = category || product.category;
      product.color = color || product.color;
      product.quantity = quantity || product.quantity;
      product.entryprice = entryprice || product.entryprice;
      product.price = price || product.price;
      product.discount = discount || product.discount;
      product.image = image || product.image;
      res.json(product);
    } else {
      res.sendStatus(404);
    }
  };

  // [DELETE] /products/:id
  deleteProduct(req, res) {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));
    if (product) {
      products.splice(products.indexOf(product), 1);
      res.json(product);
    } else {
      res.sendStatus(404);
    }
  };
}

module.exports = new ProductsController;