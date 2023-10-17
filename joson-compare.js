let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let obj1str = JSON.stringify(obj1);
let obj2str = JSON.stringify(obj2);
if (obj1str === obj2str) {
    console.log("same");
} 
else  {
    console.log("they are not same");
}
