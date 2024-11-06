import inquirer from 'inquirer';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  password:'Bernerberner',
  host:'localhost',
  database: 'employee_tracker',
  port: 5432

});

inquirer
  .prompt([
   {
    type: 'list',
    name: 'Action',
    message: 'What would you like to do?',
    choices: ['View All Employees','Add Employee','Update Employee Role', 
      'View All Roles', 'Add Role', 'View All Departments', 'Add Department','Quit'
    ]
  }

    /* Pass your questions in here */
  ])
  .then(async (answers) => {
    
    if (answers.Action == 'View All Employees'){
      const res = await pool.query('SELECT * FROM employee')
        console.table( res.rows)
        

    }

    
    // Use user feedback for... whatever!!
    })