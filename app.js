var arr1 =[1,2,3,4,5,6,7,8,9,0];
var arr2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arr3 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var a = Math.floor(Math.random() * (arr1.length));
var b = Math.floor(Math.random() * (arr2.length ));
var c = Math.floor(Math.random() * (arr1.length ));
var d = Math.floor(Math.random() * (arr3.length));
var e = Math.floor(Math.random() * (arr2.length ));
var f = Math.floor(Math.random() * (arr1.length ));
var g = Math.floor(Math.random() * (arr2.length ));
var h = Math.floor(Math.random() * (arr3.length));
var i = Math.floor(Math.random() * (arr1.length ));

var res = (arr1[a] + arr2[b] + arr1[c] + arr3[d] + arr2[e]+ arr1[f] + arr2[g]+ arr3[h] + arr1[i])
document.write("[ "+res +" ]"+ "</br>" + "Reload page to generate new passward")