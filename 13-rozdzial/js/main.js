    'use strict';

    //
    function Dog(name, breed, weight) {

        this.name = name;

        this.breed = breed;

        this.weight = weight;

    }

    //Teraz przygotowanie prototypu

    Dog.prototype.species = "Psowate";

    // Dog.prototype.species Zacznij od konstruktora Dog, następnie pobierz jego właściwość prototype, będącą referencją do obiektu, który ma mieć właściwość species. 
    // Referencja – wartość, która zawiera informacje o położeniu innej wartości w pamięci lub nośniku danych. Instancja (z łac. instantia) – pojedyncze wystąpienie niezależnego 
    // kodu zgodnego z danym wzorcem. Najpopularniejszym przykładem jest instancjonowanie klas w programowaniu obiektowym [ważne pamiętajmy, że przykład ten raczej nie dotyczy JS], 
    // czyli tworzenie obiektów (niezależnych bytów danej klasy, zajmujących określone miejsce w pamięci). Innym przykładem jest instancja danego programu, czyli wystąpienie w pamięci 
    // komputera aktualnie wykonywanej sekwencji kodu komputerowego – utworzenie procesu. 

    //Dog - name: "Burek", breed: "mieszaniec", weight: 20 – to jest przykład instancji, czyli indywidualny zestaw cech konkretnego psa

    //A jeśli chodzi o metody, odpowiednie funkcje zapiszemy we właściwościach bark, run i wag prototypu.

    Dog.prototype.bark = function() {

        if (this.weight > 10) {

            console.log(this.name + " szczeka hau!");

        } else {

            console.log(this.name + " szczeka hiauu!");

        }

    };

    Dog.prototype.run = function() {

        console.log("Biega!");

    };

    Dog.prototype.wag = function() {

        console.log("Merda ogonem!");

    };

    var fido = new Dog("Burek", "mieszaniec", 20);

    var fluffy = new Dog("Dino", "pudel", 16);

    var spot = new Dog("Kieł", "chihuahua", 4);

    console.log(fido.name); //Wyświetli się Burek

    // Jeżeli chcemy aby np. Kieł szczekał inaczej, to po var spot (nie wiem dlaczego inaczej nie działa ale ustawianie w innych 
    // tzn. wcześniejszych miejscach powoduje, że nie działa – widocznie jedne działania przesłaniają drugie, oczywiście warto pamiętać, 
    // że wszelkie zmienne jest najlepiej umieszczać na początku przed funkcjami – jeżeli to zmienne globalne oraz na początku funkcji 
    // przy zmiennych lokalnych) wstawiamy np.:

    //wywołanie w console.log

    spot.bark = function() {

        console.log(this.name + " szczeka HAU HAU!");

    };

    fido.bark();

    fido.run();

    fido.wag();

    fluffy.bark();

    fluffy.run();

    fluffy.wag();

    spot.bark();

    spot.run();

    spot.wag();

    //Poniżej dodajemy nową metodę - sit, do prototypu

    Dog.prototype.sit = function() {

        console.log(this.name + " wykonał siad.");

    }

    spot.sit();

    Dog.prototype.sitting = false;

    Dog.prototype.sit = function() {

        if (this.sitting) {

            console.log(this.name + " już siedzi.");

        } else {

            console.log(this.name + " wykonał siad.");

            this.sitting = true;

        }

    };

    //kiedy pobieramy wartość właściwości sitting po raz pierwszy, odczytujemy ją z prototypu. Jednak później, kiedy przypisujemy jej wartość true, wartość ta zostaje zapisana w instancji obiektu, a nie w prototypie. A kiedy właściwość sitting zostanie już dodana do instancji, każde kolejne odwołanie do jej wartości będzie ją pobierało z instancji, gdyż przesłoniła ona wartość podaną w prototypie.

    //console.log(fluffy.hasOwnProperty("sitting"));//fluffy jeszcze nie ma w instancji właściwości sitting

    fluffy.sit();

    //console.log(fluffy.hasOwnProperty("sitting"));//fluffy teraz już ma w instancji właściwość sitting

    fluffy.sit();

    spot.sit();

    fido.sit();

    fido.sit();

    fido.sit();

    fluffy.sit();

    //Poniżej dodajemy nowego psa (instancję psa)

    var barnaby = new Dog("Barnaba", "basset", 27);

    barnaby.sit();

    console.log("");

    //--------

    console.log(spot.hasOwnProperty("species")); //pokaże się false bo odnosi się ta właściwość nie do instancji tylko do prototypu

    console.log(barnaby.hasOwnProperty("species")); //tu jeszcze false u barnaby

    barnaby.species = "Psowate"; //dopisujemy do instancji barnaby właściwość species, spowoduje to, że w konsoli pokaże się true, gdyż będzie się ta właściwość odnosiła już nie do prototypu, ale do instancji, patrz poniżej

    console.log(barnaby.hasOwnProperty("species")); //ale tu już pokaże się true

    console.log("");

    //============================

    //Gra z robotami z rozdziału 13

    function Game() {

        this.level = 0;

    }

    Game.prototype.play = function() {

        // gracz bawi się grą.

        this.level++;

        console.log("Witamy na poziomie " + this.level + ".");

        this.unlock();

    }

    Game.prototype.unlock = function() {

        if (this.level === 42) {

            Robot.prototype.deployLaser = function() {

                console.log("Robot " + this.name + " strzela do Ciebie z lasera!");

            }

        }

    }

    function Robot(name, year, owner) {

        this.name = name;

        this.year = year;

        this.owner = owner;

    }

    var game = new Game();

    var robby = new Robot("Robik", 1956, "Dr. Morbius");

    var rosie = new Robot("Robusia", 1962, "Grzegorz Jetson");

    while (game.level < 42) {

        //    console.log(game.level);

        game.play();

    }

    robby.deployLaser();

    rosie.deployLaser();

    console.log("");

    //========================
    //========================


    function Robot(name, year, owner) {

        this.name = name;

        this.year = year;

        this.owner = owner;

    }

    Robot.prototype.maker = "Ob.Fa.Ro";

    Robot.prototype.errorMessage = "Wszystkie systemy sprawne.";

    Robot.prototype.reportError = function() {

        console.log(this.name + " mówi " + this.errorMessage);

    };

    Robot.prototype.spillWater = function() {

        this.errorMessage = "Chyba mam zwarcie!"; //this.errorMessage sprawi, że później kiedy przypiszemy, któremuś z robotów metodę spillWater, właściwość errorMessage zostanie na stałe zapisana w instancji robota. Dlatego kiedy wywołujemy robota robby --- robby.spillWater(); --- to po wpisaniu console.log(robby.hasOwnProperty("errorMessage")); --- w konsoli pokaże się  >true<  bo dzięki metodzie >spillWater< instancja robby otrzymała już właściwość >errorMessage<

    };

    var robby = new Robot("Robik", 1956, "Dr. Morbius");

    var rosie = new Robot("Robusia", 1962, "Grzegorz Jetson");

    rosie.reportError();

    robby.spillWater();

    console.log(robby.hasOwnProperty("errorMessage"));

    console.log(rosie.hasOwnProperty("errorMessage"));

    robby.reportError();

    rosie.reportError();

    robby.reportError();

    console.log(robby.hasOwnProperty("errorMessage"));

    console.log(rosie.hasOwnProperty("errorMessage"));

    console.log("");

    //============================
    //============================

    //Jak działa dziedziczenie w łańcuchu prototypów? Funkcje są powiązane z Prototypami Dog, które znajdziemy wyżej w tym pliku JS

    function ShowDog(name, breed, weight, handler) {

        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.handler = handler;

    }

    ShowDog.prototype = new Dog();

    ShowDog.prototype.league = "Sieciowice";

    ShowDog.prototype.stack = function() {

        console.log("Stoi i uważa!");

    };

    ShowDog.prototype.bait = function() {

        console.log("Prosi o smakołyk");

    };

    ShowDog.prototype.gait = function(kind) {

        console.log("Trenuje " + kind + ".");

    };

    ShowDog.prototype.groom = function() {

        console.log("Czas pielgnacji sierści.");

    };

    var scotty = new ShowDog("Szatan", "terier szkocki", 8, "Grzesiu"); //To jest nasz nowy pies pokazowy, Szatan.

    scotty.stack();

    scotty.bark();

    console.log(scotty.league);

    console.log(scotty.species);

    scotty.sit();

    console.log("");

    //========================

    //    var fido = new Dog("Burek", "mieszaniec", 20);


    if (fido instanceof Dog) {

        console.log("Burek jest obiektem Dog");

    }


    if (fido instanceof ShowDog) {

        console.log("Burek jest obiektem ShowDog");

    }


    //    var scotty = new ShowDog("Szatan", "terier szkocki", 8, "Grzesiu");


    if (scotty instanceof Dog) {

        console.log("Szatan jest obiektem Dog");

    }


    if (scotty instanceof ShowDog) {

        console.log("Szatan jest obiektem ShowDog");

    }

    console.log("Konstruktor Burka to: " + fido.constructor);

    console.log("");

    ShowDog.prototype.constructor = ShowDog; //aby constructor psa takiego jak Szatan (czyli ShowDog - w powyższym przykładzie) pokazał właściwy konstruktor czyli ShowDog należy wstawić powyższą linijkę, Bez tego jako konstruktor będzie pokazywany Dog co tutaj nie jest prawdą.

    console.log("Konstruktor Szatana to: " + scotty.constructor);

    console.log("");

    //==================
    //==================

    //Cały przykład - wszystko powyżej można zakomentować

    function Dog(name, breed, weight) {

        this.name = name;

        this.breed = breed;

        this.weight = weight;

    }

    function ShowDog(name, breed, weight, handler) {

        Dog.call(this, name, breed, weight);

        this.handler = handler;

    }

    Dog.prototype.bark = function() {

        if (this.weight > 10) {

            console.log(this.name + " szczeka hau!");

        } else {

            console.log(this.name + " szczeka hiauu!");

        }

    };

    Dog.prototype.run = function() {

        console.log("Biega!");

    };

    Dog.prototype.wag = function() {

        console.log("Merda ogonem!");

    };

    Dog.prototype.sitting = false;

    Dog.prototype.sit = function() {

        if (this.sitting) {

            console.log(this.name + " już siedzi.");

        } else {

            console.log(this.name + " wykonał siad.");

            this.sitting = true;

        }

    };



    ShowDog.prototype = new Dog();

    ShowDog.prototype.constructor = ShowDog;

    ShowDog.prototype.league = "Sieciowice";

    ShowDog.prototype.stack = function() {

        console.log("Stoi i uważa!");

    };

    ShowDog.prototype.bait = function() {

        console.log("Prosi o smakołyk");

    };

    ShowDog.prototype.gait = function(kind) {

        console.log(this.name + " trenuje " + kind + ".");

    };

    ShowDog.prototype.groom = function() {

        console.log("Czas pielęgnacji sierści dla " + this.name + ".");

    };

    var fido = new Dog("Burek", "mieszaniec", 20);

    var fluffy = new Dog("Dino", "pudel", 16);

    var spot = new Dog("Kieł", "chihuahua", 4);

    spot.bark = function() {

        console.log(this.name + " szczeka HAU HAU!");

    }; //spot.bark musi być po instancji spot bo inaczej JS nie czyta prawidłowo i w konsoli wyskakuje błąd

    var scotty = new ShowDog("Szatan", "terier szkocki", 8, "Grzesiu");

    var beatrice = new ShowDog("Beatrycze", "szpic miniaturowy", 3, "Henryk");

    fido.bark();

    fluffy.bark();

    spot.bark();

    scotty.bark();

    beatrice.bark();

    scotty.gait("marsz");

    beatrice.groom();

    scotty.sit();

    scotty.sit();

    console.log("");

    //==================
    //==================

    //Użycie toString() własnej konstrukcji

    function Robot(name, year, owner) {

        this.name = name;
        this.year = year;
        this.owner = owner;

    }

    Robot.prototype.toString = function() {

        return this.name + " - robot, a jego właścicielem jest " + this.owner;

    };

    var toy = new Robot("Zabawka", 2013, "Armand");

    console.log(toy.toString());

    //Zwróćmy uwagę, że metoda toString może zostać wywołana
    //nawet wtedy, gdy nie zrobimy tego jawnie. Kiedy np. użyjemy
    //operatora +, by połączyć łańcuch znaków z obiektem, JavaScript
    //przed wykonaniem konkatenacji (czyli łączenia) użyje metody toString do
    //skonwertowania obiektu na łańcuch znaków (przykład w console.log poniżej)

    console.log("Ten robot to " + toy + "."); //Otrzymamy w konsoli –---  Ten robot to Zabawka - robot, a jego właścicielem jest Armand.

    console.log("");

    //======================
    //======================

    //Stosowanie dziedziczenia do własnych celów…
    //Rozszerzanie wbudowanych obiektów

    String.prototype.cliche = function() { //dodajemy do prototypu String metodę cliche

        var cliche = ["wygrać w cuglach", "był w kontakcie", "gwóźdź do trumny"]; //definiujemy zwroty, które nas interesują.

        for (var i = 0; i < cliche.length; i++) {

            //Zwróć uwagę, że this (poniżej) reprezentuje łańcuch znaków, na rzecz którego metoda została wywołana, czyli var cliche = ["wygrał w cuglach", "był w kontakcie", "gwóźdź do trumny"].

            var index = this.indexOf(cliche[i]); //używamy metody indexOf obiektów String, by sprawdzić, czy zwrot występuje w łańcuchu znaków. Jeśli go znajdziemy, natychmiast kończymy działanie metody i zwracamy wartość true.

            if (index >= 0) {

                return true;

            }

        }

        return false;

    };

    //Aby przetestować metodę, utworzymy kilka zdań, z których dwa będą zawierać poszukiwane zwroty (poniżej).

    var sentences = ["Zaraz wyślę po niego samochód.", "Jeśli będzie tak grać, przeciwnik powinien wygrać w cuglach.", "Te wyniki finansowe to gwóźdź do trumny obecnego zarządu."];

    for (var i = 0; i < sentences.length; i++) {

        var phrase = sentences[i]; //Każde zdanie jest łańcuchem znaków, a zatem możemy go użyć do wywołania metody cliche.

        if (phrase.cliche()) { //Zwróć uwagę, że nie tworzymy tu obiektu łańcuchaznaków, używając konstruktora String i operatora new. JavaScript zupełnie niezauważalnie skonwertuje każdy łańcuch na obiekt String, gdy tylko wywołamy metodę cliche.

            console.log("WYKRYTO ZWROT: " + phrase); //Jeśli metoda zwróci true, będziemy wiedzieć, że zdanie zawiera poszukiwany zwrot.

        }

    }

    console.log("");

    //================
    //================

    //Sprawdzamy czy funkcja jest obiektem

    function meditate() {

        console.log("Wszystko jest obiektem...");

    }

    console.log(meditate instanceof Object);

    console.log("");

    //=================
    //=================

    //Zadanie
    //Napisz metodę o nazwie palindrome, która będzie zwracać wartość true, jeśli łańcuch znaków będzie palindromem, czyli będzie miał taką samą postać, kiedy będziemy go czytać od przodu oraz od tyłu. (Jedna uwaga: nie zaprzątaj sobie głowy wyrażeniami będącymi palindromami). Dodaj tę metodę do prototypu String, a następnie ją przetestuj. Poniżej rozwiązanie z książki.

    String.prototype.palindrome = function() {

        var len = this.length - 1; //Najpierw odczytujemy długość łańcucha znaków.

        console.log(len);

        for (var i = 0; i <= len; i++) {

            if (this.charAt(i) !== this.charAt(len - i)) { //Następnie przeglądamy łańcuch, sprawdzając, czy znak zapisany na miejscu i oraz znak zapisany na miejscu długość-i (czyli i-ty znak od końca) są takie same.

                console.log(this.charAt(i));

                console.log(this.charAt(len - i));

                return false; //Jeśli porównywane znaki nie są równe, zwracamy false, gdyż sprawdzane słowo nie jest palindromem.

            }

            if (i === (len - i)) {

                return true; //Jeśli dotrzemy do miejsca, w którym wartość i odpowiada połowie długości sprawdzanego słowa, bądź też jeśli dotarliśmy do końca pętli, zwracamy true, gdyż mamy pewność, że słowo jest palindromem.

            }

        }

        return true; //Jeśli dotrzemy do miejsca, w którym wartość i odpowiada połowie długości sprawdzanego słowa, bądź też jeśli dotarliśmy do końca pętli, zwracamy true, gdyż mamy pewność, że słowo jest palindromem.

    };

    var phrases = ["oko", "kajak", "mam", "sedes", "to nie palindrom"]; //To są testowane słowa.

    for (var j = 0; j < phrases.length; j++) {

        var phrasesToPal = phrases[j];

        if (phrasesToPal.palindrome()) { //Przeglądamy wszystkie słowa w tablicy, dla każdego z nich wywołując metodę palindrome. Jeśli zwróci ona wartość true, wiemy, że słowo jest palindromem.

            console.log("'" + phrasesToPal + "' jest palindromem.");

        } else {

            console.log("'" + phrasesToPal + "' --- nie jest palindromem.");

        }

    }

    console.log("");

    //---------------

    console.log("To samo zadanie, ale" + (" super zaawansowane rozwiązanie").toUpperCase() + " (poniżej).");

    console.log("");

    //Poniżej to Samo zadanie, ale Super Zaawansowane rozwiązanie


    //W tym przypadku najpierw przekształcamy słowo na tablicę pojedynczych liter, następnie zmieniamy kolejność wszystkich elementów tej tablicy, a w końcu łączymy jej wszystkie elementy, ponownie uzyskując jeden łańcuch znaków. Jeśli początkowy łańcuch będzie równy nowemu, oznacza to, że jest on palindromem. Zwróć uwagę, że musimy tu użyć metody valueOf, gdyż this jest obiektem, a nie łańcuchem znaków, takim jak zmienna r; gdybyśmy zatem nie użyli tej metody, porównywalibyśmy łańcuch znaków z obiektem, a one nie byłyby równe, nawet wtedy, gdyby this było palindromem.

    String.prototype.palindromeAdv = function() {

        var r = this.split("").reverse().join("");

        return (r === this.valueOf());

    }

    var phrases = ["oko", "kajak", "mam", "sedes", "zapiekanka", "wąż"]; //To są testowane słowa.

    for (var j = 0; j < phrases.length; j++) {

        var phrasesToPal = phrases[j];

        if (phrasesToPal.palindromeAdv()) { //Przeglądamy wszystkie słowa w tablicy, dla każdego z nich wywołując metodę palindrome. Jeśli zwróci ona wartość true, wiemy, że słowo jest palindromem.

            console.log("'" + phrasesToPal + "' jest palindromem.");

        } else {

            console.log("'" + phrasesToPal + "' --- nie jest palindromem.");

        }

    }

    //=====================