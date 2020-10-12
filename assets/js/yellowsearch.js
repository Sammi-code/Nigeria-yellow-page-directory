// Declaring Events
myBusiness = [
  {
    "pics": '../assets/img/food1.png',
    "eventName": 'Iya Basira',
    "category": 'Restaurant & Food',
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/food2.png',
    "eventName": "Max's Kaban",
    "category": 'Restaurant & Food',
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/food3.png',
    "eventName": 'Maliki Licks',
    "category": 'Restaurant & Food',
    "location": 'Abuja'
  },
  {
    "pics": '../assets/img/food4.png',
    "eventName": "Laycon Bukka",
    "category": 'Restaurant & Food',
    "location": 'Abuja'
  }
];

function findBusiness() {

  business = document.getElementById('business').value; // Name of Business
  cat = document.getElementById('category').value; // Name of Category
  loc = document.getElementById('location').value; // Name of Location

  usersObject = myBusiness.filter(x => x.eventName.includes(business)); // Filter name and get the name
  if (usersObject == false) {
    // If the keyword is not in the local storage 
    swal("This Business is not valid", "Check for other Businesses!", "warning");

  } else {

    stateObject = usersObject.filter(x => x.category.includes(cat)); // Filter state and get the state

    if (stateObject == false) {

      // If the keyword is not in the local storage 
      swal("This Business is not valid", "Check for other Businesses!", "warning");

    } else {

      // If the keyword is available in the local storage
      swal("Yes!", "Proceed to check about this Restaurant", "success");

      // AJAX Loader that loads the new page
      document.getElementById('findBus').innerHTML = '<img src="../assets/img/ajax-loader.gif"> ';

      setTimeout(() => {
        document.getElementById('findBus').innerHTML = '';
      }, 3800);

      // Setting the events to the local Storage
      localStorage.setItem('saveBusiness', JSON.stringify(stateObject));

      setTimeout(() => {
        window.location.assign('../contents/yellowsearch.html');
      }, 3500);
    }
  }
}

// Getting the searched events in the local storage and displaying it
function recoverSearch() {
  searchResults = JSON.parse(localStorage.getItem("saveBusiness"));
  if (searchResults == false) {
    alert(`Error`);
  } else {
    displaySearch(searchResults);
  }
}

// The HTML Template to display when an event is searched for
function displaySearch(arr) {
  searchContent = "";
  for (j = 0; j < arr.length; j++) {
    document.getElementById('valueOne').value = arr[j].eventName;
    document.getElementById('valueTwo').value = arr[j].category;
    document.getElementById('valueThree').value = arr[j].location;
    searchContent +=
      `          <div class="result-grid">
              <div class="result-img">
            <!-- Search Image -->
            <img src="${arr[j].pics}" alt="First Event">
              </div>
              <div class="result-desc">
            <!-- Search Description -->
            <div class="desc-inner">
                  <div class="inner-1">
                    <span>Restaurant</span>
                    <span><i class="fas fa-check"></i> verified</span> <br>
                    <h3>${arr[j].eventName}</h3>
                    <p><i class="fas fa-phone"></i> 09032783652</p>
                    <p><i class="fas fa-envelope"></i> iyabasirabase@gmail.com</p>
                  </div>
                  <div class="inner-2">
                    <img src="../assets/img/food1.png" alt="Food">
                    <img src="../assets/img/food2.png" alt="Food">
                    <img src="../assets/img/food4.png" alt="Food">
                    <img src="../assets/img/food3.png" alt="Food">
                  </div>
                </div>
                <div class="items">
                  <span>Number of views: 23</span>
                  <span>Member Since: April 2020</span>
                  <span><strong>Status:</strong> Busy</span>
                </div>
              </div>
            </div>`
  }
  document.getElementById("yellowResult").innerHTML = searchContent; //Displays the Info


}
