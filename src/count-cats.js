module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  let str = matrix.join();
  return str.match(/(\^\^)/g).length;
};
