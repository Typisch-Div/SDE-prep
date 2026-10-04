function genticket(n){
    let arr=new Array(n); 
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
        // arr[0]=6;
        // arr[1]=5;
        // arr[2]=4;
    }
    return arr;
}
function sum(arr){
    return arr.reduce((sum,curr)=>sum+curr,0);
}
export {genticket , sum}