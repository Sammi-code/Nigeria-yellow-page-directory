function logout() {
    location.assign("../index.html")

}
let userInfo = JSON.parse(localStorage.getItem("userInfo"));









function preventdefault(e) {
    e.preventDefault()
}

function manageAds() {
    userDetails = " ";
    for (i = 0; i < userInfo.length; i++) {
        userDetails = `<div>

        <h3 style="font-family: Ubuntu;  font-size: 20px;font-weight: bold;line-height: 23px;">Notification</h3>
        <div style="height: 275px; width: 968px; left:37px; top:25px; display:flex;align-items:center;background: #686868;
        background: #686868;box-shadow: 0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(55.63px);border-radius: 10px;">

            <div style=" position:relative;height: 225px;width: 228px; left: 37px; top: 70px;border-radius: 50%;"><img src=" "  onchange="loadFile(event)"  id="imageDisplay" style="position:relative;top:-50px;height: 173px; width: 161px;border-radius: 50%; border:12px rgba(248, 200, 0, 0.56) solid"> </div>
            <li name="string" id="string" style="display: none;"></li>
            <div style="position:relative;">
                <p style="font-family:Ubuntu; height: 33px; width: 437px;font-size: 23px;font-style: normal;font-weight: 700;line-height: 27px;letter-spacing: 0px;text-align: left;height: 33px;color: #FFFFFF;">${userInfo[i].businessName} is live on NYC</p>
                <h3 style="font-family: Ubuntu;font-style: normal;font-weight: 500; font-size: 18.0698px;  line-height: 21px;color: #FFFFFF;">Welcome. <br><br>All necessary and required messages and notifications would be fall in, Rpromos and offers also.</h3>
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
                <option value="Lokoja ">Lokoja</option>
                <option value="computer ">Kano</option>
                <option value="Kano">kaduna</option>
                <option value="Kastina">Kastina</option>
                <option value="Zamfara  ">Zamfara </option>
                <option value="Lagos">Lagos</option>
                <option value="Agriculture">Agriculture</option>
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
            // newUser = {
            //      document.getElementById("business-name").value = userInfo[i].businessName
            //     email: document.getElementById("email").value,
            //     password: document.getElementById("password").value,
            //     address: document.getElementById("business-address").value,
            //     location: document.getElementById("location").value,
            //     city: document.getElementById("city").value,
            //     number: document.getElementById("number").value,
            //     website: document.getElementById("website").value
            // };
    }
}



function update(i) {


    alert(JSON.stringify(userInfo[i]))
    let updateRecord = {


        address: document.getElementById("business-address").innerText,
        businessName: document.getElementById("business-name").innerText,
        email: document.getElementById("email").innerText,
        businessName: document.getElementById("Business Name").innerText,
        location: document.getElementById("location").innerText,
        number: document.getElementById("phone-Number").innerText,
        fax: document.getElementById("fax").innerText,
        website: document.getElementById("url").innerText,
        textarea: document.getElementById("textarea").innerText,
        city: document.getElementById("city").innerText



    }

    userInfo[i] = updateRecord;
    localStorage.setItem("userInfo", (userInfo))
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


function profilePics() {

    for (i = 0; i < userInfo.length; i++) {

        document.getElementById("imageDisplay").value = document.getElementById("customFile").value

        alert(document.getElementById("customFile").value)
    }


}

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


                    <div class="custom-file">
                        <input style=" height:318px  " type="file" class="custom-file-input" name="filename" id="customFile" accept="image/gif, image/jpeg, image/png , .doc, .docx, .jpeg,.png">

                    </div>


                    <h3>Or drag your file here to upload</h3>
                    <i id="fas" class="fas fa-cloud-upload-alt fa-5x"></i>


                    <div style="display: flex;  height: 100px; justify-content: center; align-items: center;">
                    </div>
                </div>
            </div>
            <div style="display: flex; gap: 190px">
                <p id="accepted">Accepted File Types: .doc, .docx, .jpeg and .png</p>
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
    document.getElementById("upload").innerHTML = `<img src ="/Nigeria-yellow-page-directory/assets/img/ajax-loader (1).gif"> Updating..`


    setTimeout(() => {
        document.getElementById("upload").innerHTML = `Update My Info`
    }, 8000)
}


function getFile(e) {
    var formInput = document.getElementById("customFile");
    var filename = formInput.value;

    var fr = new FileReader();
    //fr.readAsBinaryString(formInput.files[0]);
    fr.readAsDataURL(formInput.files[0]);
    fr.onloadend = function(e) {
        var string = e.target.result;
        //  var liEle = document.getElementById("string")
        //  liEle.innerHTML = bin;

        var img = document.getElementById("imageDisplay");
        img.src = string;
    }
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
                        <img src="/assets/img/gan.jpeg" alt="">
                    </div>
                </div>
                <div class="bottom-container">
                    <div class="left-bottom">
                        <img src="/assets/img/Man thumb.png" alt=""> <br>
                        <number class="number" >42,456</number>
                        <br> <br>
                        <p>Total search made on ${userInfo[i].businessName} <br> <br> 120 <span class="visitor">new visitors</span> for the new week</p>

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