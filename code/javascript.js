function getvalue()
{
    var element=document.getElementById("entry");
    var Kelvin=element.value;
    
;// constant variable kelvin
let Celsius=Kelvin-273;//celcius degree is 273 less then kelvin
let fahrenheit=Celsius*(9/5)+32;//fahrenheit degree
fahrenheit=Math.floor(fahrenheit);//fahrenheit en decimal
console.log("The temperature is "+fahrenheit+" degrees Fahrenheit");
document.getElementById("kelvin").innerHTML=Kelvin;
document.getElementById("celsius").innerHTML=Celsius;
document.getElementById("fahrenheit").innerHTML=fahrenheit;
    
}
