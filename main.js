import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome To Number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "janilumberbata",
        type: "number",
        Message: "Please Guess A Number Between 1 To 10"
    },
]);
if (answers.janilumberbata === randomNumber) {
    console.log('Mubarak Ho');
}
else {
    console.log('Pheli Fursat Mein Nikal');
}
