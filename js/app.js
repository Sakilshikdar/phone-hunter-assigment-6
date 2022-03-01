const searchPhone = () => {
    document.getElementById('search-result').innerHTML = '';
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value ='';
    // console.log(searchText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPhone(data.data))
}

const displayPhone = (brand) => {
    // console.log(brand)
    const searchResult = document.getElementById('search-result')
    for(const brands of brand){
        // console.log(brands)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
         <img src="${brands.image}" class="w-75 card-img-top" alt="...">
         <div class="card-body">
           <h6>Name: ${brands.phone_name}</h6>
            <h5>Brand: ${brands.brand}</h5>
         </div>
         <button onclick='singlePhoen("${`  https://openapi.programming-hero.com/api/phone//${brands.staus}`}")'" class="btn btn-primary mb-4 mx-4">Details</button>
        </div>
        `
        searchResult.appendChild(div)
    }
}
const singlePhoen = (info) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${info}`
    console.log(url)
    console.log(info,'ok')
}

    