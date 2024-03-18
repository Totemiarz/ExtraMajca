function liczenie(){
    
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth()+1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    var minuta = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();
    if(sekunda<10)sekunda=0+sekunda;

    document.getElementById("timer").innerHTML = dzien+"/"+miesiac+"/"+rok+" - "+godzina+":"+minuta+":"+sekunda;

    setTimeout("liczenie()", 1000);
}

function losuj1(){
    do{
    a=Math.round(Math.random()*101);
    b=Math.round(Math.random()*101);
    }while(a+b>100);
    document.getElementById("w1").innerHTML = a;
    document.getElementById("w2").innerHTML = b;
}

function dodawanie(){
    var wynik = document.getElementById("odp").value;
    if(wynik=="" || isNaN(wynik)) document.getElementById("wynik").innerHTML = "Wylosuj wartość.";
    if(wynik == a+b) document.getElementById("wynik").innerHTML = "Brawo! Dobry wynik.";
    else document.getElementById("wynik").innerHTML = "źle.";
 }

 function losuj2(){
    do{
    a=Math.round(Math.random()*101);
    b=Math.round(Math.random()*101);
    }while(a<b || b-a>0);
    document.getElementById("w1").innerHTML = a;
    document.getElementById("w2").innerHTML = b;
}

function odejmowanie(){
    var wynik = document.getElementById("odp").value;
    if(wynik=="" || isNaN(wynik)) document.getElementById("wynik").innerHTML = "Wylosuj wartość.";
    if(wynik == a-b) document.getElementById("wynik").innerHTML = "Brawo! Dobry wynik.";
    else document.getElementById("wynik").innerHTML = "źle.";
 }

 function losuj3(){
    do{
    a=Math.round(Math.random()*101);
    b=Math.round(Math.random()*101);
    }while(a*b>100);
    document.getElementById("w1").innerHTML = a;
    document.getElementById("w2").innerHTML = b;
}

function mnozenie(){
    var wynik = document.getElementById("odp").value;
    if(wynik=="" || isNaN(wynik)) document.getElementById("wynik").innerHTML = "Wylosuj wartość.";
    if(wynik == a*b) document.getElementById("wynik").innerHTML = "Brawo! Dobry wynik.";
    else document.getElementById("wynik").innerHTML = "źle.";
 }

 function losuj4(){
    do{
    a=Math.round(Math.random()*101);
    b=Math.round(Math.random()*101);
    }while(a/b>100 || b<0 || a%b!=0);
    document.getElementById("w1").innerHTML = a;
    document.getElementById("w2").innerHTML = b;
}

function dzielenie(){
    var wynik = document.getElementById("odp").value;
    if(wynik=="" || isNaN(wynik)) document.getElementById("wynik").innerHTML = "Wylosuj wartość.";
    if(wynik == a/b) document.getElementById("wynik").innerHTML = "Brawo! Dobry wynik.";
    else document.getElementById("wynik").innerHTML = "źle.";
 }

 function losuj(){
    a=Math.round(Math.random()*5+1);
    document.getElementById("k1").innerHTML = "<img src='k"+a+".gif'>";
    b=Math.round(Math.random()*5+1);
    suma=a+b;
    document.getElementById("k2").innerHTML = "<img src='k"+b+".gif'>";
}

function sprawdz(){
    var wynik = document.getElementById("odp").value;
    if(wynik=="" || isNaN(wynik)) document.getElementById("wynik").innerHTML = "Wylosuj wartość.";
    if(wynik == a+b) document.getElementById("wynik").innerHTML = "Brawo! Dobry wynik.";
    else document.getElementById("wynik").innerHTML = "źle.";
}