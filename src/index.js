const baseUrl = "http://localhost:3000"

// DOM Selector && Created Elements
const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetail = document.querySelector('#ramen-detail')
const newRamen = document.querySelector('#new-ramen')

// Register Listeners
ramenMenu.addEventListener('click', detailHandler)


// Fetches [function]
function fetchRamen(){
    return fetch(baseUrl + "/ramens")
    .then(res => res.json())
}


// Render functions [function]
function renderAllRamen(ramenArray){
    ramenArray.forEach(renderOneRamen)
    // ramenArray.forEach(renderRamenDetail)
}

function renderOneRamen(ramenObj){
    const pics = document.createElement('div');
    pics.innerHTML = `
    <img class="detail-image" src="${ramenObj.image}" alt="${ramenObj.name} picture" />
    `

    ramenMenu.appendChild(pics)
}


// Event Handlers [function]
function detailHandler(){
    console.log("Img Clicked")
}


// Initializers
fetchRamen().then(renderAllRamen)