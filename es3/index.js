

function addProduct() {
  
  
  const ul = document.querySelector("ul");
  const input = document.querySelector("input");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  li.innerText = input.value;
  input.value = "";

  li.appendChild(checkbox);
  ul.appendChild(li);
}