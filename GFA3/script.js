var num1 = Math.ceil(Math.random() * 20);
var num2 = Math.ceil(Math.random() * 20);
var num3 = Math.ceil(Math.random() * 20);

var min = num2 * num3;
var hrs = Math.floor(min / 60);
var exMin = min % 60;

var mostMined = num1 === num2 && num2 === num3 ? "JACKPOT!! All ores mined!!" :
                num1 === num3 ? "Diamond and Emerald" :
                num2 === num3 ? "Iron and Emerald" :
                num1 > num2 && num1 > num3 ? "Diamond" :
                num2 > num1 && num2 > num3 ? "Iron" :
                "Emerald";
var letter = String.fromCharCode(64 + parseInt(num1));

document.getElementById("diamonds").innerHTML = num1;
document.getElementById("iron").innerHTML = num2;
document.getElementById("emerald").innerHTML = num3;
document.getElementById("most-mined").innerHTML = "The ore Steve mined the most was " + mostMined;
document.getElementById("mining-time").innerHTML = "It took Steve " + min + " or " + "(" + hrs + " hours and " + exMin + " minutes)" + " to mine all the ores.";
document.getElementById("ore-name").innerHTML = "Alex named the largest Diamond, the first letter was " + letter;