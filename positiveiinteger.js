const input= require("readline-sync")
let n = input.questionInt("enter number: ")

if (n%2==0){
    console.log("n is smallest postive intger",n)
}
else{
    console.log(n*2)
}