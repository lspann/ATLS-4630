//import { printHelloWorld as hello, PAGE_SIZE } from "./utils.js";
import * as Utils from "../utils.js";
import Counter from "./Counter.js";

Utils.printHelloWorld();

const counter = new Counter();
for (let i = 0; i < PAGE_SIZE; i++){
    Counter.countUp();
    console.log(counter.count);
}
