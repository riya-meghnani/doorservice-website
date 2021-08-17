import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Service(props) {
    const user = useSelector(state => state.user)
    function Booknow(){
        
        
        if(!user){
            props.history.push('/login')
        }
        else{
            props.history.push('/Booknow/:cat_name')
        }
    }
    return (
        <div>
            <div>
                <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           <h2>Our Services</h2>
                           <ul>
                               <li> <a href="#"><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i> About Us</li>
                           </ul>
                       </div>
                   </div>
               </div>
                      <section class="key-features">
        <div class="container">
           
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-hospital-alt"></i>
                        <h5>Saloon</h5>
                        <p>High Performanc Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                   <Link className="btn btn-success"exact to='/Booknow/Saloon'  onClick={Booknow}>Book Now</Link>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-user-md"></i>
                        <h5>Car Service</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p><br/>
                    <Link className="btn btn-success" exact to='/Booknow/Car Service' onClick={Booknow}>Book Now</Link>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-briefcase-medical"></i>
                        <h5>Bike Service</h5>
                        <p> Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                    <Link className="btn btn-success" exact to='/Booknow/Bike Service'onClick={Booknow}>Book Now</Link>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-capsules"></i>
                        <h5>Plumber</h5>
                        <p> Donec ut erat nec leo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                   <Link className="btn btn-success" exact to='/Booknow/Plumber' onClick={Booknow}>Book Now</Link>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-prescription-bottle-alt"></i>
                        <h5>Electrician</h5>
                        <p>Adipiscing elit Lorem ipsum dolor sit amet, sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                <Link className="btn btn-success" exact to='/Booknow/Electrician' onClick={Booknow}>Book Now</Link>
                    </div>
                </div>



                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="far fa-thumbs-up"></i>
                        <h5>Laundary</h5>
                        
                     
                        <p>Powerful Automation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                    <Link className="btn btn-success"  exact to='/Booknow/Laundary' onClick={Booknow} >Book Now</Link>
                    
                    </div>
                </div>
            </div>






        </div>

    </section>
            </div>
        </div>
    )
}
