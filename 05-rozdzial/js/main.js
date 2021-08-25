"use strict";

console.log("Rozdział 5 - Obiekty");

var fiat = {
  make: "Fiat",
  model: 500,
  year: 1957,
  color: "szaroniebieski",
  passengers: 2,
  convertible: false,
  mileage: 88000,
};

var miles = fiat.mileage;

if (miles < 2000) {
  buyIt(); //nie jest tu zdefiniowane - czyli brak funkcji (wywali error, jeżeli ten warunek będzie spełniony)

  console.log("Przejechane, poniżej - " + 2000 + " mil");
} else {
  console.log("Samochód przejechał - " + miles + "mil!!!");
}

console.log(miles); //pokaże ogólną daną mil obiektu

console.log(fiat.needsWashing); // w tym miejscu nie zadziała (będzie undefined),                                       zadziała niżej

fiat.mileage = 10000; //zmiana wartości w obiekcie --- UWAGA!!! Pomimo zmiany wartości w tym miejscu, wartość var miles powyżej nie zmieniła się i wciąż wynosi 88000, aby zmienna pokazała nową wartość trzeba ją stworzyć tutaj --- np.
//var milesTwo = fiat.mileage; //może być var miles --- ale nie chcę powielać starej zmiennej

fiat.needsWashing = true;

console.log(fiat.needsWashing); // tutaj zadziała, wcześniej nie

console.log(fiat.mileage);

//if (fiat.year < 1965) {
//    classic = true;
//}
//for (var i = 0; i < fiat.passengers; i++) {
//    addPersonToCar();
//} //nie zostały zdefiniowane niektóre zmienne, więc wywali error

//=================================================

var dog = {
  name: "Burek",
  weight: 20.2,
  age: 4,
  breed: "mieszaniec",
  activity: "przynoszenie piłki",
};

var bark;

if (dog.weight > 20) {
  bark = "HAU, HAU";
} else {
  bark = "hau, hau";
}

var speak =
  dog.name + " szczeka " + bark + " kiedy ma ochotę na " + dog.activity;

console.log(speak);

console.log("");

//=================================================

//Poniżej druga możliwość z dodaną właściwością bark do obiektu dog

dog.bark = bark;

var speakTwo =
  dog.name + " szczeka " + dog.bark + " kiedy ma ochotę na " + dog.activity;

console.log(speakTwo);

console.log("");

console.log(dog);

//delete fido.dogYears;     //przykładowe usuwanie jakiejś właściwości (znika nie                               tylko wartość, ale cała właściwość i wartość)

if (dog.breed == "mieszaniec") {
  //WAŻNE!!! W funkcji zawsze dwa znaki równa się (przykład poniżej if (dog.breed == "mieszniec")... inaczej program odczytuje nam informacje, że dana przed znakiem równa się ma wynieść dokładnie tyle co po znaku równa się i nadpisuje to starą wartość (tak ja to rozumiem), przy jednym znaku równa się wyrażenie nie zadziała (nie będzie prawdziwe, bo zawsze będzie tylko pierwsza opcja brana pod uwagę – czyli samo else nigdy nie będzie brane pod uwagę)

  dog.furColor = "white or black";
} else {
  dog.furColor = "other";
}

console.log("");

console.log(dog.furColor);

console.log("");
//======================================================

var taxi = {
  make: "SieMoCorp",
  model: "Taxi",
  year: 1955,
  color: "żółty",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }

  return true;
}

console.log(prequal(taxi));

var worthALook = prequal(taxi);

if (worthALook) {
  console.log(
    "Powinieneś zainteresować się tym " + taxi.make + " " + taxi.model
  );
} else {
  console.log(
    "Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować"
  );
}

//=====================================================

console.log("");

function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;

  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Złe hasło! Nie masz dostępu do sekretów!!!";
  }
}

function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;

    file.contents = secret;
  }
}

var superSecretFile = {
  level: "tajne",
  opened: 0,
  password: 2,
  contents: "Następne spotkanie z dr Zatanem odbędzie się w Katowicach.",
};

var secret = getSecret(superSecretFile, 2);

console.log(secret);

setSecret(
  superSecretFile,
  2,
  "Następne spotkanie z dr Zatanem odbędzie się w Żywcu."
);

secret = getSecret(superSecretFile, 2);

console.log(secret);

console.log("");

//===================================================

function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "SieMoCorp", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["czerwony", "niebieski", "jasnobrązowy", "żółty", "biały"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);
  var rand7 = Math.floor(Math.random() * 1000000);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: rand7,
  };

  return car;
}

var carToSell = makeCar(); //Tutaj musimy umieścić tę zmienną, gdyż inaczej strona na tej wysokości nie będzie widziała danych użytych tu i wpisanych w document.write.

document.write(
  "<b>" +
    carToSell.make +
    "</b>" +
    "<br>" +
    carToSell.model +
    "<br>" +
    carToSell.year +
    "<br>" +
    carToSell.color +
    "<br>" +
    carToSell.passengers +
    "<br>" +
    carToSell.convertible +
    "<br>" +
    carToSell.mileage +
    "<br>" +
    "<br"
);

console.log(makeCar()); //ZAPAMIĘTAĆ!!! Po returnie w console.log wywołujemy całą funckę, a nie sam return (w tym przypadku car jest widziane tylko w funkcji, po za nią car nie jest widziany - trzeba obiekt car wywołać przy pomocy funckji makeCar()).

console.log("");

