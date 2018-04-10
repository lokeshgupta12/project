const methods = {};
var jwt = require('jsonwebtoken');
var configData = require('../databaseConnection/config')
var pool = require('../databaseConnection/databaseConnection')
var sess;

methods.checkTokenValidOrNot = function(token) {
    var isTokenValidFlag = false
    isTokenValidFlag = jwt.verify(token, configData.secretKeyForToken, function(err, decoded) {
        return err ? false : true;
    });
    return isTokenValidFlag;
}

methods.checkRoutingParams = function(req, res, next) {
    if (!sess || req.url == '/login') {
        if (req.url == '/login') {
            next()
        } else {
            res.send({
                status: "fail",
                message: "Please Login"
            })
        }
    } else {
        var isTokenValid = methods.checkTokenValidOrNot(req.headers.token)
        if (isTokenValid) {
            next()
        } else {
            res.send({
                status: "fail",
                message: "Token Expire"
            })
        }
    }
}

methods.checkLoginCredintilas = function(req, res, next) {
    sess = req.session;
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        var sql = "SELECT * FROM user where name =?";
        connection.query(sql, [req.body.name], function(error, firstresult) {
            if (error) throw error;
            var token = jwt.sign({
                id: firstresult[0].id
            }, configData.secretKeyForToken, {
                expiresIn: 600
            });
            var values = [
                [new Date(), req.body.name, token]
            ]
            connection.query("INSERT INTO login_history (login_time, user_name, auth_token) values ?", [values], function(error, result) {
                if (error) throw error;
                if (firstresult[0].user_type == 1) {
                    var query = "SELECT * FROM controller"
                } else {
                    var query = "SELECT * FROM controller where user_id =" + firstresult[0].id;
                }
                connection.query(query, function(error, secondresult) {
                    if (error) throw error;
                    connection.release();
                    sess.userDeatil = {
                        userId: firstresult[0].id,
                        authToken: token,
                        name: firstresult[0].name
                    }
                    res.send({
                        "status": "ok",
                        "result": firstresult,
                        "auth_token": token,
                        "appMenus": secondresult
                    })
                })
            })

        })
    })
}

methods.gettingListOfAllUser = function(req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        var sql = "SELECT * FROM user"
        connection.query(sql, function(error, firstresult) {
            if (error) throw error;
            res.send({
                "status": "ok",
                "result": firstresult
            })
        })
    })
}

module.exports = methods;