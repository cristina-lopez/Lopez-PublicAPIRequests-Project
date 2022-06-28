// Variables
const userURL = 'https://randomuser.me/api/?results=12';
let searchDiv = document.querySelector('.search-container');
let galleryDiv = document.getElementById('gallery');
let cards = document.querySelectorAll('.card');
console.log(cards[1]);

/**
 * Sends a single request to the API and uses the response 
 * data to display 12 users along with some basic information for each
 */
Promise.all([fetchData(userURL)])
    .then(data => {
        let users = data[0].results;
        addUserHTML(users);
    })

// fetchData function used to 
function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch( error => console.log('Looks like there was a problem!', error) )
}

// Helper function used to 
function checkStatus(response) {
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}
    

/*
Adds search input field
*/
const searchText = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchDiv.insertAdjacentHTML("beforeend", searchText); 

/*
Adds gallery items
*/
function addUserHTML(data) {
    data.forEach( person => {
        let userItem = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${person.picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                    <p class="card-text">${person.email}</p>
                    <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
                </div>
            </div>`;
        galleryDiv.insertAdjacentHTML('beforeend', userItem);
    });
}

/**
 * Creates the HTML for a User Modal. When a person is clicked, this function helps populate the
 * information on the screen.
 */
function userModal(data) {
    let modalText = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="IMAGE - data[i].IMAGE - https://placehold.it/125x125" alt="profile picture">
                    <h3 id="name" class="modal-name cap">FIRST - data[i].first - LAST - data[i].last</h3>
                    <p class="modal-text">EMAIL - data[i].email</p>
                    <p class="modal-text cap">CITY - data[i].city</p>
                    <hr>
                    <p class="modal-text">PHONE - data[i].phone(555) 555-5555</p>
                    <p class="modal-text">ADDRESS - data[i].addres - 123 Portland Ave., Portland, OR 97204</p>
                    <p class="modal-text">Birthday: data[i].birthday - 10/21/2015</p>
                </div>
            </div>
        </div>`;
    body.insertAdjacentHTML('beforeend', modalText);
}

/* galleryDiv.addEventListener('click', e => {
    if (!(e.target.className === 'gallery')) {
        console.log(e.target);

        userModal(chosenUser);
    }
    

});
 */

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', (e) => {
        console.log('hello');
    });
}