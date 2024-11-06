INSERT INTO department(id, name)
VALUES
(1, 'sales' ),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');





INSERT INTO role(id, title , salary, department_id)
VALUES
(1, 'Sales lead', 100000, 1),
(2, 'Lead Engineer', 150000, 2),
(3, 'Account Manager', 160000, 3),
(4, 'Legal team klaed', 250000, 4);




INSERT INTO employee(id, first_name , last_name, role_id, manager_id)
VALUES
(1, 'John', 'Doe', 1, NULL ),
(2, 'Mike', 'Chan', 3, 1 ),
(3, 'Ashley', 'Rodriguez', 2, 1),
(4, 'Kevin', 'Tupik', 4, 3);
