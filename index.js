
const http=require("http")
const nodemailer=require("nodemailer")

const server = http.createServer((req, res)=>{

const sender=nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:465,
    auth:{
        user:"komaldhanuka25@gmail.com",
        pass:"krov vtzn unjx ohkg"
    }
})

const receiver={
    from:"komaldhanuka25@gmail.com",
    to:"komaldhanuka25@gmail.com",
    subject:"verify your email",
    Text:"Hello Komal",
    html:`<p>Please verify your email</p> <br> <h1>Thank you</h1>`
}

sender.sendMail(receiver, (err, result)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("email sent");
        
    }
})

})

server.listen(3000, () => {
    console.log('App listening on port 3000!');
});
