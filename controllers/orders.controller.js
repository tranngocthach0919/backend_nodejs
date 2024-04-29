const { nextId, pagination, orders, totalPage, products } = require("../shared/shared");

class Orders {
  // [GET] /orders
  getOrders(req, res) {
    const { search = '', page = 1 } = req.query;
    let filterOrders = orders;

    if (search) {
      filterOrders = filterOrders.filter(
        (emp) =>
          emp.id.toString().toLowerCase().includes(search.toLowerCase()) ||
          emp.cusname.toLowerCase().includes(search.toLowerCase()) ||
          emp.phonenumber.toLowerCase().includes(search.toLowerCase()) ||
          emp.address.toLowerCase().includes(search.toLowerCase())
      );
    }

    const paginatedOrders = pagination(filterOrders, page, 5);
    const totalPages = totalPage(filterOrders, 5);

    res.json({ paginatedOrders, totalPages });
  };

  // [GET] /orders/:id
  getOrder(req, res) {
    const { id } = req.params;
    const order = orders.find(ord => ord.id === Number(id));

    if (order) {
      res.json(order)
    } else {
      res.sendStatus(404);
    }
  };

  // [POST] /orders
  addOrder(req, res) {
    let dataProducts = products;
    let order = {
      id: nextId(orders),
      ...req.body,
    };
    orders.push(order);
    res.json(order);

    order.products.map((productOrd) => {
      dataProducts.map(product => {
        if (product.id === productOrd.id) {
          product.quantity = product.quantity - productOrd.quantity
          return product.quantity;
        };
      });
    });
  };

  // [PATCH] /orders/:id
  updateOrder(req, res) {
    const { id } = req.params;
    const { status, adminConfirm } = req.body;

    const order = orders.find((ord) => ord.id === Number(id));
    if (order) {
      order.status = status || order.status;
      order.adminConfirm = adminConfirm || order.adminConfirm;
      res.json(order);
    } else {
      res.sendStatus(404);
    }
  };

}

module.exports = new Orders;