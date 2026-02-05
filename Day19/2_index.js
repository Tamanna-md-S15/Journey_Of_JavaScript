console.log("Hello World Start");



const p1 = fetch("https://api.github.com/users"); //initially p1 is in pending state

//fulfilled / reject
p1.then((response)=>{
    console.log(response);
}) //ye tab tak nahi chalega tab tak p1 mein fulfill ya reject na ho



console.log("Hello World END"); //fir ye print ho jaayega..

// once our api ne jo request maari thi vo  request  fulfill ho gayi jo answer tha vo aagaya..
//Otput dekha waha humare code toh chal gaya response milgaya but our requirement was to see info of 
//Users in form of object hai na Jo ke hume nahi mila instead we got in below form..||
//data is in form of Readable stream jo ke "BYTE" ke form mein hai  ab isko hume Javascript object ke andar connvert karna paddega...
//Uske baad hi hum usko read out karenge..


//  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//   bodyUsed: false,
//   ok: true,
//   redirected: false,
//   type: 'basic',
//   url: 'https://api.github.com/users'
// }

//will see how to convert it..in next code