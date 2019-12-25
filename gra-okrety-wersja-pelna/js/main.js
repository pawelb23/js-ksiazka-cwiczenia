'use strict';

console.log("Gra w okręty - wersja pełna");

console.log("");

//====================

// Widok - wyświetla grę w oknie przeglądarki

var view = {

    displayMessage: function (msg) {

        var messageArea = document.getElementById("messageArea");

        messageArea.innerHTML = msg;

    },

    displayHit: function (location) {

        var cell = document.getElementById(location);

        cell.setAttribute("class", "hit");

    },

    displayMiss: function (location) {

        var cell = document.getElementById(location);

        cell.setAttribute("class", "miss");

    }

};

//view.displayMessage("czy działa");
//
//view.displayHit("01");
//
//view.displayMiss("34");

//=====================

// Model -  przechowuje bieżący stan gry

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
   },

        {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
           },

        {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }],

    fire: function (guess) {

        for (var i = 0; i < this.numShips; i++) {

            var ship = this.ships[i]; //w naszym przypadku --- i --- może wynieść                                   0,1,2 bo mamy trzy statki

            //            var locations = ship.locations;
            var index = ship.locations.indexOf(guess); // to skrócona wersja dwóch zakomnentowanych (wyżej i niżej) wierszy poleceń, aby zaoszczędzić trochę kodu
            //            var index = locations.indexOf(guess);


            //Przypomnienie!!! --- ""indexOf"" szuka w łańcuchu kawałka kodu, którego każemy mu szukać (w naszym przypadku podajemy do szukania/sprawdzenia całą współrzędną lokalizacji).

            if (index >= 0) {

                ship.hits[index] = "hit"; // --- index w nawiasie kwadratowym wskaże, w którym miejscu w tabeli hits, znajdujące się tam na początku puste pole, powinno zostać zastąpione przez trafienie (czyli "hit"). Przy trójmasztowcach mogą to być cyfry 0,1,2.

                console.log(index); //sprawdzenie indeksu to mogą być tylko cyfry 0,1,2. Kiedy wskazny strzał jest pudłem indeks zwraca -1 (minus jeden), więc zgodnie z założeniami tu tego nie zobaczymy, bo przecież (index >= 0)

                view.displayHit(guess);

                view.displayMessage("TRAFIONY!");

                if (this.isSunk(ship)) { // osnosi się do wartości isSunk podanej poniżej, jeżeli tam zwrócone zostanie true to do shipSunk dopisane zostaje +1. 

                    this.shipSunk++;

                }

                return true;

            }

        }

        view.displayMiss(guess);

        view.displayMessage("Spudłowałeś!");

        return false;
    },

    isSunk: function (ship) {

        for (var i = 0; this.shipLength > i; i++) { //shipLength --- wynosi 3 (jest to właściwość zapisana wyżej w tym obiekcie, do której się odwołujemy)

            if (ship.hits[i] != "hit") { // taki zapis sprawia, że jeżeli wszystkie pola hits jednego statku (gdyż w założeniu mamy --- ship) będą równe hit mamy wartość true, w innym przypadku wartość wynosi false

                return false;

            }

            return true;

        }

    }

};

model.fire("12");

model.fire("00");

model.fire("10");

model.fire("11");

//============================


// Kontroler -  kontroler spaja ze sobą widok i model, bo pobiera pole wytypowane przez użytkownika, sprawdza, czy strzał był celny, czy nie, a następnie zapisuje go w modelu. Kontroler dba także o pewne szczegóły administracyjne, takie jak liczba prób oraz postępy użytkownika w grze.

var controller = {
    
    guesses: 0,
    
    procesGuesses: function(guess) {       
        
    }
    
}


function parseGuess (guess) {
    
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    
  if (guess === null || guess.length != 2) {
      
      alert("Ups! Proszę wpisać literę i cyfrę!");
      
  } else { 
      
      firstChar = guess.charAt(0);
      
      var row = alphabet.indexOf(firstChar);
      
      //Przypomnienie - indexOf Metoda ta pobiera argument będący łańcuchem znaków i zwraca indeks pierwszego wystąpienia tego łańcucha w łańcuchu, na rzecz którego metoda została wywołana
      
//      czyli - jeżeli np. strzał to będzie A0
//      firstchar = guess.charAt(0); tu pobieramy to A
//      var row = alphabet.indexOf(A); sprawdzamy, na którym miejscu jest w tablicy alphabet, i ponieważ jest na pierwszym ma indeks o numerze 0.
//      czyli row = 0;
      
         }
    
}


