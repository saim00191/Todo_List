#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

let todosList: string[] = [];

let condition: boolean = true;

console.log("==".repeat(20)); console.log(chalk.white.underline.bold.italic("\t WELCOME T0 TODOS LIST")); console.log("==".repeat(20));
while (condition) {
    const options = await inquirer.prompt([
        {
            type: "list",
            name: "choices",
            choices: ["AddTask", "Delete", "Update", "View Todo List", "Exit"],
            message : "What do you want to do ?"
        }
    ])
    if (options.choices === "AddTask") {
        const addTaskInput = await inquirer.prompt([
            {
                type: "input",
                name: "addTodo",
                message : "What do you want to add in your Todos?"
            }
        ])
        todosList.push(addTaskInput.addTodo)

        console.log(chalk.green.bold.italic.underline(`\n ${addTaskInput.addTodo} SuccessFully added in your todos. \n`));
    }
    else if (options.choices === "View Todo List") {
        console.log(chalk.white.underline.bold.italic("Your Todos List : \n"));
            todosList.forEach((task , index) => {
            console.log(chalk.green.bold.italic(`${index + 1} : ${task}`));
        })
    }
    else if (options.choices === "Delete") {
            const deleteTaskInput = await inquirer.prompt([
            {
                type: "number",
                name: "deleteIndex",
                message : "Enter the 'index no' you want to delete ? "
            }
        ])

        if (deleteTaskInput.deleteIndex > todosList.length) {
            console.log(chalk.red.bold(`${deleteTaskInput.deleteIndex} index not Found.`));
        } else {
            let Deleted = todosList.splice(deleteTaskInput.deleteIndex -1, 1)
            console.log(chalk.green.underline.bold.italic(`\n ${Deleted} is SuccessFully Deleted from your Todos List \n`));
        }
    } else if (options.choices === "Exit") {
        condition = false
        if (todosList.length > 0) {
            console.log(chalk.white.underline.bold.italic(`Your Final Todos List : \n `));
            todosList.forEach((task , index) => {
            console.log(chalk.green.bold.italic(`${index + 1} : ${task}.`));
        })
        } else {
            console.log(chalk.red.bold(`You didn't Have any Todos.`));
        }

        console.log(chalk.white.underline.bold.italic("\n Thank You So Much!"));
    } else if (options.choices === "Update") {
        let UpdateIndex = await inquirer.prompt([
            {
                type: "number",
                name: "UpdateIndexInput",
                message : "Enter a 'Index no' you want to Update ?"
            },
            {
                type: "input",
                name: "newTask",
                message : "Enter the Name of the New Task ?"
            }
        ])
        todosList[UpdateIndex.UpdateIndexInput -1 ] = UpdateIndex.newTask
        console.log(chalk.green.underline.bold.italic(`\n ${UpdateIndex.newTask} is SuccessFully updated in Todos List. \n`));
    }
        
    } 
