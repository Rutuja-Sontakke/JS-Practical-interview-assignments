import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  //1. form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false
  })

  //2. Store registred users
  const [users, setUsers] = useState([]);

  //3. handle success/error messages
  const [message, setMessage] = useState("")

  //4.loads users from local storage
  //when component first loads

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setUsers(storedUsers);
  }, []);   //dependancy array.. runs when id get updated or id changes 

  //5. Handle input changes

  const handleChange = (e) => {

    const { name, value} = e.target;

    //update formData state based on input type
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  //6. handle form submission

  const handleSubmit = (e) => {
    
    //prevent default form submission behavior
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      isChecked
    } = formData;

    //8. validate form data

    if(!firstName || !lastName || !email || !password || !confirmPassword) {
      setMessage("Please fill the required fields");
      return;
    }

    if(password.length < 8) {
      setMessage("Password must be at least 8 characters long");
      return;
    }

    if(password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const emailExists = users.some(user => user.email === email);

    if(emailExists) {
      setMessage("Email already exists");
      return;
    }

    //create new user object
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      isChecked
    }

    //update users state and local storage
    const updatedUsers = [
      ...users,
      newUser
    ];

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Registration successful!");

    //reset form data
    setFormData({
      firstName: "",
      LastName: "",
      email: "",
      password: "",
    confirmPassword: "",
    isChecked: false
  })
  }

  //Delete user

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("User deleted successfully!");
  }

  // const editUser = (id) => {
  //   const updatedUsers = users.map(user => 
  //     user.id === id ? { ...user, ...updatedData} : user
  //   );

  //   setUsers(updatedUsers);

  //   //Sych with localStorage
  //   localStorage.setItem("users", JSON.stringify(updatedUsers));

  //   //show success message
  //   setMessage("User Updated Successfully!")
  // }

  return (
    <div className="container">
      <h1> Registration Form </h1>

      <form onSubmit={handleSubmit}>
        {/* Form fields would go here */}
        <p>First Name:</p>
        <input 
        type="text"
        name='firstName'
        placeholder='Enter your first name'
        value={formData.firstName}
        onChange={handleChange}
        />
        <br />
        <p>Last Name:</p>
        <input 
        type="text"
        name='lastName'
        placeholder='Enter your last name'
        value={formData.LastName}
        onChange={handleChange}
        />
        <br />
        <p>Email:</p>
        <input 
        type="email"
        name='email'
        placeholder='Enter your email'
        value={formData.email}
        onChange={handleChange} 
        />
        <br />

        <p>Password: </p>
        <input 
        type="text"
        name='password'
        placeholder='Enter password'
        value={formData.password}
        onChange={handleChange}
         />
         <br />
        <p>Confirm password: </p>
         <input 
         type="text"
         name='confirmPassword'
         placeholder='Enter confirm password'
         value={formData.confirmPassword}
         onChange={handleChange}
         />
         <br />

         <button type='submit'> Register </button>

      </form>

      {/* show success message */}
      {message && <p>{message}</p>}

      <h2>Registered Users</h2>

      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - {user.email}
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              {/* <button onClick={() => {
                const newFirstName = prompt("Enter new first name: ", user.firstName);
                const newLastName = prompt("Enter user Last Name: ", user.lastName);
                const newEmail = prompt("Enter new email: ", user.email);
                const newPassword = prompt("Enter new password: ", user.password);
                const newConfirmPassword = prompt("Enter confirm password: ", user.confirmPassword);

                
              }}>Edit </button> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No registered users.</p>
      )}


    </div>
  )
}

export default App
