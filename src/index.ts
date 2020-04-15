import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
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

// LinkedList
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(4);
linkedList.add(2);
linkedList.add(8);
linkedList.add(-1);
linkedList.add(-10);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
