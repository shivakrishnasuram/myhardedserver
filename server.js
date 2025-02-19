const http =require("http")
// let obj ={
//     name:"shiva",
//     surname:"suram"
// }
const server= http.createServer((req,res)=>{

    // console.log(req.method)
    // console.log(req.url)
    if (req.method == "GET"){
        if (req.url =="/home"){
            res.writeHead(201,"res is ok")
            // res.write(JSON.stringify(obj))
            res.write(" this dome y ")
            res.end()
        }
        else if (req.url =="/about"){
            res.writeHead(201,"res is ok")
            // res.write(JSON.stringify(obj))
            res.write("this is about")
            res.end()

        }
        else{
            console.log("nothig")
        }
        
    }
    else{
        console.log("nothig is came")
        res.end()
    }
})
server.listen(3000,()=>{
    console.log("this is my server was running in the 3000")
})


// //servers creating
// //
// const http =require("http")
// let obj ={
//     name:"shiva",
//     surname:"suram"
// }
// const server= http.createServer((req,res)=>{

//     res.writeHead(201,"res is ok",{
//         "content-type":"application/json"
//     })

//     res.write(JSON.stringify(obj))
//     res.end("end")
// })
// server.listen(3000,()=>{
//     console.log("this is my server was running in the 3000")
// })


//servers creating
//