var requestApi = require('request');
var http = require('http');

// http.createServer(function(request, response){
//   var message;
//   var httpResponse=response;
//   var api='https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695';
//   var pic='http://i0.hdslb.com/bfs/archive/f157fee6c6eda63b15960cd2668a8ffeb7116052.jpg';
//   requestApi(pic, function (error, response, body) {
//     if (!error && response.statusCode == 200) {

//       httpResponse.writeHead(200, {'Content-Type': 'image/jpeg'});
// 	    httpResponse.write(body,'binary');
// 	    httpResponse.end();
// 	    return;

//       // message=body;
//       // httpResponse.end(message);
//     }
//   })
  
// }).listen(3000)


http.createServer(function(request, response){
  var message;
  var httpResponse=response;
  var api='https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695';
  var pic='http://i0.hdslb.com/bfs/archive/f157fee6c6eda63b15960cd2668a8ffeb7116052.jpg';

  http.get(pic,function(res){
      var imgData="";
      res.setEncoding("binary");
      res.on("data",function(chunk){
          imgData += chunk;
          // console.log(chunk);
      });
      res.on("end",function(){
        httpResponse.writeHead(200, {'Content-Type': 'image/jpeg'});
        httpResponse.write(imgData,'binary');
        httpResponse.end();
          // var imgPath="/"+1+"."+imgSrc.split(".").pop();`~`
          // fs.writeFile(__dirname + "/imgs"+imgPath,imgData,"binary",function(err){
          //     console.log(err);
          // })
      })

    })

  // requestApi(pic, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {

  //     httpResponse.writeHead(200, {'Content-Type': 'image/jpeg'});
	//     httpResponse.write(body,'binary');
	//     httpResponse.end();
	//     return;

  //     // message=body;
  //     // httpResponse.end(message);
  //   }
  // })
  
}).listen(3000)