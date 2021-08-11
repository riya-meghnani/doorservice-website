
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

function BusinessDetails(props) {

    var logoFile;
    var Id=props.match.params.id;
    const state = useSelector(state => state.user)
    console.log(Id)
    const [name,setname] = useState("")
    const [service, setService] = useState("")
    const [uploadPercentage, setuploadPercentage] = useState("")
    useEffect(() => {
        axios.get('http://localhost:3000/user-by-id?_id='+Id).then((res)=>{
            console.log(res.data.data)
           
        
        })
        
        
    }, [])
    
    
    function setValue(e){
        e.target.name=="Service" && setService(e.target.value)
    }
    function sendDetails(){

        var formData = new FormData();
        formData.append("_id", Id );
        formData.append("business_name", name)
        formData.append("logo", logoFile);



        // var s={service}
        // s._id=Id;

        // axios.post('http://localhost:3000/update-user',formData).then((res)=>{            
        //     console.log(res.data.data);
        //     alert(s._id)
        // })  


        axios.post('http://localhost:3000/update-user',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function( progressEvent ) {
                console.log("file Uploading Progresss.......");
                console.log(progressEvent);
              setuploadPercentage( parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )));
            //   setfileInProgress(progressEvent.fileName)
            }
          }).then((res)=>{
              alert(res);
          }).catch(res=>{
            alert("sorry you are not authorised to do this action");
        });





       
    }

    function setLogo(e)
    {
        logoFile= e.target.files[0];
        console.log(logoFile);
    }


    return (
        <div>
            <form>
                <div class="form-group">
                    <label htmlFor="Inputname">Name</label>
                    <input type="name" class="form-control" id="Inputname"   />                    
                </div>
                <div class="form-group">
                    <label htmlFor="Logo">Upload Logo</label>
                    <input type="file" onChange={(e)=>{setLogo(e)}} class="form-control" id="Logo"   />                    
                </div>

                {/* <div class="form-group">
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
                    
                </div> */}
                
                <button type="button" class="btn btn-primary" onClick={sendDetails}>Submit</button>
                
                {uploadPercentage} %uploaded
                
                </form>
        </div>
    )
}

export default BusinessDetails

