let pronoun = ["the", "our", "her"];
let adj = ["great", "big", "small"];
let noun = ["jogger", "racoon", "dog"];
let dominio = [".com", ".cl", ".net"];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let g = 0; g < noun.length; g++) {
      for (let k = 0; k < dominio.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[g] + dominio[k]);
      }
    }
  }
}
