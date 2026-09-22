//Afficher les nombres de 1 à 10
for(let a=0; a<=10; a++)
    console.log(a);

//Afficher les nombres de 10 à 1
for(let b=10; b>=0; b--)
    console.log(b);

//Afficher un message plusieurs fois
for(let c=0; c<=5; c++)
    concole.log("Bonjour Mohamed");

//Utiliser while
let Nb=1;
while(Nb<=5){
    console.log(Nb);
    Nb++
}

//Afficher les nombres pairs
for(let d=0; d<=20; d++){
    if(d%2==0)
        console.log(d)
}


//Afficher les nombres impairs
for(let e=0; e<=20; e++){
    if(e%2!==0)
        console.log(e)
}


//Calculer une somme
let som_1=0;
for(let f=0; f<=5; f++){
    som_1+=f;
}
console.log("Resultat attendu : ",som_1);


//Calculer la somme de 1 à 10
let som_2=0;
for(let J=1; J<=10; J++){
    som_2+=J;
}
console.log("Resultat la somme de 1 à 10 : ",som_2);   

//Calculer la somme des nombres pairs
let som_pairs=0;
for(let j=1; j<=20; j++){
    if(j%2==0)
        som_pairs+=j;
}
console.log("Resultat la somme des nombres pairs : ",som_pairs);  

//Compter les nombres pairs 1 à 20
let cmp_pair=0;
for(let h=1; h<=20; h++){
    if(h%2==0)
        cmp_pair+=1;
}
console.log("Compter les nombres pairs 1 à 20 : ",cmp_pair);  

//Compter les nombres supérieurs à une valeur
let nombre=12;
let supers = 0;
for(let i=1; i<=20; i++){
    if(i>nombre)
        supers+=1;
}
console.log("Compter les nombres supérieurs : ",supers); 

//Calculer un produit
let prod=1;
for(let k=1; k<=5; k++){
    prod+=k;
}
console.log("Resultat la produit de 1 à 5 : ",prod);  

//Afficher une table de multiplication

let nbr = 5;
for(let l=0; l<=10; l++){
    console.log(nbr,"X",l,"=",nbr*l);
}

//Analyser une série de valeurs
let maximum = 20;
let somm_pairs = 0;
let compt_pairs = 0;
for(let m=0; m<=maximum; m++){
    if(m%2==0){
        compt_pairs++;
        somm_pairs+=m;
    }
        
}
console.log("Nombre :",compt_pairs,"et Somme : ",somm_pairs);