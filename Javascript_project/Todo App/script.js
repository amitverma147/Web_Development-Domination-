const inp = document.querySelector("#input-field");
const tasks = document.querySelector("#tasks");
var btn = document.querySelector(".submit-button");

btn.addEventListener("click", function () {
  if (inp.value.trim() === "") {
    alert("Please Enter Text!!🙏");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    tasks.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML =
      '<button class="delete-button"><svg class="delete-svgIcon" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>';
    li.appendChild(span);
  }
  inp.value = "";
  saveData();
});
tasks.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.closest(".delete-button")) {
      e.target.closest("li").remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}
function showTasks() {
  tasks.innerHTML = localStorage.getItem("data");
}
showTasks();
