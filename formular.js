
window.onload = function (){
    var forma = document.getElementById("survey-form");
    var t = document.getElementById("description");
    document.getElementById("survey-form").onsubmit = function(event){
        //event.preventDefault();
        const nume = document.forms["survey-form"]["name"].value;               //valorile elementelor introduse de utilizator
        const prenume = document.forms["survey-form"]["prenume"].value;
        const mail = document.forms["survey-form"]["email"].value;
        const adresa = document.forms["survey-form"]["adresa"].value;
        const telefon = document.forms["survey-form"]["telefon"].value;

        const numePattern = /[A-Z][a-z]*/;                                      //expresii regulate care verifica daca inputul e corespunzator
        const prenumePattern = /[A-Z]+([ '-][a-zA-Z]+)*/;
        const mailPattern = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/;
        const adresaPattern = /[A-Z][a-z][0-9]*/;
        const telefonPattern = /^072+[0-9]*/;

             var numeResult = numePattern.test(nume);
             var prenumeResult = prenumePattern.test(prenume);
             var mailResult = mailPattern.test(mail);
             var adresaResult = adresaPattern.test(adresa);
             var telefonResult = telefonPattern.test(telefon);
             var str = "";

             if (numeResult == false){                                      //se afiseaza un mesaj in consecinta
                 str+="Numele nu a fost introdus corect.\n";
             }
             if (prenumeResult == false){
                 str+="Prenumele nu a fost introdus corect.\n";
             }
             if (mailResult == false){
                 str+="Adresa de email nu a fost introdusa corect.\n";
             }
             if (adresaResult == false){
                 str+="Adresa nu a fost introdusa corect.\n";
             }
             if (telefonResult == false){
                 str += "Numarul de telefon introdus nu a fost corect.\n";
             }
             if (str=="")
                {alert("Totul este in regula!");

                }
             else
                 alert(str);


        var x = Number(localStorage.getItem("nrc"));
        if (x){
            localStorage.setItem("nrc", x + 1);
        }
        else{
            localStorage.setItem("nrc", "1");
        }
        t.innerHTML +="Alti " + localStorage.getItem("nrc")+" au completat formularul.";
    }
    t.innerHTML +="Alti " + localStorage.getItem("nrc")+" au completat formularul.";

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