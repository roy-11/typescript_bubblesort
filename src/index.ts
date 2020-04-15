import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

// Number
const numbersCollection = new NumbersCollection([1, 4, 2, 8, -1, -10]);
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log(sorter1.collection);

// String
const charactersCollection = new CharactersCollection("EaXp");
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection);
