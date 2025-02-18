const http =require("http")
const server =http.createServer((req,res)=>{
    res.write("this is my new response")
    res.end("response emded here")
})
server.listen(4000,"192.168.1.45",()=>{
    console.log("my server is running ")
})