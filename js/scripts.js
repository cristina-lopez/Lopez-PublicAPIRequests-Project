/*
search feature - append it to this `search-container` div
<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>
*/

let searchDiv = document.querySelector('.search-container');
const searchText = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchDiv.insertAdjacentHTML("beforeend", searchText); 

/*
gallery items
<div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>
*/

/*

function showPage(list, page) {
   // index for the first and last student on the page
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);

   

   // creates a list of students that will be shown on the given page
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         var studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
                  <h3> ${list[i].name.first} ${list[i].name.last} </h3>
                  <span class="email"> ${list[i].email} </span>
               </div>
               <div class="joined-details">
                  <span class="date"> Joined ${list[i].registered.date} </span>
               </div>
            </li>`;
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

*/
