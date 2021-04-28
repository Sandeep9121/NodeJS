

var http=require('http')
//create service funnction which will give you a service 
//whenever you call this server it execute the service
//this function will accept the two parametres
//req , response

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text.html'})
res.write("welcome to Node Js")
res.end()
//res.end(welcomw to node)
}).listen(8080)
//Error ReferenceError: createServer is not defined
// so we have to mention  , so we need to import Http module just create them at top