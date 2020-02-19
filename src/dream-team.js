module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else if (members.length == 0) {
    throw Error;
  } else {
    let member = members.map(i => (Array.isArray(i))?delete(i): i);
    let str ="'" + member.join("'").replace(/(true|false|\s|null|undefined)/g, "");
    let arr = str.match(/(?<=\')[a-zA-Z]/g).join("").toUpperCase();
    return arr.split("").sort().join("");
  }
};