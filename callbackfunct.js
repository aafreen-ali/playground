const add=(num1,num2,callBack)=>{
setTimeout(()=>{
const sum=num1+num2;
callBack(sum);

},2000);
}


add(1,4,(sum)=>{
    console.log(sum);
})