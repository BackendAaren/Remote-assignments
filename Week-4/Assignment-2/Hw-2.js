function ajax(src, callback) {
  fetch(src).then((response) => console.log(response));
  // .then((response) => response.json())
  // .then(callback)
  // .catch((err) => console.log(`Can not fetch the src `, err));
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
}
ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
