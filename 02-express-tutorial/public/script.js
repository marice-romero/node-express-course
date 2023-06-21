const productButton = document.getElementById("product-button");
const productList = document.getElementById("product-list");

productButton.addEventListener("click", () => {
  fetch("/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      productList.innerHTML = JSON.stringify(data);
    })
    .catch((err) => console.log(err));
});
