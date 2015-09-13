/* shared functions */

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
