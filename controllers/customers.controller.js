const { pagination, nextId, customers, groupCustomer, totalPage } = require("../shared/shared");

class CustomersController {
  getCustomers(req, res) {
    const { search, page = 1 } = req.query;
    let filterCustomers = customers;

    for (let j = 0; j < groupCustomer.length; j++) {
      for (let i = 0; i < customers.length; i++) {
        if (customers[i].groupname === groupCustomer[j].id) {
          customers[i].groupname = groupCustomer[j].name;
        }
      }
    }

    if (search) {
      filterCustomers = filterCustomers.filter(
        (cus) =>
          cus.id.toString().toLowerCase().includes(search.toLowerCase()) ||
          cus.cusname.toLowerCase().includes(search.toLowerCase()) ||
          cus.phonenumber.toString().toLowerCase().includes(search.toLowerCase()) ||
          cus.groupname.toLowerCase().includes(search.toLowerCase()) ||
          cus.email.toLowerCase().includes(search.toLowerCase()) ||
          cus.address.toLowerCase().includes(search.toLowerCase())
      );
    }

    const paginatedCustomers = pagination(filterCustomers, page, 5);
    const totalPages = totalPage(filterCustomers, 5);

    res.json({ paginatedCustomers, totalPages, totalUsers: customers.length });
  };

  getCustomerById(req, res) {
    const { id } = req.params;
    const customer = customers.find(cus => cus.id === Number(id));
    console.log(customers[0]);
    if (customer) {
      res.json(customer)
    } else {
      res.sendStatus(404);
    }
  };

  getCustomer(req, res) {
    const { username } = req.params;
    const customer = customers.find(cus => cus.email === username);
    console.log(customer);
    if (customer) {
      res.json(customer)
    } else {
      res.sendStatus(404);
    }
  };

  addCustomer(req, res) {
    let groupname = 'group01';
    const customer = {
      id: nextId(customers),
      ...req.body,
      groupname,
    };

    customers.push(customer);
    res.json(customer);
  };

  updateCustomer(req, res) {
    const { id } = req.params;
    const { cusname, phonenumber, groupname, email, address } = req.body;

    const customer = customers.find((cus) => cus.id === Number(id));
    if (customer) {
      customer.cusname = cusname || customer.cusname;
      customer.phonenumber = phonenumber || customer.phonenumber;
      customer.groupname = groupname || customer.groupname;
      customer.email = email || customer.email;
      customer.address = address || customer.address;
      res.json(customer);
    } else {
      res.sendStatus(404);
    }
  };

  deleteCustomer(req, res) {
    const { id } = req.params;
    const customer = customers.find((cus) => cus.id === Number(id));
    if (customer) {
      customers.splice(customers.indexOf(customer), 1);
      res.json(customer);
    } else {
      res.sendStatus(404);
    }
  };
}

module.exports = new CustomersController;