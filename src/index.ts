import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Number
const numbersCollection = new NumbersCollection([1, 4, 2, 8, -1, -10]);
numbersCollection.sort();
console.log(numbersCollection.data);

// String;
const charactersCollection = new CharactersCollection("EaXp");
charactersCollection.sort();
console.log(charactersCollection.data);

// LinkedList
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(4);
linkedList.add(2);
linkedList.add(8);
linkedList.add(-1);
linkedList.add(-10);
linkedList.sort();
linkedList.print();
