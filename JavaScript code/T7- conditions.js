let age = 15;
//La structure if
if (age >= 18) {
    console.log("Vous êtes majeur");
//Utiliser else
} else {
    console.log("Vous êtes mineur");
}


//Verifier un nombre
let nombre = 10;
if(nombre<0)
    console.log("Negatif ");
else if(nombre>0)
    console.log("Positif");
else
    console.log("nul");


//Trouver le maximum de deux valeurs
let N1 = 5;
let N2 = 8;
if (N1<N2)
    console.log("la valeur la plus grande est ",N2);
else
    console.log("la valeur la plus grande est ",N1);


//Utiliser une condition avec &&
if (age >= 18 && inscrit === true) {
    console.log("Acces autorise");
}


//Utiliser une condition avec ||
if (membre === true || invitation === true) {
    console.log("Acces autorise");
}


let note = 16;
//La structure if
if (note >= 16) {
    console.log("Tres bien");
//Utiliser else if
} else if (note>=10 && npte<16) {
    console.log("Valide");
//Utiliser else
} else {
    console.log("Non valide");
}


//Déterminer le maximum
let Nb1 = 10;
let Nb2 = 20;
let Nb3 = 30;
if(Nb1>Nb2 && Nb1>Nb3)
    console.log("la valeur la plus grande est ",Nb1);
else if(Nb2>Nb1 && Nb2>Nb3)
    console.log("la valeur la plus grande est ",Nb2);
else
    console.log("la valeur la plus grande est ",Nb3);