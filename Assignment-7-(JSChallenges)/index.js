// ------------------------------------------------------------------------------------------
// Question-1(Personalized Greeting)
// ------------------------------------------------------------------------------------------
var name=prompt("Enter your name");
var age=+prompt("Enter your age");
var date=2026;
console.log("Hello "+name+"! You are "+age+" years old and you were born around "+(date-age));
// ------------------------------------------------------------------------------------------
// Question-2(Currency Converter)
// ------------------------------------------------------------------------------------------
var amount=+window.prompt("Enter Your Amount");
console.log(`${amount} EGP = $${(amount/47.22).toFixed(2)} USD, €${(amount/54.35).toFixed(2)} EUR, £${(amount/61.95).toFixed(2)} GBP`)
// ------------------------------------------------------------------------------------------
// Question-3(Even or Odd Checker)
// ------------------------------------------------------------------------------------------
var num=Number(prompt("Enter a number"));
if(num%2==0){
   console.log(num+" is an even number");
}
else{
    console.log(num+" is an odd number");
}
// ------------------------------------------------------------------------------------------
// Question-4(Time of Day Greeting)
// ------------------------------------------------------------------------------------------
var hour=Number(prompt("Enter current time"));
if(hour<=11){
   console.log("Good morning!");
}
else if(hour<=17){
   console.log("Good afternoon!");
}
else{
   console.log("Good evening!");
}
// ------------------------------------------------------------------------------------------
// Question-5(Average Score Calculator)
// ------------------------------------------------------------------------------------------
var score1=Number(prompt("Enter your first subject grade"));
var score2=Number(prompt("Enter your second subject grade"));
var score3=Number(prompt("Enter third subject grade"));
var avg=(Math.round(((score1+score2+score3)/3)*100)/100).toFixed(2);
if(avg >=50){
    console.log("Average: "+avg+", Status: Pass");
}
else{
    console.log("Average: "+avg+", Status: Fail");
}
// ------------------------------------------------------------------------------------------
// Question-6(Simple Calculator)
// ------------------------------------------------------------------------------------------
var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter second number"));
var operator=prompt("Enter operator for calculation");
if(operator=='+'){
   console.log(num1+" + "+num2+" = "+(num1+num2));
}
else if(operator=='-'){
   console.log(num1+" - "+num2+" = "+(num1-num2));
}
else if(operator=='*'){
   console.log(num1+" * "+num2+" = "+(num1*num2));
}
else{
   console.log(num1+" / "+num2+" = "+(num1/num2));
}
// ------------------------------------------------------------------------------------------
// Question-7(Multiplication Table)
// ------------------------------------------------------------------------------------------
var num=Number(prompt("Enter your number"));
for(var i=1;i<=10;i++){
    console.log(num+" x "+i+" = "+(num*i)+"\n");
}
// ------------------------------------------------------------------------------------------
// Question-8(Even Numbers Printer)
// ------------------------------------------------------------------------------------------
for(var i=2;i<=10;i+=2){
    console.log(i)
}
// ------------------------------------------------------------------------------------------
// Question-9(Factorial Calculator)
// ------------------------------------------------------------------------------------------
var fact=1;
for(var i=1;i<=5;i++){
    fact*=i;
}
console.log(fact);
// ------------------------------------------------------------------------------------------
// Question-10(Smallest Integer Finder)
// ------------------------------------------------------------------------------------------
var n=1;
while(n*n<=50){
    n++;
}
console.log(n);
// ------------------------------------------------------------------------------------------
// Question-11(Value Swapper)
// ------------------------------------------------------------------------------------------
var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter second number"));
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log("After Swapping: num1="+num1+", num2="+num2);
// ------------------------------------------------------------------------------------------
// Question-12(Movie Access Checker)
// ------------------------------------------------------------------------------------------
var age=Number(prompt("Enter your age"));
var hasTicket=prompt("Have a ticket? yes or no");
if(age>=18 || hasTicket=="yes"){
    console.log("Access granted: true");
}
else{
    console.log("Access granted: false")
}
// ------------------------------------------------------------------------------------------
// Question-13(Largest Number Finder)
// ------------------------------------------------------------------------------------------
var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter second number"));
var num3=Number(prompt("Enter third number"));

