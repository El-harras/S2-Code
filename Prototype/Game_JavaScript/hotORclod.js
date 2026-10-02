const prompt = require("prompt-sync")();

let Nbr = Math.floor(Math.random() * 100 + 1);
console.log(Nbr);
console.log("Essayez de deviner le Nombre secret. Vous avez 5 essais Bonne chance ! ");

let essai = 5;
let Nmbr = prompt("Choisissez un nombre entre 0 et 100. Essai n° " + 1 + " ");
for (let i = 2; i <= essai + 1; i++) {
    if (Nbr > Nmbr) {
        console.log("Ce nombre est plus petit que prévu !");
        Nmbr = prompt("Choisissez un nombre entre 0 et 100. Essai n° " + i + " ");
    }

    else if (Nbr < Nmbr) {
        console.log("Ce nombre est plus grand que prévu !");
        Nmbr = prompt("Choisissez un nombre entre 0 et 100. Essai n° " + i + " ");
    }

    else {
        console.log("Vous avez réussi dès la ", i-1, "ère tentative ! Excellent !");
        break;
    }

    if (i >= essai) {
        console.log("Malheureusement vous avez épuisé toutes vos tentatives.");
        break;
    }

}
