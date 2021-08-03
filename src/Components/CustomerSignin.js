import React, { Component } from 'react'



function CustomerSignin() {
    return(
<div>
                 <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-5">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                      <div class="card-header"><h3 class="text-center font-weight-light my-4">Sign Up As Customer</h3></div>
                      <div class="card-body">
                          <form>
                          <div class="form-floating mb-3">
                              <label for="inputName">Name</label>
                                  <input class="form-control" id="inputName" type="name" placeholder="enter your name" />
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputNo">Contact no</label>
                                  <input class="form-control" id="inputNo" type="number" placeholder="enter your contact no" />
                                  
                              </div>
                              

                              <div class="form-floating mb-3">
                              <label for="inputEmail">Email</label>
                                  <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputPassword">Password</label>
                                  <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                 
                              </div>
                            
                              <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                  
                                  <button className="btn btn-primary">Sign in</button>
                              </div>
                          </form>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>  
            </div>
    )
    
}

export default CustomerSignin

