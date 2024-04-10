//1.Import area
import React from 'react'
import { useState } from 'react';


//2.Function definition area
export default function Login() {
  //2.1 Hook area
  //hook variables
  //const [hookVarName,setFunction]=useState(initialValue)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //2.2. Function definition area
  let sendData = () => {

    let data = {
      "identifier": username,
      "password": password
    }
    //Api Calling
    fetch(`http://localhost:1337/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        if(data.awt){
          window.localStorage.setItem('userdata',JSON.stringify(data))
          if (data.user.roles === 'ADMIN') {
            //redirect to admin page 
            window.location.href = '/admin';
          }
          if (data.user.roles === 'STUDENT') {
            //redirect to student page 
          }
          if (data.user.roles === 'TEACHER') {
            //redirect to teacher page 
            window.location.href = '/teacher';
          }
          if (data.user.roles === 'PARENT') {
  
          }
          if (data.user.roles === 'ACCOUNTANT') {
  
          }
        }
        
      })
      .catch();

  }


  //2.3 Return statement
  return (
    <>
      <section>
        <form>
          <input type='text' name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
          <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <input type='button' value="Login" onClick={() => { sendData() }} />
        </form>
      </section>
    </>
  )
}
