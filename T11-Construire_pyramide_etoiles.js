let hauteur = 5;

if (hauteur > 0) {
    for (let ligne = 1; ligne <= hauteur; ligne++) {
        let ligneTexte = "";
        for (let s = 1; s <= hauteur - ligne; s++) {
            ligneTexte = ligneTexte + " ";
        }
        for (let e = 1; e <= (2 * ligne) - 1; e++) {
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur invalide.");
}
