function logout() {
    location.assign("../index.html")

}


let userInfo = JSON.parse(localStorage.getItem("userInfo"));


function preventdefault(e) {
    e.preventDefault()
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
                    <div style="width: 300px;" class="custom-file">
                        <input style="height: 200px;" type="file" class="custom-file-input" name="filename" onclick="getFile()"
                         id="customFile" accept="image/gif, image/jpeg, image/png">

                    </div>
                </form>

                <h2>Or drag your file here to upload</h2>
                <i class="fas fa-cloud-upload-alt fa-5x"></i>


                <div style="display: flex;  height: 100px; justify-content: center; align-items: center;">
                </div>
            </div><div class="sub-registration-form ">
    <form class="form1" id="form1">
        <h2>Basic Information <span class="glyphicion-box "></span></h2>
        <input type="hidden" id="index">
        <input type="text " style="color:black; background:grey" disabled  value="${userInfo[i].businessName}" id="Business Name" placeholder="Business Name ">
        <input type="email" style="color:black; background:grey" disabled value="${userInfo[i].email}"id="email" placeholder="Email ">
        <input type="text" value="${userInfo[i].number}" id="phone-Number" placeholder="Phone-Number">
        <input type="text"  value="" name="Fax" id="Fax" placeholder="Fax">
        <input type="password"  hidden disabled value="${userInfo[i].password}" name="password " id="password" placeholder="password">
        <textarea name="" id="textarea1" class="textarea1" cols="90" placeholder="short-description" rows="10"></textarea>

        <div class="location" style="width: 100%;">
            <h2>Location <span class="glyphicion-box "></span></h2>

        </div>
        <select name="Location" id="city" value="" class="custom-select-md  mb-3">
       
                <option value=" "> ${userInfo[i].location}</option>
                <option value="Abuja">Abuja</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Osun"> Osun </option>
                <option value="Lagos">Lagos</option>
               
        </select>
        <input type="text" value="${userInfo[i].category}" name="Address" id="business-address" placeholder="Category">
        <input type="url" value="${userInfo[i].website}" name="url" id="url" placeholder="url ">
        <input type="text" value="${userInfo[i].city}" id="location" placeholder="location">
        <iframe width="659" height="248" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1200&amp;height=482.89&amp;hl=en&amp;q=Ahmadu%20Bello%20Way,%20Gudu,%20Abuja.%20Abuja+(Iya%20basira)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
        <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=7aae1220f31cf23af612333f366ae8678d266437'></script>
        <br>
        <div class="buttons ">
    
            <button onclick="update(${i})" class="btn btn-primary">Update My Info</button>
        </div>

    </form>

</div>`

    }
}

details() 

function getFile() {

    document.querySelector("#customFile").addEventListener("change", function() {
        const reader = new FileReader()

        reader.addEventListener("load", () => {
            // console.log(reader.result)

            localStorage.setItem("StoreImages", reader.result)

        })
        reader.readAsDataURL(this.files[0])
    })


}



function save() {
    let c = localStorage.getItem("StoreImages")
    document.getElementById("imageDisplay").src = c
}





function update() {
    // if (confirm) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    let updateRecord = {
        businessName: document.getElementById("business-name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        category: document.getElementById("busCategory").value,
        location: document.getElementById("location").value,
        city: document.getElementById("city").value,
        number: document.getElementById("number").value,
        website: document.getElementById("website").value,
        fax: document.getElementById("Fax"),
        textarea: document.getElementById("textarea"),
        imagesource: localStorage.getItem("StoreImages")

    }
    userInfo[i] = updateRecord

    localStorage.setItem("userInfo", JSON.stringify(userInfo))




    swal("Profile Updated", "!!!", "success")


}





function profileNAme() {
    nameDetail = " ";

    for (i = 0; i < userInfo.length; i++) {


        nameDetail = document.getElementById("Name").innerHTML = `${userInfo[i].businessName}`
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








/*


Storage location that houses the state of each user's
object in such a way that once that object is deleted, the state is empty for another object to occupy.

*/
