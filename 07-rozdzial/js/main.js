'use strict';

console.log("Rozdział 7 - Typy, równości, konwersje i cały ten jazz");

console.log("");

//====================================

var x;

if (x == undefined) {

    console.log("Zmiennej nie została przypisana żadna wartość.")

}

console.log("");

//====================================

var subject = "To tylko łańcuch znaków";

var probe = typeof subject;

console.log(probe);

var checkIt = 12;

console.log(typeof checkIt);

console.log("");

//====================================

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {
    "abcdef": 123
};
var test8 = ["abcdef", 123];

function test9() {
    return "abcdef"
};
var test10 = null;
var test11 = 0 / 0;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
console.log(typeof test11);

console.log("");

//=====================================

var a = 0 / 0;
var b = "food" * 1000;
var c = Math.sqrt(-9);

console.log(a);
console.log(b);
console.log(c);

console.log("");

//=====================================

var myNum;

if (isNaN(myNum)) { // wydaje mi się, że ta funkcja tak działa. W myNum umieszczamy cały cią informacji, które chcemy sprawdzić (czy ich wynik jest czy też nie jest równy NaN - jeżeli jest NaN wyskakuje true, jeżeli nie jest to NaN wyskakuje false) 

    //    myNum = true;
    //    myNum = "abc";
    myNum = 0 / 0; //różne opcje, które przyszły mi do głowy

};

console.log(isNaN(myNum));

console.log("");

//=====================================

var x = Infinity - Infinity;

console.log(x);

console.log("");
//=====================================

if (99 == "99") {

    console.log("Liczba jest równa łańcuchowi znaków!");

} else {
    console.log("Przecież liczba nie będzie równa łańcuchowi.");

}

console.log("");
//=====================================

var xNum = 0 / 0;


console.log(xNum + " --- jak widać wykorzystując funkcję typeof, możemy zobaczyć, iż NaN jest także odczytywane jako Number (co widać tu) --- " + typeof xNum);

console.log("");
//=====================================

var xGetIt = "10";

function getTrueOrNot() {

    if (xGetIt == 10) {

        console.log(true);
        return (xGetIt == 10);
    } else {

        console.log(false);
        return (xGetIt == 10);
    }
}

console.log(getTrueOrNot());

console.log("");

//====================================

function getTrueOrNotTwo(a, b) {

    if (a == b) {

        console.log(true);
        return (a == b);
    } else {
        console.log(false);
        return (a == b);
    }
}

console.log(getTrueOrNotTwo(0, ""));

//Przykładowe funkcje powyżej z returnem, true, false itp.

//===================================

console.log("");


function findCarInLot(car) {

    for (var i = 0; i < lot.length; i++) {

        if (car === lot[i]) {

            return i;

        }

    }

    return -1;

}

var chevy = {
    make: "Chevy",
    model: "Bel Air"
};

var taxi = {
    make: "SieMoCorp",
    model: "Taxi"
};

var fiat1 = {
    make: "Fiat",
    model: "500"
};

