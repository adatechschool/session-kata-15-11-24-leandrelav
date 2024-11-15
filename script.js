// ETAPE 1
function getLatinCharacterList(text) {
  let letterList = []; //init d'un tableau vide

  for (let index = 0; index < text.length; index++) {
    letterList[index] = text.charAt(index);
  }

  return letterList;
}

console.log(getLatinCharacterList("hello world"));
