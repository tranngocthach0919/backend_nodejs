const { customers, orders } = require("../shared/shared");

class DashboardController {
  getDataDashboard(req, res) {

    let totalUsers = customers.length;
    let totalOrders = orders.length;

    let totalProfit = 0;
    orders.map((order) => {
      let profit = order.products.reduce((acc, product) => acc + (product.quantity * (product.saleprice - product.entryprice)), 0)
      return totalProfit += profit;
    })

    res.json({ totalUsers, totalProfit, totalOrders });

  };
}

module.exports = new DashboardController;