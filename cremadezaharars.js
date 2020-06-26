window.onload = function (){
    var y = document.getElementsByClassName("caramel")[0];    //cuvintele se afiseaza la 300ms
    var x = y.getElementsByTagName("p")[0];
    var text = "Punem intr-o oala cu fundul gros zaharul si 50 ml de apa si dam la foc mediu. Lasam pe foc pana cand obtinem un caramel intr-o culoare frumoasa, aramie. Cum am obtinut culoarea, luam de pe foc imediat. Avem grija ca nuanta sa nu vireze spre maro pentru ca asta inseamna ca am ars caramelul, iar gustul de caramel ars este unul amar si neplacut. Putem sa facem crema de zahar ars in oala in care am facut caramelul sau, dupa cum vedeti in filmulet, sa il distribuim in vase mai mici: Cu grija, acoperim si peretii vasului/vaselor cu caramel, apoi lasam la racit.";
    var textnou = text.split(" ");
    x.textContent = "";

    var i = 0;
    var timer;   var end = textnou.length*3000;
    function functieAfisare() {x.textContent+=textnou[i]+" "; i++;}
    function Repeta(){ timer = setInterval(functieAfisare, 3000, i);}
    function Oprire(){clearInterval(timer);}
    Repeta();
    setTimeout(Oprire,end);

    var titlu = document.getElementById("crema-titlu");
    titlu.onmouseover = function (){                                    //la hover pe titlu cuvintele se afiseaza unul cate unul la 300ms
        titlu.style.color = "orange";
        var m = document.getElementsByClassName("crema")[0];
        var n = m.getElementsByTagName("p")[0];
        var textnou1 = n.textContent.split(" ");
        n.textContent = " ";
        var j = 0;
        var t; var termina = textnou1.length*300;
        function afisare() {n.textContent+=textnou1[j]+" "; j++;}
        function rep() {t = setInterval(afisare, 300, j);}
        function opr() {clearInterval(t);}
        rep();
        setTimeout(opr, termina);

    }
    var footer = document.getElementById("ft");
    var cuvinte = document.body.innerText.split(/[\s,]+/);
    var lungime = cuvinte.length;
    var text1 = "\n Textul are ";
    var text2 = " cuvinte.\n";
    text1.toLowerCase();
    text1 = text1.concat(lungime);
    text1 = text1.concat(text2);
    text1.trim();
    footer.innerHTML += text1;

}