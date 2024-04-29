const express = require("express");
const cors = require("cors");
const app = express();
const authenticateJWT = require("./middlewares/authenticateJWT");
const bodyParser = require("body-parser");
const port = 3100;
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const AuthController = require("./controllers/auth.controller");
const AccountsController = require("./controllers/account.controller");
const EmployeesController = require('./controllers/employees.controller');
const CustomersController = require("./controllers/customers.controller");
const ProductsController = require("./controllers/products.controller");
const OrdersController = require("./controllers/orders.controller");
const DashboardController = require("./controllers/dashboard.controller");

app.get("/", (req, res) => {
  res.send("LetDiv");
});

// Auth
app.post("/login", AuthController.login);
app.get("/user", authenticateJWT(['admin', 'user', 'anonymous']), AuthController.getUser);
// Accounts
app.get("/accounts", authenticateJWT(["admin"]), AccountsController.getAccounts);
app.get("/accounts/:id", authenticateJWT(["admin"]), AccountsController.getAccount);
app.post("/accounts", AccountsController.addAccount);
app.patch("/accounts/:id", authenticateJWT(["admin"]), AccountsController.updateAccount);
app.delete("/accounts/:id", authenticateJWT(["admin"]), AccountsController.deleteAccount);
// Employees
app.get("/employees", authenticateJWT(['admin']), EmployeesController.getEmployees);
app.get("/employees/:id", authenticateJWT(['admin']), EmployeesController.getEmployee);
app.post("/employees", authenticateJWT(['admin']), EmployeesController.addEmployee);
app.patch("/employees/:id", authenticateJWT(['admin']), EmployeesController.updateEmployee);
app.delete('/employees/:id', authenticateJWT(['admin']), EmployeesController.deleteEmployee)
// Customers
app.get("/customers", authenticateJWT(['admin', 'user', 'anonymous']), CustomersController.getCustomers);
app.get("/customers/:id", authenticateJWT(['admin', 'user']), CustomersController.getCustomerById);
app.get("/customers/by-username/:username", authenticateJWT(['admin', 'user', 'anonymous']), CustomersController.getCustomer);
app.post("/customers", CustomersController.addCustomer);
app.patch("/customers/:id", authenticateJWT(['admin', 'user']), CustomersController.updateCustomer);
app.delete('/customers/:id', authenticateJWT(['admin', 'user']), CustomersController.deleteCustomer);
// Products
app.get("/products", ProductsController.getProducts);
app.get("/products/:id", ProductsController.getProduct);
app.post("/products", authenticateJWT(['admin', 'user']), ProductsController.addProduct);
app.patch("/products/:id", authenticateJWT(['admin', 'user']), ProductsController.updateProduct);
app.delete('/products/:id', authenticateJWT(['admin', 'user']), ProductsController.deleteProduct);
// Orders
app.get("/orders", authenticateJWT(['admin', 'user']), OrdersController.getOrders);
app.get("/orders/:id", authenticateJWT(['admin', 'user']), OrdersController.getOrder);
app.post("/orders", OrdersController.addOrder);
app.patch("/orders/:id", authenticateJWT(['admin']), OrdersController.updateOrder);
// Dashboard 
app.get("/dashboard", DashboardController.getDataDashboard);

app.listen(port, () => {  
  console.log(`LetDiv app listening on port ${port}`);
});