var fiat2 = {
    make: "Fiat",
    model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = console.log(findCarInLot(fiat2));

var loc2 = console.log(findCarInLot(taxi));

var loc3 = console.log(findCarInLot(chevy));

var loc4 = console.log(findCarInLot(fiat1));

console.log("");
//===================================

var emot = "XOxxOO";

var hugs = 0;

var kisses = 0;

emot = emot.trim();

emot = emot.toUpperCase();

for (var i = 0; i < emot.length; i++) {

    if (emot.charAt(i) === "X") {

        hugs++;

    } else if (emot.charAt(i) === "O") {

        kisses++;

    }

}

//=======================================
console.log("");

var name = "Janka";

var phone = "867-5309";

var fact = "To liczba pierwsza";

var songName = phone + "/" + name;

console.log(songName);

console.log("");

//======================================

var index = phone.indexOf("-"); //szukamy tego znaku w łańcuchu, numeru jego indexu, będzie to cyfra 3 (bo index liczymy od 0).

console.log(index);

if (fact.substring(10, 18) === "pierwsza") { //szukamy słowa od 10 do 18 znaku w całym łańcuchu.

    console.log(fact);
    console.log(fact.substring(3, 9)); //tym sposobem możemy także wywołać tylko część jakiegoś łańcucha np. w console.log.

}

console.log("");
//======================================

var input = "janka@bardzosprytni.com.pl";

for (var i = 0; i < input.length; i++) {

    if (input.charAt(i) === "@") { // tutaj liczy cyfry od zera

        console.log("Znak @ znajduje się w miejscu o indeksie " + i); // dodając np. tutaj input.length będziemy wiedzieli jaka jest długość całego łańcucha znaków

    }

}

console.log("");
//=====================================

var phrase = "czy to kot, czy coś innego?"; //To jest łańcuch znaków, na rzecz którego wywołamy metodę indexOf.

var index = phrase.indexOf("kot"); //A naszym celem jest znalezienie pierwszego wystąpienia słowa „kot”. Zwracany jest indeks pierwszego kota.


console.log("Słowo kot zapisano, zaczynając od indeksu " + index); //Zwracany jest indeks pierwszego kota.

index = phrase.indexOf("czy", 7); //Można także dodać drugi argument określający indeks miejsca, od którego zostaną rozpoczęte poszukiwania. Ponieważ rozpoczynamy poszukiwania od znaku o indeksie 7, zatem pominiemy pierwsze wystąpienie słowa „czy” i znajdziemy drugie, rozpoczynające się od znaku o indeksie 12.

console.log("Słowo czy zapisano, zaczynając od indeksu " + index); //Ponieważ rozpoczynamy poszukiwania od znaku o indeksie 7, zatem pominiemy pierwsze wystąpienie słowa „czy” i znajdziemy drugie, rozpoczynające się od znaku o indeksie 12.


index = phrase.indexOf("pies");

console.log("Słowo pies zapisano, zaczynając od indeksu " + index + ". Wartość < -1 > oznacza, że nie udało się znaleźć łańcucha znaków.");

//Zauważ, że jeśli nie udało się znaleźć łańcucha znaków, metoda zwraca wartość –1.

console.log("");

//======================================

//Metoda split

var data = "imię|telefon|adres";
var vals = data.split("|");
console.log("Oto tablica z podzielony łańcuchem ", vals); //dzięki przecinkowi nie zrobi się z tego jeden długi łańcuch

//Metoda replace

function myFunction() {

    var str = document.getElementById("demo").innerHTML;
    var res = str.replace("Nie", "Tak");
    document.getElementById("demo").innerHTML = res; // Zapis pozwala dostać się do szukanego elementu document.getElementById("demo").innerHTML i użyć tu metody replace poprzez var res    
}

var strOne = "Hello World";
var resOne = strOne.replace("Hello", "Bye");

console.log(resOne);

//=======================================

console.log("");

//Metoda match

var sentence = "The rain in SPAIN stays mainly in the plain";

var searchIn = sentence.match(/in/gi);
// Wyszuka in w tekście (g --- po ukośniku sprawi, że znajdzie wszystkie in w tekście, a i --- sprawi, że nie będzie miało znaczenia czy zapisane zostały one małymi czy dużymi literami.

console.log("Metoda match --- ", searchIn); //dzięki przecinkowi nie zrobi się z tego jeden długi łańcuch

//Dokładniej, można sprawdzić pod tym linkiem lub poszukać w necie.

//https://kursjs.pl/kurs/regular.php

//======================================

console.log("");

//Metoda concat

var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);

console.log(res);

//======================================

console.log("");

var input = "123-4567";
for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) === "-") {
        console.log("Znak @ znajduje się w miejscu o indeksie " + i);
    }
}

//==================================

console.log("");

//Strona 329 książka

//Tekst zadania --- Mamy numer telefonu zapisany w formacie "123-4567". Masz napisać kod, który go zaakceptuje lub odrzuci. Aby numer został zaakceptowany, musi się składać z siedmiu cyfr od 0 do 9, a w środku musi mieć minus.

//Pierwszy sposób

function validate(phoneNumber) {

    if (phoneNumber.length !== 8) {

        return false;

    }

    for (var i = 0; i < phoneNumber.length; i++) {

        if (i === 3) {

            if (phoneNumber.charAt(i) !== "-") {

                console.log(phoneNumber.charAt(3));

                return false;


            }

        } else if (isNaN(phoneNumber.charAt(i))) {

            return false;

        }

    }

    console.log(phoneNumber.charAt(3)); //Na tym poziomie wszystkie sprawdzenia w console.log działają, wyżej nie chcą (może to przez returny). Wynik jaki zobaczymy w console.log to --- false, a więc dobrze bo oznacza to, że jest to liczba. Jeżeli byłoby true to byłoby źle bo oznaczało by to, że nie jest to liczba. 

    return true;
}

console.log(validate("123-4567"));

console.log("");
//===============================

//Strona 330 książka

//Tekst zadania --- Mamy numer telefonu zapisany w formacie "123-4567". Masz napisać kod, który go zaakceptuje lub odrzuci. Aby numer został zaakceptowany, musi się składać z siedmiu cyfr od 0 do 9, a w środku musi mieć minus.

//Drugi spsób

