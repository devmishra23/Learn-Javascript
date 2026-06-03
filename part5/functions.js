/*
1. write a function named "makeTea" that takes one parameter "typeOf" and returns a string like "Making a  green tea " when  called with "greenTea".
*/

// function greet(name){
//     console.log(`Hello ${name}`)
// }
// greet("devashish")


// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`
// }
// let treeorder=makeTea("black tea");
// console.log(treeorder);

/*
2. Create a function named `orderTea` that takes one parameter,
 `teaType`. Inside this function create another function named 
 confirm order that returns a message like "order confirmed for 
 chai " call confirm order from within ` ordertea ` and return the result

*/

// function orderTea(teaType){
//     function confirmOrder(){
//         return `Order confirmed for chai`
//     }
// }
// let confirmOrder=orderTea(teatype);
// console.log(confirmOrder)


function orderTea(TeaType){
    function confirmTeaorder(){
        return "order confirmed for Tea";
    }

}
let call=orderTea("blackTea");
console.log(call);