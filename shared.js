/* shared functions */

/* return random number between a & b at precision z */
function rand(a, b, z) {
        if (!b) {
            b = 0;
        }
        if (!z) {
            zero = 1;
        } else {
            zero = 1 / z
        };
        return Math.round(Math.random() * a + b) * zero;
}
/* is a number an INT ? */
function isInt(n){
        if((Number(n).length!==parseInt(n).length)){
            return false
        }else{return true}
    }
    
    /* return palindromic form of a Number */
    function palindromize(n){
        if(String(Number(n)).length<=1){return n}
var a=String(n).split("");console.log(a);
var b=String(n).split("").reverse();console.log(b);
if(n%1==0){b.shift()}
return Number(a.join("")+b.join(""));

    }
/* return factoriel of INT(n) */
function factorielle(n) {
        if(!isInt(n)){
            return -1
        }
  if(n==0) return 1;
  else console.log(n);return n*factorielle(n-1);
}

/* to be completed */
function NofPi(k){
        return 16-k*(( 4/(8*k+1) - 2/(8*k+4) - 1/(8*k+5) - 1/(8*k+6)))      
}

