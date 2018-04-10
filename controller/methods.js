const methods = {};
var jwt = require('jsonwebtoken');
var configData = require('../databaseConnection/config')
var md5 = require("md5")
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
    if(!req.body.name){
        res.send({
                "status": "fail",
                "result": "Please provide username"
            })
    } else if(!req.body.password) {
        res.send({
            "status": "fail",
            "result": "Please provide password"
        })
    } else if(!req.body.name && !req.body.password) {
        res.send({
            "status": "fail",
            "result": "Please provide username and password"
        })
    } else {
        pool.getConnection(function(err, connection) {
        if (err) throw err;
        var sql = "SELECT * FROM user where email = ? and password = ?";
        var password = md5(req.body.password)
        connection.query(sql, [req.body.name, password], function(error, userResult) {
            if (error) throw error; 
            if(userResult.length > 0) {
                var token = jwt.sign({
                id: userResult[0].id
            }, configData.secretKeyForToken, {
                expiresIn: 600
            });
            var values = [
                [new Date(), req.body.name, token]
            ]
            connection.query("INSERT INTO login_history (login_time, user_name, auth_token) values ?", [values], function(error, result) {
                if (error) throw error;
                if (userResult[0].user_type == 1) {
                    var query = "SELECT * FROM controller"
                } else {
                    var query = "SELECT * FROM controller where user_id =" + userResult[0].id;
                }
                connection.query(query, function(error, secondresult) {
                   // if (error) throw error;
                    connection.release();
                    sess.userDeatil = {
                        userId: userResult[0].id,
                        authToken: token,
                        name: userResult[0].name
                    }
                    res.send({
                        "status": "ok",
                        "result": userResult,
                        "auth_token": token,
                        "appMenus": secondresult
                    })
                })
            })
        } else {
             res.send({
                        "status": "fail",
                        "result": "username not exist"
                    })
           } 

        })
        
    })
    }
    
}

methods.gettingListOfAllUser = function(req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        var sql = "SELECT * FROM user"
        connection.query(sql, function(error, userResult) {
            if (error) throw error;
            res.send({
                "status": "ok",
                "result": userResult
            })
        })
    })
}

module.exports = methods;