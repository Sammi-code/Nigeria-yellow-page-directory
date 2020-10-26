function ManageAds() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Ubuntu&display=swap');
        font-family:'Ubuntu',sans-serif;
        </style>
        
        <h3 style="  margin-top: 6rem; font-size: 18px;font-weight: bold;line-height: 23px;">Manage Ads</h3>
        <div style="height: 245px; width: 850px; left:37px; top:25px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(55.63px);border-radius: 10px;">

            <div style=" position:relative;height: 225px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src="../assets/img/WomanFace2.png"  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative; top:-60px">
            <p style= "font-family:ubuntu;color: #F8C800; font-size: 18px; font-weight: 500; line-height: 25px;">Information : <span style="color:#fff ">No ads found</span></p>
                  
            
            </div>
            </div>
            <!-- Button trigger modal -->
<button type="button" id= "main-btn" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
    Create Advert
  </button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Create Advertisement</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
            <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Advert Title:</label>
                    <input type="text" class="form-control" id="recipient-name">
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Description:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                  <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Poster / Picture / Flyer:</label>
                  <div class="input-group mb-3">
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="inputGroupFile02">
                      <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                    </div>
                    <div class="input-group-append">
                      <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                    </div>
                  </div>
                </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" onclick="AdsCreate()" class="btn btn-primary" id="add-btn" data-dismiss="modal">Create</button>
        </div>
      </div>
    </div>
  </div>
  
        
    </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}




function AdsCreate() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `

    <h3 style="margin-top: 4rem; font-size: 18px; font-weight: bold;line-height: 23px;">Adverts</h3>
    <div class="card mb-3" id="forza">
    <div class="row no-gutters">
      <div class="col-md-4" id="marko">
        <img src="${userInfo[i].inputGroup}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${userInfo[i].recipientName}</h5>
          <p class="card-text">${userInfo[i].messageText}</p>
          <p class="card-text"><strong class="text-muted">Ejike & Sons</strong></p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <a href="#" class="btn btn-primary"><strong>Delete</strong></a>
        </div>
      </div>
    </div>
  </div>
        
        
        `


    }
    document.getElementById("registration-form").innerHTML = userDetails
}

