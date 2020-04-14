import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([1, 4, 2, 8, -1, -10]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
