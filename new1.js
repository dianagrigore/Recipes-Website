window.onload = function(){
    document.body.ondblclick = function(){                   //titlul isi schimba cateva proprietati si avem posibilitatea de a ne intoarce la stilul vechi
        var titlu = document.querySelector("#title");
        titlu.className = "titlu-head";    //adaugam o clasa titlului
        var stil = window.getComputedStyle(titlu, null );
        var proprietatiActuale = "Proprietatile initiale erau: \n font-size: "+stil.getPropertyValue("font-size") + "\ncolor: " + stil.getPropertyValue("color")+"\nfont-family: "+stil.getPropertyValue("font-family");
        titlu.style.color = "#85DCBA";
        titlu.style.fontSize = "30px";
        titlu.style.fontFamily = "Arial";
        var tasta = event.key;
        proprietatiActuale +="\nNoile proprietati sunt: \n font-size: "+stil.getPropertyValue("font-size") + "\ncolor: " + stil.getPropertyValue("color")+"\nfont-family: "+stil.getPropertyValue("font-family");
        var r = confirm(proprietatiActuale+"\nAi apasat tasta " + tasta +"\nDoresti ca acestea sa fie noile proprietati ale titlului?");
        if (r === true) {
            alert("Modificarile au fost efectuate.");
        } else {
            alert("Modificarile nu vor fi efectuate.")
            titlu.style.color = "white";
            titlu.style.fontSize = "50px";
            titlu.style.fontFamily = "fontul-meu";
        }
    }

    var d = new Date();
    var footer = document.getElementById("dataz");
    var months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    footer.innerHTML =  d.getDate() + "   " + months[d.getMonth()] + "  " + d.getFullYear();

    var cuvinte = document.body.innerText.split(/[\s,]+/);
    var lungime = cuvinte.length;
    var text1 = "\n Textul are ";
    var text2 = " de cuvinte.\n";
    text1.toLowerCase();
    text1 = text1.concat(lungime);
    text1 = text1.concat(text2);
    text1.trim();
    footer.innerHTML += text1;

    var data_nasterii = document.getElementById("ns")
    data_nasterii.onclick = function () {
                var dn = document.getElementById("nastere");
                var colectie = dn.value.split('/');
                var par = document.getElementById("varsta");
                var an = parseInt(colectie[2]);
                var luni = parseInt(colectie[1]);
                var zile = parseInt(colectie[0]);
                var ra = d.getFullYear() - an;
                var rm, rd;
                if (d.getMonth() + 1 < luni)
                {
                    ra-=1;
                    rm = 12 - (luni - d.getMonth() - 1);
                }
                else
                    rm =  d.getMonth() + 1 - luni;
                if (d.getDate() < zile)
                {
                    rd = d.getDate() + 30 - zile;
                }
                else
                    rd = d.getDate() - zile;
        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById("varsta").innerHTML = ra + " ani " + rm + " luni " + rd + " zile " +  h + " ore " + m + " minute " + s + " secunde ";

        }
        function checkTime(i) {
            if (i < 10) {i = "0" + i};  // zero in fata numerelor
            return i;
        }
        startTime();
        setInterval(startTime, 1000);

        }



}