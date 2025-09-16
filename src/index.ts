import { createDeleteButton, createFruitObject, updateCounter } from "./utils";

let addBtn: HTMLButtonElement | null = document.querySelector("#addBtn");
let fruitList: HTMLUListElement | null = document.querySelector("#fruitList");
let counterEl: HTMLParagraphElement | null = document.querySelector("#counter");

let counter: number = 0;
let fruitNb: number = 1;

addFruit();
deleteBtn();

function addFruit(): void {
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            let select: HTMLSelectElement | null = document.querySelector("#fruitSelect");
            if (select && fruitList && counterEl) {
                let fruit: string = select.value;
                createFruitObject(fruit, fruitNb);
                let fruitTag: HTMLLIElement | null = document.createElement("li");
                fruitTag.innerHTML = fruit;
                fruitTag.id = fruit + fruitNb;
                fruitNb++;
                fruitList.insertAdjacentElement("beforeend", fruitTag);
                counter++;
                updateCounter(counter, counterEl);
            }
        })
    }
}

function deleteBtn(): void {
    if (addBtn) {
    addBtn.insertAdjacentElement("afterend", createDeleteButton());
    let deleteBtn: HTMLButtonElement | null = document.querySelector("#delLastFruit");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            fruitNb--;
            counter--;
            // Pas totalement terminé...
            updateCounter(counter, counterEl);
        })
    }
}
}