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
app.listen(3000,()=>{
    console.log("server is started on port 3000")
})