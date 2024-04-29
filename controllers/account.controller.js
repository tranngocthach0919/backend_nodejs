const { pagination, totalPage, nextId, admins, customers, employees } = require("../shared/shared");

class AccountsController {
    getAccounts(req, res) {
        const { search = '', page = 1 } = req.query;
        let filterAccounts = admins;

        if (search) {
            filterAccounts = filterAccounts.filter(
                (acc) =>
                    acc.id.toString().toLowerCase().includes(search.toLowerCase()) ||
                    acc.username.toLowerCase().includes(search.toLowerCase()) ||
                    acc.password.toLowerCase().includes(search.toLowerCase()) ||
                    acc.role.toLowerCase().includes(search.toLowerCase())
            );
        }

        const paginatedAccounts = pagination(filterAccounts, page, 5);
        const totalPages = totalPage(filterAccounts, 5);

        res.json({ paginatedAccounts, totalPages });
    }

    getAccount(req, res) {
        const { id } = req.params;
        const account = admins.find(acc => acc.id === Number(id));
        if (account) {
            res.json(account)
        } else {
            res.sendStatus(404);
        }
    }

    addAccount(req, res) {
        let role = 'anonymous';
        let isValid = true;
        let isCustomerValid = true;
        let isEmployeeValid = true;
        const { username } = req.body;

        admins.some(account => {
            if (account.username === username) {
                return isValid = false;
            }
        })   
        
        customers.some(account => {
            if (account.email === username) {
                return isCustomerValid = false;
            }
        })

        employees.some(account => {
            if (account.email === username) {
                return isEmployeeValid = false;
            }
        })

        if (isCustomerValid && isEmployeeValid && isValid) {
            const account = {
                id: nextId(admins),
                ...req.body,
                role
            };
    
            admins.push(account);
            res.json(account);
        }
        else {
            res.sendStatus(400);
        }
    }

    updateAccount(req, res) {
        const { id } = req.params;
        const { username, password, role } = req.body;

        const account = admins.find((acc) => acc.id === Number(id));
        if (account) {
            account.username = username || account.username;
            account.password = password || account.password;
            account.role = role || account.role;
        } else {
            res.sendStatus(404);
        }
    }

    deleteAccount(req, res) {
        const { id } = req.params;
        const account = admins.find((acc) => acc.id === Number(id));
        if (account) {
            admins.splice(admins.indexOf(account), 1);
            res.json(account);
        } else {
            res.sendStatus(404);
        }
    };
};

module.exports = new AccountsController;