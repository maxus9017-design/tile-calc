function rasschitat() {
  // 1. Собираем данные из окошек. Используем Number чтобы программа не путала цифры со словами.
  let shirina = Number(document.getElementById("shirina-input").value);
  let dlina = Number(document.getElementById("dlina-input").value);
  let cena = Number(document.getElementById("cena-input").value);
  let weight = Number(document.getElementById("weight-input").value);
  let Sh = Number(document.getElementById("tileSh-input").value);
  let D = Number(document.getElementById("tileD-input").value);

  // 2. Проверка на пустое поле или нули
  if (
    shirina <= 0 ||
    dlina <= 0 ||
    cena <= 0 ||
    weight <= 0 ||
    Sh <= 0 ||
    D <= 0
  ) {
    document.getElementById("result").innerHTML =
      "Ошибка: введите положительные числа!";
  }
  // 3. Проверка, что введены именно цифры
  else if (
    isNaN(shirina) ||
    isNaN(dlina) ||
    isNaN(cena) ||
    isNaN(weight) ||
    isNaN(Sh) ||
    isNaN(D)
  ) {
    document.getElementById("result").innerHTML =
      "Ошибка: введите корректные цифры!";
  } else {
    // 4. Расчеты
    let ploshad = shirina * dlina;
    let kley = Math.ceil(ploshad / 5); // 1 мешок на 5 квадратов, округляем в большую сторону
    let vesWeight = ploshad * weight;
    let itogo_deneg = ploshad * cena;
    let ploshad_s_zapasom = ploshad * 1.1; // Добовляем 10% на подрезку
    let ploshadPlitki = (Sh / 100) * (D / 100);
    let vsegoShtyk = Math.ceil(ploshad_s_zapasom / ploshadPlitki); // Округляем количество плиток в большую сторону

    console.log(`Площадь: ${ploshad}, Цена: ${itogo_deneg} руб.`);

    // 5. Выводим готовые результаты
    document.getElementById("result").innerHTML = `
            <h2>Ваш расчет готов:</h2>
            <p>Площадь без подрезки: ${ploshad.toFixed(2)} м²</p>
            <p><b>Купить плитки (+10%): ${ploshad_s_zapasom.toFixed(2)} м²</b></p>
            <p>Итого к оплате: ${itogo_deneg} руб.</p>
            <p>Общий вес заказа: ${vesWeight.toFixed(1)} кг</p>
            <p>Клея понадобится: ${kley} меш. (по 25 кг)</p>
            <p>Всего плиток: ${vsegoShtyk} шт </p>
        `;
  }
}
// Очищаем все поля ввода и сбрасываем резкльтат
function ochistit() {
  document.getElementById("shirina-input").value = "";
  document.getElementById("dlina-input").value = "";
  document.getElementById("cena-input").value = "";
  document.getElementById("weight-input").value = "";
  document.getElementById("tileSh-input").value = "";
  document.getElementById("tileD-input").value = "";
  document.getElementById("result").innerHTML = "Здесь появится расчет...";
}
