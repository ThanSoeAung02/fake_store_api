let show = document.getElementById("show")
let list = "";
fetch ("https://fakestoreapi.com/products")
.then ((response) => response.json())
.then (result => {
    console.log(result);
    for(let i = 0 ; i < result.length; i++) {
        list += ` <tr>
        <td>${result[i].id}</td>
        <td>${result[i].category}</td>
        <td>${result[i].title}</td>
        <td>${result[i].price}$</td>
        <td><img src="${result[i].image}" class="api-image"></td>
        <td>${result[i].rating.rate}</td>
    </tr>`;
    }
    show.innerHTML = list;
})