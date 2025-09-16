import { createFruitObject, updateCounter } from "./utils";

let addBtn: HTMLButtonElement | null = document.querySelector("#addBtn");
let fruitList: HTMLUListElement | null = document.querySelector("#fruitList");
let counterEl: HTMLParagraphElement | null = document.querySelector("#counter");

let counter: number = 0;
let fruitNb: number = 1;

addFruit();

function addFruit(): void {
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            let select: HTMLSelectElement | null = document.querySelector("#fruitSelect");
            if (select) {
                let fruit: string = select.value;
                createFruitObject(fruit, fruitNb);
                fruitNb++;
                let fruitTag: HTMLLIElement | null = document.createElement("li");
                fruitTag.innerHTML = fruit;
                fruitList?.insertAdjacentElement("beforeend", fruitTag);
                counter++;
                if (counterEl) {
                    updateCounter(counter, counterEl);
                }
            }
        })
    }
}