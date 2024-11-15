// ANNEXE 1
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
console.log(getLatinCharacterList("Hello World"));

// ETAPE 2
function translateLatinCharacter(letter) {
  if (latinToMorse[letter]) {
    return latinToMorse[letter];
  } else {
    return "";
  }
}
console.log(translateLatinCharacter("A"));

// ETAPE 3
function encode(text) {
  let uppercaseText = text.toUpperCase();
  let textList = getLatinCharacterList(uppercaseText); //fonctionne maintenant en majuscules ET MINUSCULES
  let morseText = "";

  textList.forEach((letter) => {
    morseText += translateLatinCharacter(letter) + " ";
  });

  return morseText;
}
console.log(encode("gaga GOUGOU"));
