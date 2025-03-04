const item = document.getElementById("bar");
item.addEventListener("click", function openModal() {
  const modal = document.getElementById("modal");
  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
});

const element = document.body.appendChild(document.createElement("div"));

element.innerHTML = `<i class="fa fa-arrow-up"></i>`;

element.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

element.style.position = "fixed";
element.style.zIndex = "1000";
element.style.bottom = "5rem";
element.style.right = "5rem";
element.style.width = "50px";
element.style.height = "50px";
element.style.backgroundColor = "#10cab7";
element.style.color = "white";
element.style.textAlign = "center";
element.style.lineHeight = "50px";
element.style.fontSize = "20px";
element.style.fontWeight = "bold";
element.style.borderRadius = "50%";
element.style.cursor = "pointer";

const header = document.getElementsByClassName("header");

const registerButton = document.createElement("button");
registerButton.innerHTML = "Register";
registerButton.style.backgroundColor = "#10cab7";
registerButton.style.color = "white";
registerButton.style.border = "none";
registerButton.style.padding = "10px 20px";
registerButton.style.borderRadius = "5px";
registerButton.style.cursor = "pointer";
registerButton.style.marginLeft = "30px";
registerButton.style.position = "absolute";
registerButton.style.right = "100px";
registerButton.style.top = "10px";

header[0].children[0].children[1].appendChild(registerButton);