if (num1>=num2) {
    if (num1>=num3) {
        console.log("Largest number is: "+num1);
    }
    else{
        console.log("Largest number is: "+num3);
    }
}
else if(num2>num1){
    if (num2>=num3) {
        console.log("Largest number is: "+num2);
    }
    else{
        console.log("Largest number is: "+num3);
    }
}
else{
    console.log("Largest number is: "+num3);
}
// ------------------------------------------------------------------------------------------
// Question-14(Salary Calculator)
// ------------------------------------------------------------------------------------------
var hours=Number(prompt("Enter worked hours"));
var rate=Number(prompt("Enter hourly rate"));
if(hours>40){
   console.log("Regular: $"+(hours-hours%40)*rate+", Overtime: $"+(hours-40)*rate*1.5+", Total: $"+(((hours-hours%40)*rate)+((hours-40)*rate*1.5)))
}
else{
    console.log("Regular: $"+hours*rate+", Overtime: $"+0+", Total: $"+hours*rate)
}
// ------------------------------------------------------------------------------------------
// Question-15(BMI Calculator)
// ------------------------------------------------------------------------------------------
var weight=Number(prompt("Enter your weight"));
var height=Number(prompt("Enter your height in m"));
var BMI=Math.round(100*weight/(height**2))/100;
if(BMI<18.5){
    console.log("BMI: "+BMI+" - Underweight");
}
else if(BMI>=18.5 && BMI<25){
    console.log("BMI: "+BMI+" - Normal weight");
}
else if(BMI>=25 && BMI<30){
    console.log("BMI: "+BMI+" - Overweight");
}
else{
    console.log("BMI: "+BMI+" - Obese");
}
// ------------------------------------------------------------------------------------------
// Question-16(Shopping Cart Total)
// ------------------------------------------------------------------------------------------
var amount=Number(prompt("Enter purchase amount"));
if(amount>100){
console.log("Subtotal: $"+amount+", Tax: $"+(amount*10/100)+", Discount: $"+(amount*5/100)+", Final: $"+(amount+(amount*10/100)-(amount*5/100)));
}
else{
   console.log("Subtotal: $"+amount+", Tax: $"+(amount*10/100)+", Discount: $0, Final: $"+(amount+(amount*10/100)));
}
// ------------------------------------------------------------------------------------------
// Question-17(ATM Simulator)
// ------------------------------------------------------------------------------------------
var operation=Number(prompt("1:Balance, 2:Withdraw, 3:Deposit"));
var amount=Number(prompt("Enter current amount"));
switch(operation){
     case 1:
           console.log("Your balance is: $"+amount);
           break;
     case 2:
           var cur_amount=Number(prompt("Enter amount"));
           console.log("Withdrew $"+amount+". New balance: $"+(cur_amount-amount));
           break;
     case 3:
           var cur_amount=Number(prompt("Enter amount"));
           console.log("Deposited $"+amount+". New balance: $"+(cur_amount+amount));
     break;
}
// ------------------------------------------------------------------------------------------
// Question-18(FizzBuzz)
// ------------------------------------------------------------------------------------------
for(var i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
       console.log("FizzBuzz ");
    else if(i%5==0)
       console.log("Buzz ");
    else if(i%3==0)
       console.log("Fizz ");
    else
       console.log(i+" ");     
}
// ------------------------------------------------------------------------------------------
// Question-19(Star Pattern Printer)
// ------------------------------------------------------------------------------------------
var n=Number(prompt("Enter a number"));
for(var i=1;i<=n;i++){
   for(var j=0;j<i;j++){
       console.log('*');
   }
console.log("\n");
}
// ------------------------------------------------------------------------------------------
// Question-20(Right Triangle Pattern Printer)
// ------------------------------------------------------------------------------------------
var n=Number(prompt("Enter a number"));
var row;
for(var i=1;i<=n;i++){
   row="";
   for(var j=0;j<n;j++){
      if(j<n-i){
         row+=" ";
      }
      else{
         row+="*";
      }
   }
   console.log(row);
   console.log("\n");
}