let addBtn: HTMLButtonElement | null = document.querySelector("#addBtn");
let fruitList: HTMLUListElement | null = document.querySelector("#fruitList");

addFruit();

function addFruit(): void {
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            let select: HTMLSelectElement | null = document.querySelector("#fruitSelect");
            if (select) {
                let fruit: string = select.value;
                let fruitTag: HTMLLIElement | null = document.createElement("li");
                fruitTag.innerHTML = fruit;
                fruitList?.insertAdjacentElement("beforeend", fruitTag);
            }
        })
    }
}