function displayCar(vehicle) {
  console.log(
    "Twoim nowym samochodem jest " +
      vehicle.make +
      " " +
      vehicle.model +
      " z roku " +
      vehicle.year
  );

  document.write(
    "<br>" +
      "<br>" +
      "Poniżej - Drugi przykład, ale wychodzi to samo co wyżej." +
      "<br>" +
      "<br>" +
      "<b>" +
      vehicle.make +
      "</b>" +
      "<br>" +
      vehicle.model +
      "<br>" +
      vehicle.year +
      "<br>" +
      vehicle.color +
      "<br>" +
      vehicle.passengers +
      "<br>" +
      vehicle.convertible +
      "<br>" +
      vehicle.mileage +
      "<br>"
  );
}

displayCar(carToSell); // Wywołujemy funkcję displayCar(vehicle).

//===================================================

console.log("");

//UWAGA!!! Poniżej użycie funkcji wewnątrz obiektu.

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "szaroniebieski",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  drive: function () {
    alert("Brum wrrrr!");
    console.log("Brum wrrr!");
  },
  //   Poniżej ten sam zapis funkcji co powyżej tylko bez słowa function
  //   drive() {
  //     alert("Brum wrrrr!");
  //     console.log("Brum wrrr!");
  //   },
};

fiat.drive(); // Tutaj wywołujemy funkcję, która jest wewnątrz obiektu.

//===================================================

console.log("");

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "szaroniebieski",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  start: function () {
    this.started = true; //aby wszystko zadziałało poprawnie musimy tutaj użyć "this", aby program wiedział, że odnosimy się do tego konkretnego obiektu i właściwości zawartych w nim.
  },

  stop: function () {
    this.started = false; //aby wszystko zadziałało poprawnie musimy tutaj użyć "this", aby program wiedział, że odnosimy się do tego konkretnego obiektu i właściwości zawartych w nim.
  },

  drive: function () {
    if (this.started) {
      //aby wszystko zadziałało poprawnie musimy tutaj użyć "this", aby program wiedział, że odnosimy się do tego konkretnego obiektu i właściwości zawartych w nim.

      alert("Brum wrrrr!");

      // this.passengers = this.passengers + 1; //Wpisujemy liczbę pasażerów, tak albo -- this.passangers++ -- (można sprawdzić w console.log jak to działa)
    } else {
      alert("Najpierw musisz włączyć silnik.");

      //            this.passengers = 2;
    }

    console.log(this.started); //UWAGA!!!Jeżeli chcemy się dowiedzieć jaki jest status w danym momencie (czyli np. true czy false) wystarczy wpisać “this” (tutaj this.started – po każdej zmianie funkcji dostaniemy informację wewn. funkcji czy jesteśmy na etapie true czy false). Jeżeli zaś wywołamy console.log(fiat); to status started zawsze będzie ostatni w zależności jaka funkcja była wywołana jako ostatnia z użyciem true czy false (czyli w tym wypadku właściwość start:true czy stop:false).

    console.log(this.passengers); // w console.log pojawi się trzy razy, gdyż 3x wywoływaliśmy funkcję
  },
};

//console.log(fiat.started);

for (var prop in fiat) {
  console.log(prop + ": " + fiat[prop]); //muszą być dwa człony warto sprawdzić co się wyświetli, gdy będzie tylko jeden człon
} // wyświetli całą zawartość obiektu (wraz z komentarzami, wszystkie dane).

console.log("");

fiat.drive();

fiat.start();

//console.log(fiat.started);

console.log(fiat);

fiat.drive(); //trzeba pamiętać o wcześnijszym użyciu "this", aby wszystko zadziałało poprawnie

fiat.stop();

fiat.drive(); //Tyle razy ile razy wywołujemy funkcję pokaże się również "console.log" z wewnątrz funkcji

//=====================================

console.log("");

var eightBall = {
  index: 0,
  advice: ["tak", "nie", "może", "nie ma szans"],
  shake: function () {
    this.index = this.index + 1;

    if (this.index >= this.advice.length) {
      this.index = 0;
    }

    console.log(this.index);

    console.log(this.advice.length);
  },

  look: function () {
    return this.advice[this.index];
  },
};

eightBall.shake();

console.log(eightBall.look());

eightBall.shake();

console.log(eightBall.look());

eightBall.shake();

console.log(eightBall.look());

eightBall.shake();

console.log(eightBall.look());

eightBall.shake();

console.log(eightBall.look());

console.log("");

//=========================================

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "czerwony",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  fuel: 0,
  started: false,
  start: function () {
    if (this.fuel > 0) {
      this.started = true;

      console.log("Silnik włączony!");
    } else {
      this.strted = false;

      console.log("Ups! Bak pusty, musisz najpierw zatankować wóz!!!");
    }
  },

  //     start: function() {
  //         if (this.fuel == 0) {
  //             alert("Bak jest pusty, zatankuj przed jazdą!");
  //         } else {
  //             this.started = true;
  //         }
  //     },   // To druga możliwość startu pokazana w książce

  stop: function () {
    this.started = false;

    console.log("Silnik wyłączony.");
  },

  addfuel: function (amount) {
    this.fuel = this.fuel + amount;
  },

  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        console.log(this.make + " robi - Brum Wrum, Wrum!!!");

        this.fuel = this.fuel - 1;
      } else {
        console.log("Brak paliwa!");

        this.stop();
      }
    } else {
      console.log("Musisz najpierw włączyć silnik w " + this.make);
    }
  },
};

chevy.drive();

chevy.start();

chevy.drive();

//chevy.stop();

chevy.addfuel(1);

chevy.start();

chevy.drive();

chevy.stop();

chevy.start();

chevy.drive();

chevy.start();

console.log("");

//=======================================
