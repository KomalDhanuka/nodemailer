// const http=require("http")
// const nodemailer=require("nodemailer")
// //krov vtzn unjx ohkg

// const server = http.createServer((req, res) => {
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // res.end('HTTP server running and email sent');

// const sender=nodemailer.createTransport({
//     service:"gmail",
//     port:465,
//     secure:true,
//     auth:{
//         user:"komaldhanuka25@gmail.com",
//         pass:"krov vtzn unjx ohkg"
//     }
// })

// const receiver={
//     from:"komaldhanuka25@gmail.com",
//     to:"komaldhanuka25@gmail.com",
//     subject:"to apply for fullstack job",
//     html:`<h1>sdbcjsdncsdkjncjsdnc</h1>`

// }

// sender.sendMail(receiver,(err,result)=>{
//     if (err) {
//         console.log(err);                
//     }else{
//         console.log("success");
//         res.end("email sent");
//     }
// });


// });



// // Start the HTTP server on port 3000
// server.listen(3000, () => {
//     console.log("HTTP Server is running on port 3000");
// });








// const http = require("http");
// const nodemailer = require("nodemailer");

// const server = http.createServer((req, res) => {

//   const sender = nodemailer.createTransport({
//     service: "gmail",
//     port: 465,
//     secure: true, // Use SSL
//     auth: {
//       user: "komaldhanuka25@gmail.com", // Your Gmail email
//       pass: "krov vtzn unjx ohkg" // Use an app-specific password if 2FA is enabled
//     }
//   });

//   const receiver = {
//     from: "komaldhanuka25@gmail.com",
//     to: "komaldhanuka25@gmail.com",
//     subject: "to apply for fullstack job",
//     html: `<h1>Job Application</h1>`
//   };

//   sender.sendMail(receiver, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Email sent successfully!");
//       res.end("Email sent");
//     }
//   });

// });

// // Start the HTTP server on port 3000
// server.listen(3000, () => {
//   console.log("HTTP Server is running on port 3000");
// });



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