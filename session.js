const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const app = express();

//포트설정
const PORT = process.env.PORT || 8081; 

//공통 미들웨어
app.use(express.static(__dirname+"/src"));
app.use(morgan("dev"))

//쿠키--->
app.use(cookieParser("secret123"))
app.use(session({
    secret : 'secret123',
    resave : false,
    saveUninitialized: true,
    cookie : {
        httpOnly:true,
    },
    name: 'connect.sid'
}))
//<---쿠키

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

//라우팅 설정
app.get("", function(req,res){
    if(req.session.name) {
        cons
    }
})