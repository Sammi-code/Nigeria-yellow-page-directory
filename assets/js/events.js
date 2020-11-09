function addEvents() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Ubuntu&display=swap');
        font-family:'Ubuntu',sans-serif;
        </style>
        
        <h3 style="  margin-top: 6rem; font-size: 18px;font-weight: bold;line-height: 23px;">Events</h3>
        <div style="height: 245px; width: 850px; left:37px; top:25px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(55.63px);border-radius: 10px;">

            <div style=" position:relative;height: 225px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src="../assets/img/WomanFace2.png"  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative; top:-60px">
            <p style= "font-family:ubuntu;color: #F8C800; font-size: 18px; font-weight: 500; line-height: 25px;">Information : <span style="color:#fff "> Post your Events </span></p>
            </div>
            </div>

            <!-- Button trigger modal -->
            <button style="width:180px; height:53px; border:none; color:white; border-radius:10px; background-color:#F8C810 !important; box-shadow:#686868;  padding:1px !important; font-weight:bolder;" type="button" id= "main-btn" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                Create Events
            </button>
            <button onclick="displayEvents()" style="width:180px; color:white; margin-left:30px; height:53px; border:none; border-radius:10px; background-color:#F8C810 !important; padding:1px !important;  box-shadow:#686868; font-weight:bolder;" type="button" id= "main-btn" class="btn btn-primary" >
                View Events
            </button>
              <br><br>


               <!-- Modal -->
 <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Create Event</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
            <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Event Name:</label>
                    <input type="text" class="form-control" id="eventName">
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Description:</label>
                    <textarea class="form-control" id="desc"></textarea>
                  </div>

                  <div class="form-group">
                  <label for="exampleFormControlSelect1">Location</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Abuja</option>
                    <option>Lagos</option>
                    <option>Kano</option>
                    <option>Kaduna</option>
                    <option>Jos</option>
                  </select>
                </div>
            
                  <div class="form-group">
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label" style=" color:#8f8f8f; ">Picture / Flyer / Poster</label>
                        <div style=" height:230px; border-radius:5px; border:3px dashed #c4c4c4; " class="custom-file">
                        <div class="custom-file"  id="change">
                          <input id="uploadDoc" type="file"  onchange="imageLoader(event)"  style="height:250px; width:600px; cursor:pointer;" class="custom-file-input" name="filename" id="customFile" accept="image/gif, image/jpeg, image/png , .pdf , .jpeg,.png">
                        </div> 
                        <div style="width:600px; height:230px;" >
                        <img src="" id="document" style="width:430px; height:220px; margin-left:15px; margin-top:-35px; display:none;">
                        <div id="picCont">
                          <i  class="fas fa-file-upload picCont"  style="text-align:center; color:#c4c4c4; font-size:90px; margin-left:190px; margin-top:-23px; margin-bottom:10px; "></i>
                                  
                                  <p class="picCont" style="text-align:center; color:#8f8f8f; margin-left:-140px; " >Drag or drop here</p>
                                  <p class="picCont" style="text-align:center; color:#8f8f8f; margin-left:-140px; " >Or</p>
                                  <p class="picCont" style="text-align:center; color:#8f8f8f; margin-left:-140px; " >Browse files</p>
                        </div>
                         </div>
                          
                        </div>
                        </div>
                        <label for="message-text" class="col-form-label" style=" font-size:14px; color:#c4c4c4; ">Accepted file types : .jpeg, .jpg, .png &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fas fa-lock" style="color:#c4c4c4;"> </i> Secure </span></label>
                </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" onclick="createEvents()" class="btn btn-primary" id="add-btn" data-dismiss="modal">Create</button>
        </div>
      </div>
    </div>
  </div>

    
    </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}


//displaying the selected image in the dashed box

function displayImage(event){ // display selected image function
    if(event.target.files.length > 0){// get the image src and append it to the preview which is the default image holder
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("document");
      let cont = document.getElementById("picCont")
      preview.src = src;
      preview.style.display = "block";
      picCont.style.display = "none";
    } 
  }
  
  
  function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      imgSrc = preview.src
      imgSrc = reader.result;
      
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }


  //putting both functions into a single function
function imageLoader(event) {
    displayImage(event)
    previewFile()
    }


    //saving the details gotten into the local storage
let eventsPost = JSON.parse(localStorage.getItem("events"))
if (eventsPost == null) {
    eventsPost = []
}


function createEvents(){
    

    newEvent = {
        "eventName" : document.getElementById("eventName").value,
        "location" : document.getElementById("exampleFormControlSelect1").value,
        "image" : imgSrc,
        "eventText" : document.getElementById("desc").value
    }
         if(newEvent.eventName != '' || newEvent.Text != '' || newEvent.location !='' && adsPost.length != 0){
        
          eventsPost.push(newEvent)
          localStorage.setItem("events", JSON.stringify(eventsPost))
  
        }
        else{
            swal({
                text: "Input Error",
                icon: "error",
                button: "OK",
            });
        }
        
        displayEvents()
    }




    function displayEvents(){
        if(eventsPost.length == [] ){
          swal("", "You have not posted any Events", "error")
      }
      
        userDetails = ' <p style="color:#F8C800; font-size:18px; cursor:pointer;" onclick="addEvents()"><i class="fas fa-long-arrow-alt-left"></i> Go back to upload page</p><br><br> ';
        for (i = 0; i < eventsPost.length; i++) {
            userDetails = `
      
            <p style="color:#F8C800; font-size:18px; cursor:pointer;" onclick="addEvents()"><i class="fas fa-long-arrow-alt-left"></i> Go back to upload page</p><br><br>
        <div class="card mb-3" id="forza">
        <div class="row no-gutters">
          <div class="col-md-4" id="marko">
            <img src="${eventsPost[i].image}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${eventsPost[i].eventName}</h5>
              <p class="card-text">${eventsPost[i].eventText}</p>
              <p class="card-text">${eventsPost[i].location}</p>
              <p class="card-text"><small class="text-muted">${userInfo[i].businessName}</small></p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <button type="button" onclick="deleteEvents(${i})" class="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
            
            `
      
      
        }
      
      
        document.getElementById("registration-form").innerHTML = userDetails
      }
      


//deleting a document
function deleteEvents(i) {

    confirmMessage = confirm("Are you sure you want to delete this Advert?")
  
  
    if (confirmMessage == true) {
        localStorage.removeItem(eventsPost.splice(i, 1))
        localStorage.setItem("events", JSON.stringify(eventsPost))
        displayEvents()
    }
  }