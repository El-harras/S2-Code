//Tester plusieurs comparaisons
console.log(100 === 100);
console.log(10 !== 50);
console.log(110 > 50);
console.log(12 < 7);
console.log(15 >= 18);
console.log(15 <= 22);

//Utiliser une variable
let age_1 = 21;
console.log(age_1 >= 16);

//Stocker le résultat
let age_2 = 20;
let estMajeur = age_2 >= 18;
console.log(estMajeur);

//Utiliser &&
let age = 20;
let autorisation = true;
let acces = age >= 18 && autorisation === true;
console.log(acces);

//Utiliser ||
let membre = false;
let invitation = true;
let entree = membre === true || invitation === true;
console.log(entree);

//Utiliser !
let disponible = true;
console.log(!disponible);

//Exercice — Analyser des variables
let age_3 = 22;
let inscrit = true;
let paiement = false;
/*
1 L’âge est-il supérieur ou égal à 18 ?
2 La personne est-elle inscrite ?
3 Le paiement est-il effectué ?
4 L’âge est-il supérieur ou égal à 18 ET la personne est-elle inscrite ?
5 La personne est-elle inscrite OU le paiement est-il effectué ?
*/

let Q1 = age_3 > 18;
console.log("L’âge est-il supérieur ou égal à 18 ",Q1);
console.log("La personne est-elle inscrite ? ",inscrit);
console.log("Le paiement est-il effectué ? ",paiement);
let Q4 = age_3>18 || inscrit==true;
console.log("L’âge est-il supérieur ou égal à 18 ET la personne est-elle inscrite ?",Q4);
let Q5 = inscrit==true && paiement==true;
console.log("La personne est-elle inscrite OU le paiement est-il effectué ? ",Q5);
