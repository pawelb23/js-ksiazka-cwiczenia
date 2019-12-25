'use strict';

console.log("Rozdział 6 >>> DOM - Obiektowy Model Dokumentu");

var access = document.getElementById("code9");

var code = access.innerHTML;

code = code + " północy!!!";

document.write("<br>" + "Uwaga, uwaga!!! Tajne hasło to: " + "<b>" + code + "</b>");

console.log("");

document.write("<br><br>============================================");

//========================================

var planet = document.getElementById("greenplanet");

planet.innerHTML = "Alarm czerwony: rozpoczęto ostrzał z fazerów!"; //zmieni tekst w paragrafie. UWAGA!!! Jeżeli we wnątrz danego znacznika (np. paragrafu - jak tutaj) będą i inne znaczniki, znikną one, a cały środek zostanie zastąpiony przez dane podane w DOM.

planet.setAttribute("class", "redtext"); // doda klasę do paragrafu

//=========================================
console.log("");


var scoop = document.getElementById("planets");

var altText = scoop.getAttribute("alt");

if (altText == null) {

    console.log("Ups... jak widzę atrybut >> alt << nie istnieje.");

} else {

    console.log("W oknie konsoli nie mogę zobaczyć obrazka,");

    console.log(" ale powiedziano mi, że wygląda jak: " + altText);
}

//---
console.log("");

//Przykład prawidłowy na getAttribute wraz z getElementsByClassName (tak naprawdę wszystko wygląda tak samo jak w przypadku getAttribute wraz z getElementsByTagName)--- musi być zero na końcu w nawiasie kwadratowym

var scoopTwo = document.getElementById("planets");

//console.log(scoopTwo);

var scoopClassName = scoopTwo.getElementsByClassName("alt-test")[0]; //(podobnie jak niżej)taki zapis z zerem sprawi, że szukany dalej Attribut 'alt' się znajdzie, bez takiego zapisu w konsoli wywalało by błąd i nie dało by się nic z tym zrobić

console.log('Poniżej "scoopTwo.getElementsByClassName("alt-test")" --- czyli bez [0] na końcu, który nie pomoże nam później w znalezieniu szukanego atrubutu');
console.log(scoopTwo.getElementsByClassName("alt-test"));

console.log("");

console.log('Poniżej zapis, który później pozwoli nam znaleźć szukany atrybut --- czyli zapis "scoopTwo.getElementsByClassName("alt-test")[0]", czyli "scoopClassName"');
console.log(scoopClassName);

console.log("");

var altTextTwo = scoopClassName.getAttribute("alt");

if (altTextTwo == null) {

    console.log("Ups... jak widzę atrybut >> alt << nie istnieje.");

} else {

    console.log("W oknie konsoli nie mogę zobaczyć obrazka,");

    console.log(" ale powiedziano mi, że wygląda jak: " + altTextTwo);
}

//---
console.log("");

//Przykład prawidłowy na getAttribute wraz z getElementsByTagName (tak naprawdę wszystko wygląda tak samo jak w przypadku getAttribute wraz z getElementsByClassName) --- musi być zero na końcu w nawiasie kwadratowym

var scoopThree = document.getElementById("planets");

//console.log(scoopTwo);

var scoopTagName = scoopThree.getElementsByTagName("div")[0]; //(podobnie jak wyżej) taki zapis z zerem sprawi, że szukany dalej Attribut 'alt' się znajdzie, bez takiego zapisu w konsoli wywalało by błąd i nie dało by się nic z tym zrobić

var altTextThree = scoopTagName.getAttribute("alt");

if (altTextThree == null) {

    console.log("Ups... jak widzę atrybut >> alt << nie istnieje.");

} else {

    console.log("W oknie konsoli nie mogę zobaczyć obrazka,");

    console.log(" ale powiedziano mi, że wygląda jak: " + altTextThree);
}

//---
console.log("");

//Przykład jak możemy osiągnąć to co w powyższych dwóch przykładach, ale bez podawania w nawiasie numeru (w sumie najprostszy i najlepszy sposób z tych trzech)

var scoopFour = document.querySelector("#planets .alt-test").getAttribute("alt");//tutaj poruszamy się jak w css

var scoopFive = document.querySelector(".alt-test").getAttribute("alt");//tak też jest dobrze poruszamy się jak w css

console.log("Szukana wartość przy użyciu querySelector i getAttribute --- " + scoopFour);

console.log("Szukana wartość przy użyciu querySelector i getAttribute --- " + scoopFive);

console.log("");

var scoopSix = document.querySelectorAll(".alt-test")[0].getAttribute("alt");//pobieranie przy użyciu querySelectorAll

console.log(scoopSix);

//---
console.log("");


var scoopId = document.getElementById("test");

if (scoopId == null) {

    console.log("Ups... jak widzę element z id-test nie istnieje.");

} else {

    console.log("No proszę, proszę - takie id naprawdę istnieje.");

}