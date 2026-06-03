/*
1. Declare the array named 'TeaFlavours' that contains the strings '"green tea"','"black tea"',
and '"oolong tea"' 

Access the first elements of the array and store it in a variable named 'FirstTea'.
*/

//  let teaflavours=["green tea","black tea","oolong"];
// const firstTea=teaflavours[0];
// console.log(firstTea);


/*
2. Declare an array named "cities" containing "london"
"tokyo", "paris","new York ".
Access the third element  in the array and store it in a variable named "favoriteCity" */

// let cities=new Array("tokyo","paris","london","new York")
// const FavouriteCity=cities[2];
// console.log(FavouriteCity)


/* 
3.  Declare an   an array named "citiesVisisted" containing "mumbai" and "sydney".
Add berlin to the array using the push method.
*/

// let citiesVisited=["mumbai","Sydney"];
// citiesVisited.push("berlin");
// console.log(citiesVisited);

/*
4. you have an array named teaorders with "chai"
 */

// let teaOrders=["chai","ice tea","matched","earl grey","lastone"];
// teaOrders.pop("lastOne");
// console.log(teaOrders);

/*
5.you have an array named "popularTeas" containing "coffee","greenetea","oolong tea","chai".
create a soft copy of this array named "SoftCopyTeas".
 */

// let PopularTeas=["coffee","oolong tea","chai","green trea"];
// let softcopyTea=PopularTeas;
// console.log(softcopyTea);

/*
6. You have an array named "topcities" containing
 "berlin","singapore","mew york ","varanasi"
 create a hard copy of this array named "hardcopies".

*/

// let topcities=["berlin","singapore","new york"];
// let hardcopycities=[...topcities]; // WAY OF HARDCOPYING AN ARRAY
// topcities.pop();
// console.log(hardcopycities);
// console.log(topcities);

/*
7. You have two arrays: " europeanCities" containing "paris","rome ","asiancities" containing "tokyo","bangkok".
Merge two arrays into a new array named worldcities;

*/
// let europeanCities=["rome","paris"];
// let asiancities=["tokyo","bangkok "];
// let worldcities=asiancities+europeanCities;
// console.log([worldcities]);
// console.log(typeof worldcities);  //UNFORTUNATELY IT BECOMES STRING

// let europeanCities=["rome","paris"];
// let asiancities=["tokyo","bangkok "];
// let worldcities=europeanCities.concat(asiancities);
// console.log(worldcities)
// console.log(typeof worldcities);

/*
8. You have an array named "teaMenu" containing "masala chai","oolong tea","green tea","normal chai"
find the length of an array and store it in variable named "menulength".
*/

// let teaMenu=["masala chai","oolong tea","green tea","normal chai"];
// let len=teaMenu.length;
// console.log(len);
// let menulength=teaMenu;
// console.log(menulength);

/*
9. you have an array named "citiesbucketlist" containing "kyoto","london","vape town","vancouver".
check if "london " is in the array and store result in a variable named "islondoninlist"
*/

// let citiesbucketlist=['kyoto',"london","capetown","vancauver"];
// let islondoninlist=(citiesbucketlist.includes ("london"));
// console.log(islondoninlist);
// let islondonlist=citiesbucketlist;
// console.log(islondonlist)

//const fs=require("fs");
const fs = require("fs");
const a = 999;
setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("READ FILE CB")
})
setTimeout(() => console.log("set timeout"), 0);
function printA() {
    console.log("a=" + a);
}
printA();
console.log("Last line of program");