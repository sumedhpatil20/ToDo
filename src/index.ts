// var http = require('http');
// var url = require('url');

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


import express, { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();
const port = 3000;

interface ToDoItem {
  description: string;
  active: boolean;
  obj_id: number;
}

class ToDoItem {
  static id = 0;

  constructor(obj_id: number, description: string, active: boolean) {
    this.obj_id = obj_id;
    ToDoItem.id++;
    this.description = description;
    this.active = active;
  }

  obj = {
    /**
     * @param {any} status
     */
    set active(status: boolean) {
      this.active = status;
    },
  };

  static getID(): number {
    return ToDoItem.id;
  }

  toString(): string {
    return `${this.obj_id + ' ' + this.description + ' ' + this.active}`;
  }
}

const Data: ToDoItem[] = [];

Data.push(new ToDoItem(ToDoItem.getID(), 'drink milk', true));
Data.push(new ToDoItem(ToDoItem.getID(), 'drink milk 123', true));

// list all the todo items
function getAllTodos(): string {
  return Data.toString();
}

// return todo item by id
function getToDoItem(id: number): string {
  for (const todo of Data) {
    if (todo.obj_id == id) {
      return todo.toString();
    }
  }
  return 'No Data Found';
}

function insertToDo(description: string): boolean {
  console.log(ToDoItem.getID());
  const item = new ToDoItem(ToDoItem.getID(), description, true);
  Data.push(item);
  return true;
}

function updateToDo(description: string): string {
  for (const todo of Data) {
    if (todo.description == description) {
      todo.active = false;
      return 'update successful';
    }
  }
  return 'No Data Found Item not updated';
}

function deleteToDo(description: string): string {
  for (const [index, todo] of Data.entries() ) {
    if (todo.description == description) {
      Data.splice(index, 1);
      return 'deletion successful';
    }
  }
  return 'No Data Found Item not deleted';
}

const pool = new Pool({
  user: 'postgres',
  host: '172.24.25.180',
  database: 'Application',
  password: 'pass',
  port: 5432,
});

async function getID_pg(): Promise<any> {
  const res = await pool.query('SELECT max(id) as id FROM public.todo');
  return res.rows;
}

async function getAllTodos_pg(): Promise<any> {
  const res = await pool.query('select * from  public.todo');
  return res.rows;
}

// return todo item by id
async function getToDoItem_pg(id: number): Promise<any> {
  const res = await pool.query('select * from  public.todo where id = $1', [id]);
  return res.rows;
}

async function insertToDo_pg(description: string): Promise<boolean> {
  console.log('insert function called');
  console.log(ToDoItem.getID());
  console.log(await getID_pg());
  const item = new ToDoItem((await getID_pg())[0].id + 1, description, true);
  console.log(item.toString());
  await pool.query(
    'insert into public.todo (id, description, active) values ($1,$2,$3) returning *',
    [item.obj_id, item.description, item.active],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
    }
  );
  return true;
}

async function updateToDo_pg(description: string): Promise<boolean> {
  console.log(description, 'hello');
  await pool.query('update public.todo set active = false where id = $1', [description], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
  });
  return true;
}


async function deleteToDo_pg(description: string): Promise<boolean> {
  console.log(description, 'hello');
  await pool.query('delete from public.todo where id = $1', [description], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
  });
  return true;
};

app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send(getAllTodos());
});

app.get('/byid/:id', (req: Request, res: Response) => {
  const id = req.params['id'];
  console.log(id);
  res.send(getToDoItem(id));
});

app.post('/create', (req: Request, res: Response) => {
  const requestData = req.body;
  console.log(requestData);
  if (insertToDo(requestData['description']) == true) {
    res.send('insertion successful');
  }
});

app.put('/update', (req: Request, res: Response) => {
  const requestData = req.body;
  console.log(requestData);
  console.log(requestData['description']);
  if (updateToDo(requestData['description'])) {
    res.status(200).send('update success');
  }
});

app.delete('/delete', (req: Request, res: Response) => {
  const requestData = req.body;
  console.log(requestData);
  console.log(requestData['description']);
  if (deleteToDo(requestData['description'])) {
    res.status(200).send('delete success');
  }
});

app.get('/list/display', (request: Request, response: Response) => {
  pool.query('SELECT * FROM public.todo ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
    response.status(200).json(results.rows);
  });
});

app.get('/pg_all/', async (req: Request, res: Response) => {
  res.send(await getAllTodos_pg());
});

app.get('/byid_pg/:id', async (req: Request, res: Response) => {
  const id = req.params['id'];
  console.log(id);
  res.send(await getToDoItem_pg(id));
});

app.post('/create_pg', async (req: Request, res: Response) => {
  const requestData = req.body;
  console.log(requestData);
  if (await insertToDo_pg(requestData['description']) == true) {
    res.send('insertion successful');
  } else {
    res.send('insertion failed');
  }
});

app.put('/update_pg', async (req: Request, res: Response) => {
  const requestData = req.body;
  console.log(requestData);
  console.log(requestData['description']);
  if (await updateToDo_pg(requestData['description'])) {
    res.status(200).send('update success');
  }
});

app.delete('/delete_pg', async (req: Request, res: Response) => {
  const requestData = req.body;
  console.log(requestData);
  const id = requestData['description'];
  if (await deleteToDo_pg(id)) {
    res.status(200).send('delete success');
  }
});

export default app;


