var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");
var url = "http://photo.sina.com.cn/";

function download ( url,callback ) {
    http.get( url,function(res){
        var data = "";
        res.on("data",function(chunk){
            data += chunk;
        });
        res.on("end",function(){
            //console.log(data)
            callback(data)
        })
    }).on("error",function(err){
        console.log(err)
    })
}

// download( url,function( data ) {
//     if(data){
//         var $=cheerio.load(data);
//         $("img").each(function(i,elem){
//             var imgSrc=$(this).attr("src");
//             console.log(imgSrc);
//             http.get(imgSrc,function(res){
//                 var imgData="";
//                 res.setEncoding("binary");
//                 res.on("data",function(chunk){
//                     imgData += chunk;
//                 });
//                 console.log(imgData);
//                 res.on("end",function(){
//                     var imgPath="/"+i+"."+imgSrc.split(".").pop();`~`
//                     fs.writeFile(__dirname + "/imgs"+imgPath,imgData,"binary",function(err){
//                         console.log(err);
//                     })
//                 })

//             })
//         })
//     }
// })


imgSrc="http://i0.hdslb.com/bfs/archive/f157fee6c6eda63b15960cd2668a8ffeb7116052.jpg"


http.get(imgSrc,function(res){
    var imgData="";
    res.setEncoding("binary");
    res.on("data",function(chunk){
        imgData += chunk;
        // console.log(chunk);
    });
    console.log(imgData);
    res.on("end",function(){
        var imgPath="/"+1+"."+imgSrc.split(".").pop();`~`
        fs.writeFile(__dirname + "/imgs"+imgPath,imgData,"binary",function(err){
            console.log(err);
        })
    })

})