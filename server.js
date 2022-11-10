var  express=require('express');
var app=express();

//middleware setting

app.use(express.static('public'));
const jsonParser = express.json();
app.use(jsonParser);
app.use(express.urlencoded({ extended: true }));

//map incomming request with callback function
//Rrequest routing logic
//HTTP Handlers
//HTTP Requests are mapped with HTTP handlers
app.get("/", (req, res)=>{res.sendFile('Login.html')});
app.get("/hello",(req, res)=>{res.send("Welcome");});
app.get("/aboutus",(req,res)=>{res.send("Transflower Learning Pvt. Ltd.")});
app.get("/contactus",(req,res)=>{res.send("ravi.tambade@transflower.in")});




app.post("/Login",(req, res)=>{
    console.log(req.body);
    console.log("data is posted from client");
    let user=req.body;
    let status="";
    if(user.email==="raj.patil@gmail.com" && user.password==="seed"){
        status="valid user";
    }
    else{
        status="invalid user";
    }
    res.send(status);
})




app.listen(8888);
console.log("server is listening on port 8888");

