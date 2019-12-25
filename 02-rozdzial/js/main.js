'use strict';

console.log("Rozdział drugi - ćwiczenia");

var inStock = true;

var onSale = false;

var price = 55;

if (inStock == true && (onSale == true || price < 60)) {

    document.write("Kupuj, na co czekasz!!!");
} else {
    document.write("Nie kupuj, lepiej poczekać, cena na pewno jescze spadnie!!!")
}
