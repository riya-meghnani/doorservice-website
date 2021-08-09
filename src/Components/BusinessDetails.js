
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';

function BusinessDetails(props) {
    var Id=props.match.params.id;
    console.log(Id)
    const [name,setname] = useState("")
    const [service, setService] = useState("")
    useEffect(() => {
        axios.get('http://localhost:3000/user-by-id?_id='+Id).then((res)=>{
            console.log(res.data.data)
           
        
        })
        
        
    }, [])
    
    
    function setValue(e){
        e.target.name=="Service" && setService(e.target.value)
    }
    function sendDetails(){
        var s={service}
        s._id=Id;
        axios.post('http://localhost:3000/update-user',s).then((res)=>{
            
            console.log(res.data.data);
            alert(s._id)
        })  
       
    }
    return (
        <div>
            <form>
                <div class="form-group">
                    <label htmlFor="Inputname">Name</label>
                    <input type="name" class="form-control" id="Inputname"   />
                    
                </div>
                <div class="form-group">
                    <label htmlFor="Inputservice">Service</label>
                    <select class="form-control" id="Inputservice" name="Service" value={service} onChange={(e)=>{setValue(e)}} >
                                  <option value="NONE" >select Service</option>
                                  <option value="Saloon">Saloon</option>
                                  <option value="Car Servicing" >Car Servicing</option>
                                  <option value="Bike Servicing" >Bike Servicing</option>
                                  <option value="Plumber" >Plumber</option>
                                  <option value="Electrician" >Electrician</option>
                                  <option value="Laundry" >Laundary</option>
                                </select>  
                    
                </div>
                
                <button type="submit" class="btn btn-primary" onClick={sendDetails}>Submit</button>
                </form>
        </div>
    )
}

export default BusinessDetails

