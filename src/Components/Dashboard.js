import React from 'react'
import BusinessDetails from './BusinessDetails'
import CustomerOrders from './CustomerOrders'
import {BrowserRouter as Router,Link,Switch,Route,NavLink} from 'react-router-dom'
import './Dashboard.css'
import { useSelector } from 'react-redux'
function Dashboard() {
    
    const role = useSelector(state => state.user.role)
    alert(role)
    
    return (
        
        <div className="container mt100" >
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        {/* <li className="list-group-item"><Link to ={"/Dashboard/BusinessDetails"} >Set Business Details</Link></li> */}
                        
                          <NavLink className="nav-link dip subheading1" to="/Dashboard/BusinessDetails">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                                Business Details
                            </NavLink>
                            
                        {/* <li className="list-group-item"><Link to="/Dashboard/CustomerOrders">Customer orders</Link></li> */}
                        
                          <NavLink className="nav-link dip subheading1" to="/Dashboard/CustomerOrders">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                                Customer Orders
                            </NavLink> 
                            
                           
                              <NavLink className="nav-link dip subheading1" to="/Dashboard/ViewBusineesDetails">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                                View Business Details
                            </NavLink>
                            
                              <NavLink className="nav-link dip subheading1" to="/Dashboard/ViewCustomerRequests">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                               View Customer Requests
                            </NavLink>
                             <NavLink className="nav-link dip subheading1" to="/Dashboard/Services">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                               Request your service
                            </NavLink>
                            
                    </div>
                </div>
                <div className="col-md-9">
                <Switch>
                 
                    <Route path="/Dashboard/BusinessDetails"  exact component={BusinessDetails}></Route>
                    <Route path="/Dashboard/CustomerOrders" exact component={CustomerOrders}></Route>
                
                 </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

