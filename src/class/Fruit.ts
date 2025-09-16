export class Fruit {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    describe(): void {
        console.log(`Le fruit choisi est : ${this._name}`);
    }
}