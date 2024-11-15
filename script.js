const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// ETAPE 1
function getLatinCharacterList(text) {
  let letterList = []; //init d'un tableau vide

  for (let index = 0; index < text.length; index++) {
    letterList[index] = text.charAt(index);
  }

  return letterList;
}

// ETAPE 2
function translateLatinCharacter(letter) {
  if (latinToMorse[letter]) {
    return latinToMorse[letter];
  } else {
    return "";
  }
}

console.log(getLatinCharacterList("Hello World"));
console.log(translateLatinCharacter("A"));
