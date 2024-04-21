function ajax(src, callback) {
  fetch(src)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });
}
function render(data) {
  let newDiv = document.getElementById("newDiv");

  data.forEach((json) => {
    let div = document.createElement("div");
    div.innerHTML = `<h1>${json.name}</h1>
                      <p>價格:${json.price}</p>
                      <p>商品敘述:${json.description}</p>`;
    newDiv.appendChild(div);
  });

  // document.createElement() and appendChild() methods are preferred.
}
ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
