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

function reduct(s){
    if(s>9999999999 || s <-999999999){s=2};
    str=Number(s).toString();
    str=str.replace('e+','');
    if(str.indexOf('.')>-1){str=Math.round(Number(str))}
    if(str==0){return 1}
   //console.log("reducting "+str);
    var ar=str.split("");
    var som=0;
    for(var i=0;i<ar.length;i++){
        som+=Number(ar[i]);
    }
    //return som
    str=Number(som).toString();
    //console.log(str);
    if(str=='NaN'){return 1};
    if(str=='Infinity'){return 1};
    if(str.split("").length==1){return str}else{ return reduct(Number(str))};
}

/* a fibonacci suite generator */
function fibonacci(a, b, n, resar) {
    var c = 0;
    var i = 0;
    var ar = new Array();
    while (i < n) {
        c = a + b;
        a = b - a + 1;
        b = c;
        if (resar) {
            ar.push(c);
        }
        i++;
    }
    if (resar) {
        return ar;
    }
    //trace(c);
    return c;
}

/* check if a is divisible by b */
function isDivisibleBy(a, b) {
    if (a % b == 0) {
        //trace(n+" est divisible par "+i);
        return true;
    } else {
        return false;
    }
}

/* check if a number is prime */
function isPremier(n) {
    for (var j = 2; j < Math.round(Math.sqrt(n)); j++) {
        if (isDivisibleBy(n, j)) {

            return true;
        }
    }
    return false;
}

/* to be completed */
function NofPi(k){
        // pi += p16 * (4/(8*k + 1) - 2/(8*k + 4) - 1/(8*k + 5) - 1/(8*k+6));
        // p16 /= 16;
        var f= ( 4/(8*k+1) - 2/(8*k+4) - 1/(8*k+5) - 1/(8*k+6));
        return parseInt(Math.pow(16,-k*((1/16)*f)));
}

