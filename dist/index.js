import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        type: 'list',
        name: 'practice',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role',
            'View All Roles', 'Add Role', 'View All Departments', 'Add Department'
        ]
    } /* Pass your questions in here */
])
    .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
});
