const form = document.getElementById("registrationform");

form.addEventListener("submit", function (event) {

    //prevent page refresh

    event.preventDefault();

    //get from values
    const name = 
    document.getElementById("name").value.trim();

    const email = 
    document.getElementById("email").value.trim();

    const password = 
    document.getElemntById("password").value;

    const confirmpassword =
    document.getElementById("confirm").value;

    const message = document.getElementById("message");


    //1. Basic Validations

    if(!name || !email || !password || !confirmpassword) {
        message.textContent = "All fields are required!"
    }

    //2. check password 

    if(password !== confirm) {
        message.textContent = "password do not match"
        return;
    }

    //3 . get Existing users

    const users = JSON.parse(localStorage.getItem("users")) || [];

    //4. Check duplicate email

    const existingUser = users.find(
        user => user.email === email
    )

    if (existingUser) {
        message.textContent = "Email alredy registred"
    }

    //5. adding user to array
    users.push(newUser);

    //6. Store in localstorage for just practice
    //JS  array => JSON string

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    //7. Success

    message.textContent = "Registration Successfull";

    //8. clear form
    form.reset();

})