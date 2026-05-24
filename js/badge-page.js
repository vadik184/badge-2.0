const formButton = document.querySelector(".form-button");
const nameInput = document.getElementById("name");
const positionSelect = document.getElementById("position");
const imageInput = document.getElementById("image-input-id");
const photoPreview = document.querySelector(".upload-photo");
const maketUserName = document.querySelector(".maket-user-name");
//макет//
//відображення імені

//створюємо контейнер для бейджа
const badgeContainer = document.createElement("div");
badgeContainer.className = "badge-container";
document.body.appendChild(badgeContainer);
//коли вибираємо фото
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.className = "preview-img";
    //очищаємо контейнер і додаєм фото
    photoPreview.innerHTML = "";
    photoPreview.appendChild(img);
  }
});
//кнопка сформувати
formButton.addEventListener("click", () => {
  //збираємо дані
  const name = nameInput.value.trim();
  const position = positionSelect.value;
  const gender = document.querySelector(
    'input[name="gender-choise"]:checked',
  )?.value;
});
//створюємо контейнер бейджа
const badge = document.createElement("div");
badge.className = "badge";
//фото
const img = document.createElement("img");
if (imageInput.files[0]) {
  img.scr = URL.createObjectURL(imageInput.files[0]);
} else {
  img.scr =
    gender === "female" ? "../img/female-avatar.png" : "../img/male-avatar.png";
}
img.className = "badge-photo";
badge.appendChild(img);
//ім'я
const nameEl = document.createElement("h3");
nameEl.textContent = name || "Без імені";
badge.appendChild(nameEl);
//посада
const posEl = document.createElement("p");
posEl.textContent = position || "Без імені";
badge.appendChild(posEl);
//очищаємо контейнер і додаєм новий бейдж
badgeContainer.innerHTML = "";
badgeContainer.appendChild(badge);
//кнопка друку

console.log(
  formButton,
  nameInput.value,
  positionSelect.value,
  imageInput,
  photoPreview.value,
);
