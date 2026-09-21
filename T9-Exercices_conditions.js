//Exercices sur les conditions
let age = 20;
if(age>=18)
    console.log("Majeur");
else
    console.log("Mineur");

//Nombre positif ou négatif
let Nb = 5;
if(Nb>0)
    console.log("Positif");
if(Nb<0)
    console.log("Negatif ");
else
    console.log("nul");

//Pair ou impair
let Nb1 = 10;
if(Nb1%2==0)
    console.log("Pair");
else
    console.log("Impair");

//Résultat d’un apprenant
let note = 14;
if(note>=16)
    console.log("Tres bien");
else if(note<16 && note>=10)
    console.log("Validé");
else
    console.log("Non validé");

//Maximum de deux valeurs
let a = 5;
let b = 10;
if(a>b)
    console.log("la plus grande est ",a);
else
    console.log("la plus grande est ",b);

//Accès à un service
let age_1 = 22; 
let compteActif = true;
if(age_1>=18 && compteActif==true)
    console.log("Acces autorise");
else
    console.log("Acces refuse");


//Autorisation avec deux possibilités
let membre = false; 
let invitation = true;
if(membre==false || invitation==true)
    console.log("la personne est membre");
else
    console.log("la personne n'est pas membre");

//Classification d’une température
let temp = 30;
if(temp>=25)
    console.log("Froid");
else if(temp<25 && temp>=10)
    console.log("Doux");
else 
    console.log("Chaud");

//Formule de décision
let note_1 = 14; 
let presence = 90;
if(note_1>=10 && presence>=80)
    console.log("Validé");
else
    console.log("Non validé");


//Petit problème de synthèse
let montant = 111;
if(montant>=200)
    console.log("Reduction de 10 % + livraison gratuite");
if(montant<200 && montant>=100)
    console.log("Livraison gratuite");
else
    console.log("Livraison payante");

