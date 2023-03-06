// let myName = prompt("Lütfen isminizi giriniz.")
// let karsilama= document.querySelector("#karsilama")

// Kullanıcı adını al
let name = prompt("Adınız nedir?");

// Karşılama mesajını göster
let greetingDiv = document.getElementById("greeting");
greetingDiv.innerText = `Merhaba, ${name}!  Hoş geldin!`;

// Saati göster
let timeDiv = document.getElementById("time");

function showTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
    let timeString = `${hour}:${minute}:${second} ${day}`;
    timeDiv.innerText = timeString;
}

// Her saniye saati güncelle
setInterval(showTime, 1000);