function rasschitat() {
  // 1. Собираем данные из окошек. Используем Number чтобы программа не путала цифры со словами.
  let shirina = Number(document.getElementById("shirina-input").value);
  let dlina = Number(document.getElementById("dlina-input").value);
  let cena = Number(document.getElementById("cena-input").value);
  let weight = Number(document.getElementById("weight-input").value);
  let Sh_Pl = Number(document.getElementById("tileSh_Pl-input").value);
  let D_Pl = Number(document.getElementById("tileD_Pl-input").value);
  let shov = parseFloat(document.getElementById("shov-input").value);
  let tolshina = parseFloat(document.getElementById("tolshina-input").value);
  let ploshad = 0;
  let Rezultat = "";
  let inputs = [
    "shirina-input",
    "dlina-input",
    "tileSh_Pl-input",
    "tileD_Pl-input",
  ];
  let hasError = false; // Сначала ставим что все хорошо

  inputs.forEach((id) => {
    let element = document.getElementById(id);

    // Убираем красную рамку
    element.classList.remove("error-input");

    // Проверка на 0
    if (Number(element.value) <= 0) {
      element.classList.add("error-input"); // Красим поле
      hasError = true; // Запоминаем, ошибка
    }
  });

  // Если нашли  хотя бы одну ошибку — стоп!
  if (hasError) {
    document.getElementById("result").innerHTML =
      "<h2 style='color: red'>Заполни поля!</h2>";
    return;
  }

  //Проверяем и считаем площадь.
  Rezultat = "<h2> Ваш результат готов:</h2>";
  if (shirina > 0 && dlina > 0) {
    ploshad = shirina * dlina;
    Rezultat += `<p> Площадь: ${ploshad.toFixed(2)} м2 </p>`;
    if (cena > 0) {
      let stoimost = cena * ploshad;
      Rezultat += `<p> Стоимость плитки: <b> ${stoimost.toLocaleString()} руб.</b></p>`;
    }
    if (weight > 0) {
      let obshiy_ves_plitki = ploshad * weight;
      Rezultat += `<p> Общий вес плитки: <b> ${obshiy_ves_plitki.toFixed(2)}кг</b></p>`;
    }
  }

  if (ploshad > 0 && Sh_Pl > 0 && D_Pl > 0) {
    let koef = Number(document.getElementById("ukladka-select").value);
    let ploshad_s_zapasom = ploshad * koef; //Выбор подрезки
    let ploshad_Plitki = (Sh_Pl / 100) * (D_Pl / 100);
    let vsego_shtyk = Math.ceil(ploshad_s_zapasom / ploshad_Plitki);
    let meshkov = Math.ceil((ploshad_s_zapasom * 5) / 25);
    Rezultat += `<p> Плитки (с запасом ${((koef - 1) * 100).toFixed(0)}%):<b> ${ploshad_s_zapasom.toFixed(2)} м2 </b></p>`;
    Rezultat += `<p> Всего плиток: <b> ${vsego_shtyk} шт </b></p>`;
    Rezultat += `<p> Плиточный клей:<b> ${meshkov} шт (по 25 кг)</b></p>`;
  }
  //Проверяем данные для затирки.
  if (Sh_Pl > 0 && D_Pl > 0 && shov > 0 && tolshina > 0) {
    let L = Sh_Pl * 10; // Переводим в мм.
    let W = D_Pl * 10; // Переводим в мм.

    let rashod_na_metr = ((L + W) * tolshina * shov * 1.6) / (L * W);
    let obshiy_ves = rashod_na_metr * ploshad;
    Rezultat += `<p> Расход затирки кг: <b> ${rashod_na_metr.toFixed(2)} кг</b><p>`;
    Rezultat += `<p> Общий вес: <b> ${obshiy_ves.toFixed(2)} кг</b></p>`;
  }

  document.getElementById("result").innerHTML = Rezultat;
}

//Очищаем все поля ввода и сбрасываем результат
function ochistit() {
  document.getElementById("shirina-input").value = "";
  document.getElementById("dlina-input").value = "";
  document.getElementById("cena-input").value = "";
  document.getElementById("weight-input").value = "";
  document.getElementById("tileSh_Pl-input").value = "";
  document.getElementById("tileD_Pl-input").value = "";
  document.getElementById("shov-input").value = "";
  document.getElementById("tolshina-input").value = "";

  document.getElementById("result").innerHTML = "Здесь появится расчет...";
}
