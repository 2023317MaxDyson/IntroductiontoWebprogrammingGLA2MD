//URL
const productsURL = 'https://fakestoreapi.com/products';

$(document).ready(function(){
// getJSON method contains the url and the data 
$.getJSON(productsURL, (productsAPIData) =>  {
  
$("#Ascending").click(function(){

  // Sorts the data from Ascending order 
  productsAPIData.sort((a,b) => a.price - b.price);


  // Hides the data 
  $("#fakeAPIStore").hide();
  $("#priceDecending").hide();


  // Displays the data 
  $("#priceAscending").show();

// Displays all the data of the API 
  productsAPIData.forEach(function(products){
    $("#priceAscending").append(`<div>
    <div id = "left">
    <h1> Title:  ${products.title}  </h1>
    </br>
    </br>
    <p> Id: ${products.id}  </p>
    <p> Price: $${products.price }</p>
    <p> Description: ${products.description}</p>
    <p> Category:  ${products.category }</p>
    <img src= "${products.image}"  alt= "ProductImage">
    </div>
    <div id="right">
    <p> Rate: ${products.rating.rate} </p>
    <p> Count:  ${products.rating.count }  </p>
    </div>
     </div>`);
  })
})


$("#Decending").click(function(){
  
  // Sorts the data from Descending order 
  productsAPIData.sort((a,b) => b.price - a.price);

  $("#fakeAPIStore").hide();
  $("#priceDecending").show();
  $("#priceAscending").hide();

  // Displays all the data of the API 
  productsAPIData.forEach(function(products){
    $("#priceDecending").append(`<div>
    <div id = "left">
    <h1> Title:  ${products.title}  </h1>
    </br>
    </br>
    <p> Id: ${products.id}  </p>
    <p> Price: $${products.price }</p>
    <p> Description: ${products.description}</p>
    <p> Category:  ${products.category }</p>
    <img src= "${products.image}"  alt= "ProductImage">
    </div>
    <div id="right">
    <p> Rate: ${products.rating.rate} </p>
    <p> Count:  ${products.rating.count }  </p>
    </div>
     </div>`);
  })
})

$("#categoryList").click(function(){

  // Gets all the values from the options in the select tag
let categoryList =  $(this).val();

// Does not filter the category list 
if(categoryList === "options"){

return false;
}


else{

  // Filter the API so that the products category is equal to the values of the list of category's

 productsAPIData.filter(product => product.category === categoryList)


// If categoryList equals to the value of men's clothing 

 if(categoryList === "men's clothing"){

  $("#mensClothing").show();
  $("#fakeAPIStore").hide();
  $("#priceDecending").hide();
$("#priceAscending").hide();
$("#Jewelry").hide();
$("#Electronics").hide();
$("#womensClothing").hide();

  productsAPIData.length = 4;

   for(let i = 0; i < productsAPIData.length; i++){
     $("#mensClothing").append(`<div>
     <div id = "left">
     <h1> Title:  ${productsAPIData[i].title}  </h1>
     </br>
     </br>
     <p> Id: ${productsAPIData[i].id}  </p>
     <p> Price: $${productsAPIData[i].price }</p>
     <p> Description: ${productsAPIData[i].description}</p>
     <p> Category:  ${productsAPIData[i].category }</p>
     <img src= "${productsAPIData[i].image}"  alt= "ProductImage">
     </div>
     <div id="right">
     <p> Rate: ${productsAPIData[i].rating.rate} </p>
     <p> Count:  ${productsAPIData[i].rating.count }  </p>
     </div>
      </div>`);
   }
   }

   // If categoryList equals to the value of jewelry 

   if( categoryList === "jewelery"){

    $("#Jewelry").show();
  $("#fakeAPIStore").hide();
  $("#priceDecending").hide();
$("#priceAscending").hide();
$("#mensClothing").hide();
$("#Electronics").hide();
$("#womensClothing").hide();

productsAPIData.length = 8;

   for(let i = 4; i < productsAPIData.length; i++){
     $("#Jewelry").append(`<div>
     <div id = "left">
     <h1> Title:  ${productsAPIData[i].title}  </h1>
     </br>
     </br>
     <p> Id: ${productsAPIData[i].id}  </p>
     <p> Price: $${productsAPIData[i].price }</p>
     <p> Description: ${productsAPIData[i].description}</p>
     <p> Category:  ${productsAPIData[i].category }</p>
     <img src= "${productsAPIData[i].image}"  alt= "ProductImage">
     </div>
     <div id="right">
     <p> Rate: ${productsAPIData[i].rating.rate} </p>
     <p> Count:  ${productsAPIData[i].rating.count }  </p>
     </div>
      </div>`);
   }
  }


     // If categoryList equals to the value of electronics

  if(categoryList === "electronics"){

    $("#priceDecending").hide();
    $("#fakeAPIStore").hide();
    $("#priceDecending").hide();
  $("#priceAscending").hide();
  $("#mensClothing").hide();
  $("#Jewelry").hide();
  $("#womensClothing").hide();
  $("#Electronics").show();

  productsAPIData.length = 14;
  
     for(let i = 8; i < productsAPIData.length; i++){
       $("#Electronics").append(`<div>
       <div id = "left">
       <h1> Title:  ${productsAPIData[i].title}  </h1>
       </br>
       </br>
       <p> Id: ${productsAPIData[i].id}  </p>
       <p> Price: $${productsAPIData[i].price }</p>
       <p> Description: ${productsAPIData[i].description}</p>
       <p> Category:  ${productsAPIData[i].category }</p>
       <img src= "${productsAPIData[i].image}"  alt= "ProductImage">
       </div>
       <div id="right">
       <p> Rate: ${productsAPIData[i].rating.rate} </p>
       <p> Count:  ${productsAPIData[i].rating.count }  </p>
       </div>
        </div>`);
     }
    }

       // If categoryList equals to the value of womens clothing

    if(categoryList === "women's clothing"){

      $("#fakeAPIStore").hide();
      $("#priceDecending").hide();
    $("#priceAscending").hide();
    $("#mensClothing").hide();
    $("#Jewelry").hide();
    $("#Electronics").hide();
    $("#womensClothing").show();
  
    productsAPIData.length = 20;
    
       for(let i = 14; i < productsAPIData.length; i++){
         $("#womensClothing").append(`<div>
         <div id = "left">
         <h1> Title:  ${productsAPIData[i].title}  </h1>
         </br>
         </br>
         <p> Id: ${productsAPIData[i].id}  </p>
         <p> Price: $${productsAPIData[i].price }</p>
         <p> Description: ${productsAPIData[i].description}</p>
         <p> Category:  ${productsAPIData[i].category }</p>
         <img src= "${productsAPIData[i].image}"  alt= "ProductImage">
         </div>
         <div id="right">
         <p> Rate: ${productsAPIData[i].rating.rate} </p>
         <p> Count:  ${productsAPIData[i].rating.count }  </p>
         </div>
          </div>`);
       }
      } 

  }
  })

$("#fakeAPIStore").show();
$("#priceDecending").hide();
$("#priceAscending").hide();


// Displays all the data of the API 
 productsAPIData.forEach(function(products){
   $("#fakeAPIStore").append(`<div>
   <div id = "left">
  <h1> Title:  ${products.title}  </h1>
  </br>
  </br>
  <p> Id: ${products.id}  </p>
  <p> Price: $${products.price }</p>
  <p> Description: ${products.description}</p>
  <p> Category:  ${products.category }</p>
  <img src= "${products.image}"  alt= "ProductImage">
  </div>
  <div id="right">
  <p> Rate: ${products.rating.rate} </p>
  <p> Count:  ${products.rating.count }  </p>
  </div>
   </div>`);
 })
 })
})
