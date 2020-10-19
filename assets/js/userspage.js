function logout() {
    location.assign("../index.html")

}
let userInfo = JSON.parse(localStorage.getItem("userInfo"));









function preventdefault(e) {
    e.preventDefault()
}



function updatePackage() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `
        <div class="title">
            <h3> Pricing </h3>
            <p> Our prices are fashioned to cater for both the economical and others with taste, be rest assured payments are seamless and quick. </p>

        </div>

        <div class="pricing-table">
            <div class="pricing-card">
                <h3 class="pricing-card-header"> Free Trial</h3>
                <div class="price"><sup>N</sup>0<span>/month</span></div>
                <ul>
                    <li><strong>1</strong> Advert per week (write-up)</li>
                    <li><strong>No</strong> Monthly Analytic Report</li>
                    <li>Review Listing</li>
                    <li><strong>2</strong> Photos</li>
                    <li><strong>No</strong> Video Advert</li>
                </ul>
                <a href="#" class="order-btn"> Select Plan</a>
            </div>

            <div class="pricing-card">
                <h3 class="pricing-card-header"> Regular</h3>
                <div class="price"><sup>N</sup>5000<span>/month</span></div>
                <ul>
                    <li><strong>2</strong> Adverts per week (write-up)</li>
                    <li>Monthly Analytic Report</li>
                    <li>Review Listing</li>
                    <li>Photo Gallery</li>
                    <li><strong>No</strong> Video Advert</li>
                </ul>
                <a href="#" class="order-btn"> Select Plan</a>
            </div>

            <div class="pricing-card">
                <h3 class="pricing-card-header"> Premium</h3>
                <div class="price"><sup>N</sup>10000<span>/month</span></div>
                <ul>
                    <li><strong>5</strong> Adverts per week</li>
                    <li>Monthly Analytic Report</li>
                    <li>Review Listing</li>
                    <li>Photo Gallery</li>
                    <li>Video Advert</li>
                </ul>
                <a href="#" class="order-btn"> Select Plan</a>
            </div>




        </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}














function Notifications() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>

        <h3 style="font-family: Ubuntu; margin-top: 6rem; font-size: 18px; font-weight: bold;line-height: 23px;">Notification</h3>
        <div style="height: 275px; width: 968px; left:37px; top:25px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(55.63px);border-radius: 10px;">

            <div style=" position:relative;height: 225px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src="../assets/img/Woman Face.png"  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative;">
                <p style="font-family:Ubuntu; height: 33px; width: 437px;font-size: 23px;font-style: normal;font-weight: 700;line-height: 27px;letter-spacing: 0px;text-align: left;height: 33px;color: #FFFFFF;">${userInfo[i].businessName} is live on NYC</p>
                <h3 style="font-family: Ubuntu;font-style: normal;font-weight: 500; font-size: 18.0698px;  line-height: 21px;color: #FFFFFF;">Welcome. <br><br>All necessary and required messages and notifications would fall in here, promos and offers also.</h3>
            </div>
        </div>

    </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}




function ManageAds() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>

        <h3 style="font-family: Ubuntu;  margin-top: 6rem; font-size: 18px;font-weight: bold;line-height: 23px;">Manage Ads</h3>
        <div style="height: 275px; width: 968px; left:37px; top:25px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(55.63px);border-radius: 10px;">

            <div style=" position:relative;height: 225px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src="../assets/img/WomanFace2.png"  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative; top:-60px">
            <p style= "font-family:ubuntu;color: #F8C800; font-size: 22px; font-weight: 500; line-height: 25px;">Information : <span style="color:#fff ">No ads found</span></p>
                  </div>
        </div>

    </div>`
    }
    document.getElementById("registration-form").innerHTML = userDetails
}





