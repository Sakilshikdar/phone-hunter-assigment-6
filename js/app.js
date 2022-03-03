const searchPhone = () => {
    document.getElementById('search-result').innerHTML = '';
    document.getElementById('phone-details').innerHTML = '';
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value ='';
    // console.log(searchText)
    if(searchText == '') {
       document.getElementById('error-message').style.display = 'block'
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone (data))
    } 
}

const displayPhone = (brand) => { 
    console.log(brand)
    const searchResult = document.getElementById('search-result')
    if(brand.status == false){
    document.getElementById('error-message').style.display = 'block'
     searchResult.innerHTML ='';
    }
    else{
        document.getElementById('error-message').style.display = 'none'
        searchResult.innerHTML ='';
            const data = brand.data.slice(0, 20); 
         for(const brands of data){
            const div = document.createElement('div')
            // div.classList.add('col')
            div.innerHTML = `
            <img src="${brands.image}" class="w-75 card-img-top" alt="...">
            <div class="card-body">
              <h6>Name: ${brands.phone_name}</h6>
               <h5>Brand: ${brands.brand}</h5>
            </div>
            <button onclick='singlePhoen("${brands.slug}")' class="btn btn-primary mb-4 mx-4">Details</button>
            `
            searchResult.appendChild(div)
        }   
    }  
}
const singlePhoen = (info) => {
    console.log(info)
        const url = `https://openapi.programming-hero.com/api/phone/${info}`
    fetch(url)
    .then(res => res.json())
    .then(data => phoneDetails(data))
    document.getElementById('phone-details').innerHTML = '';
}

const phoneDetails =(phoneId) =>{
    // console.log(phoneId)
    const phoneDiv = document.getElementById('phone-details');
    const div = document.createElement('div')
    div.innerHTML = `
    <img class=" rounded mx-auto d-block img-fluid" src="${phoneId.data.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h6>Name: ${phoneId.data.name}</h6>
     <h6>ReleasDate:${phoneId.data.releaseDate ? phoneId.data.releaseDate : ' coming soon'}</h6>
      <h5 class="card-title text-primary">mainFeature:</h5>
      <P>ChipSet: ${phoneId.data.mainFeatures.chipSet}</p>
      <P>Displaysize: ${phoneId.data.mainFeatures.displaySize}</p>
      <P>Memory: ${phoneId.data.mainFeatures.memory}</p>
      <h5 class="card-title text-primary">Others:</h5>
        <p>Bluetooth: ${(phoneId.data.others ) == undefined ?'no info found':phoneId.data.others.Bluetooth}</p>
        <p>USB: ${(phoneId.data.others ) == undefined ?'no info found':phoneId.data.others.USB}</p>
    </div>
    `
    phoneDiv.appendChild(div)
}

    