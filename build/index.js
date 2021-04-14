import * as readlineSync from "readline-sync";
import { Tree } from "./tree.js";
var tree = new Tree();
var actionCode = "1";
var newKey, newData;
while (actionCode !== "5") {
    actionCode = readlineSync.question("\n Menu: \n 1.Add node \n 2.Find Node \n 3.Delete node \n 4.Print tree \n 5.Exit \n");
    switch (actionCode) {
        case ("1"):
            newKey = Number(readlineSync.question("Enter key: "));
            newData = readlineSync.question("Enter data: ").toString();
            tree.Insert(newKey, newData);
            break;
        case ("2"):
            newKey = Number(readlineSync.question("Enter key: "));
            tree.Find(newKey);
            break;
        case ("3"):
            newKey = Number(readlineSync.question("Enter key: "));
            tree.Delete(newKey);
            break;
        case ("4"):
            tree.print();
            break;
        case ("5"):
            break;
        default:
            console.log("Not an action");
    }
}
