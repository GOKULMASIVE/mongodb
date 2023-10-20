const fs=require("fs")
const val="Hi";
// fs.writeFile('./awesome.html',val,(err)=>{
//     console.log("Complted writing");
// })

// const[,,n]=process.argv;
// let i=1;
// while(i<=n){
//     fs.writeFile(`./backup/text-${i}.html`, val, (err) => {
//       console.log("Complted writing");
//     });
//     i=i+1;
// }

// fs.readFile('./backup/text-1.html','utf-8',(err,data)=>{
//     if(err){
//         console.log("error!");
//     }
//     console.log(data);
//     fs.appendFile("./awesome.html","\n"+data,(err)=>{
//         console.log("append completed");
//     })
// })

fs.unlink("./delete-me.css",(err)=>{
    console.log("delete completed");
})


