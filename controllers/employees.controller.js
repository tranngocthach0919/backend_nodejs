const { nextId, pagination, employees, totalPage } = require("../shared/shared");

class Employees {
    // [GET] /employees
    getEmployees (req, res) {
        const { search = '', page = 1 } = req.query;
        let filterEmployees = employees;
      
        if (search) {
          filterEmployees = filterEmployees.filter(
            (emp) =>
              emp.id.toString().toLowerCase().includes(search.toLowerCase()) ||
              emp.fullname.toLowerCase().includes(search.toLowerCase()) ||
              emp.position.toLowerCase().includes(search.toLowerCase()) ||
              emp.email.toLowerCase().includes(search.toLowerCase()) ||
              emp.phonenumber.toString().includes(search.toString()) ||
              emp.address.toLowerCase().includes(search.toLowerCase())
          );
        }
      
        const paginatedEmployees = pagination(filterEmployees, page, 5);
        const totalPages = totalPage(filterEmployees, 5);
      
        res.json({ paginatedEmployees, totalPages });
      };
      
      // [GET] /employees/:id
      getEmployee (req, res) {
        const { id } = req.params;
        const employee = employees.find(emp => emp.id === Number(id));
      
        if (employee) {
          res.json(employee)
        } else {
          res.sendStatus(404);
        }
      };
      
      // [POST] /employees
      addEmployee (req, res) {
        const employee = {
          id: nextId(employees),
          ...req.body,
        };
      
        employees.push(employee);
        res.json(employee);
      };
      
      // [PATCH] /employees/:id
      updateEmployee (req, res) {
        const { id } = req.params;
        const { fullname, position, phonenumber, email, address } = req.body;
      
        const employee = employees.find((emp) => emp.id === Number(id));
        if (employee) {
          employee.fullname = fullname || employee.fullname;
          employee.position = position || employee.position;
          employee.phonenumber = phonenumber || employee.phonenumber;
          employee.email = email || employee.email;
          employee.address = address || employee.address;
          res.json(employee);
        } else {
          res.sendStatus(404);
        }
      };
      
      // [DELETE] /employees/:id
      deleteEmployee (req, res) {
        const { id } = req.params;
        const employee = employees.find((emp) => emp.id === Number(id));
        if (employee) {
          employees.splice(employees.indexOf(employee), 1);
          res.json(employee);
        } else {
          res.sendStatus(404);
        }
      };
}

module.exports = new Employees;