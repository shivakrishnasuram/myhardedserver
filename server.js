const http =require("http")
const server =http.createServer((req,res)=>{
    res.write("pole adhiri pole !!!!")
    res.end("response emded here")
})
server.listen(4000,()=>{
    console.log("my server is running ")
})