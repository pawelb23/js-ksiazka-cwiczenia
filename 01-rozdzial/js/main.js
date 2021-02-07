"use strict";

console.log("Strona 42 Ćwiczenia z książki");

var dog = {
  name: "Burek",
  weight: 5,
};

if (dog.weight > 15) {
  alert("HAUUU HAUUU");
} else {
  alert("hau");
}

var circleRadius = 20;

var circleArea = Math.PI * (circleRadius * circleRadius);

console.log(circleArea);

var age = 17;

var name = "Olek";

if (age > 20) {
  alert("Przykro mi, jesteś za stary!");
} else if (age < 18) {
  alert("Przykro mi, jesteś za młody!");
} else {
  alert("Witaj " + name + "!");
}

//String a działanie matematyczne

console.log(1000 + "108" + 108 + 109); //będzie traktowane jako STRING

console.log(6 + 4); //będzie traktowane jako DZIAŁANIE

//--------------------------------------------------------

//Funkcja while - przykład:

var liczba = 12;

while (liczba >= 0) {
  if (liczba > 0 && liczba < 10) {
    console.log("Cyfra " + liczba + " jest większa od zera");
  } else if (liczba == 0) {
    console.log("Wartość wynosi " + liczba);
  } else {
    console.log("Liczba " + liczba + " jest większa od zera");
  }

  liczba--; //aby wszystko było dobrze, tutaj musi być znak zmniejszania lub zwiększania wartości podanych w założeniach funkcji
}

//----------------------------------------------------------

var liczba = 99;

while (liczba > 0) {
  //POGRUBIENIE ZMIENNEJ

  document.write(
    "Wartość " + "<b>" + liczba + "</b>" + " jest większa od zera!<br>"
  ); // taki zapis --- '<b>' + liczba + '</b>' --- pozwala pogrubić naszą zmienną (czyli var liczba) UWAGA - nie działa w funkcji alert i prompt (console.log - chyba też nie --- warto jeszcze sprawdzić)

  liczba = liczba - 1;
}

document.write("<b>Zero to zero!!!<br>KONIEC!!!</b>");

//----------------------------------------------------------

//Funkcja EVAL

console.log(eval("2+2"));

console.log(eval(new String("2+2")));

console.log("");

//----------------------------------------------------------

var word = "butelek";

var wordTwo = "butelki";

var wordThree = "butelka";

var count = 99;

//while (count > 0) {
//    console.log(count + ' ' + word + ' piwa na ścianie.');
//    console.log(count + ' ' + word + ' piwa.');
//    console.log('Jedną weź i podaj w koło.');
//    count = count - 1;
//
//        if (count > 0) {
//            console.log();
//        } else {
//            console.log('Nie ma już ' + word + ' piwa na ścianie.');
//        }
//    }

//------------------------------------------------
for (var i = 0; count >= i; count--) {
  //Powyższy zapis musi być taki aby liczyło nam kolejne butelki (nie może być count.length). Nie chce działać bez (var i = 0), ale zamiast przyrównania count do i można count przyrównać po prostu do zera (0).

  if (count > 95) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 95) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 92) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 92) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 85) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 85) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 82) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 82) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 75) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 75) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 72) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 72) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 65) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 65) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 62) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 62) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 55) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 55) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 52) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 52) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 45) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 45) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 42) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 42) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 35) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 35) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 32) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 32) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 25) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 25) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 22) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 22) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count > 5) {
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " jeszcze zostanie!");
  } else if (count == 5) {
    //ze znakiem = (równa się) nie działa musi tu być znak == (przyrównania)
    console.log(count + " " + word + " piwa na ścianie.");
    console.log(count + " " + word + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count > 2) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordTwo + " jeszcze zostaną!");
  } else if (count == 2) {
    console.log(count + " " + wordTwo + " piwa na ścianie.");
    console.log(count + " " + wordTwo + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + wordThree + " jeszcze tylko zostanie!");
  } else if (count == 1) {
    console.log(count + " " + wordThree + " piwa na ścianie.");
    console.log(count + " " + wordThree + " piwa.");
    console.log("Jedną weź i podaj w koło.");
    console.log(count - 1 + " " + word + " mamy!");
  } else {
    console.log("Butelki się skończyły :( ...");
  }
}

//----------------------------------------------
