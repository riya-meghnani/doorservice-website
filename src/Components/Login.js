import React, { Component } from 'react'
import { Link,Switch,BrowserRouter as Router,Route } from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'


function Login() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
     axios.get('http://localhost:3000/login-users').then((res)=>{
         console.log(res.data.data)
         setUsers(res.data.data)
     })   
    },[])
    function Auth(){
        var email=document.getElementById('inputEmail').value
        var password=document.getElementById('inputPassword').value
        // alert(email);
        // alert(password);
        var check=users.some((s)=>{
            return s.email==email && s.password==password
        })
        console.log(check);
        if(check==true){
            alert("you have successfully login")
            
        }
        else{
            alert("please check email or password")
        }
        
    
    }

    return (
        <div>
            <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-5">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                      <div class="card-header"><h3 class="text-center font-weight-light my-4">Login as Customer</h3></div>
                      <div class="card-body">
                          <form>
                              <div class="form-floating mb-3">
                              <label for="inputEmail">Email</label>
                                  <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputPassword">Password</label>
                                  <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                 
                              </div>
                              <div class="form-check mb-3">
                                  <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                  <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                              </div>
                              <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                  <a class="small" href="password.html">Forgot Password?</a>
                                  <a class="btn btn-primary" onClick={Auth}>Login</a>
                              </div>
                          </form>
                      </div>
                      <div class="card-footer text-center py-3">
                          <div class="small"><Link to='/customersignin'>Need an account? Sign up!</Link></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>  
          
        </div>
    )
}

export default Login

