const baseUrl = "http://localhost:3000"

// DOM Selector && Created Elements
const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const newRamen = document.querySelector('#new-ramen')

// Register Listeners
newRamen.addEventListener('submit', handleAddRamen)

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
    const img = document.createElement('img');

    img.src = ramenObj.image

    img.addEventListener('click', () => renderDetail(ramenObj))

    ramenMenu.appendChild(img)
}

function renderDetail(ramObj) {
    console.log(ramObj)
    ramenDetail.innerHTML = `
    <img class="detail-image" src="${ramObj.image}" alt="${ramObj.name}" />
    <h2 class="name">${ramObj.name}/h2>
    <h3 class="restaurant">${ramObj.restaurant}</h3>
    `
    rating.textContent = ramObj.rating;
    comment.textContent = ramObj.comment;
}

// Event Handlers [function]
function handleAddRamen(e){
    e.preventDefault()
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target["new-comment"].value
    const newRamObj = {
        name,
        restaurant,
        image,
        rating,
        comment
    }
    
    renderOneRamen(newRamObj)
    newRamen.reset()
}
// Initializers
fetchRamen().then(renderAllRamen)