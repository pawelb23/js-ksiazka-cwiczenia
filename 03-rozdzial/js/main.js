'use strict';


console.log("Rozdział III - ćwiczenia");


function doIt(param) {

    param = 2;
}

var test = 1;

doIt(test);

console.log(test + " będzie dalej 1, bo --- var test --- nie zmienia się, wszystko co się zmienia dzieje się tylko i wyłącznie wewnątrz funkcji!!!");

//==================================================================
//
//function speak(kind) {
//    
//     var defaultSound = "EEEtam, pies albo kot to są zwierzęta :)"; //wprowadzamy zmienną (działa jak w każdym innym przypadku, równie dobrze mogła by być po za funkcją)
//       
//    if (kind == "pies" || kind == "PIES" || kind == "Pies") {
//
//        alert("Hau");
//
//    } else if (kind == "kot" || kind == "KOT" || kind == "Kot") {
//
//        alert("Miau");
//
//    } else {
//
//        alert(defaultSound);
//
//    }
//
//}
//
//var pet = prompt("Podaj rodzaj zwierzaka: "); //wpisujemy nazwę zwierzaka w wyskakującym oknie prompt i pojawia się komunikat --- Hau lub Miau
//
//speak(pet);
//
//console.log(pet); // kiedy w console.log użyjemy danych związanych z funkcją prompt, to w konsoli wyskoczy nam tylko to co wpiszemy w prompt na stronie, nie zaś cały łańcuch znaków np. 
//var pet = prompt("Podaj rodzaj zwierzaka: ");
//Jeżeli w prompt na stronie wpiszemy kot to wyskoczy nam kot, lis wyskoczy lis
//==============================================================================

function bake(degrees) {

    var message;

    if (degrees > 250) {

        message = "Nie jestem reaktorem atomowym!";

    } else if (degrees < 20) {

        message = "Nie jestem lodówką";

    } else {

        message = "To odpowiednia temperatura dla mnie. <br><br>";
        //        
        //                setMode("pieczenie");
        //        
        //                setTemp(degrees);
    }

    return message;
}

var status = bake(200);

document.write(status);

console.log(status);

//==================================================================

//function speak(kind) {
//
//    var defaultSound = "EEEtam, pies albo kot to są zwierzęta :)"; //wprowadzamy zmienną (działa jak w każdym innym przypadku, równie dobrze mogła by być po za funkcją)
//
//    if (kind == "pies" || kind == "PIES" || kind == "Pies") {
//
//        alert("Hau");
//
//    } else if (kind == "kot" || kind == "KOT" || kind == "Kot") {
//
//        alert("Miau");
//
//    } else {
//
//        alert(defaultSound);
//
//    }
//
//}
//
//var pet = prompt("Podaj rodzaj zwierzaka: "); //wpisujemy nazwę zwierzaka w wyskakującym oknie prompt i pojawia się komunikat --- Hau lub Miau
//
//speak(pet);
//
//console.log(pet);

//==============================================================================

var radius = 5;

var area = circleArea(radius);

alert(area);

function circleArea(r) {

    var a = Math.PI * r * r;

    return a;
}

console.log(circleArea(radius)); //--- pokaże to samo co area

console.log(area); //--- pokaże to samo co circleArea(radius)


console.log(Math.PI);
//==============================================================================

function clunk(times) {

    var num = times;

    //console.log("test times/num --- " + times);

    while (num > 0) {

        display("brzęk!");

        num = num - 1;
        //        console.log(clunkCounter);
        //console.log("test num --- " + num);
        //          Dwa powyższe console.log-i zadziałają tylko jeżeli wejdziemy do funkcji,                czyli jeżeli warunki, aby uruchomić funkcję zostaną spełnione
    }
}

function kodoskryptoinator(size) {

    var facky = 1;

    clunkCounter = 0;
    //--- moim zdaniem ta deklaracja nie jest już tu potrzebna, gdyż mamy po za funkcją -- var clunkCounter --

    if (size == 0) {

        display("brzdęk!");

    } else if (size == 1) {

        display("biiip!");

    } else {

        while (size > 1) {

            facky = facky * size;

            size = size - 1;

            //Wzór na Silnię --- jak to działa --- 
            //            facky = 1 * 5;
            //        +   facky = 5 * 4;
            //        +   facky = 20 * 3;
            //        +   facky = 60 * 2;
            //            
            //  i tu koniec, gdyż w założeniu size > 1,
            //            
            //        czyli silnia z 5 wynosi 120.
        }

        clunk(facky);

    }
}

function display(output) {

    console.log(output);

    clunkCounter = clunkCounter + 1;

    console.log("test clunkCounter --- " + clunkCounter);

}

var clunkCounter = 0;

kodoskryptoinator(5);

console.log(clunkCounter);

//==================================================================================

function silnia(n) {

    var wynik = 1;

    while (n > 0) {

        wynik = wynik * n;

        n--;

        //Silnia --- jak to działa --- 
        //W console.log(wynik); widać, że silnia w powyższym wzorze jest rozpisana następująco
        //            wynik = 1 * 6;
        //        +   wynik = 6 * 5;
        //        +   wynik = 30 * 4;
        //        +   wynik = 120 * 3;
        //        +   wynik = 360 * 2;
        //        +   wynik = 720 * 1;
        //            
        //  i tu koniec, gdyż w założeniu n > 0,
        //            
        //        czyli silnia z 6 wynosi 720.



        console.log(wynik);
    }
    document.write("<br>" + "<b>" + wynik + "</b>" + " --- to już inne ćwiczenie, nie chodzi o temperaturę, chodzi o silnię!!!");
}

