module.exports = function countCats(matrix) {
  let str = matrix.join(',');  
  let arr = str.match(/(?<!\s)(\^\^)/g);
 return (arr != null)? arr.length : 0 ;

};
