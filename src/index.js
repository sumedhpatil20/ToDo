"use strict";
// var http = require('http');
// var url = require('url');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// class ToDoItem {
//     description = null;
//     active = true;
//     obj_id;
//     static id = 0;
//     constructor(obj_id, description, active) {
//         this.obj_id = obj_id;
//         ToDoItem.id++;
//         this.description = description;
//         this.active = active;
//     }
//     obj = {
//         /**
//          * @param {any} status
//          */
//         set active(status) {
//             this.active = status;
//         }
//     }
//     static getID() {
//         return ToDoItem.id;
//     }
// }
// const Data = [];
// Data.push(new ToDoItem(ToDoItem.getID(), "drink milk", true));
// Data.push(new ToDoItem(ToDoItem.getID(), "drink milk 123", true));
// ToDoItem.prototype.toString = function todoToString() {
//     return `${this.obj_id + " " + this.description + " " + this.active}`;
// };
// // list all the todo items
// function getAllTodos() {
//     return Data.toString();
// }
// // return todo item by id
// function getToDoItem(id) {
//     for (todo of Data) {
//         if (todo.obj_id == id) {
//             return todo.toString();
//         }
//     }
//     return "No Data Found";
// }
// function insertToDo(description) {
//     console.log(ToDoItem.getID());
//     const item = new ToDoItem(ToDoItem.getID(), description, true);
//     Data.push(item);
//     return true;
// }
// function updateToDo(description) {
//     for (todo of Data) {
//         if (todo.description == description) {
//             todo.active = false
//             return "update successful"
//         }
//     }
//     return "No Data Found Item not updated";
// }
// function deleteToDo(description) {
//     for ([index, todo] of Data.entries()) {
//         if (todo.description == description) {
//             Data.splice(index, 1);
//             return "deletion successful"
//         }
//     }
//     return "No Data Found Item not deleted";
// }
// var express = require('express');
// const app = express()
// const port = 3000
// app.use(express.json());
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
// app.get('/', (req, res) => {
//     res.send(getAllTodos());
// })
// app.get('/byid/:id', (req, res) => {
//     const id = req.params["id"];
//     console.log(id);
//     res.send(getToDoItem(id));
// })
// app.post('/create', (req, res) => {
//     const requestData = req.body;
//     console.log(requestData);
//     if (insertToDo(requestData["description"]) == true) {
//         res.send("insertion successful");
//     }
// })
// app.put('/update', (req, res) => {
//     const requestData = req.body;
//     console.log(requestData);
//     console.log(requestData["description"]);
//     if (updateToDo(requestData["description"])) {
//         res.status(200).send("update success");
//     }
// })
// app.delete('/delete', (req, res) => {
//     const requestData = req.body;
//     console.log(requestData);
//     console.log(requestData["description"]);
//     if (deleteToDo(requestData["description"])) {
//         res.status(200).send("delete success");
//     }
// })
// // Added support for pg database calls
// // Adding new pg endpints
// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'postgres',
//     host: '172.24.25.180',
//     database: 'Application',
//     password: 'pass',
//     port: 5432,
// })
// async function getID_pg() {
//     const res = await pool.query('SELECT max(id) as id FROM public.todo');
//     return res.rows;    
// }
// app.get('/list/display', (request, response) => {
//     pool.query('SELECT * FROM public.todo ORDER BY id ASC', (error, results) => {
//         if (error) {
//             throw error
//         }
//         console.log((results.rows));
//         response.status(200).json(results.rows);
//     })
// })
// async function getAllTodos_pg() {
//     const res = await pool.query('select * from  public.todo');
//     return res.rows;
// }
// // return todo item by id
// async function getToDoItem_pg(id) {
//     res = await (pool.query('select * from  public.todo where id = $1', [id]));
//     return  res.rows;
// }
// async function insertToDo_pg(description) {
//     console.log("insert function called");
//     console.log(ToDoItem.getID());
//     console.log(await getID_pg());
//     const item = new ToDoItem(((await getID_pg())[0].id)+1, description, true);
//     // const item = new ToDoItem(getID_pg(), description, true);
//     console.log(item.toString());
//     pool.query('insert into public.todo (id, description, active) values ($1,$2,$3) returning *', [item.obj_id, item.description, item.active], (error, results) => {
//         if (error) {
//             throw error
//         }
//         console.log((results.rows));
//     })
//     return true;
// }
// async function updateToDo_pg(description) {
//     console.log(description, "hello");
//     await pool.query('update public.todo set active = false where id = $1', [description], (error, results) => {
//         if (error) {
//             throw error
//         }
//         console.log((results.rows));
//     })
//     return true;
// }
// const deleteToDo_pg = async (description) => {
//     console.log(description, "hello");
//     await pool.query('delete from public.todo where id = $1', [description], (error, results) => {
//         if (error) {
//             throw error
//         }
//         console.log((results.rows));
//     })
//     return true;
// }
// app.get('/pg_all/', async (req, res) => {
//     res.send(await getAllTodos_pg());
// })
// app.get('/byid_pg/:id', async (req, res) => {
//     const id = req.params["id"];
//     console.log(id);
//     res.send(await getToDoItem_pg(id));
// })
// app.post('/create_pg', async (req, res) => {
//     const requestData = req.body;
//     console.log(requestData);
//     if (await insertToDo_pg(requestData["description"]) == true) {
//         res.send("insertion successful");
//     }
//     else {
//         res.send("insertion failed");
//     }
// })
// app.put('/update_pg', async (req, res) => {
//     const requestData = req.body;
//     console.log(requestData);
//     console.log(requestData["description"]);
//     if (await updateToDo_pg(requestData["description"])) {
//         res.status(200).send("update success");
//     }
// })
// app.delete('/delete_pg',async (req, res) => {
//     const requestData = req.body;
//     console.log(requestData);
//     const id = requestData["description"];
//     if (deleteToDo_pg(id)) {
//         res.status(200).send("delete success");
//     }
// })
var express_1 = require("express");
var pg_1 = require("pg");
var app = (0, express_1.default)();
var port = 3000;
var ToDoItem = /** @class */ (function () {
    function ToDoItem(obj_id, description, active) {
        this.obj = {
            /**
             * @param {any} status
             */
            set active(status) {
                this.active = status;
            },
        };
        this.obj_id = obj_id;
        ToDoItem.id++;
        this.description = description;
        this.active = active;
    }
    ToDoItem.getID = function () {
        return ToDoItem.id;
    };
    ToDoItem.prototype.toString = function () {
        return "".concat(this.obj_id + ' ' + this.description + ' ' + this.active);
    };
    ToDoItem.id = 0;
    return ToDoItem;
}());
var Data = [];
Data.push(new ToDoItem(ToDoItem.getID(), 'drink milk', true));
Data.push(new ToDoItem(ToDoItem.getID(), 'drink milk 123', true));
// list all the todo items
function getAllTodos() {
    return Data.toString();
}
// return todo item by id
function getToDoItem(id) {
    for (var _i = 0, Data_1 = Data; _i < Data_1.length; _i++) {
        var todo = Data_1[_i];
        if (todo.obj_id == id) {
            return todo.toString();
        }
    }
    return 'No Data Found';
}
function insertToDo(description) {
    console.log(ToDoItem.getID());
    var item = new ToDoItem(ToDoItem.getID(), description, true);
    Data.push(item);
    return true;
}
function updateToDo(description) {
    for (var _i = 0, Data_2 = Data; _i < Data_2.length; _i++) {
        var todo = Data_2[_i];
        if (todo.description == description) {
            todo.active = false;
            return 'update successful';
        }
    }
    return 'No Data Found Item not updated';
}
function deleteToDo(description) {
    for (var _i = 0, _a = Data.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], index = _b[0], todo = _b[1];
        if (todo.description == description) {
            Data.splice(index, 1);
            return 'deletion successful';
        }
    }
    return 'No Data Found Item not deleted';
}
var pool = new pg_1.Pool({
    user: 'postgres',
    host: '172.24.25.180',
    database: 'Application',
    password: 'pass',
    port: 5432,
});
function getID_pg() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query('SELECT max(id) as id FROM public.todo')];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.rows];
            }
        });
    });
}
function getAllTodos_pg() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query('select * from  public.todo')];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.rows];
            }
        });
    });
}
// return todo item by id
function getToDoItem_pg(id) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pool.query('select * from  public.todo where id = $1', [id])];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.rows];
            }
        });
    });
}
function insertToDo_pg(description) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, item, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('insert function called');
                    console.log(ToDoItem.getID());
                    _b = (_a = console).log;
                    return [4 /*yield*/, getID_pg()];
                case 1:
                    _b.apply(_a, [_d.sent()]);
                    _c = ToDoItem.bind;
                    return [4 /*yield*/, getID_pg()];
                case 2:
                    item = new (_c.apply(ToDoItem, [void 0, (_d.sent())[0].id + 1, description, true]))();
                    console.log(item.toString());
                    return [4 /*yield*/, pool.query('insert into public.todo (id, description, active) values ($1,$2,$3) returning *', [item.obj_id, item.description, item.active], function (error, results) {
                            if (error) {
                                throw error;
                            }
                            console.log(results.rows);
                        })];
                case 3:
                    _d.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
