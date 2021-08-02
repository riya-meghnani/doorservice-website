import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Switch,Route,NavLink} from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Contact_us from './Contact_us'
import Gallery from './Gallery'
import Home from './Home'
import Login from './Login'
import Professional from './Professional'
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
                        <img src="LogoFinal.png" alt=""/>
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
        						<li><Link to='/'>Home</Link></li>
        						<li><Link to='/about_us'>About US</Link></li>
        						<li><Link to='/services'>Services</Link></li>
        						<li><Link to='/blog'>Blog</Link></li>
        						<li><Link to='/contact_us'>Contact Us</Link></li>
                                <li><Link to='/professionals'>Register as Professionals</Link></li>
                                <li><Link to='/login'>Signup login as user</Link></li>
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
        <Route path="/contact_us" exact component={Contact_us}></Route>
        <Route path="/about_us"exact  component={About}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/professionals" exact component={Professional}></Route>
        <Route path="/login" exact component={Login}></Route>

        
      </Switch>
   
  </div>

     {/* <div class="slider">
        <div class="owl-carousel ">
            <div class="slider-img">
                <div class="item">
                    <div class="slider-img"><img src="assets/images/slider/slider-1.jpg" alt=""/></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                <div class="slider-captions">
                                    <h1 class="slider-title">Feeling stress or anxious?</h1>
                                    <p class="slider-text hidden-xs">We can help you conquer a wide range of psychological and emotional problems.</p>
                                    <a href="#" class="btn btn-info hidden-xs">View All Therapies</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"><img src="assets/images/slider/slider-2.jpg" alt=""/></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">It's time for better help.</h1>
                                <p class="slider-text hidden-xs">We can help you conquer a wide range of psychological and emotional problems.</p>
                                <a href="#" class="btn btn-info hidden-xs">Schedule A Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"> <img src="assets/images/slider/slider-3.jpg" alt=""/></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">Meet our psychiatrists</h1>
                                <p class="slider-text hidden-xs">Our psychiatrists are highly skilled to meet your unique needs.</p>
                                <a href="#" class="btn btn-info hidden-xs">Meet Psychiatrists</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

   
{/* <section class="why-shoos">
    <div class="container">
        <div class="row">
            <div class="col-md-8 wc-txt">
                <h2>Why Choose Santol AC Service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat massa leo, eget vehicula ante mollis eget. Mauris tellus velit, posuere vel lacus a, scelerisque vehicula tortor. Sed sollicitudin non metus nec interdum. Cras convallis erat magna, eu pulvinar justo dignissim ut. Nulla at nulla eu mi maximus finibus. Morbi at ipsum lectus. Pellentesque posuere nisl mauris, sit amet interdum diam tempor nec. Morbi dapibus euismod libero at tincidunt. </p>
                
                <div class="row wc-res">
                    <div class="col-md-4">
                        <div class="wc-cov">
                            <i class="far fa-life-ring"></i> <br/>
                            <b>Safty</b>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="wc-cov">
                            <i class="fas fa-thermometer-quarter"></i> <br/>
                            <b>Quality</b>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="wc-cov">
                           <i class="far fa-check-square"></i> <br/>
                            <b>Tradition</b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-box">
                    <div class="fb-title">
                        <h3>Get Appointment</h3>
                    </div>
                    <div class="fb-det">
                        <div class="fb-row">
                            <input type="text" placeholder="Enter Full Name" class="form-control"/>
                        </div>
                         <div class="fb-row">
                            <input type="text" placeholder="Enter Mobile Number" class="form-control"/>
                        </div>
                        <div class="fb-row">
                            <input type="text" placeholder="Enter Email Address" class="form-control"/>
                        </div>
                         <div class="fb-row">
                            <input type="text" placeholder="Enter City" class="form-control"/>
                        </div>
                        <div class="fb-row">
                            <textarea row="4" placeholder="Enter Your Message" class="form-control"></textarea>
                        </div>
                        <div class="fb-row">
                            <button class="btn btn-info">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>    */}
   

   


  
        
        
   

      {/* <div class="customer-serv">
    <div class="container">
         
        <div class="row session-title">
            <h2>Happy Customers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo lobortis blandit.</p>
        </div>
         
        <div class="row ro-clo">
            <div data-anijs="if: scroll, on: window, do: bounceInLeft animated, before: scrollReveal" class="bghn col-sm-4">
                <div class="shado-2 card-b">
                    <p>We have intentionally decided not to include jQuery-based fallbacks for the transitions.
                    to include jQuery-based</p>
                </div>
                <div class="cust-det row">
                  <div class="col-sm-3 col-3 img-circl">
                      <img alt="" src="assets/images/testimonial/member-01.jpg"/>
                  </div>
                   <div class="col-sm-5 col-5 an-mtc no-padding">
                      <b>Sarath Ali</b>
                      <p>(Sales Agent)</p>
                  </div>
                   <div class="col-sm-4 col-4 star-par">
                      <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                      </ul>
                  </div>
                </div>
            </div>
             <div class="col-sm-4 bghn">
                <div class="shado-2 card-b">
                    <p>We have intentionally decided not to include jQuery-based fallbacks for the transitions.
                    to include jQuery-based</p>
                </div>
                <div class="cust-det row">
                  <div class="col-sm-3 col-3 img-circl">
                      <img alt="" src="assets/images/testimonial/member-02.jpg"/>
                  </div>
                   <div class="col-sm-5 col-5 an-mtc no-padding">
                      <b>Binny Aderson</b>
                      <p>(Sales Agent)</p>
                  </div>
                   <div class="col-sm-4  col-4 star-par">
                      <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                      </ul>
                  </div>
                </div>
            </div>
             <div data-anijs="if: scroll, on: window, do: bounceInRight animated, before: scrollReveal" class="col-sm-4 bghn">
                <div class="shado-2 card-b">
                    <p>We have intentionally decided not to include jQuery-based fallbacks for the transitions.
                    to include jQuery-based</p>
                </div>
                <div class="cust-det row">
                  <div class="col-sm-3 col-3 img-circl">
                      <img alt="" src="assets/images/testimonial/member-03.jpg"/>
                  </div>
                   <div class="col-sm-5 col-5 an-mtc no-padding">
                      <b>Dweail Samluel</b>
                      <p>(Sales Agent)</p>
                  </div>
                   <div class="col-sm-4 col-4 star-par">
                      <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                      </ul>
                  </div>
                </div>
            </div>
        </div>

    </div>


</div>
       */}


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
