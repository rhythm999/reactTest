let express =require("express");
let data=require("./data.json");

let server=express();

server.get("/AllPets" ,function(req,res){
    res.json(data);
});

server.listen(4000);