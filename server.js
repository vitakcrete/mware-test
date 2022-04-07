const express = require("express")

const app = express();
const server = require("http").createServer(app)

app.use(express.static(__dirname + "/src"));

const PORT = process.env.PORT || 8080;

app.get("/",function(req,res){
    const output = `
        <h1>안녕하세요</h1>
    `
    res.send(output)
    
})

app.get("/user",function(req,res){
    
    res.send(req.params.id+`개인페이지 입니다.`)
    console.log(req.params)
})


server.listen(PORT, function(){
    console.log(`${PORT}에서 실행중`)
})
