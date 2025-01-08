/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if( Array.isArray(obj)){
        // return obj.length === 0
        if(obj.length ===0){
            return true
        } else {
            return false
        }
    }
    else{
        let arr = Object.keys(obj)
        // return arr.length === 0
        if( arr.length ===0 ){
            return true
        } else{
            return false
        }
    }
};