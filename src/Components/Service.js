import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import Booknow from './Booknow'
import {Link} from 'react-router-dom'


export class Service extends Component {
    render() {
        return (
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
                   <Button variant="btn btn-success" onClick={Booknow}>Book Now</Button>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-user-md"></i>
                        <h5>Car Service</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p><br/>
                    <Button variant="btn btn-success" onClick={Booknow}>Book Now</Button>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-briefcase-medical"></i>
                        <h5>Bike Service</h5>
                        <p> Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                    <Button variant="btn btn-success" onClick={Booknow}>Book Now</Button>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-capsules"></i>
                        <h5>Plumber</h5>
                        <p> Donec ut erat nec leo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                   <Button variant="btn btn-success" onClick={Booknow}>Book Now</Button>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-prescription-bottle-alt"></i>
                        <h5>Electrician</h5>
                        <p>Adipiscing elit Lorem ipsum dolor sit amet, sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                <Button variant="btn btn-success" onClick={Booknow}>Book Now</Button>
                    </div>
                </div>



                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="far fa-thumbs-up"></i>
                        <h5>Laundary</h5>
                        
                     
                        <p>Powerful Automation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p><br/>
                    <Link to='./Booknow'><Button variant="btn btn-success" >Book Now</Button></Link>
                    
                    </div>
                </div>
            </div>






        </div>

    </section>
            </div>
        )
    }
}

export default Service