function updateToDo_pg(description) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(description, 'hello');
                    return [4 /*yield*/, pool.query('update public.todo set active = false where id = $1', [description], function (error, results) {
                            if (error) {
                                throw error;
                            }
                            console.log(results.rows);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
function deleteToDo_pg(description) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(description, 'hello');
                    return [4 /*yield*/, pool.query('delete from public.todo where id = $1', [description], function (error, results) {
                            if (error) {
                                throw error;
                            }
                            console.log(results.rows);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
;
app.use(express_1.default.json());
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
app.get('/', function (req, res) {
    res.send(getAllTodos());
});
app.get('/byid/:id', function (req, res) {
    var id = req.params['id'];
    console.log(id);
    res.send(getToDoItem(id));
});
app.post('/create', function (req, res) {
    var requestData = req.body;
    console.log(requestData);
    if (insertToDo(requestData['description']) == true) {
        res.send('insertion successful');
    }
});
app.put('/update', function (req, res) {
    var requestData = req.body;
    console.log(requestData);
    console.log(requestData['description']);
    if (updateToDo(requestData['description'])) {
        res.status(200).send('update success');
    }
});
app.delete('/delete', function (req, res) {
    var requestData = req.body;
    console.log(requestData);
    console.log(requestData['description']);
    if (deleteToDo(requestData['description'])) {
        res.status(200).send('delete success');
    }
});
app.get('/list/display', function (request, response) {
    pool.query('SELECT * FROM public.todo ORDER BY id ASC', function (error, results) {
        if (error) {
            throw error;
        }
        console.log(results.rows);
        response.status(200).json(results.rows);
    });
});
app.get('/pg_all/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = res).send;
                return [4 /*yield*/, getAllTodos_pg()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
app.get('/byid_pg/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                id = req.params['id'];
                console.log(id);
                _b = (_a = res).send;
                return [4 /*yield*/, getToDoItem_pg(id)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
app.post('/create_pg', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestData = req.body;
                console.log(requestData);
                return [4 /*yield*/, insertToDo_pg(requestData['description'])];
            case 1:
                if ((_a.sent()) == true) {
                    res.send('insertion successful');
                }
                else {
                    res.send('insertion failed');
                }
                return [2 /*return*/];
        }
    });
}); });
app.put('/update_pg', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestData = req.body;
                console.log(requestData);
                console.log(requestData['description']);
                return [4 /*yield*/, updateToDo_pg(requestData['description'])];
            case 1:
                if (_a.sent()) {
                    res.status(200).send('update success');
                }
                return [2 /*return*/];
        }
    });
}); });
app.delete('/delete_pg', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestData, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestData = req.body;
                console.log(requestData);
                id = requestData['description'];
                return [4 /*yield*/, deleteToDo_pg(id)];
            case 1:
                if (_a.sent()) {
                    res.status(200).send('delete success');
                }
                return [2 /*return*/];
        }
    });
}); });
exports.default = app;
