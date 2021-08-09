var express=require('express')
var cors=require('cors')
var bodyParser=require('body-parser')
var MongoClient=require('mongodb').MongoClient
var ObjectId=require('mongodb').ObjectId

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
app.get('/login-users',(req,res)=>{
    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.find().toArray((err,docs)=>{
        if(!err){
            res.send({status:"ok" ,data:docs})
        }
        else{
            
            res.send({status:"failed",data:err})
        }
    })
    })
app.post('/create-users',bodyParser.json(),(req,res)=>{
    
    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.insert(req.body,(err,_result)=>{
        if(!err){
            res.send({status:"ok" ,data:"user data is inserted"})
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
app.post('/update-user',bodyParser.json(),(req,res)=>{
    console.log("updated student");
    var VendorCollection=connection.db('doorservice').collection('user');
    console.log("updated student three"+ req.body.service)
    VendorCollection.updateOne({_id:ObjectId(req.body._id)},{$set:{service:req.body.service}},{upsert:true}),(err,result)=>{
        console.log("updated student two")
        if(!err){

            res.send({status:"ok" ,data:"Data is updated"})
            console.log("data is updated")
        }
        else{
            res.send({status:"failed",data:err})
        }
    }
})

app.listen(3000,()=>{
    console.log("server is started on port 3000")
})

