const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
     
     e.preventDefault();
     const income = document.querySelector("#income");
      const amount = parseInt(income.value); //jo input lenge its type is number but still we will get it in form of string isiliye...parseInt jo hai usko convert kar deta hai into int.
    //  const amount = Number(income.value);



     const result = document.querySelector('h2');
     let totalTax = 0;

      //Handle empty input / invalid number if used parseInt()
    //  if (isNaN(amount) || amount < 0) {
    //      result.textContent = "Please enter a valid income";
    //      return;
    //  }

     if(amount <=1200000){
        totalTax = 0;
     }
     else if(amount <=1600000){
        totalTax = (amount - 1200000)*0.15;
     }
     else if(amount <= 2000000){
        totalTax=(amount-1600000)*0.20  + 60000;
     }
     else if(amount <= 2400000){
        totalTax= (amount-2000000)*0.25 + 60000 + 80000;
     }
     else{
        totalTax = (amount-2400000)* 0.30 + 60000 + 80000 + 100000;
     }

     result.textContent = `Total Tax: ${totalTax}`;
     form.reset();

})

//Handle empty input / invalid number

//If the input is empty, parseInt gives NaN.
// const amount = Number(income.value);

// if (isNaN(amount) || amount < 0) {
//   result.textContent = "Please enter a valid income";
//   return;
// }

// 2️⃣ Show tax with 2 decimals (looks cleaner)
// result.textContent = `Total Tax: ₹${totalTax.toFixed(2)}`;

// 3️⃣ Add label text (accessibility)
// <label for="income">Enter your income:</label>


