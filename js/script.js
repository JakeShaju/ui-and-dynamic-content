// References to UI elements
const inputField = document.getElementById("itemInput");
const addButton = document.getElementById("addItemBtn");
const list = document.getElementById("itemList");
const feedback = document.querySelector(".feedback");

// Function to add item
function addItem() {
  const value = inputField.value.trim();

  if (value) {
    const listItem = document.createElement("li");
    listItem.textContent = value;
    list.appendChild(listItem);

    feedback.textContent = "";
    inputField.value = "";
    inputField.focus();
  } else {
    feedback.textContent = "Nothing entered!";
  }
}

// Register event
addButton.addEventListener("click", addItem);

// Optional: allow Enter key to trigger add
inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
