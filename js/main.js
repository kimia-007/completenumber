let number=+prompt("enter number");
let sum=0;
for(let i=1;i<number;i++){
    if(number%i==0)
        sum+=i;
    document.write(`<h5>${i}</h5>`);
    }
    if (sum==number){
        document.write(`<h1>${number} is complete</h1>`);
    }
else{
    document.write(`<h1>${number} is not complete</h1>`);
}
   