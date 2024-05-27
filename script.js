function otoslotto() {
    var szamok = [];

    while (szamok.length < 5) {
        var veletlenSzam = Math.floor(Math.random() * 90) + 1;

        
        if (!szamok.includes(veletlenSzam)) {
            szamok.push(veletlenSzam);
        }
    }

    
    szamok.sort(function(a, b) {
        return a - b;
    });

    return szamok;
}


var sorsoltSzamok = otoslotto();
// console.log("Az öt kisorsolt szám (növekvő sorrendben):", sorsoltSzamok);


document.addEventListener("DOMContentLoaded", function() {
    var sorsoltSzamok = otoslotto();
    var sentence = sorsoltSzamok.join(", ");
    
    document.getElementById("message").innerHTML = sentence;
});
