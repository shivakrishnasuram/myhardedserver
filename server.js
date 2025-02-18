const http =require("http")
const server =http.createServer((req,res)=>{
    res.write("this is my new response")
    res.end("response emded here")
})
server.listen(4000,()=>{
    console.log("my server is running ")
})