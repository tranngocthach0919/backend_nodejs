const jwt = require("jsonwebtoken");
const { admins } = require("../shared/shared");
const dotenv = require('dotenv')
dotenv.config();

class AuthController {
    login(req, res) {
        const { email, password } = req.body;
        const target = admins.find(
            (item) => item.username === email && item.password === password
        );
        // delete target.password;
        console.log(target)
        if (target) {
            const { id, username, role } = target;
            console.log('inside');
            const accessToken = jwt.sign(
                {
                    id,
                    username,
                    role,
                },
                `${process.env.JWT_SECRET_KEY}`,
                { expiresIn: "2 days" }
            );
            console.log(accessToken);
            console.log('inside 2');
            res.json({ accessToken });
        } else {
            res.sendStatus(401);
        }
    }

    getUser(req, res) {
        res.json(req.user);
    };
}

module.exports = new AuthController;
