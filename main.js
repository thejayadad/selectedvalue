

let select = document.querySelector("select")
let result = document.getElementById("result");

select.addEventListener("change", () => {
    result.innerText = select.options[select.selectedIndex].value;
})