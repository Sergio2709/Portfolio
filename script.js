const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menu_item1 = document.querySelector("#item1");
const menu_item2 = document.querySelector("#item2");
const menu_item3 = document.querySelector("#item3");
const menu_item4 = document.querySelector("#item4");
const menu_item5 = document.querySelector("#item5");
const menu_item6 = document.querySelector("#item6");
const menu_item7 = document.querySelector("#item7");


abrir.addEventListener("click", ()=>{
    menu.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    menu.classList.remove("visible");
})

menu_item1.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menu_item2.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menu_item3.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menu_item4.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menu_item5.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menu_item6.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menu_item7.addEventListener("click", () => {
    menu.classList.remove("visible");
})