silnia(6);

//==============================================

var info = false; //użyte w pierwszej funkcji (do drugiej jest osobna zmienna gdyż ta zmienna może zmienić wartość na true!!!)

function speak(kind) {

    var defaultSound = "EEEtam, pies albo kot to są zwierzęta :)"; //wprowadzamy zmienną (działa jak w każdym innym przypadku, równie dobrze mogła by być po za funkcją)

    if (kind == "pies" || kind == "PIES" || kind == "Pies") {

        alert("Hau");

        alert("Gratuluję! Dobra odpowiedź, możesz wejść na stronę!!! :)");

    } else if (kind == "kot" || kind == "KOT" || kind == "Kot") {

        alert("Miau");

        alert("Gratuluję! Dobra odpowiedź, możesz wejść na stronę!!! :)");

    } else {

        alert(defaultSound);

        alert("Zła odpowiedź spróbuj jeszcze raz!!!");

        while (info == false) {

            var text = prompt("Podaj rodzaj zwierzaka:"); //całe wyrażenie musi tu być wpisane w funkcję (aby prompt był zawsze czysty po przeładowaniu), jeżeli nie wpiszemy całości (jak rozumiem),  tylko wpisalibyśmy tylko pet --- funkcja przypisuje jej po pierwszym razie już wartość (którą wpiszemy), która jeżeli nie podamy prawidłowej odpowiedzi jest błędna i dlatego tworzy się pętla, której nie możemy przerwać. Można to sprawdzić z użyciem console.log

            console.log(text);

            //            var defaultSound = "EEEtam, pies albo kot to są zwierzęta :)"; //wprowadzamy zmienną (działa jak w każdym innym przypadku, równie dobrze mogła by być po za funkcją)

            if (text == "pies" || text == "PIES" || text == "Pies") {

                info = true;

                alert("Hau");

                alert("Gratuluję! Dobra odpowiedź, możesz wejść na stronę!!! :)");

            } else if (text == "kot" || text == "KOT" || text == "Kot") {

                info = true;

                alert("Miau");

                alert("Gratuluję! Dobra odpowiedź, możesz wejść na stronę!!! :)");

            } else if (text == "") {

                alert(defaultSound);

                alert("P.S. Pamiętaj, że brak odpowiedzi to również zła odpowiedź!!!")


            } else {

                alert(defaultSound);

                alert("Zła odpowiedź spróbuj jeszcze raz!!!");

            }
        }

    }

}


var pet = prompt("Podaj rodzaj zwierzaka:"); //wpisujemy nazwę zwierzaka w wyskakującym oknie prompt i pojawia się komunikat --- Hau lub Miau

speak(pet); //--- wywołuje funckję

console.log(pet);

var infoDwa = false; // musi być infoDwa bo powyższa funkcja może zmienić wartość wyrażenia na true!!!

console.log(info);

//===================================================

while (infoDwa == false) {

    var petDwa = prompt("Podaj rodzaj zwierzaka (drugie ćwiczenie - więc drugi raz!!!):"); //całe wyrażenie musi tu być wpisane w funkcję (aby prompt był zawsze czysty po przeładowaniu), jeżeli nie wpiszemy całości (jak rozumiem),  tylko wpisalibyśmy tylko pet --- funkcja przypisuje jej po pierwszym razie już wartość (którą wpiszemy), która jeżeli nie podamy prawidłowej odpowiedzi jest błędna i dlatego tworzy się pętla, której nie możemy przerwać. Można to sprawdzić z użyciem console.log

    console.log(pet);

    var defaultSound = "EEEtam, pies albo kot to są zwierzęta :)"; //wprowadzamy zmienną (działa jak w każdym innym przypadku, równie dobrze mogła by być po za funkcją)

    if (petDwa == "pies" || petDwa == "PIES" || petDwa == "Pies") {

        infoDwa = true;

        alert("Hau");

        alert("Gratuluję! Dobra odpowiedź, możesz wejść na stronę!!! :)");

    } else if (petDwa == "kot" || petDwa == "KOT" || petDwa == "Kot") {

        infoDwa = true;

        alert("Miau");

        alert("Gratuluję! Dobra odpowiedź, możesz wejść na stronę!!! :)");

    } else if (petDwa == "") {

        alert(defaultSound);

        alert("P.S. Pamiętaj, że brak odpowiedzi to również zła odpowiedź!!!")


    } else {

        alert(defaultSound);

        alert("Zła odpowiedź spróbuj jeszcze raz!!!");

    }
}

console.log(``);

//============================================================

function doIt(param) {

    console.log(param); //tutaj param przyjmuje wartość - 1 (od zmiennej test)
    param = 2; // tutaj nadpisujemy wartość dla zmiennej param, więc teraz wynosi ona 2
    console.log(test); // tutaj wyświetlamy wartość zmiennej globalnej, która dalej jest równa 1
    return param; //zwracamy param, który po ostatnim przypisaniu wartości wynosi 2
    // Po returnie już dalej nic się nie stanie w funkcji

}

var test = 1;
console.log(doIt(test)); // otrzymamy 2 bo to wartość z return 
console.log(test); // wartość zmiennej globalnej test dalej wynosi 1