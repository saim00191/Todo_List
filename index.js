#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let again = true;
while (again) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "todos",
            message: "What do you want to add in your Todos?"
        },
        {
            type: 'confirm',
            name: "addTodos",
            message: "Do you want to add more Todos?"
        }
    ]);
    todos.push(answers.todos);
    again = answers.addTodos;
    console.log(todos);
}