function details() {
    // image = document.getElementById("customFile").value
    detail = " ";
    for (i = 0; i < userInfo.length; i++) {


        detail = document.getElementById("registration-form").innerHTML =
            ` 
            
   <div style="width: 100%;">
                <h2>Upload Photos</h2>

            </div>
            <span class="span"> <h4>Upload profile or Logo <i class="fa fa-exclamation-circle"></i>  
                <i class="fas fa-upload fa-1x"></i></i></h4> </span>

            <div class="fine" style="width:300px; height: 200px;background:#ebebe0 ">

                <form style="width: 300px;">
                    <div style="width: 300px; " class="custom-file">
                        <input style="height: 200px;" type="file"  onchange="getFile(event)" class="custom-file-input" name="filename" id="customFile" accept="image/gif, image/jpeg, image/png">

                    </div>
                </form>

                <h2>Or drag your file here to upload</h2>
                <i class="fas fa-cloud-upload-alt fa-5x"></i>


                <div style="display: flex;  height: 100px; justify-content: center; align-items: center;">
                </div>
            </div><div class="sub-registration-form ">
    <form class="form " id="form">
        <h2>Basic Information <span class="glyphicion-box "></span></h2>
        <input type="hidden" id="index">
        <input type="text " value="${userInfo[i].businessName}" id="Business Name" placeholder="Business Name ">
        <input type="email "value="${userInfo[i].email}"id="email" placeholder="Email ">
        <input type="number "value="${userInfo[i].number}" id="phone-Number " placeholder="Phone-Number">
        <input type="number " name="Fax " id="Fax " placeholder="Fax">
        <textarea name="" id="textarea" cols="90" placeholder="short-description" rows="10"></textarea>

        <div class="location" style="width: 100%;">
            <h2>Location <span class="glyphicion-box "></span></h2>

        </div>
        <select name="Location " id="location" value="${userInfo[i].location}"class="custom-select-md  mb-3">
            
                <option value=" ">Location</option>
                <option value="Abuja">Abuja</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Osun"> Osun </option>
                <option value="Lagos">Lagos</option>
               
        </select>
        <input type="text" name="Address" id="business-address" placeholder="Address">
        <input type="url" value="${userInfo[i].website}" name="url" id="url" placeholder="url ">
        <input type="text" value="${userInfo[i].location}" id="location" placeholder="location">
        <iframe src="../assets/img/Horizontal Map.png" style="display:block; width: 650px ;height:200px;" frameborder="0" scrolling="no"></iframe>
        <br>
        <div class="buttons ">
            <button onclick="update(${i})" class="btn btn-lg btn-warning">Update My Info</button>
        </div>

    </form>

</div>`

    }
}



function update(i) {
    swal("Profile Updated", "!!!", "success")
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // localStorage.setItem("updatedRecord", JSON.stringify(userInfo[i]))
    // (JSON.stringify(userInfo[i]))
    let updateRecord = {


        address: document.getElementById("business-address").value,
        businessName: document.getElementById("business-name").value,
        email: document.getElementById("email").value,
        businessName: document.getElementById("Business Name").value,
        location: document.getElementById("location").value,
        number: document.getElementById("phone-Number").value,
        fax: document.getElementById("fax").value,
        website: document.getElementById("url").value,
        textarea: document.getElementById("textarea").value,
        city: document.getElementById("city").value



    }

    userInfo[i] = updateRecord;
    localStorage.setItem("userInfo", JSON.stringify(userInfo[i]))

    //localStorage.setItem("myStorage", JSON.stringify(generalUser));

    update(i)

}

function profileNAme() {
    nameDetail = " ";

    for (i = 0; i < userInfo.length; i++) {


        nameDetail = document.getElementById("h3").innerHTML = `${ userInfo[i].businessName}`
        nameDetail.toUpperCase()
    }


}
profileNAme()


// function profilePics() {

//     for (i = 0; i < userInfo.length; i++) {

//         document.getElementById("imageDisplay").value = document.getElementById("customFile").value

//         alert(document.getElementById("customFile").value)
//     }


// }

