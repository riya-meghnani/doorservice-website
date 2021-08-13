var express=require('express')
var cors=require('cors')
var bodyParser=require('body-parser')
var MongoClient=require('mongodb').MongoClient
var ObjectId=require('mongodb').ObjectId
var upload = require('./multerConfig');
var app=express();
app.use(cors());
var Client=new MongoClient(' mongodb+srv://doorservice:doorservice@cluster0.kx8vb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
var connection;
Client.connect((err,db)=>{
    
    if(!err){
        connection=db;
        console.log("database is connected")
    }
    else
    {
        console.log("database could not connected")
    }
})


app.post('/user-by-email',bodyParser.json(),(req,res)=>{
    console.log("email check");
    var VendorCollection=connection.db('doorservice').collection('user');
    console.log("var email check three"+ req.body)
    VendorCollection.find({email:(req.body)}).toArray((err,result)=>{
        console.log("updated student two")
        if(!err){

            res.send({status:"ok" ,data:"Data is updated"})
            console.log("email is match")
        }
        else{
            res.send({status:"failed",data:err})
        }
    })
})


app.post('/login-users',bodyParser.json(),(req,res)=>{
    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.find({email:req.body.email , password:req.body.password}).toArray((err,result)=>{
        if(!err && result.length>0){
            res.send({status:"ok" ,data:result})
            
        }
        else{
            
            res.send({status:"failed",data:err})
        }
    })
    })
app.post('/create-users',bodyParser.json(),(req,res)=>{
    
    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.insert(req.body,(err,result)=>{
        if(!err){
            res.send({status:"ok" ,result:"user data is inserted"})
        }
        else{
            res.send({status:"failed",data:err})
        }
    })
})

app.get('/user-by-id',(req,res)=>{

    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.find({_id:ObjectId(req.query._id)}).toArray((err,docs)=>{
        if(!err){
            res.send({status:"ok" ,data:docs})
        }
        else{
            
            res.send({status:"failed",data:"data is not found"})
        }
    })
    })
    
   
// app.post('/update-user',bodyParser.json(),(req,res)=>{
//     console.log("updated student");
//     var VendorCollection=connection.db('doorservice').collection('user');
//     console.log("updated student three" )
//     console.log(req.body);
//     VendorCollection.updateOne({_id:ObjectId(req.body._id)},{$set:{service:req.body.service}},{upsert:true},(err,result)=>{
//         console.log("updated student two")
//         if(!err){

//             res.send({status:"ok" ,data:"Data is updated"})
//             console.log("data is updated")
//         }
//         else{
//             res.send({status:"failed",data:err})
//         }
//     })
    
// })

app.post('/update-user', (req,res)=>{
    
    console.log("103--------------");
    upload(req,res,(err)=>{
        if (err) {
            console.log("Error Occured during upload ");
            console.log(err);
            res.send({status:"failed", data:err});
        }
        else{
            console.log("111---------------")
            var studentCollection = connection.db('doorservice').collection('user');
            console.log("files",req.files);
            console.log("line 47");
            console.log(req.body);
            // var stdocs = {
            //     profile:req.files.profile[0].filename,
            //     resume:req.files.resume[0].filename,
            //     certificates:req.files.certificates.map(c=>c.filename)
            // }

            studentCollection.update({_id:ObjectId(req.body._id)},{$set:{logo:req.files.logo[0].filename, business_name:req.body.business_name}},(err,result)=>{
                if(!err)
                {

                    res.send({status:"success", data:"business details updated sucessfully"});
                }
                else{
                    res.send({status:"failed", data:err});

                }
            })
        }
    });
})




app.listen(3000,()=>{
    console.log("server is started on port 3000")
})

