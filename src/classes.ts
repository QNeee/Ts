
class Key {
    protected signature: number;
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(protected key: Key) { }
    getKey() {
        console.log('person get key');
        return this.key;

    }
}
abstract class House {
    protected door = false;
    protected tenats: Person[] = [];
    constructor(protected key: Key) { }
    comeIn(person: Person): void {
        if (this.door === true) {
            this.tenats.push(person);
            console.log('person in');
        }
    }
}
class myHouse extends House {
    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log('door is open')
        }
    }
}
const key = new Key;
const person = new Person(key);
const house = new myHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);