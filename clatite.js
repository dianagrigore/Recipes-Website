window.onload = function (){

    document.getElementById("buton").onclick = function (){  //Functie care la click afiseaza o noua imagine cu sugestii de prezentare
        var Imagini = [{src: "3.jpeg"}, {src: "3.1.jpg"}, {src: "3.2.jpg"}, {src:"3.4.jpg"}]; //Array de obiecte
        Imagini.pop();
        Imagini.push( {src: "3.3.jpg"});
        Imagini.push({src: "3.4.jpg"});
        var v = [];

        for (var i = 0, j = Imagini.length; i < j; i++) {
            v[i] = new Image();
            v[i].src = Imagini[i].src;
        }
        function getRandomInt(min,max)      //functie care returneaza o imagine random
        {
            imn = Math.floor(Math.random() * (max - min + 1)) + min;
            return v[imn];
        }
        var newImage = getRandomInt(0, v.length - 1); //imagine random
        var img = document.getElementById("clatite-imagine"); //selectez imaginea
        img.src = newImage.src; //schimb sursa
    }


    var prima = document.getElementsByClassName("tl")[0];
    prima.onclick = function(){                                                //la click lista primeste un stil, la dublu click altul
        var lista = document.getElementsByTagName("ul")[0];
        lista.style.listStyleType = 'square';
        lista.style.color = "#FFFF99";
    }
    prima.ondblclick = function(){
        var lista = document.getElementsByTagName("ul")[0];
        lista.style.listStyleType = 'circle';
        lista.style.color = "#FFDAB9";

    }

    var ultima = document.getElementById("ultima");
    ultima.onclick = function(){
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "clatite.txt", true);
            xhttp.send();

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("aici-adauga").innerHTML = this.responseText;
                    ultima.style.display = "none";
                }

        }
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



