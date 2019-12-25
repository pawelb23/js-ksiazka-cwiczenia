'use strict';

console.log('Gra "Okręty"');

var data = new Date;

console.log(data);

document.write(data);

var randomLoc = Math.floor((Math.random() * 8) + 1);

//===================================

//Math.random() --- zwraca losową liczbę większą lub równą 0 i mniejszą od 1
//
//function wylosuj() {
//   return Math.random()
//}
//
//console.log(wylosuj());

//Math.floor --- Zwraca największą liczbę całkowitą mniejszą od lub równą danej ( równą tylko w przypadku, gdy liczba dana jest liczbą pełną).
//np. --- 
//Math.floor( 45.95); ===  45
//Math.floor(-45.95); === -45

//var matematyka = Math.floor(-60,99);
//
//console.log(matematyka);

//===================================

var location1 = randomLoc;

var location2 = location1 + 1;

var location3 = location1 + 2;

var instruction;

var smallText;

var guess; // zmienna przechowująca informacje o komórce (czyli liczbie bądź cyfrze) wskazanej przez użytkownika do sprawdzenia

var hits = 0;

var guesses = 0; // odpowiada za liczbę prób

var isSunk = false; // zmienna przechowuje informacje czy okręt został trafiony czy nie

while (isSunk == false) {

    guess = prompt("Gotów! Cel! Pal! --- Podaj cyfrę/liczbę z zakresu od 1 do 10 :)");

    if (guess < 1 || guess > 10) {

        //  || --- to jest operator alternatywy logicznej — OR — łączy on ze sobą dwa warunki w taki sposób, że całe wyrażenie przyjmie wartość true, jeśli którykolwiek z warunków będzie mieć wartość true. Jeśli jednak oba warunki będą mieć wartość false, to także całe wyrażenie przyjmie wartość false — a to będzie oznaczać, że podana liczba jest z zakresu od 0 do 6, czyli jest prawidłowa.

        alert("Proszę podać prawidłowy numer komórki!!! No wisz rozumisz ze wskazanego zakresu od 1 do 10 --- BĘCWALE XD");

        guesses = guesses + 1;

    } else {

        guesses = guesses + 1; // za pewne można tu też wpisać --- guesses = guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {

            alert("Jest trafienie!");

            hits = hits + 1;

            if (hits == 3) {

                isSunk = true;

                alert("Statek trafiony i zatopiony!!! Czy zdajesz sobie sprawę, że jesteś odpowiedzialny za śmierć jego załogi :( i czy to Cię nie przeraża! :(");

                if (guesses == 3) {

                    instruction = "Brawo! Potrzebowałeś tylko ";

                    smallText = "--- ";

                } else if (guesses == 4 || guesses == 5) {

                    instruction = "Potrzebowałeś tylko ";

                    if (guesses == 4) {

                        smallText = "--- ";

                    } else {

                        smallText = "około --- ";
                    }

                } else {

                    instruction = "Potrzebowałeś ";

                    if (guesses == 6 || guesses == 12 || guesses == 30) {

                        smallText = "--- ";

                    } else {

                        smallText = "około --- ";
                    }
                }
            }


        } else if (guess >= 1 && guess <= 10 && (guess != location1 ||
                guess != location2 || guess != location3)) {

            alert("Pudło jak w pysk sczelił! :)");

        }
        //                else if (guess == " ") {
        //                    
        //                    alert("Nic...cisza..isza..isza..sza...".trim())
        //                }
        //        
        else {

            alert("Nawet nie będę tego komentował... :(");

        }
    }

}

var stats = instruction + guesses + " prób, by zatopić okręt. Twoja efektywność wynosi " + smallText + Math.round(3 / guesses * 100) + "%.";

alert(stats);