// let businessName = document.getElementById("business-name").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;
// let address = document.getElementById("business-address").value;
// let location = document.getElementById("location").value;
// let city = document.getElementById("city").value;
// let number = document.getElementById("number").value;
// let website = document.getElementById("website").value;



let userInfo = JSON.parse(localStorage.getItem("userInfo"));
if (userInfo == null) {
    userInfo = []
}
const userForm = (e) => {
    e.preventDefault();
    newUser = {
        businessName: document.getElementById("business-name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        address: document.getElementById("business-address").value,
        location: document.getElementById("location").value,
        city: document.getElementById("city").value,
        number: document.getElementById("number").value,
        website: document.getElementById("website").value
    };

    userInfo.push(newUser);
    var check_box = document.getElementById("check-box")


    if (newUser.businessName != '' &&
        newUser.email != '' &&
        newUser.password != '' &&
        newUser.address != '' && newUser.location != '' &&
        newUser.city != '' &&
        newUser.number != '' &&
        newUser.website != '') {
            if(check_box.checked == true){
        location.assign("../contents/login.html")
            }
            else{
                alert("Kindly accept the terms and conditions")
            }
    } else {
        alert("Kindly fill all input to continue")
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
};
let registerButton = document.getElementById("register-btn")
registerButton.addEventListener("click", userForm);