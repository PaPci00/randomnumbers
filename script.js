let random = 0;
let od = 0;
let doo = 0;
let moja = 0;
let licznik = 1;
let proby = "";


function zakres(){
    od = document.getElementById("od").value;
    doo = parseInt((document.getElementById("doo").value)) +1;
    random = (Math.floor(Math.random()*doo+od));
    console.log(random);
}

function losowanie(){
    moja = document.getElementById("moja").value;

    if (random>moja){
        document.getElementById("wynik").innerHTML= "Wylosowana liczba jest większa";
    }
    if (random<moja){
        document.getElementById("wynik").innerHTML= "Wylosowana liczba jest mniejsza";
    }
    if (random==moja){
        document.getElementById("wynik").innerHTML= "Twoja liczba jest poprawna: "+random;
    }

    proby = proby+licznik+ " próba: "+moja+"<br>"
    document.getElementById("proby").innerHTML = proby;
    licznik=licznik+1;

    if (licznik>7){
        document.getElementById("wynik").innerHTML = "Wykorzystałeś wszystkie szanse"
    }
}