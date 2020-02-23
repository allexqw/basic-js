module.exports = function transform(arr) {
    let array = [];
    if (Array.isArray(arr)){
        //console.log(arr);
        arr.forEach(function(item,index,arr){
            if (arr[index] == '--discard-next' & index !== arr.length-1){
                arr.splice(index,2);
            }
            else if(arr[index] == '--discard-prev' & index !== 0){
                arr.splice(index-1,2);
            }
            else if(arr[index] == '--double-next' & index !== arr.length-1){
                arr.splice(index,1,arr[index+1]);
            }
            else if (arr[index] == '--double-prev' & index !== 0){
                arr.splice(index,1,arr[index-1]);
            }
            else if(arr[index] == '--double-prev'||arr[index] == '--double-next' || arr[index] == '--discard-next'||arr[index] == '--discard-prev'){
                
                arr.splice(index,1);
                console.log(typeof(arr[index]))
            } 
            else{
                arr[index]=arr[index];
            }
        });
        return arr //= arr.filter(e => e!==null);
    }
    else{

        throw (Error);
    }
    
    
};
