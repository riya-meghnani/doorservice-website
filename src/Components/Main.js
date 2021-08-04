import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Switch,Route,NavLink} from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Contactus from './Contactus'
import CustomerSignin from './CustomerSignin'
import Gallery from './Gallery'
import Home from './Home'
import Login from './Login'
import Professional from './Professional'
import ProfessionalLogin from './ProfessionalLogin'
import Service from './Service'

export class Main extends Component {
    render() {
        return (
            <div>
                  <header>
  	 <div class="top-port">
               <div class="container">
               		<div class="row top-row">
               			  <div class="col-lg-4 header-left-box col-md-5 d-none d-sm-block">
								<p>We have more than 15 years of experience</p>
							</div>
							<div class="col-lg-8 col-md-7 header-right-box">
								<ul>
									<li class="hs-1">
										<i class="fas fa-headphones"></i> 04651 - 270602
									</li>
									<li>
										<i class="fas fa-envelope"></i> suresh01@gmail.com
									</li>
									<li class="hs">
										<i class="fas fa-map-marker-alt"></i> Tamilnadu, India
									</li>
								</ul>
							</div>
               		</div>
               </div>
              
        </div>
        <div id="logo-head" class="logo-port">
            <div class="container ">
                <div class="row logo-port-content">

                    <div class="col-sm-12 logo-box col-md-4">
                        <img  src="LogoFinal.png" alt=""/>
                        <a data-toggle="collapse" data-target="#nav-head" href="#nav-head" ><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                    </div>
                    <div id="menu" class="col-sm-8 d-none d-md-block ">
                        <div class="row">
                            
                            <div class="col-lg-4 col-md-2">
                                
                            </div>
                            <div class="col-lg-4 col-md-5">
                                <div class="row cvnbj">
                                    <div class="col-sm-3 no-padding center ibk-l">

                                        <i class="fas fa-hourglass-half"></i>
                                    </div>
                                    <div class="col-sm-9 det-li">
                                        <b>Monday - Saturday</b>
                                        <br/>
                                        <b>9AM - 8.30PM</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5">
                                <div class="row cvnbj">
                                    <div class="col-sm-3 no-padding center ibk-l">

                                        <i class="fas fa-mobile-alt cl3"></i>
                                    </div>
                                    <div class="col-sm-9 det-li">
                                        <b>Call Us</b>
                                        <br/>
                                        <b>+91 7200 20 40 30</b>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav-head" class="nav-port">
        	<div class="container no-padding">
        		<div class="row nav-row no-margin">
        			<div class="col-md-12 nav-coll col-sm-12">
        				<nav>
        					<ul>
        						<li><Link to='/' >Home</Link></li>
        						<li><Link to='/about_us'>About US</Link></li>
        						<li><Link to='/services'>Services</Link></li>
        						<li><Link to='/blog'>Blog</Link></li>
        						<li><Link to='/contactus'>Contact us</Link></li>
                                <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" >Login as
        </a>
        
        <ul className="dropdown-menu " >
          <li><Link to='/customerlogin'> user</Link></li>
          <li><Link to='/professionals'>professionals</Link></li>
          
        </ul>
      </li>
        					</ul>
        				</nav>
        			</div>
                    
        			{/* <div class="col-md-3 col-sm-12 cart-ap">
        				<ul>
        					
							<li><a onclick="showModel()"><i class="far fa-calendar-alt"></i> Get Appointment</a></li>
        				</ul>
        			</div> */}
        		</div>
        	</div>
        </div>
  </header>
  <div>
      
      <Switch>
          <Route path="/" exact component={Home}></Route>
        <Route path="/services"  exact component={Service}></Route>
        <Route path="/contactus" exact component={Contactus}></Route>
        <Route path="/about_us"exact  component={About}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/professionals" exact component={ProfessionalLogin}></Route>
        <Route path="/customerlogin" exact component={Login}></Route>
        <Route path="/customersignin" exact component={CustomerSignin}></Route>
        <Route path="/professionalsignin" exact component={Professional}></Route>
        
      </Switch>
   
  </div>


   



    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                        Smart Eye is a leading provider of information technology, consulting, and business process services. Our dedicated employees offer strategic insights, technological expertise and industry experience.
                    </p>
                    <p>We focus on technologies that promise to reduce costs, streamline processes and speed time-to-market, Backed by our strong quality processes and rich experience managing global... </p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>Useful Links</h2>
                    <ul class="list-unstyled link-list">
                        <li><a ui-sref="about" href="#/about">About us</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="portfolio" href="#/portfolio">Portfolio</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="products" href="#/products">Latest jobs</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="gallery" href="#/gallery">Pricing</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="contact" href="#/contact">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 map-img">
                    <h2>Contact Us</h2>
                    <address class="md-margin-bottom-40">
                        BlueDart Hosting <br/>
                       765th Boulevard, <br/>
                        Rochester, CA <br/>
                        Phone: +1 831 143 556 <br/>
                        Email: <a href="mailto:info@bluedart.com" class="">info@bluedart.in</a><br/>
                        Web: <a href="https://smarteyeapps.com/" class="">www.bluedart.in</a>
                    </address>

                </div>
            </div>
        </div>
        

    </footer>
    <div class="copy">
            <div class="container">
                <a href="https://www.smarteyeapps.com/">2019 &copy; All Rights Reserved | Designed and Developed by Smarteyeapps</a>
                
                <span>
                <a><i class="fab fa-github"></i></a>
                <a><i class="fab fa-google-plus-g"></i></a>
                <a><i class="fab fa-pinterest-p"></i></a>
                <a><i class="fab fa-twitter"></i></a>
                <a><i class="fab fa-facebook-f"></i></a>
        </span>
            </div>

        </div>
            </div>
        )
    }
}

export default Main
