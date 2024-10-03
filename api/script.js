// fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
//     data.products.forEach(element=>{
//         // console.log(element);
//     const row=document.querySelector(".row")
//     const col=document.createElement("div")
//     col.classList.add('col-lg-3')
//     col.innerHTML= `
//     <div class="card">
//         <img src="${element.images[0]}" class="card-img-top" alt="${element.title}" style="height: 200px; object-fit: cover;">
//         <div class="card-body">
//             <h5 class="card-title">${element.title}</h5>
//             <p class="card-text">$${element.price}</p>
//         </div>
//     </div>
// `;
//     row.appendChild(col)
//     });
// })


// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     data.products.forEach(element => {
//       const row = document.querySelector(".row");
//       const col = document.createElement("div");
//       col.classList.add('col-lg-3');
      
//       // Create a container div for the product details
//       const productContainer = document.createElement('div');
//       productContainer.classList.add('product-container');

//       // Add image, title, price, and buttons to the container
//       productContainer.innerHTML = `
//         <img src="${element.thumbnail}" width="100%" alt="${element.title}">
//         <h3>${element.title}</h3>
//         <h5>$${element.price}</h5>
//         <button class="btn btn-primary">Buy Now</button>
//         <button class="btn btn-secondary">Add to Cart</button>
//       `;

//       // Append the product container to the column
//       col.appendChild(productContainer);
//       row.appendChild(col);
//     });
//   });



  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    data.products.forEach(element => {
      const row = document.querySelector(".row");
      const col = document.createElement("div");
      col.classList.add('col-lg-3');
      
      // Setting up inner HTML with image border and buttons
      col.innerHTML = `
      <div class="product-container">
          <img src="${element.thumbnail}" width="100%" alt="${element.title}">
          <h3>${element.title}</h3>
          <h5>$${element.price}</h5>
          <div class="btn-group">
              <button class="btn btn-primary">Buy Now</button>
              <button class="btn btn-secondary">Add to Cart</button>
          </div>
      </div>
  `;
      
      row.appendChild(col);
    });
  });
