import inquirer from "inquirer";

let friendName = await inquirer.prompt([
    {
        name: "name1",
        type: "input",
        message: "Enter a name:"
    }
])
switch (friendName.name1) {
    case "sadia":
        console.log(`Hey sadia! you are a known friend`);
        break;

        case "sara":
            console.log(`Hi sara! you are a known friend`);
            break;

            case "sana":
                console.log(`Hello sana! you are a known friend`);
                break;

                default:
                    console.log(`I dont recognize this name`);
                    break;
};