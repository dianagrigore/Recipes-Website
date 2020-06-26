window.onload = function(){
    var x = document.getElementById("fc"); //adaug desrierii imaginii o noua clasa
    x.classList.add("clasanoua");

    var bunic=document.body; //la click pe body/un anumit copil
    var parinte=document.getElementsByClassName("copil")[0];
    bunic.addEventListener("click",function(){alert("Ai dat click si fontul s-a modificat"); target.style.fontSize = '90px'; target.style.color="orange";},true);
    parinte.addEventListener("mouseover",function(){alert("Ai dat click pe copil si fontul s-a modificat");parinte.style.fontSize = "40px";},false);

    var imagine = document.getElementById("i");
    imagine.nr_click = 0;
    imagine.onclick = function(){
        imagine.nr_click+=1;
    }
    x.onmouseover = function(){
        var st = "Sugestie de servire. Alti " + imagine.nr_click+" utilizatori au dat click pe imagine";
        x.innerHTML= st;
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