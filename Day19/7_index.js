//Convert Js onject ---- JSON

// const j1 = {
//     name : "Rahul",
//     age: 30,
//     address: "dwarka",
// }

// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat);

const jsonFormat = `{
    "name" : "Mohan",
    "age" : 30,
    "address" : "Dwarka"
}`;

//JSON ---> JS object

const JsObject = JSON.parse(jsonFormat);
console.log(JsObject);


