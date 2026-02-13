// Isiliye letsCreate An Array Jisme we can keep Vo items jo Add to bag kar rakhe hai humne
let bagItems; //item declare bahar kiya humne...
onLoad();

function onLoad() { /*industry Practice hai ke humare Functions ko bhi jinhe we call we will call it inside a function called onLoad()*/
  let bagItemsStr = localStorage.getItem('bagItems');//jab hum load kar rahe hai toh bagitem ki value kaha se laao ? --localstorage se lekar aao. i.e retrieving.string milegi hume
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []; //Yaha ternary operator---If yes Toh usko Convert karo using json else empty hai toh [] dedo.
  displayItemsOnHomePage(); //Saare items Ko we have written in this function Toh uunko display karana hai on Ui Toh we have to Display it isiliye Call karenge toh hi na it will work
 
//dispalyItemsOnHomePage Cannot Be accessed before Initialaization Bolko Error Aaya 

  displayBagIcon();
}

//Ab yaha hume Ek Kuch toh use karna hai maano ds hi sahi jaha humne addto bag kiye hue items store karna hoga...
function addToBag(itemId) {
//    bagItems.push(item);//When we did this toh error aaraha hai (Unexpected identifier 'Object')
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems)); //We used local Storage kyuki vo Bag icon par add kiye Number home page par show hote hai magar Cart mein listed Items Dkhne ke liye Jaate hai Toh waha Par bag icon Par Show hi nhi hote Isiliye We used localStorage to store
  //Aur Yaha JSON kyu Likha hai ? Its Bcoz ab data base mein we cant store array Isiliye we convert it into String And Then We Store it.
  displayBagIcon();
} 


function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden'; /*Initially ) haistab vo Oopar red mark show hi na ho*/
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) { //if ye false aaraha hai toh usko truth karke nikal jaao bahar 
    return;
  }
  let innerHtml = '';
  //Hume Aise hi Multiple Items Chahiye Isiliye 1 Item Par forEach Loop lagayenge So that Multiple items Hum Bana paaye!!
  //innerHtml+= jo kari usme Loop ke Waja se Items Banyte hue Iske Andar jaakar baithenge Fir We Will At last....
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button> 
    </div>`
  });
  //Yaha in Button tag we have addToBag is function ko oopar Define kar rakha hai humne
  //Humne Uss Append kiye Saare elements ko Yaha Laakar Rakhdenge in this Variable Called innerHtml.
  itemsContainerElement.innerHTML = innerHtml;
}

 //iss above function ko bhi Hum As Arrow Function we can define it karke Dekhte hai
//   let dispalyItemsOnHomePage = () =>{

//   } 
//dispalyItemsOnHomePage Cannot Be accessed before Initialaization Bolko Error Aaya Bcoz hum variable ko define hi yaha kiye hai Aur usse pehle on top Bula rahe hai
//!!!Isse hume ye bhi pata chala ke Hum Isko type Of Notation ko Actually tab hi use karna chahiye jab hum Anonymous fumction bana rahe hai..

//Normal function ki baat ye hai ke Kahi bhi fefine karo and Call Anywhere
//But Arrowfunction Mei Ye Hai Ke Pehle Define Anf fir hi call 

