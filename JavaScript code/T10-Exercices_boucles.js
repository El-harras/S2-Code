//Afficher les nombres pairs
for (let d = 1; d <= 20; d++) {
    if (d % 2 == 0) 
        console.log(d);
}


//Calculer une somme
let som_1=1;
for(let f=1; f<=5; f++){
    som_1=som_1+f;
}
console.log("Resultat attendu : ",som_1);

//Nombre de pairs et Calculer voutr somme
let som_2 = 0;
let cmp_pair = 0;
for (let f = 1; f <= 20; f++) {
    if (f % 2 == 0) {
        som_2 += f;
        cmp_pair ++;
    }
}
console.log("Nombre de pairs : " , cmp_pair);
console.log("Somme des pairs : " , som_2);