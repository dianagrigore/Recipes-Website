window.onload = function(){

        var field = document.getElementById("field");
        var ball = document.getElementById("ball");

        var maxX = field.clientWidth - ball.offsetWidth;
        var maxY = field.clientHeight - ball.offsetHeight;

        var duration = 4; // duratas
        var gridSize = 100; // pixeli chenar

        var start = null; //val de start
        var stretchFactor;  //retine poz

        function step(timestamp)
        {
            var progress, x, y;
            if(start === null) {
                start = timestamp;
                stretchFactor = 1 + (Math.random() * 3);
            }

            progress = (timestamp - start) / duration / 1000; // percent

            x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = sin(t) cele doua fc de deplasare
            y = Math.cos(progress * 2 * Math.PI); // y = cos(t)

            ball.style.left = maxX/2 + (gridSize * x) + "px";
            ball.style.bottom = maxY/2 + (gridSize * y) + "px";

            if(progress >= 1) start = null; // reset to start position
            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);


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

    var v = [" Ai incercat reteta noastra de clatite? ", " Poate vrei sa completezi formularul de feedback ", " Suntem prezenti si pe social media ", " Vezi reteta de cartofi "];
    function getRandomInt(min,max)      //functie care returneaza  random
    {
        var imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return v[imn];
    }
    var newQuote = getRandomInt(0, v.length - 1); // random
   footer.innerHTML += newQuote;

}