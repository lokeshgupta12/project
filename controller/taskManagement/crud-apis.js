var express = require('express');
var fs = require('fs');
var Validator = require('schema-validator');
const TASK_FILE = 'src/assets/others/bug-feature-update.json';
var router = express.Router();

var taskSchema = {
    id: {
        type: Number,
        required: false
    },
    component: {
        type: String,
        required: true,
        length: {
            min: 4,
            max: 40
        }
    },
    description: {
        type: String,
        required: false,
        length: {
            max: 140
        }
    },
    typeId: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
};

function readFile(cb) {
    fs.readFile(TASK_FILE, function(err, data) {
        if (err) throw err;
        cb(data);
    })
}

function saveAndDelete(type, result, cb) {
    readFile((data) => {
        data = JSON.parse(data || '[]');
        var id = result.id;
        if (id) {
            let index = data.findIndex((ob) => (ob.id === id));
            if (index > -1)
                type == 'delete' ? data.splice(index, 1) : (data[index] = result);
            else {
                cb({
                    status: 'ko',
                    message: 'Record not found!',
                    data
                });
                return;
            }
        } else {
            result.id = +new Date();
            data.unshift(result);
        }
        fs.writeFile(TASK_FILE, JSON.stringify(data, undefined, 2), 'utf8', (op) => {
            cb({
                status: 'ok',
                message: (id ? (type == 'delete' ? 'Delete' : 'Update') : 'Save') + ' successfully!',
                data
            });
        });
    })
}

router.get('/list', function(req, res) {
    console.log('Secret key', process.env.MYAPIKEY)
    readFile((data) => {
        res.status(200).send(JSON.parse(data || '[]'));
    })
})

router.post('/save', [new Validator(taskSchema, true)], function(req, res) {
    saveAndDelete('save', req.validated, (response) => {
        res.send(response);
    })
})

router.delete('/delete/:id', function(req, res) {
    saveAndDelete('delete', {
        id: +req.params.id
    }, (response) => {
        res.send(response);
    })
})

module.exports = router