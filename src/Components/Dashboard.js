import React from 'react'
import BusinessDetails from './BusinessDetails'
import CustomerOrders from './CustomerOrders'
import {BrowserRouter as Router,Link,Switch,Route,NavLink} from 'react-router-dom'
import './Dashboard.css'
function Dashboard(props) {
    var bid=props.match.params.id;
    console.log(bid)
    
    return (
        
        <div className="container mt100" >
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item"><Link to ={"/Dashboard/BusinessDetails/"+bid} >Set Business Details</Link></li>
                        <li className="list-group-item"><Link to="/Dashboard/CustomerOrders">Customer orders</Link></li>
                        <li className="list-group-item">Logout</li>
                        <li className="list-group-item">View Your Order Status </li>
                    </ul>
                </div>
                <div className="col-md-9">
                <Switch>
                 
                    <Route path="/Dashboard/BusinessDetails/:id"  exact component={BusinessDetails}></Route>
                    <Route path="/Dashboard/CustomerOrders" exact component={CustomerOrders}></Route>
                
                 </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

