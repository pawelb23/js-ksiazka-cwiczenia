'use strict';

console.log("Rozdział 8 - Łączenie wszystkiego w całość");

var ships = [{
        locations: ["31", "41", "51"],
        hits: ["", "", ""]
    },
    {
        locations: ["14", "24", "34"],
        hits: ["", "hit", ""]
    },

    {
        locations: ["00", "01", "02"],
        hits: ["hit", ", "]
    }
];

console.log(ships[0].locations[1]); //Ważne w ten sposób dostaniemy się do pierwszego locations i do drugiego miejsca w tablicy 
//(czyli do liczby 41). Należy pamiętać, że liczymy wartości od zera, czyli pierwsze locations ma numer 0, tak jak wartość w tablicy.

var ship2 = ships[1];

var location2 = ship2.locations;

console.log("Współrzędne pola to: " + location2[1]);

console.log(ship2);

var ship3 = ships[2];

var hit3 = ship3.hits;

if (hit3[0] === "hit") {

    console.log("Aua, trafienie pierwszej komórki trzeciego okrętu!");

}


var ship1 = ships[0];

var hit1 = ship1.hits;

hit1[2] = "hit";

if (hit1[2] === "hit") {

    console.log("Aua, trafienie trzeciej komórki pierwszego okrętu!");

}

hit1[2] = "";

hit1[1] = "hit";

for (var i = 0; hit1.length > i; i++) {

    if (hit1[i] === "hit") {

        //        console.log(ship1.locations[0]);

        console.log("Aua, jest trafienie! " + ship1.locations[i]);

    } else {

        console.log("Pudło!");

    }

}