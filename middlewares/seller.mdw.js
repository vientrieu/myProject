const permission = require("../config/default.json").permission;

module.exports = (req, res, next) => {
    if (req.session.authUser.f_Permission != permission.seller)
        return res.render(`vwError/404`, { layout: false });

    next();
};