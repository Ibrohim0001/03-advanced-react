import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
     <h2>github users</h2>
     
     <ul className="users">
         {users.map((user)=>{
         const {id , login, avatar_url, html_url} = user

         return (
          <li key={id}>
           <img src={avatar_url} alt ={login}/>
           <div>
            <h5>{login}</h5>
            <a href= {html_url}> profile </a>
           </div>
          </li>
         )
         })}
     </ul>
    </>
  );
};
export default FetchData;

/*
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  */

/* async function getUsers() {
    try {
      const response = await axios(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  */
