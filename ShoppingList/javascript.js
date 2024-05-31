const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

btn.addEventListener("click", () => {
  const item = input.value;

  if (!item) {
    console.log("Item must not be empty.");
    return;
  }

  input.value = "";

  const listText = document.createElement("span");
  listText.textContent = item;

  const listItem = document.createElement("li");
  listItem.appendChild(listText);
  list.appendChild(listItem);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.backgroundColor = "orange";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
