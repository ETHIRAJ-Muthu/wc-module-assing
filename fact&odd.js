export function facto(num){
    if(num==0)
    return 1;
    else 
     return(num*facto(num-1))
}
export function odd(n){
    if(n%2==0)
     return 'even';
    else
     return 'odd';
}