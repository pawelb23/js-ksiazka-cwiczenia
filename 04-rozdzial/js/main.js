'use strict';

console.log("Rozdział 4 - Tablice");

function makePhrases() {

    var words1 = ["nieprzerwane", "wielowarstwowe", "tysiącmetrowe", "biznesowe", "niepowstrzymane"];

    var words2 = ["wspomagane", "wartościowe", "zorientowane", "skoncentrowane", "wyrównane"];

    var words3 = ["procesy", "rozwiązania", "punkty", "strategie", "wizje"];

    var rand1 = Math.floor(Math.random() * words1.length);

    //        console.log(rand1);

    var rand2 = Math.floor(Math.random() * words2.length);

    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];

    alert(phrase);

    console.log(phrase);

    //    return phrase;  
    //---- console.log(makePhrases()); działa tylko z returnem

    console.log(words1[words1.length - 1]); //tak możemy (przykładowo) pobrać np. ostatnie słowo z pierszej tablicy

}



makePhrases();

//console.log(makePhrases()); --- działa tylko z returnem

//===========================================================

//Zadanie z bańkami

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var highScore = 0; //tutaj wartość początkowo musi wynosić zero bo bez tego będzie undefined

var tablicaDlaNajlepszych = [];

for (var i = 0; scores.length > i; i++) {

    var output = "Płyn do baniek (indeks) nr - " + i + " wynik: " + scores[i];
    //powyżej zmienna lokalna, powinna być widoczna tylko w funkcji, ale wygląda na to, że jest widoczna także po za funkcją

    //    console.log("Płyn do baniek (indeks) nr - " + i + " wynik: " + scores[i]);
    //samo -- i -- wpisane powyżej określa nam numer indeksu, a scores[i] jaka jest wartość w tablicy dla tego numeru indeksu)

    if (scores[i] > highScore) {

        highScore = scores[i];

    }

    console.log(output);

}

//console.log(output); //tutaj również pojawi się wynik, chociaż zostanie podany tylko ostatni indeks wraz z wartością (więc ogólnie nie otrzymamy pełnych informacji)

//WAŻNE!!! Wygląda na to, że jeżeli utworzymy zmienną wewnątrz funkcji for albo while --- ta zmienna będzie widoczna, także na zewnątrz funkcji(ale to tylko moje obserwacje) - DOKŁADNIE TAK JEST!!! Gdyż for i while to nie są w zasadzie funkcje
//console.log(i);

console.log("Liczba testów: " + scores.length);

//To może być osobna funkcja

//for( var i = 0; scores.length >i; i++) {
//    
//    if  (scores[i] > highScore) {
//        
//        highScore = scores[i];
//    }
//}

console.log("Największa liczba wytworzonych baniek wynosi - " + highScore);

for (var i = 0; scores.length > i; i++) {

    if (scores[i] == highScore) {

        tablicaDlaNajlepszych.push(i);

    }
}

console.log("Indeksy najlepszych wyników: " + tablicaDlaNajlepszych);

//===================================================================

console.log("========================================");
console.log("========================================");

var products = ["Czu-Czu-Lada", "Miętowy chłód", "Ciasto naleśnikowe", "Guma balonowa", "Takie tam tego", "Nie wiem co", "To nie prawda, że..."];

var hasBubbleGum = [false, false, false, true, false, true, true];

console.log(hasBubbleGum[i]);

var i = 0;

while (i < hasBubbleGum.length) {

    if (hasBubbleGum[i]) {

        console.log(products[i] + " zawiera gumę do żucia.")

    }

    i = i + 1;

}

//====================================================================

var tablicaPustaNaStarcie = [];

var liczbaNieznanych = 0;

console.log(tablicaPustaNaStarcie);

tablicaPustaNaStarcie[0] = 5;
tablicaPustaNaStarcie[0] = 3; // Ta wartość nadpisze powyższą (5)
tablicaPustaNaStarcie[3] = 1;
tablicaPustaNaStarcie[3] = 2; // Ta wartość nadpisze powyższą (1)
tablicaPustaNaStarcie.push(7); // Co ciekawe przy takim zapisie, ta wartość ustawi się w tablicy pod indeksem nr 4, indeks nr 1 i indeks nr 2 w konsoli będą widoczne jako undefined. Push zawsze ustawi na końcu stawki wartość (po wszystkich już istniejących wartościach), a nie wstawi ją w pierwsze wolne miejsce. 

for (var i = 0; i < tablicaPustaNaStarcie.length; i++) {



    if (tablicaPustaNaStarcie[i] == undefined) {

        liczbaNieznanych++;

        var informacjaPusta = "Uwaga!!! Nr " + i + " pod tym indeksem nie ma wartości";

        console.log(informacjaPusta);

    } else {

        console.log("Indeks: " + i + " Wartość: " + tablicaPustaNaStarcie[i]);

    }

}

console.log(tablicaPustaNaStarcie.length + " --- elementów w tablicy, z czego " + liczbaNieznanych + " to undefined");

//===================================================================

console.log("=================================================");

//Stworzenie nowej zupełnie pustej tablicy z trzema elementami!!!

var myArray = new Array(3);

for (var i = 0; i < myArray.length; i++) {

    console.log("Indeks: " + i + " Wartość: " + myArray[i]);

}

//====================================================================

console.log("===============================================");

console.log("");

console.log("Poniżej Funkcja");

console.log("");

function printAndGetHighScore(board) {

    var highScoreInFunction = 0;

    var outputInFunction;

    for (var i = 0; i < board.length; i++) {

        var outputInFunction = "Płyn do baniek (indeks) nr - " + i + " wynik: " +

            board[i];

        console.log(outputInFunction);

        if (board[i] > highScoreInFunction) {

            highScoreInFunction = board[i];

        }

    }

    return highScoreInFunction;

}

var getResult = printAndGetHighScore(scores);

console.log("");

console.log("Liczba testów: " + scores.length);

console.log("");

console.log("Największa liczba wytworzonych baniek wynosi - " + getResult);

console.log("");

function getBestResults(board, highestResult) {

    var bestSolutions = [];

    for (var i = 0; i < board.length; i++) {

        if (board[i] == highestResult) {

            bestSolutions.push(i);

        }

    }

    return bestSolutions;

}

var indeksWithBestSolutions = getBestResults(scores, getResult);

console.log("Indeksy najlepszych wyników: " + indeksWithBestSolutions);

console.log("");

//console.log("=========================");

//=====================================================================

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(board, bills, highestResult) {

    var lowCost = 100;

    var index;

    for (var i = 0; i < board.length; i++) {

        if (board[i] == highestResult) {

            if (lowCost > bills[i]) {

                index = i;

                lowCost = bills[i];

                //                console.log("");

                //                console.log(bills[i]);

                //                console.log("");

            }

        }

    }

    return index;

}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, getResult);

console.log("Płyn numer " + mostCostEffective + " jest najbardziej opłacalny.");

//===============================================

//Drugi sposób

function getBestCostAndResult(bestResult, howExpensive) {

    var lowCost = 100;

    var index;

    for (var j = 0; j < bestResult.length; j++) {

        for (var i = 0; i < howExpensive.length; i++) {

            if (i === bestResult[j]) {

                //                console.log(bestResult);

                if (lowCost > howExpensive[i]) {

                    //                    console.log(lowCost);

                    index = i;

                    lowCost = howExpensive[i];

                }

            }

        }

    }

    return index;

}
console.log("");

console.log(getBestCostAndResult(indeksWithBestSolutions, costs));