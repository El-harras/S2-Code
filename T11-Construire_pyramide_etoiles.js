let hauteur=5;

if (hauteur>0) {
    for (let ligne=1; ligne<=hauteur; ligne++) {
        let ligneTexte = "";
        for (let i=1; i<=hauteur-ligne; i++) {
            ligneTexte +=" ";
        }
        for (let j=1; j<=(2*ligne)-1; j++) {
            ligneTexte +="*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur invalide.");
}
