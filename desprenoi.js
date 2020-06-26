
window.onload = function () {
    var nume = prompt("Care e numele tau?") //functie care primeste numele si schimba titlul tab-ului in functie de acesta
    document.title = "Bine ai venit, "+nume+"!";
    window.setTimeout(function(){document.title="Despre noi" }, 2000);

    var articol = document.getElementsByTagName("article")[0];
    articol.className = "butoane-social"
    var div = document.createElement("DIV");
    div.className = "divmare";
    articol.appendChild(div);
    var sm = document.getElementsByClassName("sm")[0];
    sm.style.display = "none";
    var btn = document.createElement("BUTTON");
    div.appendChild(btn);
    var x = document.getElementsByTagName("button")[0];
    x.className = "buton";
    var b = document.getElementsByClassName("buton")[0];
    var d = document.getElementsByClassName("divmare")[0];

    d.style.zIndex = "9";
    d.style.position = "relative";
    b.style.backgroundColor = "#e27d60";
    b.style.color = "white";
    b.style.padding = "15px 32px";
    b.style.textAlign = "center";
    b.style.textDecorationStyle = "none";
    b.style.display = "inline-block";
    b.style.border = "none";
    b.style.fontSize = "16px";
    b.style.fontWeight = "bold";
    b.innerHTML = "Afiseaza retele de socializare";

    b.onclick = function(){
        sm.style.display = "block";
        b.style.display = "none";
    }

    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {      // muti div-ul prin click pe header
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown; // daca elimin headerul, folosesc fc. asta
        }

        function dragMouseDown(e) {
            e = e || window;
            e.preventDefault();
            pos3 = e.clientX;//pozitia mouse-ului la event
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // cand se muta cursorul, apeleaza fc. de drag
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window;
            e.preventDefault();
            // noua pozitie a cursorului
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            //noua pozitie a elementului
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            //nu se mai misca atunci cand mouse-ul nu se mai misca
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    var par = document.getElementsByClassName("sm")[0]; //se deschide fb la click pe fb si se inchide la hover pe titlu
    var element = par.children[0];
    element.onclick = function(){
        var mywindow = window.open("https://www.facebook.com/");
        var x = document.getElementById("rpt");
        x.onmouseover = function(){mywindow.close();}
    }

    var element2 = document.getElementsByClassName("fa-instagram")[0];
    element2.href = "https://www.instagram.com/?hl=ro";

    var copil = document.getElementById("mydivheader"); //la click pe fiecare din ele invesez culorile, am stoppropagation ca sa functioneze
    var parinte = copil.parentElement;
    copil.onclick = function(){
        copil.style.backgroundColor = "#FFDAB9";
        event.stopPropagation();
    }
    parinte.onclick = function(){
        parinte.style.backgroundColor = "#E27D60";
    }

    var dm = document.getElementsByClassName("sm")[0];
    var tl = document.getElementsByTagName("h2")[0];
    tl.onclick = function(){
    dm.removeChild(dm.childNodes[5]);}

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
