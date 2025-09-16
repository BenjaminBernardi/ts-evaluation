import { Fruit } from "./class/Fruit";

export function updateCounter(counter: number, counterEl: HTMLParagraphElement | null): void {
    if (counterEl) {
        counterEl.innerHTML = `Total : ${counter} fruit(s)`
    }
}

export function createFruitObject(fruit: string, fruitNb: number): void {
    let fruitObject: Fruit = new Fruit(fruit + fruitNb);
    fruitObject.describe();
}

export function createDeleteButton(): HTMLButtonElement {
    let deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.id = "delLastFruit";
    return deleteBtn;
}