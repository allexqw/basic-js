module.exports = function getSeason(date) {
  function getClass(date) {
    return {}.toString.call(date).slice(1, -1);
  }
  if(typeof(date) == 'object' ){
    let month = date.getMonth();
    let str = (2 > month || month == 11 ) ? "winter" : (2<=month & month<5)? "spring": (5<=month & month<8) ? "summer" : "autumn";
    if(getClass(date)=="object Object" ){
      throw(Error);
    }
    return str;
  }
  else if( date == undefined){
    return ('Unable to determine the time of year!');
  }
  else {   throw (Error);  }
}