function uploadDOc() {

    for (i = 0; i < userInfo.length; i++) {

        detail = document.getElementById("registration-form").innerHTML =
            ` <div class="upload-container" style=" background:#ffffff;width: 629px; border-radius: 20px; padding: 30px;box-shadow: -15px -2px 43px rgba(248, 200, 0, 0.44), 15px 15px 50px rgba(0, 0, 0, 0.05);">

        <form style="display: block; width: 550px;  margin:auto;">
            <h3 style=" font-family: Ubuntu; font-size: 28px; font-style: normal; font-weight: 500;line-height: 32px; text-align: left;color: #8F8F8F;">Upload Documents</h3>
            <hr style="color: C8C8C8; margin: 40px 0;border: 1px solid #C8C8C8;">
            <div style="margin: 40px 0; " class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title-text">
            </div>
            <div class="form-group">
                <label for="Attach Documents">Attach Documents</label>
                <div class="fine" id="fine" style=" height:  318px;background:#ebebe0 ">


                    <div class="custom-file"  id="change">
                        <input style=" height:318px  " type="file" class="custom-file-input"   onclick="getFile()"
                        name="filename" id="customFile" accept="image/gif, image/jpeg, image/png , .doc, .docx, .jpeg,.png">

                    </div>


                    <h3>Or drag your file here to upload</h3>
                    <i id="fas" class="fas fa-cloud-upload-alt fa-5x"></i>


                    <div style="display: flex;  height: 100px; justify-content: center; align-items: center;">
                    </div>
                </div>
            </div>
            <div style="display: flex; gap: 240px">
                <p id="accepted">Accepted File Types: .jpeg and .png</p>
                <p class="secured"><i style="margin: 0 5px;" class='fas fa-lock'></i>Secure </p>
            </div>
            <div style="margin-top: 40px;" class="form-group">
                <label for="title">Description</label>
                <input type="text" class="form-control" id="description-text">
            </div>
            <button  onclick="usersbutton()"style="background: #F8C800;color:#00305B;font-family: Ubuntu;font-size: 20px;font-style: normal;font-weight: 500;margin-top: 40px;line-height: 23px;" type="submit" id ="upload" class="btn btn-block ">Upload</button>
        </form>
    </div> `


    }

}

function usersbutton() {
    document.getElementById("upload").innerHTML = `<img src ="..assets/img/ajax-loader (1).gif"> Updating..`


    setTimeout(() => {
        document.getElementById("upload").innerHTML = `Update My Info`
    }, 8000)
}




function getFile() {

    document.querySelector("#customFile").addEventListener("change", function() {
        const reader = new FileReader()

        reader.addEventListener("load", () => {

            localStorage.setItem("StoreImages", reader.result)

        })
        reader.readAsDataURL(this.files[0])
    })


}



function save() {
    let c = localStorage.getItem("StoreImages")
    document.getElementById("imageDisplay").src = c
}


function statTab() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `
        <div class="stat-container">
                <div class="top-container">
                    <div class="left-top">
                        <img src="/assets/img/Wcelebrate.png" alt=""> <br>
                        <number class="number">42,456</number>
                        <br> <br>
                        <p>Total search <h4>Yellow Page Stats</h4>made on ${userInfo[i].businessName} <br> <br> 100 <span class="visitor">new visitors</span> for the new week</p>
                    </div>
                    <div class="right-top">
                        <!--  -->
                        <img src="../assets/img/yellowchart" alt="">
                    </div>
                </div>
                <div class="bottom-container">
                    <div class="left-bottom">
                        <img src="/assets/img/Man thumb.png" alt=""> <br>
                        <number class="number" >42,456</number>
                        <br> <br>
                        <p>Total search made on <br>${userInfo[i].businessName} <strong>Events</strong> <br> 120 <span class="visitor">new visitors</span> for the new week</p>

                    </div>
                    <div class="right-bottom">
                        <img src="/assets/img/gan.jpeg" alt="">
                    </div>

                </div>
            </div>
`
    }
    document.getElementById("registration-form").innerHTML = userDetails

}