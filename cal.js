//variables
var nbre1 = "",
  nbre2 = "",
  operateur = "";

//les actions des operateurs
function operation() {
  switch (operateur) {
    case "+":
      // si c'est l'addition, on fait a + b que l'on renvoie ensuite à la var a que l'on transforme en string
      nbre1 = String(Number(nbre1) + Number(nbre2));
      // à nbreAffichee du HTML on affecte la nouvelle var a
      document.getElementById("nbreAffichee").innerHTML = nbre1;
      // on reinitialise la var b au vide
      nbre2 = "";
      // on reinitialise l'operateur au vide
      operateur = "";
      break;

    case "-":
      nbre1 = String(Number(nbre1) - Number(nbre2));
      document.getElementById("nbreAffichee").innerHTML = nbre1;
      nbre2 = "";
      operateur = "";
      break;

    case "*":
      nbre1 = String(Number(nbre1) * Number(nbre2));
      document.getElementById("nbreAffichee").innerHTML = nbre1;
      nbre2 = "";
      operateur = "";
      break;

    case "/":
      // cas d'un nombre divisé par 0
      if (nbre2 == "0") {
        document.getElementById("nbreAffichee").innerHTML = "Impossible !";
        nbre1 = "";
        nbre2 = "";
        operateur = "";
        break;
      } else {
        nbre1 = String(Number(nbre1) / Number(nbre2));
        document.getElementById("nbreAffichee").innerHTML = nbre1;
        nbre2 = "";
        operateur = "";
        break;
      }
  }
}

// ----------------------------------------------------------------------------------------------------------------------

//actions lorsqu'on appuie sur un boutton
function boutton(m) {
  //si on appuie sur le boutton =
  if (m == "=") {
    // si a et b different du vide alors on effectue les operations
    if ((nbre1 != "") & (nbre2 != "")) {
      operation();
    }
  }

  // verifier les operateurs
  else if (m == "+" || m == "-" || m == "*" || m == "/") {
    if (nbre1 != "" && nbre2 == "") {
      operateur = m;
      // dans nbreAffichee du HTML on affiche le nombre entré "+ operateur"
      document.getElementById("nbreAffichee").innerHTML = nbre1; // + operateur;
    } else if (nbre1 != "" && nbre2 != "") {
      operation();
      operateur = m;
      document.getElementById("nbreAffichee").innerHTML = nbre1; // + operateur;
    }
  }

  // verifier les chiffres et les decimaux
  else {
    // si l'operateur est vide (il n' ya pas d'operateur), alors m = le chiffre entré sur la calculatrice
    // on concatene les deux chiffres ( a et m)
    if (operateur == "") {
      nbre1 = nbre1 + m;
      document.getElementById("nbreAffichee").innerHTML = nbre1;
    } else {
      nbre2 = nbre2 + m;
      document.getElementById("nbreAffichee").innerHTML =
        nbre1 + operateur + nbre2;
    }
  }
}

// ----------------------------------------------------------------------------------------------------------------------

// fonctions pour les bouttons speciaux
function boutton_special(m) {
  switch (m) {
    case "reset":
      location.reload();
      break;

    case "bs":
      if (nbre1 != "" && operateur != "") {
        // exemple : 2 * ""  =
        if (nbre2 == "") {
          // on reinitialise l'operateur au vide et on affiche juste le nbre1
          operateur = "";
          document.getElementById("nbreAffichee").innerHTML = nbre1;
        }
        // dans ce cas, b a une valeur
        else {
          var bx = new Array();
          bx = nbre2.split("");
          bx.pop();
          nbre2 = bx.join("");
          document.getElementById("nbreAffichee").innerHTML =
            nbre1 + operateur + nbre2;
        }
      } else if (nbre1 != "" && operateur == "") {
        var ax = new Array();
        ax = nbre1.split("");
        ax.pop();
        nbre1 = ax.join("");
        document.getElementById("nbreAffichee").innerHTML = nbre1;
      }
      break;
  }
}