function validateTwo(phoneNumber) {

    if (phoneNumber.length !== 8) {

        return false;

    }

    var first = phoneNumber.substring(0, 3);

    var second = phoneNumber.substring(4);

    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second))

    {

        return false;

    }

    console.log(phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second));

    return true;

}

console.log(validateTwo("123-4567"));

//================================

console.log("");

//Strona 331 książka

//Tekst zadania utrudniony --- Mamy numer telefonu zapisany w formacie "123-4567". Masz napisać kod, który go zaakceptuje lub odrzuci. Aby numer został zaakceptowany, musi się składać z siedmiu cyfr od 0 do 9, a opcjonalnie może zawierać minus. 


function validateThree(phoneNumber) {

    if (phoneNumber.length > 8 ||

        phoneNumber.length < 7) {

        return false; // Jeżeli długość numeru jest większa niż 8 lub krótsza niż 7 zwróć fałsz

    }

    for (var i = 0; i < phoneNumber.length; i++) {

        if (i === 3) {

            if (phoneNumber.length === 8 &&

                phoneNumber.charAt(i) !== "-") {

                return false; // Jeżeli na trzecim miejscu w łańcuchu jest coś innego niż "-" a numer liczy 8 znaków zwróć fałsz

            } else if (phoneNumber.length === 7 &&

                isNaN(phoneNumber.charAt(i))) {

                return false; //Jeżeli numer liczy 7 znaków, ale nie jest to liczba --- mówi o tym funkcja isNaN zwróć fałsz

            }

        } else if (isNaN(phoneNumber.charAt(i))) {

            return false; //Jeżeli łańcuch kolejnych znaków nie liczba zwróć fałsz

        }

    }

    return true; //W każdym innym wypadku zwróć prawdę

}

console.log(validateThree("123-4567"));

console.log("");

//======================================

//Strona 332 książka

//Tekst zadania utrudniony --- Mamy numer telefonu zapisany w formacie "123-4567". Masz napisać kod, który go zaakceptuje lub odrzuci. Aby numer został zaakceptowany, musi się składać z siedmiu cyfr od 0 do 9, a opcjonalnie może zawierać minus. 

function validateFour(phoneNumber) {

    if (phoneNumber.length > 8 ||

        phoneNumber.length < 7) {

        return false;

    }

    var first = phoneNumber.substring(0, 3);

    var second = phoneNumber.substring(phoneNumber.length - 4);


    if (isNaN(first) || isNaN(second)) {

        return false;

    }

    if (phoneNumber.length === 8) {

        return (phoneNumber.charAt(3) === "-");

    }

    return true;

}

console.log(validateFour("123-4567"));

//======================================

console.log("");

//Wyrażenia regularne

//Strona 332 i 653 książka

//Tekst zadania utrudniony --- Mamy numer telefonu zapisany w formacie "123-4567". Masz napisać kod, który go zaakceptuje lub odrzuci. Aby numer został zaakceptowany, musi się składać z siedmiu cyfr od 0 do 9, a opcjonalnie może zawierać minus.

function validateFive(phoneNumber) {

    return phoneNumber.match(/^\d{3}-?\d{4}$/);

}

console.log(validateFive("123-4567"));

//Wynikiem jest tablica zawierająca wszelkie fragmenty łańcucha znaków, do których udało się dopasować przekazane wyrażenie regularne. Jeśli metoda zwróci wartość null, oznacza to, że wyrażenia nie udało się dopasować.
//to znaczy, że poniższe wyrażenie jest dobre gdyż w console.log pokazuje się tablica z pełną liczbą. Jeżeli zmienimy liczbę "123-4567" np. na "12344567" w console.log pokaże się --- null, co oznacza, że kod jest zły i nie pasuje do założeń funkcji.


//=================================

console.log("");



function Duck(sound) {

    this.sound = sound;

    this.quack = function () {

        console.log(this.sound);

    }

}

var toy = new Duck("kwa, kwa");

toy.quack();

console.log(typeof toy);

console.log(toy instanceof Duck);

console.log("");

//=================================





//Mój test - moja własna funkcja

function testerFunction() {

    console.log("TEST, TEST, TEST, Wcisnąłeś jeden - 1");

    var information = false;

    if (information === false) {

        var text = prompt("Wciśnij cyfrę jeden");

    }

    while (text != 1) {

        var text = prompt("Ponownie powtarzam, wciśnij cyfrę jeden");

         information === true;
        
        console.log(text);

    }

    if (text == 1) {

        console.log(text);

        information === true;

        alert("Brawo możesz wejść na stronę");

        var messageOnPage = document.getElementById("message");

        messageOnPage.innerHTML = "Wcisnąłeś jeden i pojawił się ten tekst";



    }
}

testerFunction();