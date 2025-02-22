/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */


var debounce = function(fn, t) {
    let timer = 0
    return function(...args) {
       clearTimeout( timer ) 
       timer = setTimeout(()=> fn(...args), t )
    }
};



/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */