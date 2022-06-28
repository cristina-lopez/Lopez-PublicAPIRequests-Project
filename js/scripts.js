// Global variables.
const userURL = 'https://randomuser.me/api/?results=12&nat=US';
let searchDiv = document.querySelector('.search-container');
let galleryDiv = document.getElementById('gallery');
let users = []; // contains data of users obtained from fetch

/**
 * Sends a single request to the API and uses the response 
 * data to display 12 users along with some basic information for each
 */
Promise.all([fetchData(userURL)])
    .then(data => {
        users = data[0].results;
        addUserHTML(users);
    })

// fetchData function used to parse through the data
function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch( error => console.log('Looks like there was a problem!', error) )
}

// Helper function used to check status of the url
function checkStatus(response) {
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

/*
* Create the HTML for the user cards displayed as a gallery 
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
 * Creates the HTML for a user modal. When a person is clicked, this function helps populate the
 * information on the screen.
 */
function userModal(data) {
    let dobMonth = data.dob.date.substring(5, 7);
    let dobDay = data.dob.date.substring(8, 10);
    let dobYear = data.dob.date.substring(0, 4);
    let formattedDOB = `${dobMonth}/${dobDay}/${dobYear}`;
    let areaCode = data.phone.substring(0,5);
    let phoneNumber = data.phone.substring(6, 14);
    let formattedPhone = `${areaCode} ${phoneNumber}`;
    let modalText = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${data.picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
                    <p class="modal-text">${data.email}</p>
                    <p class="modal-text cap">${data.location.city}</p>
                    <hr>
                    <p class="modal-text">${formattedPhone}</p>
                    <p class="modal-text">${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
                    <p class="modal-text">Birthday: ${formattedDOB}</p>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalText);
}

/**
 * Event listener on the gallery. When a card is clicked, the userModal function is called to display more
 * information about the user.
 */
galleryDiv.addEventListener('click', e => {
    if (!(e.target.className === 'gallery')) {
        let chosenUser = e.target.closest('.card');
        for (let i=0; i<users.length; i++) {
            if (`${users[i].name.first} ${users[i].name.last}` === chosenUser.children[1].firstElementChild.innerText) {
                userModal(users[i]);
            }
        }
    }

    // Event listener on the button to close the modal and return to gallery.
    let modalCloseBtn = document.getElementById('modal-close-btn');
    let modalDiv = document.querySelector('.modal-container');
    modalCloseBtn.addEventListener('click', (e) => {
        modalDiv.remove();
    });
});

/**
* Adds search input field
*/
const searchText = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchDiv.insertAdjacentHTML("beforeend", searchText); 