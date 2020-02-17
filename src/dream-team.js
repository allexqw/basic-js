module.exports = function createDreamTeam(members) {
  
let str ="\'"+ members.join('\'').replace(/(true|false|\s|null|undefined)/g, '');
console.log(str);

let arr = str.match(/(?<=\')[a-zA-Z]/g).sort();
console.log(arr.join('').toUpperCase());
return arr.join('').toUpperCase();
};